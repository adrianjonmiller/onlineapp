(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["types.html"] = function(__obj) {
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
      
        __out.push('---\nlayout      : \'default\'\ncss         : \'guide\'\n\ntitle       : \'Types\'\ndescription : \'A type is an mutually exclusive version of an element\'\ntype        : \'UI Introduction\'\n---\n<script src="/javascript/intro.js"></script>\n\n');
      
        __out.push(this.partial('header'));
      
        __out.push('\n<div class="main container">\n  <div class="peek">\n    <div class="ui vertical pointing secondary menu">\n      <a class="active item">Overview</a>\n    </div>\n  </div>\n\n  <h2 class="ui dividing header">Overview</h2>\n\n  <p>A ui definition in Semantic usually contains a list of mutually exclusive variations on an element design. A type is designated by an additional class name on a UI element</p>\n\n  <div class="code" data-type="html" data-preview="true" data-title="Types of UI Button">\n    <div class="ui labeled icon button">\n      Download <i class="download icon"></i>\n    </div>\n    <div class="ui icon button">\n      <i class="download icon"></i>\n    </div>\n    <div class="ui button">\n      Download\n    </div>\n    <div class="ui facebook button">\n      <i class="facebook icon"></i>\n      Facebook\n    </div>\n  </div>\n\n  <h3 class="ui header">Content</h3>\n  <p>Types may require different html structures to work correctly. For example, an icon menu might expect different content like icons glyphs instead of text to be formatted correctly</p>\n\n  <div class="code" data-type="html" data-title="Icon Menu Type" data-preview="true">\n    <div class="ui icon menu">\n      <a class="item">\n        <i class="mail icon"></i>\n      </a>\n      <a class="item">\n        <i class="lab icon"></i>\n      </a>\n      <a class="item">\n        <i class="star icon"></i>\n      </a>\n    </div>\n  </div>\n\n  <h3 class="ui header">HTML Differences</h3>\n  <p>Types may also each require slightly different html. For example, a tiered menu needs html specified for a sub menu to display itself correctly</p>\n\n  <div class="code" data-type="html" data-title="Tiered Menu Type" data-preview="true">\n    <div class="ui tiered menu">\n      <div class="menu">\n        <div class="active item">\n          <i class="home icon"></i>\n          Home\n        </div>\n        <a class="item">\n          <i class="mail icon"></i>\n          Mail\n          <span class="ui label">22</span>\n        </a>\n      </div>\n      <div class="sub menu">\n        <div class="active item">Activity</div>\n        <a class="item">Profile</a>\n      </div>\n    </div>\n  </div>\n  <div class="ui divider"></div>\n  <a class="ui large right labeled teal icon button" href="/introduction/variations.html">\n    Next: UI Variations\n    <i class="right arrow icon"></i>\n  </a>\n\n</div>');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
