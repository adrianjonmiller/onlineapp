(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["overview.html"] = function(__obj) {
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
      
        __out.push('  ---\nlayout      : \'default\'\ncss         : \'guide\'\n\ntitle       : \'Overview\'\ndescription : \'An introduction to Semantic style coding\'\ntype        : \'UI Introduction\'\n---\n<script src="/javascript/intro.js"></script>\n<script>\n$(document)\n  .ready(function() {\n    $(\'.demo.menu .item\')\n      .tab()\n    ;\n  })\n;\n</script>\n\n');
      
        __out.push(this.partial('header'));
      
        __out.push('\n<div class="main container">\n  <div class="peek">\n    <div class="ui vertical pointing secondary menu">\n      <a class="active item">Interfacing</a>\n      <a class="item">APIs</a>\n    </div>\n  </div>\n  <h2 class="ui dividing header">Interfacing Carefully</h2>\n\n  <p>UI definitions in Semantic are given the class name <code>ui</code>. This is to help tell the difference between ui elements and parts of the definition of an element. This means any element with the class name UI has a corresponding UI definition.\n\n  <p>For example a menu may have menu items inside of it. These items are contained as part of the menu definition but do not receive the class name <code>ui</code> because they are part of a UI menu collection.</p>\n\n  <div class="code" data-type="html" data-title="A Simple Menu" data-preview="true">\n    <div class="ui menu">\n      <a class="item">Home</a>\n      <a class="item">Inbox</a>\n    </div>\n  </div>\n\n  <h3 class="ui header">Changing an Element</h3>\n\n  <p>Class names in Semantic always use single english words. If a class name is an adjective it is either a <a href="/introduction/types.html">type</a> of element or <a href="/introduction/variations.html">variation</a> of an element. <b>CSS definitions always define adjectives in the context of a noun</b>. In this way class names cannot pollute the namespace.</p>\n\n  <div class="code" data-type="html" data-title="A Compact Menu Variation" data-preview="true">\n    <div class="ui compact menu">\n      <a class="item">Home</a>\n      <a class="item">Inbox</a>\n    </div>\n  </div>\n  <div class="ui divider"></div>\n\n  <h3 class="ui header">Combining elements</h3>\n  <p>All UI definitions in semantic are stand-alone, and do not require other components to function. However, components can choose to have optional couplings with other components.</p>\n\n  <p>For example you might want to include a badge inside a menu. A label inside of a menu will automatically function as a badge.</p>\n\n  <div class="code" data-type="html" data-title="Using a UI Label inside a UI Menu" data-preview="true">\n    <div class="ui compact menu">\n      <a class="item">Home</a>\n      <a class="item">\n        Inbox\n        <div class="ui label">22</div>\n      </a>\n    </div>\n  </div>\n\n  <h2 class="ui dividing header">Semantic APIs</h2>\n\n  <p>Modules define a public API using verbs and simple phrases. When methods are invoked internally those phrases are matched to internal methods automatically.</p>\n\n    <div class="code" data-type="html" data-label="true" data-preview="true">\n    <div class="ui pointing secondary demo menu">\n      <a class="active red item" data-tab="first">First</a>\n      <a class="blue item" data-tab="second">Second</a>\n      <a class="green item" data-tab="third">Third</a>\n    </div>\n    <div class="ui active tab segment" data-tab="first">First</div>\n    <div class="ui tab segment" data-tab="second">Second</div>\n    <div class="ui tab segment" data-tab="third">Third</div>\n    </div>\n        <h3 class="ui header">Opening a new tab with a behavior</h3>\n        <p>Modules have simple behaviors for triggering common actions</p>\n        <div class="code" data-demo="true">\n    $(\'.demo.menu .item\')\n      .tab(\'change tab\', \'second\')\n    ;\n        </div>\n\n        <h3 class="ui header">Opening a new tab with multiple behaviors</h3>\n        <p>Any internal behavior is accessible as well</p>\n        <div class="code" data-demo="true">\n    $(\'.demo.menu .item\')\n      .tab(\'deactivate all\')\n      .tab(\'activate tab\', \'third\')\n      .tab(\'activate navigation\', \'third\')\n    ;\n        </div>\n      <h3 class="ui header">Turning on HTML5 State</h3>\n      <p>Modules can be re-initialized at any time with different settings</p>\n        <div class="code" data-demo="true">\n    $(\'.demo.menu .item\')\n      .tab({\n        history : true,\n        path    : \'/introduction/getting-started.html\'\n      })\n    ;\n        </div>\n\n  <div class="ui divider"></div>\n\n  <a class="ui large right labeled teal icon button" href="/introduction/types.html">\n    Next: UI Types\n    <i class="right arrow icon"></i>\n  </a>\n\n</div>');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
