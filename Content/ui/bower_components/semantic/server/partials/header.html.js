(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["header.html"] = function(__obj) {
    if (!__obj) __obj = {};
    var __out = [], __capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return __safe(result);
    }, __sanitize = function(value) {
      if (value && value.ecoSafe) {
        return value;
      } else if (typeof value !== 'undefined' && value != null) {
        return __escape(value);
      } else {
        return '';
      }
    }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
    __safe = __obj.safe = function(value) {
      if (value && value.ecoSafe) {
        return value;
      } else {
        if (!(typeof value !== 'undefined' && value != null)) value = '';
        var result = new String(value);
        result.ecoSafe = true;
        return result;
      }
    };
    if (!__escape) {
      __escape = __obj.escape = function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      };
    }
    (function() {
      (function() {
        var colors, id, index, name, numbers, tabCount, _ref, _ref1, _ref2,
          __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
      
        if (this.tabs === 'module') {
          this.tabs = {
            definition: 'Definition',
            examples: 'Examples',
            usage: 'Usage',
            settings: 'Settings'
          };
        }
      
        __out.push('\n\n<div class="');
      
        if (this.tabs != null) {
          __out.push('tab ');
        }
      
        __out.push('segment">\n  <div class="container">\n    <div class="introduction">\n\n      <h1 class="ui dividing header">\n        ');
      
        __out.push(__sanitize(this.document.title));
      
        __out.push('\n        ');
      
        if (this.document.status != null) {
          __out.push('<span class="ui label">');
          __out.push(__sanitize(this.document.status));
          __out.push('</span>');
        }
      
        __out.push('\n      </h1>\n\n      <p>');
      
        __out.push(__sanitize(this.document.description));
      
        __out.push('</p>\n      ');
      
        if (this.document.type === 'UI Element' || this.document.type === 'UI View' || this.document.type === 'UI Collection') {
          __out.push('\n      <div class="ui basic labeled icon toggle overview button">\n        Definition Mode\n        <i class="book icon"></i>\n      </div>\n      ');
        }
      
        __out.push('\n      ');
      
        if (this.document.type === 'UI Module') {
          __out.push('\n      <a href="/module.html" class="ui basic labeled icon button">\n        Learn about Modules\n        <i class="help icon"></i>\n      </a>\n      ');
        }
      
        __out.push('\n    </div>\n    <div class="advertisement">\n      ');
      
        if (__indexOf.call(this.getEnvironments(), 'development') < 0) {
          __out.push('\n      <div id="carbonads-container"><div class="carbonad"><div id="azcarbon"></div><script type="text/javascript">var z = document.createElement("script"); z.type = "text/javascript"; z.async = true; z.src = "http://engine.carbonads.com/z/51619/azcarbon_2_1_0_HORIZ"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(z, s);</script></div></div>\n      ');
        }
      
        __out.push('\n    </div>\n    ');
      
        if (this.tabs != null) {
          __out.push('\n    ');
          index = 0;
          __out.push('\n    ');
          tabCount = 0;
          __out.push('\n    ');
          numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];
          __out.push('\n    ');
          colors = ['red', 'teal', 'blue', 'purple', 'black', 'orange'];
          __out.push('\n      ');
          _ref = this.tabs;
          for (id in _ref) {
            name = _ref[id];
            __out.push('\n        ');
            tabCount++;
            __out.push('\n      ');
          }
          __out.push('\n      <div class="');
          __out.push(__sanitize(numbers[tabCount]));
          __out.push(' item tabular ui menu">\n        ');
          _ref1 = this.tabs;
          for (id in _ref1) {
            name = _ref1[id];
            __out.push('\n          <a class="');
            __out.push(__sanitize(index === 0 ? 'active ' : void 0));
            __out.push('item" data-tab="');
            __out.push(__sanitize(id));
            __out.push('">');
            __out.push(__sanitize(name));
            __out.push('</a>\n          ');
            index++;
            __out.push('\n        ');
          }
          __out.push('\n      </div>\n      ');
          index = 0;
          __out.push('\n      <div class="fluid vertical ui menu">\n        ');
          _ref2 = this.tabs;
          for (id in _ref2) {
            name = _ref2[id];
            __out.push('\n          <a class="');
            __out.push(__sanitize(index === 0 ? 'active ' : void 0));
            __out.push('item" data-tab="');
            __out.push(__sanitize(id));
            __out.push('">');
            __out.push(__sanitize(name));
            __out.push('</a>\n          ');
            index++;
            __out.push('\n        ');
          }
          __out.push('\n      </div>\n    ');
        }
      
        __out.push('\n  </div>\n</div>');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
