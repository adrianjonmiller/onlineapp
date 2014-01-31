(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["popup.html"] = function(__obj) {
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
      
        __out.push('---\nlayout      : \'default\'\ncss         : \'popup\'\n\ntitle       : \'Popup\'\ndescription : \'A popup displays additional information on top of a page element\'\ntype        : \'UI Module\'\n---\n<script src="/javascript/popup.js"></script>\n\n');
      
        __out.push(this.partial('header', {
          tabs: 'module'
        }));
      
        __out.push('\n<div class="main container">\n\n  <div class="ui active tab" data-tab="definition">\n\n\n    <div class="peek">\n      <div class="ui vertical pointing secondary menu">\n        <a class="active item">Types</a>\n        <a class="item">Variations</a>\n      </div>\n    </div>\n\n    <h2 class="ui dividing header">\n      Types\n    </h2>\n\n    <div class="example">\n      <h3 class="ui header">Popup</h3>\n      <p>A standard popup</p>\n      <i class="heart circular icon link" data-content="Hello, I am a pop-up."></i>\n      <i class="heart circular icon link" title="Hello, I am a pop-up."></i>\n    </div>\n\n    <div class="example">\n      <h3 class="ui header">Title</h3>\n      <p>A popup can be formatted with a title</p>\n      <img src="/images/demo/photo.jpg" data-title="PonyDog22" data-content="Ponydog has been a member for 22 days" class="ui avatar image"> PonyDog22\n    </div>\n\n    <div class="example">\n      <h3 class="ui header">HTML</h3>\n      <p>A popup can be formatted with html</p>\n      <i class="circular heart icon link" data-html="Average Rating: <div class=\'ui star rating\'><i class=\'active icon\'></i><i class=\'active icon\'></i><i class=\'active icon\'></i><i class=\'icon\'></i><i class=\'icon\'></i></div>"></i>\n    </div>\n\n    <h2 class="ui dividing header">Variations</h2>\n\n    <div class="example">\n      <h3 class="ui header">Size</h3>\n      <p>A popup can be large or small</p>\n      <i class="circular heart icon link" data-content="Hello. This is a small popup" data-variation="small"></i>\n      <i class="circular heart icon link" data-content="Hello. This is a large popup" data-variation="large"></i>\n    </div>\n\n    <div class="example">\n      <h3 class="ui header">Inverted</h3>\n      <p>A popup can have its colors inverted</p>\n      <i class="circular heart icon link" data-content="Hello. This is an inverted popup" data-variation="inverted"></i>\n    </div>\n  </div>\n\n  <div class="ui tab" data-tab="usage">\n\n    <h2 class="ui dividing header">Initializing</h2>\n\n    <h3 class="ui header">Initializing an popup</h3>\n    <div class="code">\n    $(\'.ui.popup\')\n      .popup()\n    ;\n    </div>\n\n    <div class="no example">\n      <h3 class="ui header">Including content with HTML Metadata</h3>\n      <p>Frequently used settings like, title, content, html, or offset or variation, can be included in html metadata<p>\n      <div class="ui info icon ignored message">\n        <i class="info icon"></i>\n        <div class="content">\n          <div class="header">Specifying Content</div>\n          <p>Popups can specify content in three ways:<p>\n          <ul class="list">\n            <li>Using html <code>title</code> attribute</li>\n            <li>Using <code>data-content</code> attribute</li>\n            <li>Using <code>data-html</code> for specific html</li>\n            <li>Using the content property in the initialization of the popup</li>\n          </ul>\n          <p>Popups can also specify some other frequently used settings using metadata<p>\n          <ul class="list">\n            <li><code>data-variation</code>: the popup variation to use </li>\n            <li><code>data-offset</code>: a pixel offset correction for popup</li>\n            <li><code>data-position</code>: the side to position popup on</li>\n            <li><code>data-variation</code>: the popup variation to use </li>\n          </ul>\n        </div>\n      </div>\n      <h4 class="ui header">Initializing with metadata</h4>\n      <div class="code" data-type="html">\n        <i class="heart icon" title="Hello I am a popup"></i>\n      </div>\n      <div class="ui horizontal divider">Or</div>\n      <h4 class="ui header">Initializing with javascript content</h4>\n      <div class="code">\n      $(\'.ui.popup\')\n        .popup({\n          content: \'Hello I am a popup\'\n        })\n      ;\n      </div>\n    </div>\n\n    <h2 class="ui dividing header">Behavior</h2>\n\n    <p>All the following <a href="/module.html#/behavior">behaviors</a> can be called using the syntax:</p>\n    <div class="code">\n    $(\'.your.element\')\n      .popup(\'behavior name\', argumentOne, argumentTwo)\n    ;\n    </div>\n\n    <table class="ui definition celled sortable table segment">\n      <thead>\n        <th>Behavior</th>\n        <th>Description</th>\n      </thead>\n      <tbody>\n        <tr>\n          <td>show</td>\n          <td>Shows popup</td>\n        </tr>\n        <tr>\n          <td>hide</td>\n          <td>Hides popup</td>\n        </tr>\n        <tr>\n          <td>hide all</td>\n          <td>Hides all visible pop ups on the page</td>\n        </tr>\n        <tr>\n          <td>toggle</td>\n          <td>Toggles visibility of popup</td>\n        </tr>\n        <tr>\n          <td>is visible</td>\n          <td>Returns whether popup is visible</td>\n        </tr>\n        <tr>\n          <td>is hidden</td>\n          <td>Returns whether popup is hidden</td>\n        </tr>\n        <tr>\n          <td>exists</td>\n          <td>Returns whether popup is created and inserted into the page</td>\n        </tr>\n        <tr>\n          <td>set position(position)</td>\n          <td>Repositions a popup</td>\n        </tr>\n        <tr>\n          <td>remove</td>\n          <td>Removes popup from the page</td>\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n\n\n  <div class="ui tab" data-tab="examples">\n\n    <div class="example">\n      <h3 class="ui header">Specifying a trigger event</h3>\n      <p>A popup trigger event can be specified</p>\n      <div class="evaluated code">\n    $(\'.example .teal.button\')\n      .popup({\n        on: \'click\'\n      })\n    ;\n    $(\'.example input\')\n      .popup({\n        on: \'focus\'\n      })\n    ;\n      </div>\n      <div class="ui teal button" data-title="Using click events" data-content="Clicked popups will close if you click away, but not if you click inside the popup">Click Me</div>\n      <div class="ui icon input">\n        <input type="text" placeholder="Focus me..." data-content="You can use me to enter data">\n        <i class="search icon"></i>\n      </div>\n    </div>\n\n    <div class="example">\n      <h3 class="ui header">Target Element</h3>\n      <p>A popup can specify a different target element than itself to show a popup</p>\n      <div class="evaluated code">\n    $(\'.test.button\')\n      .popup({\n        position : \'top right\',\n        target   : \'.test.image\',\n        title    : \'My favorite dog\',\n        content  : \'My favorite dog would like other dogs as much as themselves\'\n      })\n    ;\n      </div>\n      <div class="ui basic test button">Hover Me</div>\n      <div class="ui divider"></div>\n      <img class="medium ui test image" src="/images/demo/photo.jpg">\n\n      <h3 class="ui header">Inline or relative to page</h3>\n      <p>A popup can either be inserted directly after an element, or added as a child element to the page\'s <code>body</code>.</p>\n      <div class="ui positive message">\n        Using inline will allow your popups to go places other popups can\'t go, like inside <code>fixed</code> or <code>absolutely</code> positioned elements\n      </div>\n      <div class="ui info message">\n        If you want to style each popup individually it makes sense to keep popup <code>inline: true</code>. If you are worried that your pop up might mistakingly inherit styles that it shouldn\'t, you should set <code>inline: false</code>.\n      </div>\n      <div class="code" data-type="css">\n      /* this will only style the popup if inline is true */\n      .example .popup {\n        color: #FF0000;\n      }\n      </div>\n      <div class="evaluated code">\n    $(\'.inline.icon\')\n      .popup({\n        inline: true\n      })\n    ;\n      </div>\n      <i class="heart circular icon link" data-content="This is a child element to the page\'s body and will not be styled" ></i>\n      <i class="mail inline circular icon link" data-content="This popup was inserted inline and will be styled" ></i>\n\n    </div>\n    <div class="position example">\n      <h3 class="ui header">Positioning</h3>\n      <p>A popup can be positioned to any side of an element. If space is not available, it will automatically search for a similar alternative position to use.</p>\n      <div class="ui segment">\n        <i class="square inverted red heart icon link" data-content="Top Left" data-position="top left"></i>\n        <i class="square inverted red heart icon link" data-content="Top Center" data-position="top center"></i>\n        <i class="square inverted red heart icon link" data-content="Top Right" data-position="top right"></i>\n        <i class="square inverted red heart icon link" data-content="Right Center" data-position="right center"></i>\n        <i class="square inverted red heart icon link" data-content="Bottom Right" data-position="bottom right"></i>\n        <i class="square inverted red heart icon link" data-content="Bottom Center" data-position="bottom center"></i>\n        <i class="square inverted red heart icon link" data-content="Bottom Left" data-position="bottom left"></i>\n        <i class="square inverted red heart icon link" data-content="Left Center" data-position="left center"></i>\n      </div>\n    </div>\n\n    <div class="example">\n      <h3 class="ui header">Specifying an offset</h3>\n      <p>A popup position can be adjusted manually by specifying an offset property using <code>data-offset="value"</code></p>\n\n      <i class="heart circular icon link" data-offset="50" data-content="As expected this popup is way off to the right"></i>\n    </div>\n\n\n    <div class="no example">\n      <h3 class="ui header">Transitions</h3>\n      <p>A popup can use any named ui transition.</p>\n      <i class="large demo home circular link icon" data-title="Home" data-content="The place where you keep your dog"></i> Home\n\n      <div class="ui divider"></div>\n\n      <div class="ui selection dropdown">\n        <input type="hidden" name="transition">\n        <div class="default text">Choose a transition</div>\n        <i class="dropdown icon"></i>\n        <div class="menu">\n          <div class="item">Horizontal Flip</div>\n          <div class="item">Vertical Flip</div>\n          <div class="item">Fade Up</div>\n          <div class="item">Fade</div>\n          <div class="item">Scale</div>\n        </div>\n      </div>\n      <div class="ui clearing divider"></div>\n      <div class="evaluated code">\n    $(\'.selection\')\n      .dropdown({\n        onChange: function(value) {\n          $(\'.demo.icon\')\n            .popup({\n              transition: value\n            })\n            .popup(\'toggle\')\n          ;\n        }\n      })\n    ;\n      </div>\n    </div>\n  </div>\n\n  <div class="ui tab" data-tab="settings">\n\n    <h3 class="ui header">\n      Popup Settings\n      <div class="sub header">Settings to configure popup behavior</div>\n    </h3>\n    <table class="ui celled sortable definition table segment">\n      <thead>\n        <th>Setting</th>\n        <th class="four wide">Default</th>\n        <th>Description</th>\n      </thead>\n      <tbody>\n        <tr>\n          <td>context</td>\n          <td>body</td>\n          <td>Selector or jquery object specifying where the popup should be created</td>\n        </tr>\n        <tr>\n          <td>position</td>\n          <td>top center</td>\n          <td>Position that the popup should appear</td>\n        </tr>\n        <tr>\n          <td>inline</td>\n          <td>false</td>\n          <td>If a popup is inline it will be created next to current element, allowing for local css rules to apply. It will not be removed from the DOM after being hidden. Otherwise popups will appended to body and removed after being hidden.</td>\n        </tr>\n        <tr>\n          <td>preserve</td>\n          <td>false</td>\n          <td>Whether popup contents should be preserved in the page after being hidden, allowing it to re-appear slightly faster on subsequent loads.</td>\n        </tr>\n        <tr>\n          <td>on</td>\n          <td>hover</td>\n          <td>Event used to trigger popup. Can be either <b>focus, click or hover</b></td>\n        </tr>\n        <tr>\n          <td>delay</td>\n          <td>150</td>\n          <td>Delay in milliseconds before showing a popup when using hover or focus events.</td>\n        </tr>\n        <tr>\n          <td>transition</td>\n          <td>\n            slide down\n          </td>\n          <td>Named transition to use when animating menu in and out. Fade and slide down are available without including <a href="/modules/transition.html">ui transitions</a></td>\n        </tr>\n        <tr>\n          <td>duration</td>\n          <td>\n            250\n          </td>\n          <td>Duration of animation events</td>\n        </tr>\n        <tr>\n          <td>closable</td>\n          <td>true</td>\n          <td>When using <code>on: \'click\'</code> specifies whether clicking the page should close the popup</td>\n        </tr>\n        <tr>\n          <td>target</td>\n          <td>false</td>\n          <td>If a selector or jQuery object is specified this allows the popup to be positioned relative to that element.</td>\n        </tr>\n        <tr>\n          <td>distanceAway</td>\n          <td>0</td>\n          <td>Offset for distance of popup from element</td>\n        </tr>\n        <tr>\n          <td>offset</td>\n          <td>0</td>\n          <td>Offset in pixels from calculated position</td>\n        </tr>\n        <tr>\n          <td>maxSearchDepth</td>\n          <td>10</td>\n          <td>Number of iterations before giving up search for popup position when a popup cannot fit on screen</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <h3 class="ui header">\n      Content Settings\n      <div class="sub header">Settings to specify popup contents</div>\n    </h3>\n    <table class="ui celled sortable definition table segment">\n      <thead>\n        <th>Setting</th>\n        <th>Description</th>\n      </thead>\n      <tbody>\n        <tr>\n          <td>variation</td>\n          <td>Popup variation to use, can use multiple variations with a space delimiter</td>\n        </tr>\n        <tr>\n          <td>content</td>\n          <td>Content to display</td>\n        </tr>\n        <tr>\n          <td>title</td>\n          <td>Title to display alongside content</td>\n        </tr>\n        <tr>\n          <td>html</td>\n          <td>HTML content to display instead of preformatted title and content</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <h3 class="ui header">\n      DOM Settings\n      <div class="sub header">DOM settings specify how this module should interface with the DOM</div>\n    </h3>\n    <table class="ui celled sortable definition table segment">\n      <thead>\n        <th>Setting</th>\n        <th class="six wide">Default</th>\n        <th>Description</th>\n      </thead>\n      <tbody>\n        <tr>\n          <td>namespace</td>\n          <td>popup</td>\n          <td>Event namespace. Makes sure module teardown does not effect other events attached to an element.</td>\n        </tr>\n        <tr>\n          <td>selector</td>\n          <td>\n            <div class="code">\n    selector    : {\n      popup    : \'.ui.popup\'\n    }\n            </div>\n          </td>\n          <td>DOM Selectors used internally</td>\n        </tr>\n        <tr>\n          <td>metadata</td>\n          <td>\n            <div class="code">\n    metadata: {\n      content   : \'content\',\n      html      : \'html\',\n      offset    : \'offset\',\n      position  : \'position\',\n      title     : \'title\',\n      variation : \'variation\'\n    }\n            </div>\n          </td>\n          <td>HTML Data attributes used to store data</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>\n            <div class="code">\n    className   : {\n      loading     : \'loading\',\n      popup       : \'ui popup\',\n      position    : \'top left center bottom right\',\n      visible     : \'visible\'\n    }\n            </div>\n          </td>\n          <td>Class names used to attach style to state</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div class="ui horizontal divider"><i class="icon setting"></i></div>\n\n    <h3 class="ui header">\n      Debug Settings\n      <div class="sub header">Debug settings controls debug output to the console</div>\n    </h3>\n\n    <table class="ui celled sortable definition table segment">\n      <thead>\n        <th>Setting</th>\n        <th class="four wide">Default</th>\n        <th>Description</th>\n      </thead>\n      <tbody>\n        <tr>\n          <td>name</td>\n          <td>Popup</td>\n          <td>Name used in debug logs</td>\n        </tr>\n        <tr>\n          <td>debug</td>\n          <td>True</td>\n          <td>Provides standard debug output to console</td>\n        </tr>\n        <tr>\n          <td>performance</td>\n          <td>True</td>\n          <td>Provides standard debug output to console</td>\n        </tr>\n        <tr>\n          <td>verbose</td>\n          <td>True</td>\n          <td>Provides ancillary debug output to console</td>\n        </tr>\n        <tr>\n          <td>errors</td>\n          <td colspan="2">\n            <div class="code">\n    error: {\n      content   : \'Your popup has no content specified\',\n      method    : \'The method you called is not defined.\',\n      recursion : \'Popup attempted to reposition element to fit, but could not find an adequate position.\'\n    }\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n\n</div>');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);