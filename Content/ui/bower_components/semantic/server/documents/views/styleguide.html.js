(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["styleguide.html"] = function(__obj) {
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
      
        __out.push('  ---\nlayout      : \'default\'\ncss         : \'guide\'\n\ntitle       : \'Language\'\ndescription : \'Suggestions for language usage when developing user interfaces\'\ntype        : \'UI Guide\'\n---\n');
      
        __out.push(this.partial('header'));
      
        __out.push('\n<div class="main container">\n\n  <div class="peek">\n  <div class="ui vertical pointing secondary menu">\n    <a class="active item">Language</a>\n    <a class="item">Variations</a>\n  </div>\n  </div>\n\n  <h2 class="ui dividing header">Language</h2>\n\n  <p>Defining anything will involve some subjectivity. The goal of semantic is not to create code that is free from prescription, but to create code that tends to avoid arbitrary decisions if a conventional choice presents itself.</p>\n  <p>The following are some guidelines which help avoid some common pitfalls in writing UI element definitions.</p>\n\n  <div class="ui simple divider"></div>\n\n  <h3 class="ui header">Neutral Base Form</h4>\n  <p>In order to make UI components be able to exist in most websites, the prototype version of an element should be neutrally styled using greytones and neutral colors. This will allow other elements to be more robust giving other developers freedom to make decisions about color and style when adapting your element for their website.</p>\n\n  <h3 class="ui header">Namespacing</h4>\n  <p>All css code must live inside a namespace. By default all ui elements use the class "ui". This prevents rules from altering styles of other content in the page. This also helps differentiate between UI elements and parts of an element</p>\n  <p>Tags inside of a ui element <b>do not</b> need to be prefixed with ui. They can simple descend from the element.</p>\n    <div class="code" data-type="css">\n    /* incorrect */\n    .menu {\n\n    }\n\n    /* incorrect */\n    .ui.menu .ui.item {\n\n    }\n\n    /* correct */\n    .ui.menu {\n\n    }\n    .ui.menu .item {\n\n    }\n    </div>\n  <h3 class="ui header">Commonality</h4>\n  <p>Try to use the most obvious names for classes. If you\'re not sure, prototype the element, then ask a friend or two what they would call it.<p>\n    <div class="code" data-type="css">\n    /* hmm */\n    .ginormous.ui.thingy {\n      font-size: 1.5em;\n    }\n    /* better */\n    .large.ui.thingy {\n      font-size: 1.5em;\n    }\n    </div>\n\n  <h3 class="ui header">Precision</h4>\n  <p>Classes should be defined in one word, if the concept cannot be reduced to a single word then consider factoring it into multiple sub classes</p>\n    <div class="code" data-type="css">\n    .attached.ui.thingy {\n      position: relative;\n    }\n    .left.attached.ui.thingy {\n      left: 0px;\n      top: 50%;\n      margin-top: -0.5em;\n    }\n    .right.attached.ui.thingy {\n      right: 0px;\n      top: 50%;\n      margin-top: -0.5em\n    }\n    </div>\n\n  <h3 class="ui header">Use real words</h4>\n  <p>Abbreviations are useful for taking notes, but css definitions should attempt to use consistent, common language.</p>\n    <div class="code" data-type="css">\n    /* nope */\n    .ui.btn {\n\n    }\n    .ui.widget .cpttext {\n\n    }\n    /* good */\n    .ui.button {\n\n    }\n    .ui.widget .caption {\n\n    }\n    </div>\n\n  <h3 class="ui header">Non prescriptive</h4>\n  <p>Avoid requiring any specific tags in your definitions. This will allow developers to choose which tags they would like to use with an element.</p>\n  <p>Sometimes however it makes sense to allow for common tags to be used in place of classnames for brevity. Paragraph tags, links, labels, and tables may be useful to use in a UI element definition without classnames.</p>\n  <p>Be cautious though, for example, requiring a form definition to use a form tag limits a developers ability to nest form elements inside other forms. The same is true for anchor tags</p>\n    <div class="code" data-type="css">\n\n    /* hey how do you know this is the third heading? */\n    /* and what about all the other possible sizes?   */\n    .ui.thingy h3 {\n\n    }\n\n    /* yay the developer can choose what type of heading tag to use */\n    .ui.thingy .header {\n\n    }\n    </div>\n\n    <div class="code" data-type="css">\n\n    /* wow this guy is going to have to do a lot of typing... */\n    .ui.table .cell {\n\n    }\n    /* this seems like a reasonable assumption, html is a bit strict about these things */\n    .ui.table td {\n\n    }\n    </div>\n\n\n  <h2 class="ui dividing header">Writing Variations</h2>\n\n  <h3 class="ui header">Same but not the same</h4>\n  <p>Multiple elements may contain similar variations that function slightly different.</p>\n  <p>For example it may be useful for various elements to float left or right. At first it may seem most useful to write a helper class that floats all UI element types when given a certain class name, but the way which an element may be floated might vary depending on the type of element.</p>\n    <div class="code" data-type="css">\n    /*\n    this element will default to floating left if any float is specified\n    it will receive margins on its float relative to its size\n    */\n    .ui.floated.widget,\n    .ui.left.floated.widget {\n      float: left;\n      margin-right: 1em;\n    }\n    .ui.right.floated.widget {\n      float: right;\n      margin-left: 1em;\n    }\n    /* this will not receive margins when floated and will default to floating right */\n    .ui.floated.thingy,\n    .ui.right.floated.thingy {\n      float: right;\n    }\n    .ui.right.floated.thingy {\n      float: left;\n    }\n    </div>\n\n  <h3 class="ui header">Inversion</h4>\n  <p>Elements are often inverted to stand out on dark backgrounds. Consider creating a variation of your element defines how the element can invert its colors.</p>\n  <p>Keep in mind you might have to increase the contrast between shades of your element when inverting colors, its much easier to detect in a design between multiple shades of a light color than a dark one.</p>\n    <div class="code" data-type="css">\n    .ui.thingy {\n      background-color: #FFFFFF;\n      color: rgba(0, 0, 0, 0.7);\n    }\n    .ui.inverted.thingy {\n      background-color: #222222;\n      color: rgba(255, 255, 255, 0.7);\n    }\n    </div>\n\n\n</div>');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
