﻿/* 
    http://jsfiddle.net/YCTDQ/

    Some changes were made:
    - Altered code to support <jQuery 1.9
      - .data
      - ._renderItemData -> ._renderItem
    - Allowed for custom values.

    Combobox widget 
    - taken from http://jqueryui.com/autocomplete/#combobox
    - added support for
      - default option
      - combo uses width of original select
      - autoFocus
    - removed
      - tooltips
      - setting value to "" if invalid (instead sets to default)


*/
(function ($) {
    var input;

    $.widget("ui.combobox", {
        setText: function (text) {
            input.val(text);
        },
        _create: function () {
            var that = this,
              wasOpen = false,
              select = this.element.hide(),
              selected = select.children(":selected"),
              defaultValue = selected.text() || "",
              wrapper = this.wrapper = $("<span>")
                .addClass("ui-combobox")
                .insertAfter(select);

            function removeIfInvalid(element) {
                var value = $(element).val(),
                  matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(value) + "$", "i"),
                  valid = false;
                select.children("option").each(function () {
                    if ($(this).text().match(matcher)) {
                        this.selected = valid = true;
                        return false;
                    }
                });

                if (!valid) {
                    // remove invalid value, as it didn't match anything
                    $(element).val(defaultValue);
                    select.val(defaultValue);
                    input.data("ui-autocomplete").term = "";
                }
            }

            input = $("<input>")
              .appendTo(wrapper)
              .val(defaultValue)
              .attr("title", "")
              .addClass("ui-combobox-input")
              .width(select.width())
              .autocomplete({
                  delay: 0,
                  minLength: 0,
                  autoFocus: true,
                  source: function (request, response) {
                      var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
                      response(select.children("option").map(function (val, index) {
                          var text = $(this).text();
                          var value = $(this).val();
                          if (this.value && (!request.term || matcher.test(text)))
                              return {
                                  index: index,
                                  label: text.replace(
                                    new RegExp(
                                      "(?![^&;]+;)(?!<[^<>]*)(" +
                                      $.ui.autocomplete.escapeRegex(request.term) +
                                      ")(?![^<>]*>)(?![^&;]+;)", "gi"
                                    ), "<strong>$1</strong>"),
                                  value: text,
                                  itemValue: value,
                                  option: this
                              };
                      }));
                  },
                  select: function (event, ui) {
                      ui.item.option.selected = true;
                      that._trigger("selected", event, ui.item);
                  },
                  change: function (event, ui) {
                      if (!ui.item) {
                          // We want to allow custom entries.
                          // removeIfInvalid(this);
                          that._trigger("selected", event, { value: input.val(), itemValue: null });
                      }
                  }
              })
              .addClass("ui-widget ui-widget-content ui-corner-left");

            input.data("autocomplete")._renderItem = function (ul, item) {
                return $("<li>")
                  .data("item.autocomplete", item)
                  .append("<a>" + item.label + "</a>")
                  .appendTo(ul);
            };

            $("<a>")
              .attr("tabIndex", -1)
              .appendTo(wrapper)
              .button({
                  icons: {
                      primary: "ui-icon-triangle-1-s"
                  },
                  text: false
              })
              .removeClass("ui-corner-all")
              .addClass("ui-corner-right ui-combobox-toggle")
              .mousedown(function () {
                  wasOpen = input.autocomplete("widget").is(":visible");
              })
              .click(function () {
                  input.focus();

                  // close if already visible
                  if (wasOpen) {
                      return;
                  }

                  // pass empty string as value to search for, displaying all results
                  input.autocomplete("search", "");
              });
        },

        _destroy: function () {
            this.wrapper.remove();
            this.element.show();
        }
    });
})(jQuery);