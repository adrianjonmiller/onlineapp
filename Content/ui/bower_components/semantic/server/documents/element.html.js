(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["element.html"] = function(__obj) {
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
      
        __out.push('---\nlayout      : \'default\'\ncss         : \'progress\'\n\ntitle       : \'UI Elements\'\ndescription : \'Elements are the basic building blocks of a website.\'\ntype        : \'Semantic\'\n---\n\n');
      
        __out.push(this.partial('header'));
      
        __out.push('\n\n<div class="main container">\n\n  <div class="peek">\n    <div class="ui vertical pointing secondary menu">\n      <a class="active item">Types</a>\n    </div>\n  </div>\n<!--\n  <h2 class="ui dividing header">Definition</h2>\n  <p>UI Elements are the smallest useful unit for describing page content, and do not contain other elements inside themselves.</p>\n\n  <h3 class="ui header">Plurality</h3>\n  <p>Element usually exist by themselves, but they my also be grouped together with other elements of their kind. This forms a plural definition of an element.</p>\n  <p>The look and feel of the plural may change to show a relationship, and plural definitions can often share many of the same variations as singular definitions.</p>\n  <div class="ui segment">\n    <h4 class="ui header">Groups</h4>\n    <p>The plural of button is "buttons" a button wrapped inside "buttons" will automatically apply styling appropriate for a group. Many button variations can be used on plural definitions just like they would be used in singular.</p>\n    <p>For example, in this case each button will be large because we understand it is a part of the large button group, but the continue button has its own variations applied as well.</p>\n    <div class="ui simple ignored divider"></div>\n    <div class="large ui buttons">\n      <div class="ui secondary button">Cancel</div>\n      <div class="ui teal button">Continue <i class="icon right arrow"></i></div>\n    </div>\n    <br>\n    <div class="code" data-type="html">\n    <div class="large ui buttons">\n      <div class="ui secondary button">Cancel</div>\n      <div class="ui teal button">Continue <i class="icon right arrow"></i></div>\n    </div>\n    </div>\n  </div>\n -->\n  <h2 class="ui dividing header">Types</h2>\n\n  <div class="ui two type stackable items">\n\n    <div class="item">\n      <div class="image">\n        <div class="ui teal labeled icon button">\n          <i class="icon user add"></i>Follow\n        </div>\n        <br><br>\n        <div class="ui black icon buttons">\n          <div class="ui button"><i class="icon user"></i></div>\n          <div class="ui button"><i class="icon settings"></i></div>\n          <div class="ui button"><i class="icon trash"></i></div>\n        </div>\n      </div>\n      <div class="content">\n        <a href="elements/button.html" class="name">Button</a>\n        <p>A button indicates a possible user action.</p>\n      </div>\n    </div>\n    <div class="item">\n      <div class="image">\n        <div class="ui horizontal divider"><i class="github icon"></i></div>\n      </div>\n      <div class="content">\n        <a href="elements/divider.html" class="name">Divider</a>\n        <p>A divider visually segments content into separate groups</p>\n      </div>\n    </div>\n    <div class="item">\n      <div class="image">\n        <h2 class="ui blue block header">\n          Section 2\n          <div class="sub header">The second section of the website</div>\n        </h2>\n      </div>\n      <div class="content">\n        <a href="elements/header.html" class="name">Header</a>\n        <p>Headers provide a short summary of content</p>\n      </div>\n    </div>\n    <div class="item">\n      <div class="image">\n        <div class="ui red active progress">\n          <div class="bar"></div>\n        </div>\n      </div>\n      <div class="content">\n        <a href="elements/progress.html" class="name">Progress Bar</a>\n        <p>A progress bar displays progress on a task</p>\n      </div>\n    </div>\n    <div class="item">\n      <div class="image">\n        <div class="ui inverted stacked segment">\n          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>\n        </div>\n      </div>\n      <div class="content">\n        <a href="elements/segment.html" class="name">Segment</a>\n        <p>A segment is used to create a grouping of related content.</p>\n      </div>\n    </div>\n    <div class="item">\n      <div class="image">\n        <div class="ui left floated circular image">\n          <img src="/images/demo/avatar.jpg">\n        </div>\n        <div class="ui right floated circular image">\n          <img src="/images/demo/avatar2.jpg">\n        </div>\n      </div>\n      <div class="content">\n      <a href="elements/image.html" class="name">Image</a>\n      <p>An image is a graphic representation of something</p>\n      </div>\n    </div>\n    <div class="item">\n      <div class="image">\n        <div class="ui four fluid steps">\n          <div class="ui step">\n            First\n          </div>\n          <div class="ui active step">\n            Second\n          </div>\n          <div class="ui disabled step">\n            Third\n          </div>\n          <div class="ui disabled step">\n            Last\n          </div>\n        </div>\n      </div>\n      <div class="content">\n        <a href="elements/step.html" class="name">Step</a>\n        <p>Steps show the current activity in a series of steps.</p>\n      </div>\n    </div>\n    <div class="item">\n      <div class="image">\n        <i class="archive icon"></i>\n        <i class="attachment icon"></i>\n        <i class="browser icon"></i>\n        <i class="bug icon"></i>\n        <i class="calendar icon"></i>\n        <i class="cart icon"></i>\n        <i class="certificate icon"></i>\n        <i class="chat icon"></i>\n        <i class="cloud icon"></i>\n        <i class="code icon"></i>\n        <i class="comment icon"></i>\n        <i class="dashboard icon"></i>\n        <i class="desktop icon"></i>\n        <i class="empty calendar icon"></i>\n        <i class="external url icon"></i>\n        <i class="external url sign icon"></i>\n        <i class="file icon"></i>\n        <i class="file outline icon"></i>\n        <i class="folder icon"></i>\n        <i class="folder open icon"></i>\n        <i class="folder open outline icon"></i>\n        <i class="folder outline icon"></i>\n        <i class="help icon"></i>\n        <i class="home icon"></i>\n        <i class="inbox icon"></i>\n        <i class="info icon"></i>\n        <i class="info letter icon"></i>\n        <i class="legal icon"></i>\n        <i class="location arrow icon"></i>\n        <i class="mail icon"></i>\n        <i class="mail outline icon"></i>\n        <i class="map icon"></i>\n        <i class="map marker icon"></i>\n        <i class="mobile icon"></i>\n        <i class="music icon"></i>\n        <i class="outline chat icon"></i>\n        <i class="outline comment icon"></i>\n        <i class="payment icon"></i>\n        <i class="photo icon"></i>\n        <i class="qr code icon"></i>\n        <i class="question icon"></i>\n        <i class="rss icon"></i>\n        <i class="rss sign icon"></i>\n        <i class="setting icon"></i>\n        <i class="settings icon"></i>\n        <i class="signal icon"></i>\n        <i class="sitemap icon"></i>\n        <i class="table icon"></i>\n        <i class="tablet icon"></i>\n        <i class="tag icon"></i>\n        <i class="tags icon"></i>\n        <i class="tasks icon"></i>\n        <i class="terminal icon"></i>\n        <i class="text file icon"></i>\n        <i class="text file outline icon"></i>\n        <i class="time icon"></i>\n        <i class="trash icon"></i>\n        <i class="url icon"></i>\n        <i class="user icon"></i>\n        <i class="users icon"></i>\n        <i class="video icon"></i>\n        <i class="add icon"></i>\n        <i class="add sign box icon"></i>\n        <i class="add sign icon"></i>\n        <i class="adjust icon"></i>\n        <i class="bookmark empty icon"></i>\n        <i class="bookmark icon"></i>\n        <i class="cloud download icon"></i>\n        <i class="cloud upload icon"></i>\n        <i class="collapse icon"></i>\n        <i class="crop icon"></i>\n        <i class="download disk icon"></i>\n        <i class="download icon"></i>\n        <i class="edit icon"></i>\n        <i class="edit sign icon"></i>\n        <i class="empty flag icon"></i>\n        <i class="exchange icon"></i>\n        <i class="expand icon"></i>\n        <i class="filter icon"></i>\n        <i class="flag icon"></i>\n        <i class="fork code icon"></i>\n        <i class="forward mail icon"></i>\n        <i class="fullscreen icon"></i>\n        <i class="hide icon"></i>\n        <i class="level down icon"></i>\n        <i class="level up icon"></i>\n        <i class="off icon"></i>\n      </div>\n      <div class="content">\n        <a href="elements/icon.html" class="name">Icon</a>\n        <p>An icon is a glyph used to represent another concept more simply</p>\n      </div>\n    </div>\n    <div class="item">\n      <div class="image">\n        <div class="ui red label">Dog</div>\n        <div class="ui teal corner label">\n          <div class="text">New</div>\n        </div>\n        <br><br>\n        <div class="ui blue ribbon label">HTML</div>\n      </div>\n      <div class="content">\n        <a href="elements/label.html" class="name">Label</a>\n        <p>Labels give descriptions to sections of content.</p>\n      </div>\n    </div>\n  </div>\n\n\n\n</div>');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
