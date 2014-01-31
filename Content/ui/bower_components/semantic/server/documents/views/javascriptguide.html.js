(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["javascriptguide.html"] = function(__obj) {
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
      
        __out.push('  ---\nlayout      : \'default\'\ncss         : \'javascript\'\n\ntitle       : \'Javascript\'\ndescription : \'Suggestions for Javascript development practices\'\ntype        : \'UI Guide\'\n---\n\n');
      
        __out.push(this.partial('header'));
      
        __out.push('\n<div class="main container">\n\n  <div class="peek">\n    <div class="ui vertical pointing secondary menu">\n      <a class="active item">General</a>\n      <a class="item">Optional</a>\n    </div>\n  </div>\n\n  <h2 class="ui dividing header">General</h2>\n\n  <p>Airbnb has compiled a wonderful list for a <em>mostly reasonable</em> approach to javascript. This is an excellent starting point for community consensus on javascript standards.</p>\n\n  <p><a href="https://github.com/airbnb/javascript">https://github.com/airbnb/javascript</a></p>\n\n  <h2 class="ui dividing header">Optional Considerations</h2>\n\n  <h3 class="ui header">Variable Alignment</h4>\n  <p>Matching equal signs increases code legibility but may take more time. There is a great plugin for Sublime Text called <a href="http://wbond.net/sublime_packages/alignment">Alignment</a> which can automatically manage this for you.</p>\n  <div class="code" data-type="javascript">\n    var\n      dog      = \'Poodle\',\n      cat      = \'Cat\',\n      elephant = \'A long name\'\n    ;\n  </div>\n\n  <h3 class="ui header">Chaining</h4>\n  <p>Indent chained code to show changes in the original selector. Use the ending semicolon as you would a closing bracket to show the original indentation level of the rule</p>\n  <div class="code" data-type="javascript">\n    $element\n      .find(\'.one\')\n        .doSomething()\n        .end()\n      .find(\'.two\')\n        .doSomethingElse()\n    ;\n  </div>\n\n  <h3 class="ui header">Verbs</h4>\n  <p>When creating javascript modules consider using verbs to show behavior. This may be more intuitive than allowing a user to directly set properties or manage your internal namespace.</p>\n  <div class="code" data-type="javascript">\n\n    // this might require some more times with docs\n    $element\n      .widget(\'states.select.set\')\n    ;\n\n    // reduce complexity to api\n    $(element)\n      .widget(\'activate\', true)\n    ;\n  </div>\n\n  <h3 class="ui header">Default Values</h4>\n  <p>Using an OR value allows you to set defaults for any falsey value</p>\n  <div class="code" data-type="javascript">\n    (function(someBoolean, name) {\n      var\n        // this will have issues (false will evaluate same as undefined)\n        someBoolean = someBoolean || true,\n        // default name will be sally\n        name        = name        || \'Sally\'\n      ;\n      if(someBoolean) {\n        alert(name);\n      }\n    }());\n  </div>\n\n  <h3 class="ui header">Grouping Variables</h4>\n  <div class="code" data-type="javascript">\n    // ok\n    var\n      offsetX = 2,\n      offsetY = 5\n    ;\n    // nice\n    var\n      offset = {\n        x: 2,\n        y: 5\n      }\n    ;\n  </div>\n\n</div>');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
