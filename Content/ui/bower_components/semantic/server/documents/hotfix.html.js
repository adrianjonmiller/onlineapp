(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["hotfix.html"] = function(__obj) {
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
      
        __out.push('---\nlayout : \'default\'\ncss    : \'hotfix\'\n\ntitle  : \'Test Page\'\ntype   : \'Library\'\n---\n');
      
        __out.push(this.partial('header'));
      
        __out.push('\n<script src="/build/uncompressed/modules/behavior/form.js"></script>\n\n<script type=\'text/javascript\'>\n$(document).ready(function(){\n  $(\'.ui.form.one\')\n    .form({\n      name: {\n        identifier  : \'name\',\n        rules: [\n          {\n            type   : \'empty\',\n            prompt : \'Please enter your full name\'\n          }\n        ]\n      },\n      email: {\n        identifier  : \'email\',\n        rules: [\n          {\n            type   : \'empty\',\n            prompt : \'Please enter your email\'\n          },\n          {\n              type : \'email\',\n              prompt : \'please enter a proper email\'\n          }\n        ]\n      },\n      username: {\n        identifier : \'username\',\n        rules: [\n          {\n            type   : \'empty\',\n            prompt : \'Please enter a username\'\n          }\n        ]\n      },\n      password: {\n        identifier : \'password\',\n        rules: [\n          {\n            type   : \'empty\',\n            prompt : \'Please enter a password\'\n          },\n          {\n            type   : \'length[6]\',\n            prompt : \'Your password must be at least 6 characters\'\n          }\n        ]\n      },\n      terms: {\n        identifier : \'terms1\',\n        rules: [\n          {\n            type   : \'checked\',\n            prompt : \'You must agree to the terms and conditions\'\n          }\n        ]\n      }\n    }, {\n    inline : true,\n    on     : \'blur\'\n  });\n\n  $(\'form\').form(\'add prompt\', \'username\', \'that username is already taken\');\n\n});\n\n</script>\n\n<div class="main container">\n    <form class="ui form one" method="post" action="/test">\n        <div class="field">\n            <input type="text" name="name" placeholder="Name" />\n        </div>\n        <div class="field">\n            <input type="text" name="email" placeholder="E-mail" />\n        </div>\n        <div class="field">\n            <input type="text" name="username" placeholder="username" />\n        </div>\n        <div class="field">\n            <input type="password" name="password"/>\n        </div>\n        <div class="inline field">\n            <div class="ui checkbox">\n              <input type="checkbox" id="terms1" name="terms1"/>\n                <label for="terms1">Accept terms</label>\n            </div>\n        </div>\n        <div class="ui submit button">Submit</div>\n    </form>\n</div>');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
