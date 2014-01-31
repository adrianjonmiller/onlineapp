function AppState() {
	var dataName = __GetAppStateVariableName();
	var state = $.data(document, dataName);
	if(!state) {
	    state = {
	        pushMessage: function (msg) { this.messages.push(msg); },
	        messages: [],
	        urlCache: { count: 0, urls: [], cache: [] },
	        routes: {
	            base: "./Content/ui/",
	            defaultFolder: "home/",
	            defaultPage: "default",
	            masterPage: "_master",
	            extension: ".htm",
	            language: {
	                _current: "",
	                getFolder: function () {
	                    return (state.routes.language._current == "" ? 
                            "en-us" : state.routes.language._current) + "/"; 
	                },
	                val: function (language) {
	                    if (!language) return state.routes.language._current;
	                    state.routes.language._current = language;
	                    return state.routes.language._current;
	                }
	            },
	            getLanguageBase: function () {
	                return state.routes.base + state.routes.language.getFolder(); 
	            },
	            loading: {
                    _beforeListeners: [],
                    _stack: [],
                    _halted: false,
                    before: function (func) {
                        state.routes.loading._beforeListeners.push(func);
                    },
                    onBefore: function () {
                        $.each(state.routes.loading._beforeListeners, function (index, item) {
                            item();
                        });
                    },
	                halt: function () {
	                    state.routes.loading._halted = true;
	                    state.routes.loading._stack = [];
	                },
	                clear: function () {
	                    state.routes.loading._stack = [];
	                },
	                resume: function () {
	                    if (!state.routes.loading._halted) return;
	                    state.routes.loading._halted = false;
	                    var stack = state.routes.loading._stack.reverse();
	                    state.routes.loading._stack = null;
	                    while (stack.length > 0) {
	                        var route = stack.pop();
	                        route.execute();
	                    }
	                },
	                push: function (route) {
	                    if (state.routes.loading._halted) {
	                        state.routes.loading._stack.push(route);
	                    }
	                    else {
	                        route.execute();
	                    }
	                }
	            }
	        },
	        workspaces: { root: "__workspace", separator: "\\.", loaded: [] }
	    };
	    $.data(document, dataName, state);
	}
	return state;
}

function AJAXLoadHTML(url, data, successCallBack, config) {
    if (!config) config = {};

    var processError = function (msg) {
        if (config.errorCallBack)
            config.errorCallBack(msg);
        else
            AppState().pushMessage("AJAXLoadHTML failed for url: " + url);
    };

    var cache = __URLCache(url);
    if (!cache) {
        $.ajax({
            type: "GET",
            data: data,
            url: url,
            cache: false,
            contentType: "application/json; charset=utf-8",
            dataType: "html",
            success: function (msg, status, xhr) {
                var responseType = xhr.getResponseHeader("content-type") || "";
                if (responseType.toLowerCase().indexOf("html") > -1) {
                    __URLCache(url, { success: true, msg: msg });
                    if (successCallBack) successCallBack(msg);
                } else {
                    if (config.clientExceptionCallBack)
                        config.clientExceptionCallBack($.parseJSON(msg))
                    else
                        ProcessMessage($.parseJSON(msg));
                }
            },
            error: function (msg) {
                __URLCache(url, { success: false, msg: msg });
                processError(msg);
            }
        });
    } else if (!cache.success) {
        processError(cache.msg);
    } else {
        if (successCallBack) successCallBack(cache.msg);
    }
}

function AJAXLoadData(url, data, successCallBack, config) {
    url = "." + url;

    $.ajax({
        type: "POST",
        data: JSON.stringify(data, null, 2),
        url: url,
        traditional: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            ProcessMessage(msg, successCallBack, config);
        },
        error: function (msg) {
            AppState().pushMessage("AJAXLoadData failed for url: " + url);
        }
    });
}

function ProcessMessage(msg, successCallBack, config) {
    if (msg.ServerExceptions.length > 0) {
        $.each(msg.ServerExceptions, function (index, item) {
            alert("Server encountered an error: " + item.Message);
        });
    } else if (msg.ClientExceptions.length > 0) {
        if (!config.clientExceptionCallBack)
            $.each(msg.ClientExceptions, function (index, item) {
                alert(item.Number + ": " + item.Source + " caused error " + item.Message + ", value: " + item.Value);
            });
        else
            config.clientExceptionCallBack(msg);
    } else if (successCallBack) {
        successCallBack(msg);
    }
}