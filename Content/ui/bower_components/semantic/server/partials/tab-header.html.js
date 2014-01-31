(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["tab-header.html"] = function(__obj) {
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
      
        __out.push('<div class="tab segment">\n  <div class="container">\n    <div class="introduction">\n      <h1 class="ui dividing header">\n        ');
      
        __out.push(__sanitize(this.document.title));
      
        __out.push('\n        ');
      
        if (this.document.status != null) {
          __out.push('<span class="ui label">');
          __out.push(__sanitize(this.document.status));
          __out.push('</span>');
        }
      
        __out.push('\n      </h1>\n      <p>');
      
        __out.push(__sanitize(this.document.description));
      
        __out.push('</p>\n      ');
      
        if (this.document.type === 'UI Element' || this.document.type === 'UI View' || this.document.type === 'UI Collection' || this.document.type === 'UI Module') {
          __out.push('\n      <div class="ui basic labeled icon toggle overview button">\n        Definition\n        <i class="book icon"></i>\n      </div>\n      ');
        }
      
        __out.push('\n    </div>\n    <div class="advertisement">\n      <div id="carbonads-container"><div class="carbonad"><div id="azcarbon"></div><script type="text/javascript">var z = document.createElement("script"); z.type = "text/javascript"; z.async = true; z.src = "http://engine.carbonads.com/z/51619/azcarbon_2_1_0_HORIZ"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(z, s);</script></div></div>\n    </div>\n  </div>\n</div>');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
