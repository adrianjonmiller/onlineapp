(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["feed.html"] = function(__obj) {
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
      
        __out.push('---\nlayout      : \'default\'\ncss         : \'feed\'\n\ntitle       : \'Feed\'\ndescription : \'A feed presents user activity chronologically\'\ntype        : \'UI View\'\n---\n\n');
      
        __out.push(this.partial('header'));
      
        __out.push('\n<div class="main container">\n\n  <div class="peek">\n    <div class="ui vertical pointing secondary menu">\n      <a class="active item">Types</a>\n      <a class="item">Content</a>\n      <a class="item">Variations</a>\n    </div>\n  </div>\n\n  <h2 class="ui dividing header">Types</h2>\n\n  <div class="example">\n    <h4>Feed</h4>\n    <p>A standard feed with some optional elements</p>\n    <div class="ui piled feed segment">\n      <h2 class="ui header">\n        Recent Activity\n      </h2>\n      <div class="event">\n        <div class="label">\n          <img src="/images/demo/avatar2.jpg">\n        </div>\n        <div class="content">\n          <div class="date">\n            Just moments ago\n          </div>\n          <div class="summary">\n             <a>Sally Poodle</a> added you as a friend\n          </div>\n        </div>\n      </div>\n      <div class="event">\n        <div class="label">\n          <i class="circular pencil icon"></i>\n        </div>\n        <div class="content">\n          <div class="date">\n            3 days ago\n          </div>\n          <div class="summary">\n            You submitted a new post to the page\n          </div>\n          <div class="extra text">\n            I am a dog and I do not know how to make a post\n          </div>\n        </div>\n      </div>\n      <div class="event">\n        <div class="label">\n          <i class="circular photo icon"></i>\n        </div>\n        <div class="content">\n          <div class="date">\n            3 days ago\n          </div>\n          <div class="summary">\n            <a>Sally Poodle</a> added <a>2 new photos</a> of you\n          </div>\n          <div class="extra images">\n            <img src="/images/demo/item1.jpg">\n            <img src="/images/demo/item2.jpg">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <h2 class="ui dividing header">Content</h2>\n\n  <div class="example">\n    <h4>Label</h4>\n    <p>An event can contain a label</p>\n    <div class="ignored ui info message">In semantic\'s implementation a label is formatted to contain an icon or an image</div>\n    <div class="ui feed segment">\n      <div class="event">\n        <div class="label">\n          <img src="/images/demo/avatar.jpg">\n        </div>\n        <div class="content">\n          <div class="summary">\n             <a>Sally Poodle</a> added you as a friend\n          </div>\n        </div>\n      </div>\n      <div class="event">\n        <div class="label">\n          <i class="circular pencil icon"></i>\n        </div>\n        <div class="content">\n          <div class="summary">\n            You submitted a new post to the page\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="example">\n    <h4>Date</h4>\n    <p>An event can contain a date</p>\n    <div class="ui feed segment">\n      <div class="event">\n        <div class="label">\n          <img src="/images/demo/avatar.jpg">\n        </div>\n        <div class="content">\n          <div class="date">\n            3 days ago\n          </div>\n          <div class="summary">\n             <a>Sally Poodle</a> added you as a friend\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="example">\n    <h4>Additional information</h4>\n    <p>An event can contain additional content explaining the event</p>\n    <div class="ui feed segment">\n      <div class="event">\n        <div class="label">\n          <img src="/images/demo/avatar.jpg">\n        </div>\n        <div class="content">\n          <div class="date">\n            3 days ago\n          </div>\n          <div class="summary">\n             <a>Sally Poodle</a> added 2 photos of you\n          </div>\n          <div class="extra images">\n            <img src="/images/demo/item1.jpg">\n            <img src="/images/demo/item2.jpg">\n          </div>\n        </div>\n      </div>\n      <div class="event">\n        <div class="label">\n          <img src="/images/demo/avatar.jpg">\n        </div>\n        <div class="content">\n          <div class="date">\n            3 days ago\n          </div>\n          <div class="summary">\n             <a>Sally Poodle</a> created a post\n          </div>\n          <div class="extra text">\n            I am a dog and I do not know how to make a post\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <h2 class="ui dividing header">Variations</h2>\n  <div class="example">\n    <h4 class="ui header">Sizes</h4>\n    <p>A feed can have different sizes</p>\n\n    <div class="ui grid">\n      <div class="ten wide column">\n        <div class="ui small piled feed segment">\n          <h4 class="ui header">My Activity</h4>\n          <div class="event">\n            <div class="label">\n              <img src="/images/demo/avatar2.jpg">\n            </div>\n            <div class="content">\n              <div class="date">\n                Just moments ago\n              </div>\n              <div class="summary">\n                 <a>Sally Poodle</a> added you as a friend\n              </div>\n            </div>\n          </div>\n          <div class="event">\n            <div class="label">\n              <i class="circular pencil icon"></i>\n            </div>\n            <div class="content">\n              <div class="date">\n                3 days ago\n              </div>\n              <div class="summary">\n                You submitted a new post to the page\n              </div>\n              <div class="extra text">\n                I am a dog and I do not know how to make a post\n              </div>\n            </div>\n          </div>\n          <div class="event">\n            <div class="label">\n              <i class="circular photo icon"></i>\n            </div>\n            <div class="content">\n              <div class="date">\n                3 days ago\n              </div>\n              <div class="summary">\n                <a>Sally Poodle</a> added <a>2 new photos</a> of you\n              </div>\n              <div class="extra images">\n                <img src="/images/demo/item1.jpg">\n                <img src="/images/demo/item2.jpg">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="six wide column">\n        <div class="ui small   feed segment">\n          <h4 class="ui header">Followers Activity</h4>\n          <div class="event">\n            <div class="content">\n              <div class="summary">\n                 <a>Sally Poodle</a> added <a>hotpup202</a> as a friend\n              </div>\n            </div>\n          </div>\n          <div class="event">\n            <div class="content">\n              <div class="summary">\n                 <a>Dally Doodle</a> added <a>hotpup202</a> as a friend\n              </div>\n            </div>\n          </div>\n          <div class="event">\n            <div class="content">\n              <div class="summary">\n                 <a>Sally Poodle</a> added <a>sixpack dog</a> as a friend\n              </div>\n            </div>\n          </div>\n          <div class="event">\n            <div class="content">\n              <div class="summary">\n                 <a>Dally Doodle</a> added <a>hotpup202</a> as a friend\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n\n</div>');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
