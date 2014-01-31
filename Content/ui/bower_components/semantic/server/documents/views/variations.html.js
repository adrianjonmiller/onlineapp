(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["variations.html"] = function(__obj) {
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
      
        __out.push('  ---\nlayout      : \'default\'\ncss         : \'guide\'\n\ntitle       : \'Variations\'\ndescription : \'Variations are stackable, symbiotic changes to an elements appearance\'\ntype        : \'UI Introduction\'\n---\n<script src="/javascript/intro.js"></script>\n\n');
      
        __out.push(this.partial('header'));
      
        __out.push('\n<div class="main container">\n  <div class="peek">\n    <div class="ui vertical pointing secondary menu">\n      <a class="active item">Overview</a>\n      <a class="item">Usage</a>\n    </div>\n  </div>\n\n  <h2 class="ui dividing header">Overview</h2>\n\n  <p>A <b>variation</b> alters the design of an element but is not mutually exclusive. Variations can be stacked together, or be used along with altering an element\'s type.</p>\n\n  <p>For example, having wide menus that take up the full width of its parent may sometimes be overwhelming. You can use the compact variation of a menu to alter its format to only take up the necessary space.</p>\n\n  <div class="code" data-type="html" data-label="true">\n    <div class="ui compact tiered menu">\n      ...\n    </div>\n  </div>\n  <div class="ui compact tiered menu">\n    <div class="menu">\n      <div class="active item">\n        <i class="home icon"></i>\n        Home\n      </div>\n      <a class="item">\n        <i class="mail icon"></i>\n        Mail\n        <div class="ui label">22</div>\n      </a>\n    </div>\n    <div class="sub menu">\n      <a class="active item">Activity</a>\n      <a class="item">Profile</a>\n    </div>\n  </div>\n\n  <h3 class="ui header">Context sensitive</h3>\n\n  <p>In Semantic, variations maintain context based on the element they modify, but keep the same vocabulary between elements. Just like how in English, the adjective \'big\' may describe a different scale for a big planet versus a big insect.</p>\n\n  <p>For example an icon might need to modify it\'s vertical alignment when it is larger than the surrounding text, while a form does not.</p>\n\n  <p>All definitions in Semantic <b>are based around em and rem</b> so resizing an element usually is as simple as altering the base font size of the element, padding, margins, and other properties will adjust automatically.</p>\n\n  <div class="code" data-type="css" data-label="true">\n    /* a large form is not quite as large as a large icon */\n    .ui.large.form {\n      font-size: 1.125em;\n    }\n    /* icons need to adjust vertical alignment as they grow past 1em */\n    i.large.icon {\n      font-size: 1.5em;\n      vertical-align: middle;\n    }\n  </div>\n\n\n  <h2 class="ui dividing header">Using Variations Together</h2>\n  <p>Another variation of a menu is an <b>inverted menu</b>. This alters the color contrast to appear inverted for darker backgrounds. Some variations may also mutate when used together. Lets try adding the class name <code>red</code> as well.</p>\n  <p>Variations are not mutually exclusive and can be used together harmoniously, so we can use these together to create an <code>inverted red tiered menu</code></p>\n\n  <div class="code" data-type="html" data-label="true">\n    <div class="ui red inverted tiered menu">\n      ...\n    </div>\n  </div>\n  <div class="ui red inverted tiered menu">\n    <div class="menu">\n      <div class="active item">\n        <i class="home icon"></i>\n        Home\n      </div>\n      <a class="item">\n        <i class="mail icon"></i>\n        Mail\n        <div class="ui label">22</div>\n      </a>\n    </div>\n    <div class="sub menu">\n      <a class="active item">Activity</a>\n      <a class="item">Profile</a>\n    </div>\n  </div>\n  <div class="ui divider"></div>\n\n  <h3 class="ui header">Intersecting Variations</h3>\n  <p>The definition for the variation red contains css specifically for describing the intersection of both <code>red</code> and <code>inverted</code>. For example, lets see the same menu with only the red variation.</p>\n\n  <div class="code" data-type="html" data-label="true">\n    <div class="ui red tiered menu">\n      ...\n    </div>\n  </div>\n  <div class="ui red tiered menu">\n    <div class="menu">\n      <div class="active item">\n        <i class="home icon"></i>\n        Home\n      </div>\n      <a class="item">\n        <i class="mail icon"></i>\n        Mail\n        <div class="ui label">22</div>\n      </a>\n    </div>\n    <div class="sub menu">\n      <a class="active item">Activity</a>\n      <a class="item">Profile</a>\n    </div>\n  </div>\n\n\n  <div class="ui divider"></div>\n  <a class="ui large right labeled teal icon button" href="/element.html">\n    Next: View Elements\n    <i class="right arrow icon"></i>\n  </a>\n<!--\n\n</div>\n');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
