(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["collection.html"] = function(__obj) {
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
      
        __out.push('---\nlayout      : \'default\'\ncss         : \'index\'\n\ntitle       : \'UI Collections\'\ndescription : \'UI collections are elements which contain other elements which often appear together.\'\ntype        : \'Semantic\'\n---\n\n');
      
        __out.push(this.partial('header'));
      
        __out.push('\n\n<div class="main container">\n  <h2 class="ui dividing header">Types of Collections</h2>\n\n  <div class="ui type two stackable items">\n    <div class="item">\n      <div class="image">\n        <div class="ui breadcrumb">\n          <a class="section">Food</a>\n          <div class="divider"> / </div>\n          <a class="section">Fruit</a>\n          <div class="divider"> / </div>\n          <div class="active section">Apples</div>\n        </div>\n        <div class="ui divider"></div>\n        <div class="ui breadcrumb">\n          <a class="section">Food</a>\n          <i class="right arrow icon divider"></i>\n          <a class="section">Fruit</a>\n          <i class="right arrow icon divider"></i>\n          <div class="active section">Apples</div>\n        </div>\n      </div>\n      <div class="content">\n        <a href="/collections/breadcrumb.html" class="name">Breadcrumb</a>\n        <p class="description">A breadcrumb is a menu to show the location of the current section in relation to other sections.</p>\n      </div>\n    </div>\n    <div class="item">\n      <div class="image">\n        <div class="ui fluid form">\n          <div class="field">\n            <label>Name</label>\n            <div class="ui left icon input">\n              <i class="user icon"></i>\n              <input type="text" placeholder="Name">\n            </div>\n          </div>\n          <div class="field">\n            <label>E-mail</label>\n            <div class="ui left icon input">\n              <i class="email icon"></i>\n              <input type="text" placeholder="E-mail">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="content">\n        <a href="/collections/form.html" class="name">Form</a>\n        <p class="description">A form is used to solicit a user response</p>\n      </div>\n    </div>\n    <div class="item">\n      <div class="image">\n        <div class="ui three column aligned page grid">\n          <div class="column"><div class="ui segment">1</div></div>\n          <div class="column"><div class="ui segment">2</div></div>\n          <div class="column"><div class="ui segment">3</div></div>\n        </div>\n      </div>\n      <div class="content">\n        <a href="/collections/grid.html" class="name">Grid</a>\n        <p class="description">A grid helps harmonize negative space in a layout</p>\n      </div>\n    </div>\n    <div class="item">\n      <div class="image">\n        <div class="ui three inverted red menu">\n          <a class="active item">Friends</a>\n          <a class="item">Messages</a>\n          <a class="item">Profile</a>\n        </div>\n        <div class="ui three inverted blue menu">\n          <a class="active item">Friends</a>\n          <a class="item">Messages</a>\n          <a class="item">Profile</a>\n        </div>\n      </div>\n      <div class="content">\n        <a href="/collections/menu.html" class="name">Menu</a>\n        <p class="description">A menu organizes related links</p>\n      </div>\n    </div>\n\n    <div class="item">\n      <div class="image">\n        <div class="ui error message">\n          <div class="header">We\'re sorry we can\'t process your idea just yet</div>\n          <p>Please enter your name</p>\n        </div>\n      </div>\n      <div class="content">\n        <a href="collections/message.html" class="name">Message</a>\n        <p class="description">Messages alert a user to something important.</p>\n      </div>\n    </div>\n\n    <div class="item">\n      <div class="image">\n        <table class="ui celled sortable definition table segment">\n          <thead>\n            <tr><th>Name</th>\n            <th>Status</th>\n          </tr></thead>\n          <tbody>\n            <tr class="positive">\n              <td>John</td>\n              <td> Approved</td>\n            </tr><tr>\n              <td>John</td>\n              <td> Unconfirmed</td>\n            </tr>\n            <tr class="negative">\n              <td>Sally</td>\n              <td> Denied</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class="content">\n        <a href="/collections/table.html" class="name">Table</a>\n        <p class="description">A table collects related data into rows of content</p>\n      </div>\n    </div>\n  </div>\n\n</div>');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
