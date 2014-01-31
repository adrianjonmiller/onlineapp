function configureModel(msg) {
    configureValidationExtenders();
    configureBindingHandlers();
    prepareModel(msg.Data);

    var model = {
        Program: msg.Data.Program,
        Steps: msg.Data.Steps,
        Response: ko.mapping.fromJS(msg.Data.Response),
        DefaultModels: msg.Data.DefaultModels,
        Measures: [],
        ContractorEmployees: ko.observableArray([]),
        SelectedFile: {
            Description: ko.observable(null),
            Uploading: ko.observable(false),
            Percentage: ko.observable(null),
            DialogQuery: ko.observable(null),
            DocumentTypeId: ko.observable(null)
        },
        RefreshBinding: function () {
            ko.cleanNode($("section#content")[0]);
            ko.applyBindings(AppState().Application.Model, $("section#content")[0]);
            AppState().Application.Model.Program.ShowNav(true);
            AppState().Application.Model.Program.ShowHeader(true);
        }
    };

    configureMeasuresArray(model);
    configureZipCodeLookup(model.Response.MailingAddress.PostalCode, model.Response.MailingAddress.City, model.Response.MailingAddress.State);
    configureZipCodeLookup(model.Response.ServiceAddress.PostalCode, model.Response.ServiceAddress.City, model.Response.ServiceAddress.State);
    configureZipCodeLookup(model.Response.PayeeAddress.PostalCode, model.Response.PayeeAddress.City, model.Response.PayeeAddress.State);
    configureZipCodeLookup(model.Response.Contractor.ContractorAddress.PostalCode, model.Response.Contractor.ContractorAddress.City, model.Response.Contractor.ContractorAddress.State);

    configureFieldValidations(model);
    configureSteps(model);
    return model;
}

function configureMeasuresArray(model) {
    var SetMeasures = function (measures, equipment, equipmentProperties) {
        $.each(measures, function (index, item) {
            item.IsSelected = ko.observable(false);
        });

        // console.log("Measures: " + JSON.stringify(measures, null, 2));
        // console.log("Properties: " + JSON.stringify(equipmentProperties, null, 2));

        AppState().Application.Model.Measures = measures;
        AppState().Application.Model.Equipment = equipment;
        AppState().Application.Model.EquipmentProperties = equipmentProperties;
    };

    model.GetMeasures = function (callback) {
        if (AppState().Application.Model.Measures.length == 0) {
            AJAXLoadHTML("./Content/spoof/measures.htm",
               { programId: AppState().Application.Model.Program.Id, buildingTypeId: AppState().Application.Model.Response.Enrollment.BuildingTypeId() },
               function (msg) {
				   msg = JSON.parse(msg);
                   if (msg.Data.Measures.length == 0) {
                       console.error("No measures have been configured for this program / building type.");
                   } else {
                       SetMeasures(msg.Data.Measures, msg.Data.Equipment, msg.Data.EquipmentProperties);
                       callback();
                   }
               }
           );
        } else {
            SetMeasures(
                AppState().Application.Model.Measures,
                AppState().Application.Model.Equipment,
                AppState().Application.Model.EquipmentProperties);
            callback();
        }
    };
}

// Step Validation Configurations
function configureFieldValidations(model) {
    configureGettingStartedFieldValidations(model);
    configureCustomerInformationFieldValidations(model);
    configureInstallerInformationFieldValidations(model);
    configurePayeeInformationFieldValidations(model);
    configureEquipmentInformationFieldValidations(model);
    configureIncentiveFieldValidations(model);
    configureSurveyFieldValidations(model);
    configureUploadDocumentFieldValidations(model);
    configureTermsConditionsFieldValidations(model);
    configureReviewAndSubmitFieldValidations(model);
}
function configureGettingStartedFieldValidations(model) {
    var enrollment = model.Response.Enrollment;

    enrollment.ServiceAccountNo.IsValid = ko.observable(null);
    enrollment.ServiceAccountNo.ValidationMessages = ko.observableArray([]);
    enrollment.ServiceAccountNo.subscribe(function () {
        enrollment.ServiceAccountNo.IsValid(null);
    });

    requiredValidation(enrollment.EnrollmentWhoIsApplyingId, "Please select who is applying");

    enrollment.ServiceAccountNo.Validate = function (callback) {
        if (model.Response.Enrollment.ServiceAccountNo.IsValid() == null) {
            AJAXLoadData("/Method/ValidateServiceAccount/",
                    { serviceAccountId: enrollment.ServiceAccountNo(), programId: AppState().Application.Model.Program.Id },
                    function (msg) {
                        model.Response.Enrollment.ServiceAccountNo.IsValid(true);
                        callback(true);
                    },
                    {
                        clientExceptionCallBack: function (msg) {
                            enrollment.ServiceAccountNo.ValidationMessages([]);

                            var errAccountNumber = $(".obj_errAccountNumber");
                            $.each(msg.ClientExceptions, function (index, item) {
                                if (item.Source == "serviceAccountId") {
                                    enrollment.ServiceAccountNo.ValidationMessages.push(item.Message);
                                }
                            });
                            enrollment.ServiceAccountNo.IsValid(false);
                            callback(false);
                        }
                    }
                );
        } else {
            callback(true);
        }
    }
    configureQuestionnaireValidation(model.Program.PrequalificationQuestions, model.Response.PrequalificationResults);

    model.Response.IsValidGettingStarted = function (validate, callback) {
        if (validate == null) validate = true;

        if (!validate) {
            if (model.Response.PrequalificationResults.Validate != null && !model.Response.PrequalificationResults.Validate(false)) return false;
            if (!model.Response.Enrollment.EnrollmentWhoIsApplyingId.IsValidAndNotUnaltered()) return false;
            if (!model.Response.Enrollment.ServiceAccountNo.IsValid()) return false;
            return true;
        } else {
            if (callback == null) {
                console.error("Callback parameter required for validation call.");
                return;
            }
            if ((
                    model.Response.PrequalificationResults.Validate == null ||
                    model.Response.PrequalificationResults.Validate()
                ) &&
                    model.Response.Enrollment.EnrollmentWhoIsApplyingId.IsValid())
            {
                model.Response.Enrollment.ServiceAccountNo.Validate(function (result) {
                    AppState().Application.Model.Response.Enrollment.AccountName.valueHasMutated();
                    callback(result);
                });
            } else {
                console.log("Callback?");
                callback(false);
            }
        }
        return true;
    };
}
function configureCustomerInformationFieldValidations(model) {
    var enrollment = model.Response.Enrollment;

    enrollment.ServiceAccountNo.Matched = ko.observable(false);

    var accountMatch = function () {
        // console.log("Running account match...");

        // We only want to check if there's a complete City, State, Zip entry
        // to check or none at all.
        var addressEmpty =
            isNullOrEmpty(serviceAddress.City()) &&
            isNullOrEmpty(serviceAddress.State()) &&
            isNullOrEmpty(serviceAddress.PostalCode());

        var partialAddress = !addressEmpty &&
            (
                isNullOrEmpty(serviceAddress.City()) ||
                isNullOrEmpty(serviceAddress.State()) ||
                isNullOrEmpty(serviceAddress.PostalCode())
            );


        

        if (partialAddress) {
            console.log("Short circuit account match.");
            console.log("Address empty: " + addressEmpty + " Partial address: " + partialAddress + " Address: " + serviceAddress.City() + serviceAddress.State() + serviceAddress.PostalCode());
            enrollment.ServiceAccountNo.Matched(false);
        } else {
            // console.log("Calling account validate method.");
            AJAXLoadData("/Method/ValidateServiceAccountInfo/",
                {
                    programId: model.Program.Id,
                    serviceAccountId: enrollment.ServiceAccountNo(),
                    accountName: enrollment.AccountName(),
                    accountCity: serviceAddress.City(),
                    accountState: serviceAddress.State(),
                    accountZip: serviceAddress.PostalCode()
                },
                function (msg) {
                    prepopulateCustomerInformation(msg.Data.Prepopulation, model);
                    enrollment.ServiceAccountNo.Matched(true);
                }, {
                    clientExceptionCallBack: function (msg) {
                        enrollment.ServiceAccountNo.Matched(false);
                    }
                }
            );
        }
    };

    enrollment.ServiceAccountNo.Matched.extend({ validation: { custom: { message: "Account match not found.", active: valToFunction(true), eval: function (value) { return value; } } } });
    requiredValidation(enrollment.AccountName);
    enrollment.AccountName.subscribe(accountMatch);

    requiredValidation(enrollment.CustomerFirstName, "First Name required.");
    requiredValidation(enrollment.CustomerLastName, "Last Name required.");
    requiredValidation(enrollment.HomePhone, "Primary Phone required.");
    phoneFormatValidation(enrollment.HomePhone);
    phoneFormatValidation(enrollment.AltPhone);
    phoneFormatValidation(enrollment.FaxNumber);
    enrollment.CustomerEmail.extend({ validation: { regEx: { message: "Invalid email address.", pattern: /@/, active: valToFunction(true) } } });

    var serviceAddress = model.Response.ServiceAddress;
    requiredValidation(serviceAddress.Street1, "Street Address required.");
    requiredValidation(serviceAddress.PostalCode, "ZIP Code required.");
    requiredValidation(serviceAddress.City, "City required.");
    requiredValidation(serviceAddress.State, "State required.");

    serviceAddress.PostalCode.subscribe(accountMatch);
    serviceAddress.City.subscribe(accountMatch);
    serviceAddress.State.subscribe(accountMatch);

    var mailingAddress = model.Response.MailingAddress;
    var ifNotSameAsInstall = function () { return !enrollment.IsMailAddressSameAsInstall(); };
    mailingAddress.IsOutsideUS = ko.computed(function () {
        return mailingAddress.Country() != "US";
    });
    requiredValidation(mailingAddress.Street1, "Street Address required.", function () { return ifNotSameAsInstall() && !mailingAddress.IsPOBox(); });
    requiredValidation(mailingAddress.POBox, "PO Box required.", function () { return ifNotSameAsInstall() && mailingAddress.IsPOBox(); });
    requiredValidation(mailingAddress.PostalCode, "ZIP Code required.", ifNotSameAsInstall);
    requiredValidation(mailingAddress.City, "City required.", ifNotSameAsInstall);
    requiredValidation(mailingAddress.State, "State required.", ifNotSameAsInstall);

    configureFieldOption(enrollment.IsAirConditioned, model, "Air Conditioned", "Air Conditioned is required.");
    configureFieldOption(enrollment.TotalSqFtAirConditioned, model, "Air Conditioned Square Footage", "Air conditioned square feet is required.", ko.computed(function () { return enrollment.IsAirConditioned(); }));
    configureFieldOption(enrollment.AuditPerformed, model, "Audit Performed", "Audit Performed is required.");
    configureFieldOption(enrollment.AvailableDateForClosing, model, "Available Date for Closing", "Available Date for Closing is required.");
    configureFieldOption(enrollment.AvailableDateForInspection, model, "Available Date for Inspection", "Available Date for Inspection is required.");
    configureFieldOption(enrollment.BenchmarkCompleted, model, "Benchmark Completed", "Benchmark completed is required.");
    configureFieldOption(enrollment.BenchmarkExempt, model, "Benchmark Exempt", "Benchmark Exempt is required.");
    configureFieldOption(enrollment.BenchmarkScore, model,
        "Benchmark Score", "Benchmark Score is required.",
        ko.computed(function () { return enrollment.BenchmarkCompleted(); }),
        ko.computed(function () { return !enrollment.BenchmarkExempt(); })
    );
    configureFieldOption(enrollment.BuildingPermitNumber, model, "Building Permit Number", "Building Permit Number is required.");
    configureFieldOption(enrollment.BuildingTypeId, model, "Building Type", "Building Type is required.");
    configureFieldOption(enrollment.IsExisting, model, "Building Type Age", "Construction Type is required.");
    configureFieldOption(enrollment.NumberOfBedrooms, model, "Number of Bedrooms", "Number of Bedrooms is required.");
    configureFieldOption(enrollment.NumberOfEmployees, model, "Number of Employees", "Number of Employees is required.");
    configureFieldOption(enrollment.NumberOfOccupants, model, "Number of Occupants", "Number of Occupants is required.");
    configureFieldOption(enrollment.OccupancyStatusId, model, "Occupancy Status", "Occupancy Status is required.");
    configureFieldOption(enrollment.ParkName, model, "Park Name", "Park Name is required.", ko.computed(function () { return enrollment.BuildingTypeId() == 43; }));
    configureFieldOption(enrollment.ProjectTypeId, model, "Project Type", "Project Type is required.");
    configureFieldOption(enrollment.SiteBlockNumber, model, "Site Block Number", "Site Block Number is required.");
    configureFieldOption(enrollment.SiteLotNumber, model, "Site Lot Number", "Site Lot Number is required.");
    configureFieldOption(enrollment.SubdivisionName, model, "Subdivision Name", "Subdivision Name is required.");
    configureFieldOption(enrollment.TotalSqFtLivingSpace, model, "Premise Square Footage", "Premise Square Footage is required.");
    configureFieldOption(enrollment.WeeklyHoursOfOperation, model, "Weekly Hours of Operation", "Weekly Hours of Operation is required.");
    configureFieldOption(enrollment.YearBuilt, model, "Year Built", "Year Built is required.");

    enrollment.BuildingTypeId.subscribe(function () { model.Measures = [] });

    model.Response.IsValidCustomerInformation = function (validate) {
        if (validate == null) validate = true;

        var Fields = [
            enrollment.AccountName,

            enrollment.CustomerFirstName, enrollment.CustomerLastName, enrollment.HomePhone, enrollment.AltPhone, enrollment.FaxNumber, enrollment.CustomerEmail,
            serviceAddress.Street1, serviceAddress.PostalCode, serviceAddress.City, serviceAddress.State,
            mailingAddress.POBox, mailingAddress.Street1, mailingAddress.PostalCode, mailingAddress.City, mailingAddress.State,

            enrollment.IsAirConditioned, enrollment.TotalSqFtAirConditioned, enrollment.AuditPerformed, enrollment.BenchmarkCompleted,
            enrollment.BenchmarkScore, enrollment.BenchmarkExempt, enrollment.BuildingPermitNumber, enrollment.BuildingTypeId, enrollment.IsExisting, 
            enrollment.NumberOfBedrooms, enrollment.NumberOfEmployees, enrollment.NumberOfOccupants, enrollment.OccupancyStatusId, enrollment.ParkName,
            enrollment.ProjectTypeId, enrollment.TotalSqFtLivingSpace, enrollment.SubdivisionName, enrollment.SiteBlockNumber, enrollment.SiteLotNumber,
            enrollment.WeeklyHoursOfOperation, enrollment.YearBuilt
        ];

        var IsValid = true;
        $.each(Fields, function (index, item) {
            if (item != null) {
                if (validate) {
                    item.Validate();
                    IsValid = item.IsValid() && IsValid;
                } else {
                    IsValid = item.IsValidAndNotUnaltered() && IsValid;
                }
            }
        });
        return IsValid;
    };
}
function configureInstallerInformationFieldValidations(model) {
    var currentEmployees = [];
    var contractorEdited = function () { model.Response.Contractor.IsCustom(true); };
    var contractorEmployeeEdited = function () { model.Response.Contractor.ContractorEmployee.IsCustom(true); };
    var prepareEmployeeModel = function (employee)
    {
        if (employee.Phone == "0") {
            employee.Phone = "";
        }
        if (employee.Fax == "0") {
            employee.Fax = "";
        }
        if (!employee.hasOwnProperty("FullName")) {
            employee.FullName = employee.FirstName + " ";
            if (employee.MiddleInitial != null && employee.MiddleInitial.length != "") employee.FullName += employee.MiddleInitial + " ";
            employee.FullName += employee.LastName;
        }
    }
    var prepareLicenseModel = function (license) {
        if (license.LicenseNumber == "0") {
            license.LicenseNumber = "";
        }
    }
    var prepareContractorModel = function (contractor)
    {
        if (contractor.ContractorAddress.Street1 == null) contractor.ContractorAddress.Street1 = "";
        contractor.ContractorAddress.IsPOBox = contractor.ContractorAddress.Street1.trim().length == 0;

        prepareEmployeeModel(contractor.ContractorEmployee);
        $.each(contractor.ContractorLicenses, function (index, item) { prepareLicenseModel(item); });
    }
    var subscribeAllFields = function (contractor) {
        contractor.ContractorName.subscribe(contractorEdited);
        contractor.Website.subscribe(contractorEdited);

        contractor.ContractorAddress.Attn.subscribe(contractorEdited);
        contractor.ContractorAddress.City.subscribe(contractorEdited);
        contractor.ContractorAddress.Country.subscribe(contractorEdited);
        contractor.ContractorAddress.IsPOBox.subscribe(contractorEdited);
        contractor.ContractorAddress.POBox.subscribe(contractorEdited);
        contractor.ContractorAddress.PostalCode.subscribe(contractorEdited);
        contractor.ContractorAddress.State.subscribe(contractorEdited);
        contractor.ContractorAddress.Street1.subscribe(contractorEdited);
        contractor.ContractorAddress.Street2.subscribe(contractorEdited);
        contractor.ContractorAddress.Street3.subscribe(contractorEdited);
        contractor.ContractorAddress.Unit.subscribe(contractorEdited);

        contractor.ContractorEmployee.Email.subscribe(contractorEmployeeEdited);
        contractor.ContractorEmployee.Fax.subscribe(contractorEmployeeEdited);
        contractor.ContractorEmployee.FirstName.subscribe(contractorEmployeeEdited);
        contractor.ContractorEmployee.LastName.subscribe(contractorEmployeeEdited);
        contractor.ContractorEmployee.Phone.subscribe(contractorEmployeeEdited);
    };

    model.Response.Contractor.IsCustom = ko.observable(false);
    model.Response.Contractor.ContractorEmployee.IsCustom = ko.observable(false);
    prepareContractorModel(model.DefaultModels.Contractor);

    if (!model.Program.Settings.InstallerOptions.CanBeSelfInstalled) {
        model.Response.Enrollment.IsSelfInstalled(false)
    } else if (!model.Program.Settings.InstallerOptions.AllowSelectionExisting && !model.Program.Settings.InstallerOptions.AllowManualEntry) {
        model.Response.Enrollment.IsSelfInstalled(true)
    }

    model.Response.Contractor.ContractorLicenses.subscribe(function (items) {
        $.each(items, function (index, item) {
            item.LicenseNumber.subscribe(contractorEdited);
            item.TerminationDate.subscribe(contractorEdited);
            requiredValidation(item.LicenseNumber, "License number required.", function () { return model.Program.Settings.InstallerOptions.RequireContractorLicense && model.Response.Contractor.IsCustom(); });
            requiredValidation(item.TerminationDate, "Expiration date required.", function () { return model.Program.Settings.InstallerOptions.RequireContractorLicense && model.Response.Contractor.IsCustom(); });
        });
    });

    requiredValidation(model.Response.Contractor.ContractorId, "Installer required.", function () { return !model.Response.Enrollment.IsSelfInstalled() && !model.Program.Settings.InstallerOptions.AllowManualEntry && model.Program.Settings.InstallerOptions.RequireTradeAlly; });
    requiredValidation(model.Response.Contractor.ContractorName, "Installer name required.", function () { return !model.Response.Enrollment.IsSelfInstalled() && model.Program.Settings.InstallerOptions.AllowManualEntry && model.Program.Settings.InstallerOptions.RequireTradeAlly && isNullOrEmpty(model.Response.Contractor.ContractorId()); });
    requiredValidation(model.Response.Contractor.ContractorEmployee.ContractorEmployeeId, "Installer contact required.", function () { return !model.Response.Enrollment.IsSelfInstalled() && !isNullOrEmpty(model.Response.Contractor.ContractorName()) && !isNullOrEmpty(model.Response.Contractor.ContractorId()) && isNullOrEmpty(model.Response.Contractor.ContractorEmployee.LastName()); });
    model.Response.Contractor.ContractorName.extend({ validation: { custom: { eval: function (value) { return isNullOrEmpty(value); }, message: "Installer not found.", active: function () { return !model.Program.Settings.InstallerOptions.AllowManualEntry && model.Response.Contractor.IsCustom(); } } } });
    requiredValidation(model.Response.Contractor.ContractorEmployee.LastName, "Contact name required.", function () { return model.Response.Contractor.ContractorEmployee.ContractorEmployeeId.IsValid() && !isNullOrEmpty(model.Response.Contractor.ContractorName()) && model.Program.Settings.InstallerOptions.AllowManualEntry && model.Response.Contractor.ContractorEmployee.IsCustom(); });
    requiredValidation(model.Response.Contractor.ContractorEmployee.Phone, "Contact phone required.", function () { return !isNullOrEmpty(model.Response.Contractor.ContractorName()) && model.Program.Settings.InstallerOptions.AllowManualEntry && model.Response.Contractor.ContractorEmployee.IsCustom(); });
    var contractorAddress = model.Response.Contractor.ContractorAddress;
    var addressValidationActive = function() { 
        return model.Response.Contractor.IsCustom() && model.Program.Settings.InstallerOptions.AllowManualEntry; 
    };
    requiredValidation(contractorAddress.Street1, "Street address required.", function () { return !contractorAddress.IsPOBox() && addressValidationActive(); });
    requiredValidation(contractorAddress.POBox, "PO Box required.", function () { return contractorAddress.IsPOBox() && addressValidationActive(); });
    requiredValidation(contractorAddress.PostalCode, "Zip code required.", addressValidationActive);
    requiredValidation(contractorAddress.City, "City required.", addressValidationActive);
    requiredValidation(contractorAddress.State, "State required.", addressValidationActive);

    subscribeAllFields(model.Response.Contractor);

    model.Response.Contractor.ContractorId.subscribe(function (contractorId) {
        if (!model.Program.Settings.InstallerOptions.AllowSelectionExisting) {
            console.error("Selection of an existing contractor is not allowed.");
            return;
        }

        if (contractorId == null || contractorId == "") {
            if (model.Response.Contractor.ContractorName() != model.DefaultModels.Contractor.ContractorName) {
                ko.mapping.fromJS(model.DefaultModels.Contractor, {}, model.Response.Contractor);
                model.ContractorEmployees([]);
            }
            model.Response.Contractor.IsCustom(false);
            console.log("Default contractor mapping complete.");
            return;
        }

        AJAXLoadHTML("./Content/spoof/contractor.htm", null, function (msg) {
			msg = JSON.parse(msg);
            msg.Data.Employees.unshift({ ContractorEmployeeId: "", FullName: "(Select a Contact)" });
            currentEmployees = msg.Data.Employees;

            model.ContractorEmployees([]);
            $.each(msg.Data.Employees, function (index, employee) {
                prepareEmployeeModel(employee);
                model.ContractorEmployees.push(employee);
            });

            prepareContractorModel(msg.Data.Contractor);
            model.Response.Contractor.ContractorAddress.PostalCode.SuspendLookup(true);
            ko.mapping.fromJS(msg.Data.Contractor, {}, model.Response.Contractor);
            model.Response.Contractor.ContractorAddress.PostalCode.SuspendLookup(false);
            ko.mapping.fromJS(model.DefaultModels.Contractor.ContractorEmployee, {}, model.Response.Contractor.ContractorEmployee);
            model.Response.Contractor.IsCustom(false);
            model.Response.Contractor.ContractorEmployee.IsCustom(false);
        });
    });
    model.Response.Contractor.ContractorEmployee.ContractorEmployeeId.subscribe(function (contractorEmployeeId) {
        if (contractorEmployeeId == null || contractorEmployeeId == "") {
            if (model.Response.Contractor.ContractorEmployee.FirstName() != model.DefaultModels.Contractor.ContractorEmployee.FirstName) {
                ko.mapping.fromJS(model.DefaultModels.Contractor.ContractorEmployee, {}, model.Response.Contractor.ContractorEmployee);
            }
            model.Response.Contractor.ContractorEmployee.IsCustom(false);
            console.log("Default contractor employee mapping complete.");
            return;
        }

        if (!model.Program.Settings.InstallerOptions.AllowSelectionExistingContact) {
            console.error("Selection of an existing contractor contact is not allowed.");
            return;
        }

        var contractorEmployee = currentEmployees.filter(function (employee) { return employee.ContractorEmployeeId == contractorEmployeeId; });
        if (contractorEmployee.length == 0) {
            console.error("Contractor Employee Id " + contractorEmployeeId + " not found.");
            return;
        }
        contractorEmployee = contractorEmployee[0];

        ko.mapping.fromJS(contractorEmployee, {}, model.Response.Contractor.ContractorEmployee);
        model.Response.Contractor.ContractorEmployee.IsCustom(false);
    });
    model.Response.IsValidInstallerInformation = function (validate) {
        if (validate == null) validate = true;

        var Fields = [
            model.Response.Contractor.ContractorId,
            model.Response.Contractor.ContractorName,
            model.Response.Contractor.ContractorEmployee.ContractorEmployeeId,
            model.Response.Contractor.ContractorEmployee.LastName, model.Response.Contractor.ContractorEmployee.Phone,
            contractorAddress.Street1, contractorAddress.POBox, contractorAddress.PostalCode, contractorAddress.City, contractorAddress.State
        ];

        var IsValid = true;
        $.each(Fields, function (index, item) {
            if (item != null) {
                if (validate) {
                    item.Validate();
                    var value = item.IsValid();
                    if (!value) console.log("Field index " + index + " failed validation: " + JSON.stringify(item, null, 2));
                    IsValid = value && IsValid;
                } else {
                    var value = item.IsValidAndNotUnaltered();
                    if (!value) console.log("Field index " + index + " failed validation: " + JSON.stringify(item, null, 2));
                    IsValid = value && IsValid;
                    
                }
            }
        });
        return IsValid;
    };
}
function configurePayeeInformationFieldValidations(model) {
    var paymentToApplicantId = model.Program.PaymentToTypes.filter(function (item) { return item.Name.toLowerCase() == "applicant"; })[0].PaymentToId.toString();
    var paymentToInstallerId = model.Program.PaymentToTypes.filter(function (item) { return item.Name.toLowerCase() == "tradeally"; })[0].PaymentToId.toString();
    var paymentToOtherId = model.Program.PaymentToTypes.filter(function (item) { return item.Name.toLowerCase() == "alternatepayee"; })[0].PaymentToId.toString();

    requiredValidation(model.Response.Enrollment.PaymentToId, "Payment to selection is required.");
    model.Response.Enrollment.PaymentToId.IsEditable = ko.computed(function () {
        return model.Response.Enrollment.PaymentToId() == paymentToOtherId;
    });

    requiredValidation(model.Response.Enrollment.PayeeName, "Payee Name is required.", model.Response.Enrollment.PaymentToId.IsEditable);
    model.Response.Enrollment.PayeeName.Prepopulated = ko.computed(function () {
        var paymentToId = model.Response.Enrollment.PaymentToId();

        if (paymentToId == "")
            return "";
        if (model.Response.Enrollment.IsSelfInstalled() && paymentToId == paymentToInstallerId)
            paymentToId = paymentToApplicantId;

        switch (paymentToId) {
            case paymentToApplicantId: return model.Response.Enrollment.CustomerLastName() + ", " + model.Response.Enrollment.CustomerFirstName();
            case paymentToInstallerId: return model.Response.Contractor.ContractorName();
            case paymentToOtherId: return "Should be editable.";
            default:
                console.error("PayeeName: Payment to type not recognized.");
                return "";
        }
    });

    requiredValidation(model.Response.Enrollment.PayeePhoneNumber, "Payee Phone is required.", model.Response.Enrollment.PaymentToId.IsEditable);
    model.Response.Enrollment.PayeePhoneNumber.Prepopulated = ko.computed(function () {
        var paymentToId = model.Response.Enrollment.PaymentToId();

        if (paymentToId == "")
            return "";
        if (model.Response.Enrollment.IsSelfInstalled() && paymentToId == paymentToInstallerId)
            paymentToId = paymentToApplicantId;

        switch (paymentToId) {
            case paymentToApplicantId: return model.Response.Enrollment.HomePhone();
            case paymentToInstallerId: return model.Response.Contractor.ContractorEmployee.Phone();
            case paymentToOtherId: return "Should be editable.";
            default:
                console.error("PayeePhoneNumber: Payment to type not recognized.");
                return "";
        }
    });

    requiredValidation(model.Response.Enrollment.PayeeTaxStatusId, "Tax Status is required.", model.Program.Settings.PayeeOptionsRequireSSN);
    requiredValidation(model.Response.Enrollment.PayeeTaxIdTypeId, "Tax ID Type is required.", model.Program.Settings.PayeeOptionsRequireSSN);
    requiredValidation(model.Response.Enrollment.PayeeTaxIdSSN, "Tax ID Number is required.", model.Program.Settings.PayeeOptionsRequireSSN);

    model.Response.Enrollment.PayeeAddress = ko.computed(function () {
        var paymentToId = model.Response.Enrollment.PaymentToId();

        if (paymentToId == "")
            return model.Response.PayeeAddress;
        if (model.Response.Enrollment.IsSelfInstalled() && paymentToId == paymentToInstallerId)
            paymentToId = paymentToApplicantId;

        switch (paymentToId) {
            case paymentToApplicantId: return model.Response.Enrollment.IsMailAddressSameAsInstall() ? model.Response.ServiceAddress : model.Response.MailingAddress;
            case paymentToInstallerId: return model.Response.Contractor.ContractorAddress;
            case paymentToOtherId: return model.Response.PayeeAddress;
            default:
                console.error("PayeeAddress: Payment to type not recognized.");
                return model.Response.PayeeAddress;
        }
    });

    var payeeAddress = model.Response.PayeeAddress;

    requiredValidation(payeeAddress.Street1, "Street address required.", function () { return model.Response.Enrollment.PaymentToId.IsEditable() && !payeeAddress.IsPOBox(); });
    requiredValidation(payeeAddress.POBox, "PO Box required.", function () { return model.Response.Enrollment.PaymentToId.IsEditable() && payeeAddress.IsPOBox(); });
    requiredValidation(payeeAddress.PostalCode, "Zip code required.", model.Response.Enrollment.PaymentToId.IsEditable);
    requiredValidation(payeeAddress.City, "City required.", model.Response.Enrollment.PaymentToId.IsEditable);
    requiredValidation(payeeAddress.State, "State required.", model.Response.Enrollment.PaymentToId.IsEditable);

    model.Response.IsValidPayeeInformation = function (validate) {
        if (validate == null) validate = true;

        var Fields = [
            model.Response.Enrollment.PayeeName, model.Response.Enrollment.PayeePhoneNumber,
            model.Response.Enrollment.PayeeTaxStatusId, model.Response.Enrollment.PayeeTaxIdTypeId, model.Response.Enrollment.PayeeTaxIdSSN,
            payeeAddress.Street1, payeeAddress.POBox, payeeAddress.PostalCode, payeeAddress.City, payeeAddress.State
        ];

        var IsValid = true;
        $.each(Fields, function (index, item) {
            if (item != null) {
                if (validate) {
                    item.Validate();
                    IsValid = item.IsValid() && IsValid;
                } else {
                    IsValid = item.IsValidAndNotUnaltered() && IsValid;
                }
            }
        });
        return IsValid;
    };
}
function configureEquipmentInformationFieldValidations(model) {
    var itemsSplit = ";";
    var itemSplit = "|";

    model.Response.EnrollmentMeasures = ko.observableArray();
    model.Response.Enrollment.InstallationDate.IsEnabled = ko.computed(function () {
        return !model.Program.IsAppUsedForReservation;
    });
    var bindInstallationDateBehavior = function () {
        requiredValidation(model.Response.Enrollment.InstallationDate, "Installation date is required.", model.Response.Enrollment.InstallationDate.IsEnabled);
        model.Response.Enrollment.InstallationDate.extend({
            validation: {
                custom: {
                    eval: function (value) {
                        return parseDate(value).parsed;
                    },
                    message: "Invalid date.",
                    active: function () { return !isNullOrEmpty(model.Response.Enrollment.InstallationDate()) && model.Response.Enrollment.InstallationDate.IsEnabled(); }
                }
            }
        });
        console.log("Greater than date is: " + model.Program.InstallationDateGreaterThan);
        model.Response.Enrollment.InstallationDate.extend({
            validation: {
                custom: {
                    eval: function (value) {
                        var parseResult = parseDate(value);
                        if (!parseResult.parsed) return true;

                        return dateDiff(parseResult.date, new Date()) > model.Program.InstallationDateGreaterThan;
                    },
                    message: "Installation date must be more than " + model.Program.InstallationDateGreaterThan + " days ago.",
                    active: function () { return !isNullOrEmpty(model.Response.Enrollment.InstallationDate()) && model.Program.InstallationDateGreaterThan != null; }
                }
            }
        });
        model.Response.Enrollment.InstallationDate.extend({
            validation: {
                custom: {
                    eval: function (value) {
                        var parseResult = parseDate(value);
                        if (!parseResult.parsed) return true;

                        return dateDiff(parseResult.date, new Date()) < model.Program.InstallationDateLessThan;
                    },
                    message: "Installation date must be less than " + model.Program.InstallationDateLessThan + " days ago.",
                    active: function () { return !isNullOrEmpty(model.Response.Enrollment.InstallationDate()) && model.Program.InstallationDateLessThan != null; }
                }
            }
        });
    };
    bindInstallationDateBehavior();

    model.Response.EnrollmentMeasures.Calculated = ko.observable(false);
    model.Response.EnrollmentMeasures.AddMeasures = function () {
        $.each(model.Measures, function (index, item) {
            if (item.IsSelected()) {
                item.PlannedMeasureQty = "";

                item = ko.mapping.fromJS(item);
                item.Formulas = ko.observableArray([]);
                var updateFormula = function () {
                    if (item.Formulas().length == 0) return;

                    var request = {
                        formulas: item.Formulas().map(function (formula) { return { Key: formula.label, Value: formula.formula }; }),
                        values: item.Properties()
                            .filter(function (property) { return property.ControlType != "formula" })
                            .map(function (property) { return { Key: property.PropertyType(), Value: property.InstallationPropertyValue() }; })
                    };
                    // Don't forget the measure quantity!
                    request.values.push({ Key: "Measure:Quantity", Value: item.PlannedMeasureQty() });
                    AJAXLoadData("/Method/EvaluateFormula/", request, function (msg) {
                        $.each(item.Formulas(), function (index, formula) {
                            var results = msg.Data.Formulas.filter(function (item) { return item.Label == formula.label; });
                            if (results.length > 0) formula.value(results[0].Value);
                        });
                    });
                };

                requiredValidation(item.PlannedMeasureQty, "Quantity required.");
                numericFormatValidation(item.PlannedMeasureQty, { decimal: 0 });
                item.PlannedMeasureQty.subscribe(function () {
                    model.Response.EnrollmentMeasures.Calculated(false);
                    updateFormula();
                });

                $.each(item.Properties(), function (index, property) {
                    var controlType = property.InstallationPropertyControlType().replace(/\s/g, "").toLowerCase();
                    property.ControlType = controlType;

                    if (controlType != "formula") property.InstallationPropertyValue.subscribe(updateFormula);

                    if (property.InstallationPropertyValues() == null) {
                        property.InstallationPropertyValues = [];
                    } else {
                        property.InstallationPropertyValues = property.InstallationPropertyValues().split(itemsSplit)
                            .map(function (propertyValue) {
                                propertyValue = propertyValue.split('|');
                                return { text: propertyValue[0], value: propertyValue[1] };
                            });
                    }
                    if (controlType == "numericvalue")
                    {
                        numericFormatValidation(property.InstallationPropertyValue,
                            {
                                decimals: property.InstallationNumberOfDecimalPlaces(),
                                minValue: property.InstallationMinValue(),
                                maxValue: property.InstallationMaxValue()
                            }
                        );
                    } else if (controlType == "dropdownlist") {
                        property.InstallationPropertyValues.unshift({ text: "", value: "" });
                        property.SelectedInstallationPropertyItem = ko.computed(function () {
                            var matches = property.InstallationPropertyValues.filter(function (item) { return item.value == property.InstallationPropertyValue(); });
                            if (matches.length > 0) return matches[0];
                            return { data: "", text: "" };
                        });
                    } else if (controlType == "checkboxgroup") {
                        property.SelectedInstallationPropertyValues = ko.observableArray([]);
                        property.SelectedInstallationPropertyItems = ko.computed(function () {
                            var map = property.SelectedInstallationPropertyValues().map(function (value) {
                                var matches = property.InstallationPropertyValues.filter(function (item) { return item.value == value; });
                                if (matches.length > 0) return matches[0];
                                return null;
                            });
                            return map.filter(function (item) { return item != null });
                        });

                        // The back-end system expects the complete item to be stored here. Not just the values.
                        property.InstallationPropertyValue = ko.computed(function () {
                            return property.SelectedInstallationPropertyItems().map(function (item) { return item.text + itemSplit + item.value; }).join(itemsSplit);
                        });
                    } else if (controlType == "formula") {
                        var obsFormula = {
                            label: property.PropertyType(),
                            formula: property.Formula(),
                            value: ko.observable("")
                        };
                        property.CalculatedPropertyValue = ko.computed(function () { return obsFormula.value(); });
                        item.Formulas.push(obsFormula);
                    }
                    
                    requiredValidation(property.InstallationPropertyValue, "Value is required.", property.InstallationPropertyRequiredStatusId() == 1);
                    property.InstallationPropertyValue.subscribe(function () { model.Response.EnrollmentMeasures.Calculated(false); });
                });

                var makes = model.Equipment.filter(function (equipment) { return equipment.MeasureId == item.MeasureId(); }).map(function (equipment) { return equipment.Brand; });
                makes = $.grep(makes, function (el, index) {
                    return index == $.inArray(el, makes);
                });
                makes.unshift("");
                item.EquipmentMakes = ko.observableArray(makes);
                item.SelectedMake = ko.observable("");
                item.EquipmentModels = ko.observableArray([]);
                item.SelectedMake.subscribe(function (newValue) {
                    var models = [];
                    if (newValue != "")
                    {
                        models = model.Equipment.filter(function (equipment) { return equipment.MeasureId == item.MeasureId() && equipment.Brand == newValue; });
                        models.unshift({ Model: "", MeasureEquipmentId: "" });
                    }
                    item.EquipmentModels(models);
                    item.MeasureEquipmentId(null);
                });
                // item.MeasureEquipmentId = ko.observable("");
                item.MeasureEquipmentId.subscribe(function (newValue) {
                    if (newValue == null || newValue == "") return;

                    $.each(item.Properties(), function (index, property) {
                        var prepop = model.EquipmentProperties.filter(function (equipmentProperty) { return equipmentProperty.MeasurePropertyId == property.MeasurePropertyId() && equipmentProperty.MeasureEquipmentId == newValue; });
                        // console.log("Measure Equipment selected... SelectedMeasureEquipmentId: " + newValue + " MeasurePropertyId: " + property.MeasurePropertyId() + " Prepop: " + JSON.stringify(prepop, null, 2));
                        if (prepop.length > 0) {
                            prepop = prepop[0];
                            // console.log("Prepopping Measure Property '" + property.PropertyType() + "'.");
                            if (property.ControlType == "checkboxgroup") {
                                // console.log("CBG value is: " + prepop.DefaultValue);
                                property.SelectedInstallationPropertyValues(prepop.DefaultValue.split(",").map(function(item) { return item.split("|")[1]; }));
                            } else if (property.ControlType == "dropdownlist") {
                                // console.log("DDL value is: " + prepop.DefaultValue);
                                var value = prepop.DefaultValue.split("|");
                                property.InstallationPropertyValue(value[1]);
                            } else {
                                property.InstallationPropertyValue(prepop.DefaultValue);
                            }
                            //console.error("TODO: Measure Equipment prepop.");
                        }
                    });
                });

                AppState().Application.Model.Response.EnrollmentMeasures.push(item);
            }
        });
        model.Response.EnrollmentMeasures.subscribe(function () {
            model.Response.EnrollmentMeasures.Calculated(false);
        });
    };
    model.Response.EnrollmentMeasures.TemplateName = function (item) {
        var result = "MeasureProperty" + item.InstallationPropertyControlType().replace(/\s/g, "");
        return result;
    };
    model.Response.EnrollmentMeasures.RemoveMeasure = function (measure) {
        // Not entirely sure why I need to wrap this. 
        // Mapping directly to the remove method causes an error.
        model.Response.EnrollmentMeasures.remove(measure);
    }
    model.Response.IsValidEquipmentInformation = function (validate) {
        if (validate == null) validate = true;

        if (model.Response.EnrollmentMeasures().length == 0) return false;

        var Fields = [];
        $.each(model.Response.EnrollmentMeasures(), function (index, measure) {
            Fields.push(measure.PlannedMeasureQty);
            $.each(measure.Properties(), function (index, property) {
                if(property.InstallationEnabled())
                {
                    Fields.push(property.InstallationPropertyValue);
                }
            });
        });

        var IsValid = true;
        $.each(Fields, function (index, item) {
            if (item != null) {
                if (validate) {
                    item.Validate();
                    IsValid = item.IsValid() && IsValid;
                } else {
                    IsValid = item.IsValidAndNotUnaltered() && IsValid;
                }
            }
        });
        return IsValid;
    };
}
function configureIncentiveFieldValidations(model) {
    model.Response.EnrollmentMeasures.Amount = ko.observable(0);
    model.Response.EnrollmentMeasures.AmountAvailable = ko.observable(false);
    model.Response.EnrollmentMeasures.Calculate = function () {
        if (!model.Response.EnrollmentMeasures.Calculated()) {
            var measures = ko.mapping.toJS(model.Response.EnrollmentMeasures);
            if (measures == null || measures.length == 0) {
                console.error("No measures to calculate.");
                return;
            }
            AJAXLoadData("/Method/CalculateMeasures/", { programId: model.Program.Id, buildingTypeId: model.Response.Enrollment.BuildingTypeId(), enrollmentMeasures: measures }, function (msg) {
                model.Response.EnrollmentMeasures.Amount(msg.Data.Amount);
                model.Response.EnrollmentMeasures.AmountAvailable(msg.Data.Available);
                model.Response.EnrollmentMeasures.Calculated(true);
            });
        }
    };

    model.Response.IsValidIncentiveAmount = function (validate) {
        return model.Response.EnrollmentMeasures.Calculated() && model.Response.EnrollmentMeasures.AmountAvailable();
    };
}
function configureSurveyFieldValidations(model) {
    var enrollment = model.Response.Enrollment;

    requiredValidation(enrollment.LeadSourceId, "Lead source required.");

    configureQuestionnaireValidation(model.Program.EnrollmentSurveyQuestions, model.Response.EnrollmentSurveyResults);

    model.Response.IsValidSurvey = function (validate) {
        if (validate == null) validate = true;

        var IsValid = true;
        if (!validate) {
            if (model.Response.EnrollmentSurveyResults.Validate != null && !model.Response.EnrollmentSurveyResults.Validate(false)) return false;
            if (!enrollment.LeadSourceId.IsValidAndNotUnaltered()) return false;
        } else {
            if (model.Response.EnrollmentSurveyResults.Validate != null)
                IsValid = model.Response.EnrollmentSurveyResults.Validate() && IsValid;
            IsValid = enrollment.LeadSourceId.IsValid() && IsValid;
        }

        return IsValid;
    };
}
function configureUploadDocumentFieldValidations(model) {
    model.Response.Files = ko.observableArray([]);
    model.SelectedFile.UploadFailed = ko.observable(false);
    model.SelectedFile.UploadCanceled = ko.observable(false);
    model.SelectedFile.Current = ko.observable(null);
    model.Response.Files.AddFile = function (file) {
        console.log("Adding file: " + file.Name);
        file.DocumentTypeName = model.Program.DocumentTypes.filter(function (item) { return item.DocumentTypeId == file.DocumentTypeId; })[0].DocumentTypeName;
        model.Response.Files.push(file);
    };

    var clear = function () {
        model.SelectedFile.Current(null);
        model.SelectedFile.Description(null);
        model.SelectedFile.Uploading(false);
        model.SelectedFile.Percentage(null);
        model.SelectedFile.UploadFailed(false);
        model.SelectedFile.UploadCanceled(false);
        model.SelectedFile.DocumentTypeId("");
    };

    var stoppedUploading = function () {
        model.SelectedFile.Uploading(false);
    }

    var uploadProgress = function (evt) {
        if (evt.lengthComputable) {
            var percentComplete = Math.round(evt.loaded * 100 / evt.total);
            model.SelectedFile.Percentage(percentComplete.toString() + "%");
        }
        else {
            model.SelectedFile.Percentage("unable to compute");
        }
    }

    var uploadFailed = function (evt) {
        stoppedUploading();
        model.SelectedFile.UploadFailed(true);
    }
    var uploadCanceled = function (evt) {
        stoppedUploading();
        model.SelectedFile.UploadCanceled(true);
    }

    var uploadComplete = function (evt) {
        try
        {
            var msg = JSON.parse(evt.target.responseText);
            stoppedUploading();
            ProcessMessage(msg, function (msg) {
                if (msg.Data.Files.length == 0) return;
                var file = msg.Data.Files[0];
                file.Description = model.SelectedFile.Description();
                file.DocumentTypeId = model.SelectedFile.DocumentTypeId();
                model.Response.Files.AddFile(file);
            }, {});
            clear();
            if (model.SelectedFile.DialogQuery()) $(model.SelectedFile.DialogQuery()).dialog("close");
        } catch (ex) {
            console.error("Failed to process response: '" + evt.target.responseText + "' Reason: " + ex.toString());
            uploadFailed(evt);
        }
    }

    model.SelectedFile.Name = ko.computed(function () {
        if (model.SelectedFile.Current()) return model.SelectedFile.Current().name;
        return null;
    });
    
    requiredValidation(model.SelectedFile.DocumentTypeId, "Document type required.");

    model.SelectedFile.Current.extend({
        validation: {
            custom: {
                message: "Please select a file to upload.", active: function () { return true; }, eval: function (value) {
                    return value != null;
                }
            }
        }
    });
    model.SelectedFile.Current.extend({
        validation: {
            custom: {
                message: "This file extension is not allowed.", active: function () { return true; }, eval: function () {
                    var value = model.SelectedFile.Name();
                    if (value === null) return true;
                    return model.Program.AllowedExtensions.filter(function (extension) { return value.indexOf(extension, value.length - extension.length) !== -1 }).length != 0;
                }
            }
        }
    });
    model.SelectedFile.UploadFailed.extend({
        validation: {
            custom: {
                message: "The file failed to upload.", active: function () { return true; }, eval: function (value) {
                    return !value;
                }
            }
        }
    });
    model.SelectedFile.UploadCanceled.extend({
        validation: {
            custom: {
                message: "The upload was cancelled.", active: function () { return true; }, eval: function (value) {
                    return !value;
                }
            }
        }
    });
    model.SelectedFile.Type = ko.computed(function () {
        if (model.SelectedFile.Current()) return model.SelectedFile.Current().type;
        return null;
    });
    model.SelectedFile.Size = ko.computed(function () {
        if (model.SelectedFile.Current()) {
            var file = model.SelectedFile.Current();
            var fileSize = 0;
            if (file.size > 1024 * 1024)
                fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
            else
                fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
            return fileSize;
        }
        return null;
    });

    model.SelectedFile.Select = function (file) {
        model.SelectedFile.Current(file);
        if (file) {
            model.SelectedFile.Uploading(false);
            model.SelectedFile.Percentage(0);
        } else {
            clear();
        }
    };

    model.SelectedFile.Upload = function () {
        if (!model.SelectedFile.Current() || !model.SelectedFile.Current.IsValid() || !model.SelectedFile.DocumentTypeId.IsValid()) return;

        var fd = new FormData();
        fd.append("flDocument", model.SelectedFile.Current());

        var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", uploadProgress, false);
        xhr.responseType = "application/json";
        xhr.addEventListener("load", uploadComplete, false);
        xhr.addEventListener("error", uploadFailed, false);
        xhr.addEventListener("abort", uploadCanceled, false);
        xhr.open("POST", "./Method/UploadFile/");
        uploading = true;
        xhr.send(fd);
    }

    model.Response.Files.RemoveFile = function (file) {
        AJAXLoadData("/Method/RemoveFile/", file, function (msg) { });
        model.Response.Files.remove(file);
    }

}
function configureTermsConditionsFieldValidations(model) {
    model.Response.Enrollment.AgreedToTerms = ko.observable(false);
    model.Response.Enrollment.AgreedToTerms.extend({ validation: { custom: { message: "You must agree to the terms and conditions.", active: function () { return true; }, eval: function (value) { return value == true; } } } });
    model.Response.IsValidTermsConditions = function (validate) {
        if (validate == null) validate = true;

        var IsValid = true;
        if (!validate) {
            IsValid = model.Response.Enrollment.AgreedToTerms.IsValidAndNotUnaltered() && IsValid;
        } else {
            IsValid = model.Response.Enrollment.AgreedToTerms.IsValid() && IsValid;
        }
        return IsValid;
    }
}
function configureReviewAndSubmitFieldValidations(model) {
    model.Response.Enrollment.AdditionalEmailsList = ko.observableArray();
    for (var index = 0; index < 2; index++) {
        var email = { value: ko.observable("") };
        email.value.extend({ validation: { regEx: { message: "Invalid email address.", pattern: /@/, active: valToFunction(true) } } });
        model.Response.Enrollment.AdditionalEmailsList.push(email);
    }
    model.Response.Enrollment.AdditionalEmails = ko.computed(function () {
        return model.Response.Enrollment.AdditionalEmailsList().map(function(item) { return item.value(); }).join(";");
    });
}

function configureSteps(model) {
    var steps = model.Steps;
    model.Debug = ko.observable(false);

    var getURL = function (location) {
        return "#" + location + "?" + AppState().hashInfo.datastr;
    }

    model.Response.Enrollment.Submitted = ko.computed(function () {
        return model.Response.Enrollment.EnrollmentNumber() != "";
    });

    $.each(steps, function (index, step) {
        switch(step.Name) {
            case "gettingstarted":
                step.URL = getURL("");
                step.IsValid = ko.computed(function () { return model.Debug() || (!model.Response.Enrollment.Submitted() && model.Response.IsValidGettingStarted(false)); });
                break;
            case "customerinformation":
                step.URL = getURL("home/customerinformation");
                step.IsValid = ko.computed(function () { return model.Debug() || (!model.Response.Enrollment.Submitted() && model.Response.IsValidCustomerInformation(false)); });
                break;
            case "installerinformation":
                step.URL = getURL("home/installerinformation");
                step.IsValid = ko.computed(function () { return model.Debug() || (!model.Response.Enrollment.Submitted() && model.Response.IsValidInstallerInformation(false)); });
                break;
            case "payeeinformation":
                step.URL = getURL("home/payeeinformation");
                step.IsValid = ko.computed(function () { return model.Debug() || (!model.Response.Enrollment.Submitted() && model.Response.IsValidPayeeInformation(false)); });
                break;
            case "equipmentinformation":
                step.URL = getURL("home/equipmentinformation");
                step.IsValid = ko.computed(function () { return model.Debug() || (!model.Response.Enrollment.Submitted() && model.Response.IsValidEquipmentInformation(false)); });
                break;
            case "incentiveamount":
                step.URL = getURL("home/incentiveamount");
                step.IsValid = ko.computed(function () { return model.Debug() || (!model.Response.Enrollment.Submitted() && model.Response.IsValidIncentiveAmount(false)); });
                break;
            case "survey":
                step.URL = getURL("home/survey");
                step.IsValid = ko.computed(function () { return model.Debug() || (!model.Response.Enrollment.Submitted() && model.Response.IsValidSurvey(false)); });
                break;
            case "uploaddocuments":
                step.URL = getURL("home/uploaddocuments");
                step.IsValid = ko.computed(function () { return model.Debug() || (!model.Response.Enrollment.Submitted() && true); });
                break;
            case "termsconditions":
                step.URL = getURL("home/termsconditions");
                step.IsValid = ko.computed(function () { return model.Debug() || (!model.Response.Enrollment.Submitted() && model.Response.IsValidTermsConditions(false)); });
                break;
            case "review":
                step.URL = getURL("home/review");
                step.IsValid = ko.computed(function () { return model.Debug() || false; });
                break;
            case "confirmation":
                step.URL = getURL("home/confirmation");
                step.IsValid = ko.computed(function () { return model.Debug() || model.Response.Enrollment.Submitted(); });
                break;
            default:
                console.log("Switch failed for: " + step.Name);
                break;
        }
        step.CanJump = ko.computed(function () {
            if (index == steps.length) {
                return model.Debug() || model.Response.Enrollment.Submitted();
            } else if (index == 0) {
                return model.Debug() || !model.Response.Enrollment.Submitted();
            }
            for (var i = 0; i < index; i++) {
                if (!steps[i].hasOwnProperty("IsValid")) continue;
                if (!steps[i].IsValid()) return false;
            }
            return true;
        });
    });
    steps.CurrentStep = ko.observable(-1);
    steps.CurrentStepTitle = ko.computed(function () {
        try
        {
            if (!model.Program.FundsAvailable) {
                return model.Program.Settings.InsufficientFundsTitle;
            } else {
                return steps[steps.CurrentStep()].Title;
            }
        } catch (ex) {
            return "";
        }
    });
    steps.CurrentStep.subscribe(function(index) {
        var step = steps[index];
        // console.log("Going to step " + index + " url: " + step.URL);
        document.location = step.URL;
    });

    steps.Next = {};
    steps.Next.Show = ko.computed(function() {
        return !model.Response.Enrollment.Submitted() && model.Program.ShowNav() && steps.CurrentStep() < steps.length - 2;
    });
    steps.Next.BeforeClick = function(wasSuccessful) { wasSuccessful(true); };
    steps.Next.Click = function() {           
        steps.Next.BeforeClick(function(success) {
            if(!success) return;
            steps.CurrentStep(steps.CurrentStep() + 1);
        });
    };
    
    steps.Previous = {};
    steps.Previous.Show = ko.computed(function () {
        return !model.Response.Enrollment.Submitted() && model.Program.ShowNav() && steps.CurrentStep() > 0;
    });
    steps.Previous.BeforeClick = function (wasSuccessful) { wasSuccessful(true); };
    steps.Previous.Click = function () {
        steps.Previous.BeforeClick(function (success) {
            if(!success) return;
            steps.CurrentStep(steps.CurrentStep() - 1);
        });
    };

    steps.Submit = {};
    steps.Submit.Show = ko.computed(function () {
        var step = steps[steps.CurrentStep()];
        if (step == null) return false;

        return step.Name == "review";
    });
    steps.Submit.Click = function () {
        AJAXLoadData("/Method/SubmitEnrollment/",
            { response: ko.mapping.toJS(model.Response) },
            function (msg) {
                console.log("Successfully submitted enrollment. Number: " + msg.Data.EnrollmentNumber);
                model.Response.Enrollment.EnrollmentNumber(msg.Data.EnrollmentNumber);
                model.Response.Enrollment.EnrollmentDate(msg.Data.Date);
                steps.CurrentStep(steps.CurrentStep() + 1);
            },
            {
                clientExceptionCallBack: function (msg) {
                    console.error("Failed to submit enrollment:");
                    $.each(msg.ClientExceptions, function (index, item) {
                        console.error("Client Exception: " + item.Number + ", Message: " + item.Message + ", Source: " + item.Source + ", Value: " + item.Value);
                    });
                }
            }
        );
    };

    steps.Debug = {};
    steps.Debug.Show = ko.computed(function () { return model.Debug(); });
    steps.Debug.Click = function () {
        var cleanJSModel = function (jsModel) {
            delete jsModel.MailingAddress.IsOutsideUS;
            delete jsModel.Enrollment.PayeeAddress;
            delete jsModel.Enrollment.Submitted;
            return jsModel;
        };

        var jsResponse = cleanJSModel(ko.mapping.toJS(model.Response));

        $("#dlgDebug").find(".obj_txtData").val(JSON.stringify({ response: jsResponse }, null, 2));

        $("#dlgDebug").dialog({
            autoOpen: true,
            resizable: false,
            modal: true,
            width: 800,
            buttons: {
                Ok: function () {
                    $(this).dialog("close");
                },
                Rebind: function () {
                    var newData;
                    try {
                        newData = JSON.parse($("#dlgDebug").find(".obj_txtData").val());
                    } catch (ex) {
                        alert("Failed to parse JSON: " + ex.toString());
                        return;
                    }

                    cleanJSModel(newData);

                    // The mapping is done alphabetically and there are subscriptions
                    // which rely on this.
                    model.Response.Enrollment.ServiceAccountNo(newData.Enrollment.ServiceAccountNo);

                    ko.mapping.fromJS(newData.response, {}, model.Response);
                    $(this).dialog("close");
                }
            }
        });
    }

    steps.StatusCheck = {};
    steps.StatusCheck.Show = ko.computed(function () { return model.Debug(); });
    steps.StatusCheck.Click = function () {
        document.location = "#home/statuscheck?programId=" + AppState().Application.Model.Program.Id;
    };
}

// There are some quirks with the server model so we need to tweak some initial values.
function prepareModel(model) {
    prepareResponseModel(model.Response);
    prepareProgramModel(model.Program);
}
function prepareResponseModel(response) {
    prepareEnrollmentModel(response.Enrollment);

    // Need this because it makes the payee step logic simpler.
    response.ServiceAddress.IsPOBox = false;

    response.PayeeAddress.IsPOBox = false;

    response.MailingAddress.IsPOBox = false;
    response.MailingAddress.Country = "US";

    response.Contractor.ContractorId = "";
    response.Contractor.ContractorName = "";
    response.Contractor.ContractorAddress.IsPOBox = false;
    response.Contractor.ContractorEmployee.Phone = "";
    response.Contractor.ContractorEmployee.Fax = "";
    $.each(response.Contractor.ContractorLicenses, function (index, license) {
        if (license.LicenseNumber == "0") {
            license.LicenseNumber = "";
        }
    });
}
function prepareEnrollmentModel(enrollment) {
    // Do not map this back to the server.
    enrollment.EnrollmentNumber = "";
    enrollment.EnrollmentDate = "";

    enrollment.AccountName = "";
    enrollment.EnrollmentWhoIsApplyingId = "";
    enrollment.ServiceAccountNo = "";

    enrollment.HomePhone = "";
    enrollment.AltPhone = "";
    enrollment.FaxNumber = "";
    enrollment.IsMailAddressSameAsInstall = true;

    enrollment.PayeePhoneNumber = "";

    enrollment.IsAirConditioned = null;
    enrollment.BenchmarkScore = "";
    enrollment.BenchmarkExempt = false;
    enrollment.BuildingTypeId = "";
    enrollment.ProjectTypeId = "";
    enrollment.TotalSqFtLivingSpace = "";
    enrollment.YearBuilt = "";

    enrollment.PaymentToId = "";
    enrollment.LeadSourceId = "";
    enrollment.IsSelfInstalled = false;
}
function prepareProgramModel(program) {
    program.DocumentTypes.unshift({ DocumentTypeId: "", DocumentTypeName: "Select a document type." });
    program.BuildingTypes.unshift({ BuildingTypeId: "", BuildingTypeName: "Select a building type." });
    program.ProjectTypes.unshift({ ProjectTypeId: "", ProjectTypeName: "Select a project type." });
    program.OccupancyStatuses.unshift({ OccupancyStatusId: "", OccupancyStatus: "Select an occupancy status." });
    program.TaxStatusTypes.unshift({ TaxStatusId: "", Description: "Select a tax status." });

    program.ShowNav = ko.observable(true);
    program.ShowHeader = ko.observable(true);
}

// Prepopulation
function prepopulateCustomerInformation(prepopulation, model) {
    // console.log("Running customer prepopulation logic.");

    var enrollment = model.Response.Enrollment;

    if (prepopulation.AccountName != null && isNullOrEmpty(enrollment.AccountName())) {
        enrollment.AccountName(prepopulation.AccountName);
    }

    if (prepopulation.FirstName != null && isNullOrEmpty(enrollment.CustomerFirstName())) {
        enrollment.CustomerFirstName(prepopulation.FirstName);
    }

    if (prepopulation.LastName != null && isNullOrEmpty(enrollment.CustomerLastName())) {
        enrollment.CustomerLastName(prepopulation.LastName);
    }

    if (prepopulation.Email != null && isNullOrEmpty(enrollment.CustomerEmail())) {
        enrollment.CustomerEmail(prepopulation.Email);
    }

    if (prepopulation.HomePhone != null && prepopulation.HomePhone != "0" && isNullOrEmpty(enrollment.HomePhone())) {
        enrollment.HomePhone(prepopulation.HomePhone);
    }

    if (prepopulation.ServiceAddress != null && isNullOrEmpty(model.Response.ServiceAddress.PostalCode())) {
        var serviceAddress = model.Response.ServiceAddress;
        serviceAddress.Street1(prepopulation.ServiceAddress.Street1);
        serviceAddress.Unit(prepopulation.ServiceAddress.Unit);
        serviceAddress.PostalCode(prepopulation.ServiceAddress.PostalCode);
    }

    if (prepopulation.MailingAddress != null && model.Response.Enrollment.IsMailAddressSameAsInstall()) {
        model.Response.Enrollment.IsMailAddressSameAsInstall(false);
        var mailingAddress = model.Response.MailingAddress;
        ko.mapping.fromJS(prepopulation.MailingAddress, {}, mailingAddress);
    }

    if (prepopulation.EnrollmentInformation != null) {
        if (enrollment.IsAirConditioned.IsEnabled()) enrollment.IsAirConditioned(prepopulation.EnrollmentInformation.IsAirConditioned);
        if (enrollment.BuildingTypeId.IsEnabled()) enrollment.BuildingTypeId(prepopulation.EnrollmentInformation.BuildingTypeId);
        if (enrollment.NumberOfEmployees.IsEnabled()) enrollment.NumberOfEmployees(prepopulation.EnrollmentInformation.NumberOfEmployees);
        if (enrollment.TotalSqFtLivingSpace.IsEnabled()) enrollment.TotalSqFtLivingSpace(prepopulation.EnrollmentInformation.TotalSqFtLivingSpace);
        if (enrollment.WeeklyHoursOfOperation.IsEnabled()) enrollment.WeeklyHoursOfOperation(prepopulation.EnrollmentInformation.WeeklyHoursOfOperation);
        if (enrollment.YearBuilt.IsEnabled()) enrollment.YearBuilt(prepopulation.EnrollmentInformation.YearBuilt);
    }
}

// Just some shorthand methods.
function requiredValidation(obs, message, active) {
    if (active == null) active = true;
    if (typeof active == "boolean") {
        var boolActive = active;
        active = function () { return boolActive; };
    }

    if (message == null) message = "This field is required.";
    if (obs == null) {
        console.error("No observable found for required message " + message);
    } else {
        obs.extend({ validation: { required: { message: message, active: active } } });
    }
}
function phoneFormatValidation(obs, message, active) {
    if (active == null) active = true;
    if (typeof active == "boolean") {
        var boolActive = active;
        active = function () { return boolActive; };
    }

    if (message == null) message = "Invalid phone number.";

    obs.extend({ validation: { custom: { message: message, active: active, eval: function (value) { return value == null || value.trim().length == 0 || value.replace(/\D/g, '').length == 10; } } } });
}
function numericFormatValidation(obs, options, active) {
    if (active == null) active = true;
    if (typeof active == "boolean") {
        var boolActive = active;
        active = function () { return boolActive; };
    }

    regex = "^[1-9]\\d*";
    if (options.hasOwnProperty("decimals")) {
        regex += "(\\.\\d{0," + options.decimals + "})?$";
    } else {
        regex += "$";
    }
    regex = new RegExp(regex);
    obs.extend({ validation: { custom: { message: "Invalid number.", active: active, eval: function (value) { return value == null || value.toString().trim().length == 0 || regex.test(value); } } } });

    if (options.hasOwnProperty("minValue") && options.minValue.toString().trim().length > 0) {
        obs.extend({ validation: { custom: { message: "Number must be greater than or equal to " + options.minValue + ".", active: active, eval: function (value) { return !regex.test(value) || value >= options.minValue; } } } });
    }
    if (options.hasOwnProperty("maxValue") && options.maxValue.toString().trim().length > 0) {
        obs.extend({ validation: { custom: { message: "Number must be less than or equal to " + options.maxValue + ".", active: active, eval: function (value) { return !regex.test(value) || value <= options.maxValue; } } } });
    }
}
function configureFieldOption(field, model, fieldName, requiredMessage, alternateEnabled, alternateRequired) {
    if (field == null) return console.error("Field for `" + fieldName + "` was not found.") && false;

    var setting = getFieldOptionSetting(model, fieldName);
    if (setting == null) setting = { IsEnabled: true, IsRequired: false };

    if(alternateEnabled != null) {
        field.IsEnabled = ko.computed(function () {
            return setting.IsEnabled && alternateEnabled();
        });
    } else {
        field.IsEnabled = ko.computed(function () { return setting.IsEnabled; });
    }

    var isRequired = null;
    if (alternateRequired != null) {
        isRequired = ko.computed(function () {
            return alternateRequired() && setting.IsRequired && field.IsEnabled();
        })
    } else {
        isRequired = ko.computed(function () {
            return setting.IsRequired && field.IsEnabled();
        });
    }

    field.extend({
        validation: { required: { message: requiredMessage, active: isRequired } }
    });
}
function getFieldOptionSetting(model, fieldName)
{
    var settings = model.Program.FieldOptionSettings;
    var setting = settings.filter(function(item) { return item.FieldName == fieldName; });
    if(setting.length == 0) {
        console.error("Could not find field option setting `" + fieldName + "`.");
        return null;
    }
    return setting[0];
}
function valToFunction(value) {
    if (typeof value != "function") return function () { return value; };
}
function isNullOrEmpty(value) {
    return value == null || value.length == 0;
}
function parseDate(str) {
    var result = { parsed: false, date: null };

    if (!isNullOrEmpty(str)) {
        try {
            var d = new Date(str)
            result = { parsed: true, date: d };

            // Firefox will parse 1/1/14 to 1914.
            if (result.date.getFullYear() < 1970) {
                result.date.setFullYear(result.date.getFullYear() + 100);
            }
        } catch (ex) {
            console.log(ex);
        }
    }
    return result;
}
function dateDiff(startDate, endDate) {
    var timeDiff = endDate.getTime() - startDate.getTime();
    var day = 1000 * 60 * 60 * 24;
    var dayDiff = Math.floor(timeDiff / day);
    return dayDiff;
}
// Sets up some Knockout extenders for validation
function configureValidationExtenders() {
    ko.extenders.validation = function (target, config) {
        if (!target.Validations) {
            target.Validations = ko.observableArray();
            target.IsAltered = ko.observable(config.hasOwnProperty("validateOnModified") ? config.validateOnModified : true);
            target.IsValidAndNotUnaltered = ko.computed(function () {
                var result = true;
                $.each(target.Validations(), function (index, item) { result = item.IsValid() && result; });
                return result;
            });
            target.IsValid = ko.computed(function () {
                if (!target.IsAltered()) return true;

                return target.IsValidAndNotUnaltered()
            });
            target.ValidationMessages = ko.computed(function () {
                var result = [];
                if (target.IsValid()) return result;

                $.each(target.Validations(), function (index, item) {
                    if (!item.IsValid()) result.push(item.Message());
                });

                return result;
            });
            target.Validate = function () {
                target.IsAltered(true);
            }
            target.subscribe(function (newValue) {
                target.IsAltered(true);
            });
        }

        if (config.required) {
            var requiredFunction = function (value) {
                var result;
                if (!config.required.hasOwnProperty("initialValue")) 
                    result = value != null && value.toString().trim().length != 0
                else 
                    result = value != config.required.initialValue;
                // console.log("Validating for " + config.required.message + ": Value: '" + value + "'. Result = " + result);
                return result;
            };
            var validation = {
                Message: ko.observable(config.required.message),
                IsActive: ko.computed(function () { return config.required.active(); })
            };
            validation.IsValid = ko.computed(function () { return !validation.IsActive() || requiredFunction(target()); });
            target.Validations.push(validation);
        }
        if (config.regEx) {
            var regexFunction = function (value) {
                return value == null || value.trim().length == 0 || config.regEx.pattern.test(value);
            }

            var value = target;
            if (config.regEx.hasOwnProperty("transform")) {
                value = function () { return config.regEx.transform(target()); };
            }

            var validation = {
                Message: ko.observable(config.regEx.message),
                IsActive: ko.computed(function () { return config.regEx.active(); }),
            };
            validation.IsValid = ko.computed(function () { return !validation.IsActive() || regexFunction(value()); });
            target.Validations.push(validation);
        }
        if (config.custom) {
            var validation = {
                Message: ko.observable(config.custom.message),
                IsActive: ko.computed(function () { return config.custom.active(); }),
            };
            if (config.custom.hasOwnProperty("eval")) {
                validation.IsValid = ko.computed(function () { return !validation.IsActive() || config.custom.eval(target()); });
            } else if (config.custom.hasOwnProperty("async")) {
                validation.CallbackResult = ko.observable(false);
                validation.IsValid = ko.computed(function () { return !validation.IsActive() || validation.CallbackResult(); });
                target.subscribe(function (newValue) {
                    validation.CallbackResult(false);
                    config.custom.async(newValue, function (result) { validation.CallbackResult(result); });
                });
            }
            target.Validations.push(validation);
        }
    }
}

// Sets up some Knockout binding handlers
function configureBindingHandlers() {
    ko.bindingHandlers.jqDatePicker = {
        init: function (element, valueAccessor) {
            var options = valueAccessor() || {};

            var datePickerOptions = {
                showOn: 'button',
                buttonText: 'Show Date',
                dateFormat: 'mm/dd/yy',
                constrainInput: true,
                onSelect: function (dateStr) {
                    options.value(dateStr);
                }
            };

            if (options.maxDate) datePickerOptions.maxDate = options.maxDate();
            if (options.minDate) datePickerOptions.minDate = options.minDate();

            $(element).datepicker(datePickerOptions).next('button').text('').button({
                icons: {
                    primary: 'ui-icon-calendar'
                },
                text: false
            });
        }
    }
}

// Auto populates the city and state upon zip code entry.
function configureZipCodeLookup(obsZipCode, obsCity, obsState) {
    var isValidZipCode = function(value, domesticOnly) {
        return /^\d{5}$/.test(value) || (!domesticOnly && /^\d{5}-\d{4}$/.test(value));
    }
    obsZipCode.SuspendLookup = ko.observable(false);
    obsZipCode.subscribe(function (newValue) {
        if (obsZipCode.SuspendLookup() || !isValidZipCode(newValue, true)) return;
        obsCity("");
        obsState("");

        AJAXLoadData("/Method/ZipCodeLookup/", { zip: newValue }, function (msg) {
            obsCity(msg.Data.City);
            obsState(msg.Data.State);
        });
    });
}

// I apologize if the following methods overcomplicate what should be a simple behavior. I was learning KO when I wrote these.
// Questionnaire validations were a little bit tricky.
function configureQuestionnaireValidation(questions, results) {
    if (questions == null || results == null) return;

    createAnswerResponseResultObservable(questions, results());
    createQuestionnaireValidationObservables(questions, results());

    results.Validate = function (showUnanswered) {
        if (showUnanswered == null) showUnanswered = true;

        var isValid = true;

        $.each(results(), function (index, result) {
            if (showUnanswered) {
                result.ShowUnansweredError(true);
                isValid = isValid && result.IsValid();
            } else {
                isValid = isValid && result.IsValidAndNotUnanswered();
            }
        });

        return isValid;
    }
}
// These are helpful for simplifying the questionnaire validation process
function createQuestionnaireValidationObservables(questions, results) {
    $.each(results, function (index, result) {
        result.Answer = ko.computed(function () {
            var question = questions.filter(function (item) { return item.QuestionId == result.QuestionnaireQuestionId(); });
            if (question.length == 0) return null;
            var answer = question[0].Answers.filter(function (item) { return item.AnswerId == result.QuestionnaireAnswerId(); });
            if (answer.length == 0) return null;
            return answer[0];
        });
        result.ShowUnansweredError = ko.observable(false);
        result.InvalidMessage = ko.computed(function () {
            var ret = result.Answer() != null
                ? !result.Answer().IsValidAnswer
                    ? result.Answer().InvalidAnswerText
                    : null
                : "Please select an answer to this question.";
            return ret;
        });
        result.IsAnswered = ko.computed(function () {
            return result.Answer != null;
        });
        result.IsValidAndNotUnanswered = ko.computed(function () {
            var answer = result.Answer();
            return answer != null && answer.IsValidAnswer;
        });
        result.IsValid = ko.computed(function () {
            var answer = result.Answer();
            if ((answer == null && !result.ShowUnansweredError())) return true;
            return result.IsValidAndNotUnanswered();
        });
    });

    $.each(questions, function (index, question) {
        question.Result = ko.computed(function () {
            var result = results.filter(function (item) { return item.QuestionnaireQuestionId() == question.QuestionId; });
            if (result.length == 0) return null;
            return result[0];
        });
        question.AnswerIsValid = ko.computed({
            read: function () {
                return question.Result().IsValid();
            }
        });
        question.IsAnswered = ko.computed({
            read: function () {
                return question.Result().IsAnswered();
            }
        });
        question.InvalidMessage = ko.computed({
            read: function () {
                return question.Result().InvalidMessage();
            }
        });
    });
}
// Creates a computed observable for each possible answer to the appropriate result.
function createAnswerResponseResultObservable(questions, results) {
    $.each(questions, function (index, question) {
        $.each(question.Answers, function (index, answer) {
            var result = results.filter(function (item) {
                return item.QuestionnaireQuestionId() == answer.QuestionId
            });
            result = result[0];
            answer.CheckedValue = ko.computed({
                read: function () { return result.QuestionnaireAnswerId(); },
                write: function (value) { return result.QuestionnaireAnswerId(value); }
            });
        });
    });
}
