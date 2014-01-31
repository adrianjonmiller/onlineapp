(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["accordion.html"] = function(__obj) {
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
      
        __out.push('---\nlayout      : \'default\'\ncss         : \'accordion\'\n\ntitle       : \'Accordion\'\ndescription : \'An accordion displays a single piece of content, while allowing the option of displaying other related content\'\ntype        : \'UI Module\'\n---\n<script src="/javascript/accordion.js"></script>\n\n');
      
        __out.push(this.partial('header', {
          tabs: 'module'
        }));
      
        __out.push('\n\n<div class="main container">\n\n  <div class="ui active tab" data-tab="definition">\n\n    <div class="peek">\n      <div class="ui vertical pointing secondary menu">\n        <a class="active item">Types</a>\n        <a class="item">Variations</a>\n      </div>\n    </div>\n\n    <h2 class="ui dividing header">Types</h2>\n    <div class="example">\n      <h4 class="ui header">Accordion</h4>\n      <p>A standard accordion</p>\n      <div class="ui accordion">\n        <div class="active title">\n          <i class="dropdown icon"></i>\n          What is a dog?\n        </div>\n        <div class="active content">\n          <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n        </div>\n        <div class="title">\n          <i class="dropdown icon"></i>\n          What kinds of dogs are there?\n        </div>\n        <div class="content">\n          <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>\n        </div>\n        <div class="title">\n          <i class="dropdown icon"></i>\n          How do you acquire a dog?\n        </div>\n        <div class="content">\n          <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>\n          <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>\n        </div>\n      </div>\n    </div>\n\n    <div class="example">\n      <h4 class="ui header">Basic</h4>\n      <p>A basic accordion does not add any extra formatting</p>\n      <div class="ui basic accordion">\n        <div class="active title">\n          <i class="dropdown icon"></i>\n          What is a dog?\n        </div>\n        <div class="active content">\n          <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n        </div>\n        <div class="title">\n          <i class="dropdown icon"></i>\n          What kinds of dogs are there?\n        </div>\n        <div class="content">\n          <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>\n        </div>\n        <div class="title">\n          <i class="dropdown icon"></i>\n          How do you acquire a dog?\n        </div>\n        <div class="content">\n          <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>\n          <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>\n        </div>\n      </div>\n    </div>\n\n    <h2 class="ui dividing header">Variations</h2>\n    <div class="example">\n      <h4 class="ui header">Fluid</h4>\n      <p>An accordion can take up the width of its container</p>\n      <div class="ui fluid accordion">\n        <div class="active title">\n          <i class="dropdown icon"></i>\n          What is a dog?\n        </div>\n        <div class="active content">\n          <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>\n        </div>\n        <div class="title">\n          <i class="dropdown icon"></i>\n          What kinds of dogs are there?\n        </div>\n        <div class="content">\n          <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>\n        </div>\n        <div class="title">\n          <i class="dropdown icon"></i>\n          How do you acquire a dog?\n        </div>\n        <div class="content">\n          <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>\n          <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class="ui tab" data-tab="examples">\n\n    <h2 class="ui dividing header">Examples</h2>\n\n    <div class="example">\n      <h3 class="ui header">Nested</h3>\n      <p>An accordion can have multiple levels of nested content. This content can either be in a nested <code>accordion</code> or simply another level of <code>title</code> and <code>content</code></p>\n      <div class="ui accordion">\n        <div class="active title">\n          <i class="dropdown icon"></i>\n          Level 1\n        </div>\n        <div class="active content">\n          <p>Welcome to level 1 where sub content formatted as its own accordion.</p>\n          <div class="accordion">\n            <div class="active title">\n                <i class="dropdown icon"></i>\n                Level 1A\n            </div>\n            <div class="active content">\n              <p>Level 1A Contents</p>\n              <div class="accordion">\n                <div class="title">\n                    <i class="dropdown icon"></i>\n                    Level 1A-A\n                </div>\n                <div class="content">\n                    Level 1A-A Contents\n                </div>\n                <div class="title">\n                    <i class="dropdown icon"></i>\n                    Level 1A-B\n                </div>\n                <div class="content">\n                    Level 1A-B Contents\n                </div>\n              </div>\n            </div>\n            <div class="title">\n                <i class="dropdown icon"></i>\n                Level 1B\n            </div>\n            <div class="content">\n                Level 1B Contents\n            </div>\n            <div class="title">\n                <i class="dropdown icon"></i>\n                Level 1C\n            </div>\n            <div class="content">\n                Level 1C Contents\n            </div>\n          </div>\n        </div>\n        <div class="title">\n          <i class="dropdown icon"></i>\n          Level 2\n        </div>\n        <div class="content">\n          <p>Welcome to level 2 where content is formatted without nested accordions</p>\n          <div class="active title">\n            <i class="dropdown icon"></i>\n            Level 2A\n          </div>\n          <div class="active content">\n            <p>Level 2A Contents</p>\n            <div class="title">\n                <i class="dropdown icon"></i>\n                Level 2A-A\n            </div>\n            <div class="content">\n                Level 2A-A Contents\n            </div>\n            <div class="title">\n                <i class="dropdown icon"></i>\n                Level 2A-B\n            </div>\n            <div class="content">\n                Level 2A-B Contents\n            </div>\n          </div>\n          <div class="title">\n              <i class="dropdown icon"></i>\n              Level 2B\n          </div>\n          <div class="content">\n              Level 2B Contents\n          </div>\n          <div class="title">\n              <i class="dropdown icon"></i>\n              Level 2C\n          </div>\n          <div class="content">\n              Level 2C Contents\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="example">\n      <h3 class="ui header">Form</h3>\n      <p>An accordion can be used anywhere where content can be shown or hidden. For example, to show optional form fields.</p>\n      <div class="ui segment">\n        <div class="ui basic fluid accordion form">\n          <div class="two fields">\n            <div class="field">\n              <label>First Name</label>\n              <input placeholder="First Name" type="text">\n            </div>\n            <div class="field">\n              <label>Last Name</label>\n              <input placeholder="Last Name" type="text">\n            </div>\n          </div>\n          <div class="field">\n            <div class="title">\n              <i class="icon dropdown"></i>\n              Optional Details\n            </div>\n            <div class="content field">\n              <label>Maiden Name</label>\n              <input placeholder="Maiden Name" type="text">\n            </div>\n          </div>\n          <div class="ui secondary submit button">Sign Up</div>\n        </div>\n      </div>\n    </div>\n    <div class="example">\n      <h3 class="ui header">Menu</h3>\n      <p>An accordion can be used to create content drawers inside a menu</p>\n      <div class="ui basic vertical accordion menu">\n        <div class="item">\n          <a class="active title">\n            <i class="dropdown icon"></i>\n            Size\n          </a>\n          <div class="active content menu">\n            <div class="ui form item">\n              <div class="grouped inline fields">\n                <div class="field">\n                  <div class="ui radio checkbox">\n                    <input type="radio" name="size" value="small" />\n                    <label>Small</label>\n                  </div>\n                </div>\n                <div class="field">\n                  <div class="ui radio checkbox">\n                    <input type="radio" name="size" value="medium" />\n                    <label>Medium</label>\n                  </div>\n                </div>\n                <div class="field">\n                  <div class="ui radio checkbox">\n                    <input type="radio" name="size" value="large" />\n                    <label>Large</label>\n                  </div>\n                </div>\n                <div class="field">\n                  <div class="ui radio checkbox">\n                    <input type="radio" name="size" value="x-large" />\n                    <label>X-Large</label>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="item">\n          <a class="active title">\n            <i class="dropdown icon"></i>\n            Colors\n          </a>\n          <div class="active content menu">\n            <div class="ui form item">\n              <div class="grouped inline fields">\n                <div class="field">\n                  <div class="ui checkbox">\n                    <input type="checkbox" name="small" />\n                    <label>Red</label>\n                  </div>\n                </div>\n                <div class="field">\n                  <div class="ui checkbox">\n                    <input type="checkbox" name="medium" />\n                    <label>Orange</label>\n                  </div>\n                </div>\n                <div class="field">\n                  <div class="ui checkbox">\n                    <input type="checkbox" name="large" />\n                    <label>Green</label>\n                  </div>\n                </div>\n                <div class="field">\n                  <div class="ui checkbox">\n                    <input type="checkbox" name="x-large" />\n                    <label>Blue</label>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="ui tab" data-tab="usage">\n\n    <h2 class="ui dividing header">Initializing</h2>\n    <h3 class="ui header">Initializing an accordion</h3>\n    <div class="test code">\n    $(\'.ui.accordion\')\n      .accordion()\n    ;\n    </div>\n\n    <h2 class="ui dividing header">Behaviors</h2>\n\n    <p>Behaviors are accessible with javascript using the syntax:<p>\n    <div class="code">\n    $(\'.ui.accordion\').accordion(\'behavior\', argumentOne, argumentTwo...);\n    </div>\n\n    <table class="ui definition celled table segment">\n      <tr>\n        <td>open (index)</td>\n        <td>Opens accordion content at index</td>\n      </tr>\n      <tr>\n        <td>close (index)</td>\n        <td>Closes accordion content at index</td>\n      </tr>\n      <tr>\n        <td>toggle (index)</td>\n        <td>Toggles accordion content at index</td>\n      </tr>\n    </table>\n\n  </div>\n\n  <div class="ui tab" data-tab="settings">\n\n    <h3 class="ui header">\n      Accordion Settings\n      <div class="sub header">Accordion settings modify its behavior</div>\n    </h3>\n    <table class="ui sortable celled definition table segment">\n      <thead>\n        <th>Setting</th>\n        <th class="four wide">Default</th>\n        <th>Description</th>\n      </thead>\n      <tbody>\n        <tr>\n          <td>exclusive</td>\n          <td>true</td>\n          <td>Set to false to allow multiple sections to be open at the same time</td>\n        </tr>\n        <tr>\n          <td>collapsible</td>\n          <td>true</td>\n          <td>Set to false to require an accordion to always have a section open</td>\n        </tr>\n        <tr>\n          <td>duration</td>\n          <td>500</td>\n          <td>Duration in ms of opening animation</td>\n        </tr>\n        <tr>\n          <td>easing</td>\n          <td>easeInOutQuint</td>\n          <td>EaseInOutQuint is included with accordion, for additional options consider <a href="http://gsgd.co.uk/sandbox/jquery/easing/">jQuery easing</a>)</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <h3 class="ui header">\n      Callbacks\n      <div class="sub header">Callbacks specify a function to occur after a specific behavior.</div>\n    </h3>\n\n    <table class="ui sortable celled definition table segment">\n      <thead>\n        <th class="four wide">Setting</th>\n        <th>Context</th>\n        <th>Description</th>\n      </thead>\n      <tbody>\n        <tr>\n          <td>onOpen</td>\n          <td>active content</td>\n          <td>Callback on element open</td>\n        </tr>\n        <tr>\n          <td>onClose</td>\n          <td>active content</td>\n          <td>Callback on element close</td>\n        </tr>\n        <tr>\n          <td>onChange</td>\n          <td>active content</td>\n          <td>Callback on element open or close</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <h3 class="ui header">\n      DOM Settings\n      <div class="sub header">DOM settings specify how this module should interface with the DOM</div>\n    </h3>\n    <table class="ui sortable celled definition table segment">\n      <thead>\n        <th>Setting</th>\n        <th class="six wide">Default</th>\n        <th>Description</th>\n      </thead>\n      <tbody>\n        <tr>\n          <td>namespace</td>\n          <td>accordion</td>\n          <td>Event namespace. Makes sure module teardown does not effect other events attached to an element.</td>\n        </tr>\n        <tr>\n          <td>selector</td>\n          <td>\n            <div class="code" data-type="css">\n            {\n              title   : \'.title\',\n              content : \'.content\'\n            }\n            </div>\n          </td>\n          <td>Object containing selectors used by module.</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>\n            <div class="code">\n            className : {\n              active : \'active\'\n            }\n            </div>\n          </td>\n          <td>Class names used to attach style to state</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <h3 class="ui header">\n      Debug Settings\n      <div class="sub header">Debug settings controls debug output to the console</div>\n    </h3>\n\n    <table class="ui sortable celled definition table segment">\n      <thead>\n        <th>Setting</th>\n        <th class="four wide">Default</th>\n        <th>Description</th>\n      </thead>\n      <tbody>\n        <tr>\n          <td>name</td>\n          <td>Accordion</td>\n          <td>Name used in debug logs</td>\n        </tr>\n        <tr>\n          <td>debug</td>\n          <td>True</td>\n          <td>Provides standard debug output to console</td>\n        </tr>\n        <tr>\n          <td>performance</td>\n          <td>True</td>\n          <td>Provides standard debug output to console</td>\n        </tr>\n        <tr>\n          <td>verbose</td>\n          <td>True</td>\n          <td>Provides ancillary debug output to console</td>\n        </tr>\n        <tr>\n          <td>errors</td>\n          <td colspan="2">\n            <div class="code">\n            error   : {\n              method   : \'The method you called is not defined.\',\n              notFound : \'There were no elements that matched the specified selector\'\n            }\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
