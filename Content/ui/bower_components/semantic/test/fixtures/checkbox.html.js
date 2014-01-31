(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["checkbox.html"] = function(__obj) {
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
      
        __out.push('---\nlayout      : \'default\'\ncss         : \'checkbox\'\n\ntitle       : \'Checkbox\'\ndescription : "A checkbox visually indicates the status of a user\'s selection"\ntype        : \'UI Module\'\n---\n<script src="/javascript/checkbox.js"></script>\n\n');
      
        __out.push(this.partial('header', {
          tabs: 'module'
        }));
      
        __out.push('\n\n<div class="main container">\n\n  <div class="ui tab" data-tab="definition">\n\n    <div class="peek">\n      <div class="ui vertical pointing secondary menu">\n        <a class="active item">Types</a>\n        <a class="item">Variations</a>\n      </div>\n    </div>\n\n    <h2 class="ui dividing header">Types</h2>\n\n    <div class="example">\n      <h4 class="ui header">Checkbox</h4>\n      <p>A standard checkbox</p>\n      <div class="ui checkbox">\n        <input type="checkbox" name="fun" />\n        <label>I enjoy having fun</label>\n      </div>\n    </div>\n\n    <div class="example">\n      <h4 class="ui header">Slider</h4>\n      <p>A checkbox can be formatted to show user selection as a slider</p>\n      <div class="ui slider checkbox">\n        <input type="checkbox" name="walk" />\n        <label>Allow others to see when your dog is on a walk</label>\n      </div>\n    </div>\n\n    <div class="example">\n      <h4 class="ui header">Toggle</h4>\n      <p>A checkbox can be formatted to show user selection as a toggle</p>\n      <div class="ui toggle checkbox">\n        <input type="checkbox" name="pet" />\n        <label>Allow other people to pet my dog</label>\n      </div>\n    </div>\n\n\n\n    <div class="example">\n      <h4 class="ui header">Radio Box</h4>\n      <p>A checkbox can be formatted as a radio element. This means it is an exclusive option.</p>\n      <div class="ui form">\n        <div class="grouped inline fields">\n          <div class="field">\n            <div class="ui radio checkbox">\n              <input type="radio" name="fruit" checked="checked" />\n              <label>Apples</label>\n            </div>\n          </div>\n          <div class="field">\n            <div class="ui radio checkbox">\n              <input type="radio" name="fruit" />\n              <label>Oranges</label>\n            </div>\n          </div>\n          <div class="field">\n            <div class="ui radio checkbox">\n              <input type="radio" name="fruit" />\n              <label>Pears</label>\n            </div>\n          </div>\n          <div class="field">\n            <div class="ui radio checkbox">\n              <input type="radio" name="fruit" />\n              <label>Grapefruit</label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <h2 class="ui dividing header">Variations</h2>\n\n    <div class="example">\n      <h4 class="ui header">Size</h4>\n      <p>A checkbox can be a different size.</p>\n      <div class="ui large checkbox">\n        <input type="checkbox" />\n        <label>Add a pro membership</label>\n      </div>\n    </div>\n    <div class="another example">\n      <div class="ui huge checkbox">\n        <input type="checkbox" />\n        <label>Signup for our mailing list</label>\n      </div>\n    </div>\n\n  </div>\n\n  <div class="ui tab" data-tab="usage">\n\n    <h3 class="ui header">Check Box</h3>\n    <p>A checkbox can be initialized with javascript for increase programmatic control</p>\n\n    <div class="code">\n    $(\'.ui.checkbox\')\n      .checkbox()\n    ;\n    </div>\n    <div class="code" data-type="html">\n      <div class="ui checkbox">\n        <input type="checkbox">\n        <label>Poodle</label>\n      </div>\n    </div>\n\n    <h3 class="ui header">Check Box without Javascript</h3>\n    <p>A checkbox can also be used without using javascript by matching the <code>id</code> attribute of the input field to the <code>for</code> attribute of the accompanying label</p>\n    <div class="code" data-type="html">\n      <div class="ui checkbox">\n        <input type="checkbox" id="unique-id" />\n        <label for="unique-id">Poodle</label>\n      </div>\n    </div>\n\n    <h2 class="ui dividing header">Behavior</h2>\n    <table class="ui definition celled table segment">\n      <tr>\n        <td>enable</td>\n        <td>A checkbox can change to show a user has selected it</td>\n      </tr>\n      <tr>\n        <td>disable</td>\n        <td>A checkbox can change to show a user has deselected it</td>\n      </tr>\n      <tr>\n        <td>toggle</td>\n        <td>A checkbox can toggle its current selection state</td>\n      </tr>\n    </table>\n\n\n  </div>\n\n  <div class="ui tab" data-tab="examples">\n\n    <h2>Examples</h2>\n\n    <div class="example">\n      <p>Example of using checkbox states to alter multiple checkboxes</p>\n      <div class="evaluated code">\n      $(\'.enable.button\')\n        .on(\'click\', function() {\n          $(this)\n            .nextAll(\'.checkbox\')\n              .checkbox(\'enable\')\n          ;\n        })\n      ;\n      $(\'.disable.button\')\n        .on(\'click\', function() {\n          $(this)\n            .nextAll(\'.checkbox\')\n              .checkbox(\'disable\')\n          ;\n        })\n      ;\n      $(\'.toggle.button\')\n        .on(\'click\', function() {\n          $(this)\n            .nextAll(\'.checkbox\')\n              .checkbox(\'toggle\')\n          ;\n        })\n      ;\n      </div>\n      <div class="ui toggle button">Toggle</div>\n      <div class="ui positive enable button">Enable</div>\n      <div class="ui negative disable button">Disable</div>\n      <br><br>\n      <div class="ui slider checkbox">\n        <input type="checkbox" />\n        <div class="box"></div>\n      </div>\n      <div class="ui slider checkbox">\n        <input type="checkbox" checked="checked" />\n        <div class="box"></div>\n      </div>\n      <div class="ui slider checkbox">\n        <input type="checkbox" />\n        <div class="box"></div>\n      </div>\n      <div class="ui slider checkbox">\n        <input type="checkbox" checked="checked" />\n        <div class="box"></div>\n      </div>\n      <div class="ui slider checkbox">\n        <input type="checkbox" />\n        <div class="box"></div>\n      </div>\n      <div class="ui slider checkbox">\n        <input type="checkbox" />\n        <div class="box"></div>\n      </div>\n      <div class="ui slider checkbox">\n        <input type="checkbox" checked="checked" />\n        <div class="box"></div>\n      </div>\n      <div class="ui slider checkbox">\n        <input type="checkbox" />\n        <div class="box"></div>\n      </div>\n      <div class="ui slider checkbox">\n        <input type="checkbox" checked="checked" />\n        <div class="box"></div>\n      </div>\n      <div class="ui slider checkbox">\n        <input type="checkbox" />\n        <div class="box"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class="ui tab" data-tab="settings">\n\n    <h3 class="ui header">\n      Checkbox Settings\n      <div class="sub header">Checkbox settings modify its behavior</div>\n    </h3>\n    <table class="ui celled sortable definition table segment">\n      <thead>\n        <th>Setting</th>\n        <th class="four wide">Default</th>\n        <th>Description</th>\n      </thead>\n      <tbody>\n        <tr>\n          <td>required</td>\n          <td>auto</td>\n          <td>Setting to true/false will determine whether an input will allow no selection. Auto will set disallow this behavior only for radio boxes</td>\n        </tr>\n        <tr>\n          <td>context</td>\n          <td>false</td>\n          <td>A selector or jQuery object to use as a delegated event context</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <h3 class="ui header">\n      Callbacks\n      <div class="sub header">Callbacks specify a function to occur after a specific behavior.</div>\n    </h3>\n\n    <table class="ui celled sortable definition table segment">\n      <thead>\n        <th class="four wide">Setting</th>\n        <th>Context</th>\n        <th>Description</th>\n      </thead>\n      <tbody>\n        <tr>\n          <td>onChange</td>\n          <td>Checkbox</td>\n          <td>Callback after a checkbox is either disabled or enabled.</td>\n        </tr>\n        <tr>\n          <td>onEnable</td>\n          <td>Checkbox</td>\n          <td>Callback after a checkbox is enabled.</td>\n        </tr>\n        <tr>\n          <td>onDisable</td>\n          <td>Checkbox</td>\n          <td>Callback after a checkbox is disabled.</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <h3 class="ui header">DOM Settings\n      <div class="sub header">DOM settings specify how this module should interface with the DOM</div>\n    </h3>\n    <table class="ui celled sortable definition table segment">\n      <thead>\n        <th>Setting</th>\n        <th class="four wide">Default</th>\n        <th>Description</th>\n      </thead>\n      <tbody>\n        <tr>\n          <td>namespace</td>\n          <td>checkbox</td>\n          <td>Event namespace. Makes sure module teardown does not effect other events attached to an element.</td>\n        </tr>\n        <tr>\n          <td>selector</td>\n          <td colspan="2">\n            <div class="code">\n      selector : {\n        input  : \'input\',\n        label  : \'label\'\n      }\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td colspan="2">\n            <div class="code">\n      className : {\n        radio  : \'radio\'\n      }\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n</div>');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
