(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["message.html"] = function(__obj) {
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
      
        __out.push('---\nlayout      : \'default\'\ncss         : \'text\'\n\ntitle       : \'Message\'\ndescription : \'Messages alert a user to information they must immediately consider before proceeding on to the normal content of the page\'\ntype        : \'UI Collection\'\n---\n\n');
      
        __out.push(this.partial('header'));
      
        __out.push('\n\n<div class="main container">\n\n  <div class="peek">\n    <div class="ui vertical pointing secondary menu">\n      <a class="active item">Types</a>\n      <a class="item">States</a>\n      <a class="item">Variations</a>\n    </div>\n  </div>\n\n  <h2 class="ui dividing header">Types</h2>\n\n  <div class="example">\n    <h4 class="ui header">Text Message</h4>\n    <p>A basic message</p>\n    <div class="ui message">\n      <div class="header">\n        Welcome back!\n      </div>\n      <p>\n        It\'s good to see you again. I have had a lot to think about since our last visit, I\'ve changed much as a person and I can see that you have too.\n      </p>\n      <p>\n        Perhaps we can talk about it if you have the time.\n      </p>\n    </div>\n  </div>\n\n  <div class="example">\n    <h4 class="ui header">List Message</h4>\n    <p>A message with a list</p>\n    <div class="ui message">\n      <div class="header">\n        Welcome back!\n      </div>\n      <ul class="list">\n        <li>It\'s good to see you again.</li>\n        <li>Did you know it\'s been a while?</li>\n      </ul>\n    </div>\n  </div>\n\n  <div class="example">\n    <h4 class="ui header">Icon Message</h4>\n    <p>A message can contain an icon.</p>\n    <div class="ui icon message">\n      <i class="inbox icon"></i>\n      <div class="content">\n        <div class="header">\n          Have you heard about our mailing list?\n        </div>\n        <p>Get all the best inventions in your e-mail every day. Sign up now!</p>\n      </div>\n    </div>\n  </div>\n\n  <div class="example">\n    <h4 class="ui header">Dismissable Block</h4>\n    <p>A message that the user can choose to hide</p>\n    <div class="ui message">\n      <i class="close icon"></i>\n      <div class="header">\n        Welcome back!\n      </div>\n      <p>This is a special notification which you can dismiss if you\'re bored with it.</p>\n    </div>\n    <div class="warning ui message">\n      <p>Dismissable blocks do not automatically close when using the close icon, this behavior must be defined using javascript, for example:</p>\n      <div class="code">\n      $(\'.message .close\').on(\'click\', function() {\n        $(this).closest(\'.message\').fadeOut();\n      });\n      </div>\n    </div>\n  </div>\n\n\n  <h2 class="ui dividing header">States</h2>\n\n  <div class="example">\n    <h4 class="ui header">Hidden</h4>\n    <p>Text Blocks can be hidden</p>\n    <div class="existing code">\n      <div class="ui hidden message">\n        <p>You can\'t see me</p>\n      </div>\n    </div>\n  </div>\n\n  <div class="example">\n    <h4 class="ui header">Visible</h4>\n    <p>Text Blocks can be set to visible if they need to force themselves to be shown.</p>\n    <div class="ui visible message">\n      <p>You can always see me</p>\n    </div>\n  </div>\n\n  <h2 class="ui dividing header">Variations</h2>\n\n  <div class="example">\n    <h4 class="ui header">Floating</h4>\n    <p>A message can float above content that it is related to</p>\n    <div class="ui floating message">\n      <p>Way to go!</p>\n    </div>\n  </div>\n\n  <div class="example">\n    <h4 class="ui header">Compact</h4>\n    <p>A message can only take up the width of its content.</p>\n    <div class="ui compact message">\n      <p>Get all the best inventions in your e-mail every day. Sign up now!</p>\n    </div>\n  </div>\n\n  <div class="example">\n    <h4 class="ui header">Attached</h4>\n    <p>A message can be formatted to attach itself to other content</p>\n    <div class="ui attached message">\n      <div class="header">\n        Have you heard about our mailing list?\n      </div>\n      <p>Get all the best inventions in your e-mail every day. Sign up now!</p>\n    </div>\n    <form class="ui form attached fluid segment">\n      <p>Let\'s go ahead and get you signed up.</p>\n      <div class="two fields">\n        <div class="field">\n          <label>First Name</label>\n          <input placeholder="First Name" type="text">\n        </div>\n        <div class="field">\n          <label>Last Name</label>\n          <input placeholder="Last Name" type="text">\n        </div>\n      </div>\n      <div class="field">\n        <label>Username</label>\n        <input placeholder="Username" type="text">\n      </div>\n      <div class="field">\n        <label>Password</label>\n        <input type="password">\n      </div>\n      <div class="inline field">\n        <div class="ui checkbox">\n          <input type="checkbox" id="terms" />\n          <label for="terms">I agree to the terms and conditions</label>\n        </div>\n      </div>\n      <div class="ui blue submit button">Submit</div>\n    </form>\n    <div class="ui bottom attached info message">\n      <i class="icon help"></i>Are you sure you know what you\'re doing?\n    </div>\n  </div>\n  <div class="example">\n    <h4 class="ui header">Colored</h4>\n    <p>A message can be formatted to be different colors</p>\n    <div class="ui red message">Red</div>\n    <div class="ui blue message">Blue</div>\n    <div class="ui green message">Green</div>\n    <div class="ui yellow message">Yellow</div>\n  </div>\n\n\n  <div class="example">\n    <h4 class="ui header">Warning</h4>\n    <p>A message may be formatted to display warning messages.</p>\n    <div class="ui warning message">\n      <i class="close icon"></i>\n      <div class="header">\n        You must register before you can do that!\n      </div>\n      Visit our registration page, then try again\n    </div>\n  </div>\n\n  <div class="example">\n    <h4 class="ui header">Info</h4>\n    <p>A message may be formatted to display information.</p>\n    <div class="ui info message">\n      <i class="close icon"></i>\n      <div class="header">\n        Was this what you wanted?\n      </div>\n      <ul class="list">\n        <li>It\'s good to see you again.</li>\n        <li>Did you know it\'s been a while?</li>\n      </ul>\n    </div>\n  </div>\n\n  <div class="example">\n    <h4 class="ui header">Success</h4>\n    <p>A message may be formatted to display a success message.</p>\n    <div class="ui success message">\n      <i class="close icon"></i>\n      <div class="header">\n        Congratulations, you are now a member!\n      </div>\n    </div>\n  </div>\n\n  <div class="example">\n    <h4 class="ui header">Error</h4>\n    <p>A message may be formatted to display errors.</p>\n    <div class="ui error message">\n      <i class="close icon"></i>\n      <div class="header">\n        Was this what you wanted?\n      </div>\n      <ul class="list">\n        <li>It\'s good to see you again.</li>\n        <li>Did you know it\'s been a while?</li>\n      </ul>\n    </div>\n  </div>\n\n  <div class="example">\n    <h4 class="ui header">Sizes</h4>\n    <p>A message can have different sizes</p>\n    <div class="ui small message">\n      This is a very small message.\n    </div>\n    <div class="ui large message">\n      This is large\n    </div>\n    <div class="ui huge message">\n      This is huge\n    </div>\n    <div class="ui massive message">\n      This is massive\n    </div>\n  </div>\n\n  </div>\n\n</div>');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
