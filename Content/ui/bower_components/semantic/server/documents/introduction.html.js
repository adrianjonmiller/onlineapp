(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["introduction.html"] = function(__obj) {
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
      
        __out.push('  ---\nlayout      : \'default\'\ncss         : \'guide\'\ntitle       : "What\'s Different"\ndescription : \'Separating Semantic from the pack\'\ntype        : \'UI Introduction\'\n---\n<script src="/javascript/intro.js"></script>\n\n');
      
        __out.push(this.partial('header'));
      
        __out.push('\n\n<div class="main container">\n  <div class="peek">\n    <div class="ui vertical pointing secondary menu">\n      <a class="active item">Philosophy</a>\n    </div>\n  </div>\n\n    <h2 class="ui header">\n      Build Responsive Layouts Easier\n      <div class="sub header">Designed Completely with EM</div>\n    </h2>\n    <p>Every component is defined using <code>em</code> and <code>rem</code> so that components can be resized simply on the fly. Want a menu to get smaller on mobile? Simply have it\'s font-size change using a media query.</p>\n\n    <h2 class="ui header">\n      Self Explanatory\n      <div class="sub header">Descriptive not Prescriptive</div>\n    </h2>\n    <p> Writing front end code shouldn\'t require learning the naming or programming conventions of a particular developer.</p>\n    <p>Instead of using short-hand, or codifying naming conventions, Semantic uses simple, common language for parts of interface elements, and familiar patterns found in natural languages for describing elements.</p>\n\n    <h2 class="ui header">\n      Tag ambivalent\n      <div class="sub header">Use whatever html tags you please.</div>\n    </h2>\n    <p>Interface definitions in Semantic are tag ambivalent. That means you can use div, article, section, span without affecting the display of the element. Special tags like a, table, td still carry special meaning in certain circumstances however.</p>\n\n    <h2 class="ui header">\n      Powerful tools for expressing groups and collections.\n      <div class="sub header">Don\'t repeat yourself</div>\n    </h2>\n    <p>In English it\'s much easier to say "There are three tall men" than "There is a tall man, a tall man and a tall man".</p>\n    <p>In Semantic element definitions can be expressed in groups have shared attributes like size, color, type avoiding repetitive declarations.</p>\n\n    <h2 class="ui header">\n      Portable and self-contained.\n      <div class="sub header">Using Semantic doesn\'t mean adopting an entire framework, or rewriting your code base</div>\n    </h2>\n    <p>Semantic components are written in a singular style, but are not part of mandated overarching library. Only like a couple components? No problem, use only what you need.</p>\n    <p>UI components in Semantic also define optional and required couplings with other components where their usage intersect. That means for example, a popup can check for the existence of CSS animation component before using the fallback javascript animations.</p>\n\n    <h2 class="ui header">\n      Shared language, different implementations\n      <div class="sub header">Restyle your site without Restructuring it</div>\n    </h2>\n\n    <p>Describing your site\'s content using a common language like Semantic allows other developers to create UI definitions to match one shared vocabulary. This means you can redesign your website without retooling your html. Simply alter the look and feel of your UI using a different UI style definition.</p>\n\n    <h2 class="ui header">\n      Only the important stuff\n      <div class="sub header">Not the kitchen sink</div>\n    </h2>\n    <p>Instead of giving every possible variation or behavior under the sun, element definitions are designed to be a starting off point. No oversized downloads with optional features you will most likely never use, just the stuff to get you going.</p>\n\n  <div class="ui horizontal divider"><i class="circular heart icon"></i></div>\n\n  <a class="ui large right labeled teal icon button" href="/introduction/definitions.html">\n    Next: UI Definitions\n    <i class="right arrow icon"></i>\n  </a>\n\n</div>\n');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
