(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["module.html"] = function(__obj) {
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
      
        __out.push('---\nlayout      : \'default\'\ncss         : \'module\'\n\ntitle       : \'UI Modules\'\ndescription : \'Modules are interface elements whose behavior is an essential part of their definition\'\ntype        : \'Semantic\'\n---\n\n');
      
        __out.push(this.partial('header', {
          tabs: {
            overview: 'Overview',
            init: 'Initializing',
            behavior: 'Behaviors',
            settings: 'Settings'
          }
        }));
      
        __out.push('\n\n<div class="main container">\n\n  <div class="ui tab" data-tab="overview">\n\n    <p>All official javascript modules in Semantic are designed using a singular design pattern. This pattern allows several useful features common to all javascript components</p>\n    <div class="ui relaxed list">\n      <div class="item">\n        <i class="check icon"></i>\n        <div class="content">\n          <div class="header">Run-time Performance Analysis</div>\n          <p>Semantic modules all provide the ability to log performance traces to the console, allowing you to see which aspects of the module are more or less performant and to track total init time <code>onDomReady</code></p>\n        </div>\n      </div>\n      <div class="item">\n        <i class="check icon"></i>\n        <div class="content">\n          <div class="header">Human Readable Traces</div>\n          <p>Unlike other component libraries which hides explanations of behavior in inline comments which can only be read by combing the source, semantic modules provide run-time debug output to the javascript console telling you what each component is doing as it is doing it.</p>\n        </div>\n      </div>\n      <div class="item">\n        <i class="check icon"></i>\n        <div class="content">\n          <div class="header">Settings can be overwritten after initialization</div>\n          <p>Semantic provides methods to set default settings, set settings at initialization, and set settings after initialization, allowing complete flexibility over component behaviors.</p>\n        </div>\n      </div>\n      <div class="item">\n        <i class="check icon"></i>\n        <div class="content">\n          <div class="header">All modules include an initialize and destroy method</div>\n          <p>All events and metadata are namespaced and can be removed after initialization, modules automatically handle destroy/init events to allow users to lazy-initialize a plugin multiple times with no issues.</p>\n        </div>\n      </div>\n      <div class="item">\n        <i class="check icon"></i>\n        <div class="content">\n          <div class="header">Instance available in metadata</div>\n          <p>Modules store their instance in metadata meaning that, in a pinch, you can directly modify the instance of a UI element by modifying its properties.</p>\n        </div>\n      </div>\n    </div>\n    <div class="ui divider"></div>\n    <a href="/spec/docs/modal.commented.html" class="ui large secondary labeled icon button">\n      <i class="info icon"></i>\n      Real World Commented Example\n    </a>\n    <a href="/spec/docs/module.commented.html" class="ui large black labeled icon button">\n      <i class="info icon"></i>\n      Commented Design Pattern\n    </a>\n  </div>\n  <div class="ui tab" data-tab="init">\n    <h3 class="ui header">Overview</h3>\n    <p>Semantic does not automatically attach any events on page load. You must decide which modules to initialize on each page by initializing a module in javascript.</p>\n    <div class="ui info message">It\'s okay to initialize an element multiple times, the element will automatically destroy the previous instance and re-initialize with the settings provided.</div>\n    <h3 class="ui header">Example of Initializing</h3>\n    <p>The following example shows how to attach behavior to elements on a page using Semantic</p>\n    <div class="code" data-type="html" data-preview="true">\n      <div class="ui medium image">\n        <div class="ui corner label">\n          <i class="help link icon" data-content="This appears to the right"></i>\n        </div>\n        <img src="/images/demo/photo.jpg" data-content="This appears in the default location">\n      </div>\n    </div>\n    <div class="evaluated code" data-type="javascript">\n    // just initializing\n    $(\'.ui.image img\')\n      .popup()\n    ;\n    </div>\n    <div class="evaluated code" data-type="javascript">\n    // initializing with settings\n    $(\'.ui.image .help\')\n      .popup({\n        position: \'right center\'\n      })\n    ;\n    </div>\n  </div>\n  <div class="ui tab" data-tab="behavior">\n    <div class="fixed column">\n      <div class="content">\n        <h3 class="ui header">Demo Element</h3>\n        <i class="demo circular help link icon" data-content="Popup #1"></i>\n        <i class="demo circular help link icon" data-content="Popup #2"></i>\n        <div class="ui raised segment">\n          <div class="ui top attached label">Console</div>\n          <pre class="console"></pre>\n        </div>\n      </div>\n    </div>\n    <div class="examples">\n      <h2 class="ui dividing header">Using Module Behaviors</h2>\n      <p>Behaviors are an element\'s API. They invoke functionality or return aspects of the current state for an element</p>\n      <p>Behaviors can be called using spaced words, camelcase or dot notation. The preferred method however is <b>spaced words</b>. Method lookup is done automatically internally.</p>\n\n      <p>Behaviors can be called using the syntax:</p>\n      <div class="code">\n      // both are the same\n      $(\'.your.element\')\n        .module(\'behavior name\', argumentOne, argumentTwo)\n        .module(\'behaviorName\', argumentOne, argumentTwo)\n      ;\n      </div>\n\n      <h3 class="ui header">Common Behaviors</h3>\n      <p>All modules have a set of core behaviors which allow you to configure the component</p>\n      <table class="ui celled definition sortable table segment">\n        <thead>\n          <th>Name</th>\n          <th>Usage</th>\n        </thead>\n        <tbody>\n          <tr>\n            <td>initialize</td>\n            <td>Initializes an element, adding page event handlers and init data</td>\n          </tr>\n          <tr>\n            <td>destroy</td>\n            <td>Removes all changes to the page made by initialization</td>\n          </tr>\n          <tr>\n            <td>refresh</td>\n            <td>Refreshes cached values for a component</td>\n          </tr>\n          <tr>\n            <td>setting(setting, value)</td>\n            <td>Allows you to modify or read a component setting</td>\n          </tr>\n          <tr>\n            <td>invoke(query, passedArguments, instance)</td>\n            <td>Internal method used for translating sentence case method into an internal method</td>\n          </tr>\n          <tr>\n            <td>debug(comment, values)</td>\n            <td>Displays a log if a user has logging enabled</td>\n          </tr>\n          <tr>\n            <td>verbose(comment, values)</td>\n            <td>Displays a log if a user has verbose logging enabled</td>\n          </tr>\n          <tr>\n            <td>error(name)</td>\n            <td>Displays a name error message from the component\'s settings</td>\n          </tr>\n          <tr>\n            <td>performance log(comment, value)</td>\n            <td>Adds a performance trace for an element</td>\n          </tr>\n          <tr>\n            <td>performance display</td>\n            <td>Displays current element performance trace</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h2 class="ui dividing header">Examples</h2>\n\n      <h3 class="ui header">Overriding Internals</h3>\n      <p>Internal methods can be overwritten at run-time for individual instances of a module</p>\n\n      <div class="evaluated code">\n        // initialize both popups inline\n        $(\'.demo.icon\')\n          .popup({\n            inline: true\n          })\n        ;\n        //output the first popup\'s logs to the page\n        $(\'.demo.icon\').first()\n          .popup(\'internal\', \'debug\', function() {\n            $(\'.console\')\n              .append(arguments[0] + "\\n")\n              // scroll to bottom\n              .prop(\'scrollTop\', $(\'.console\').prop(\'scrollHeight\') )\n            ;\n          })\n        ;\n      </div>\n\n      <h3 class="ui header">Triggering Behavior</h3>\n      <p>Some behaviors can accept arguments, for example a popup <b>show</b> behavior can accept a callback function. This arbitrary example shows opening a popup then changing its position programatically</p>\n      <div class="code" data-demo="true">\n        // Sets a popup to top left position with an offset of negative five\n        $(\'.demo.icon\').first()\n          .popup(\'setting\', \'position\', \'top right\')\n          .popup(\'show\', function() {\n            $(this)\n              .popup(\'set position\', \'right center\')\n            ;\n          })\n        ;\n      </div>\n      <h3 class="ui header">Returning values</h3>\n      <p>Behaviors may also provide an API for accessing a module\'s internal state. For example popups have a method <code>is visible</code> which returns true or false for whether a popup is currently visible.</p>\n      <div class="code" data-demo="true">\n        // returns boolean value instead of jQuery chain\n        $(\'.demo.icon\')\n          .popup(\'debug\', $(\'.demo.icon\').first().popup(\'is visible\') )\n        ;\n      </div>\n      <div class="code" data-demo="true">\n        // if selector size > 1 returns array of values [boolean, boolean...]\n        $(\'.demo.icon\')\n          .popup(\'debug\', $(\'.demo.icon\').popup(\'is visible\') )\n        ;\n      </div>\n    </div>\n  </div>\n\n\n  <div class="ui tab" data-tab="settings">\n\n    <p>Unlike many javascript components, anything arbitrary in Semantic is a setting. This means no need to dig inside the internals of the component to alter an expected css selector or class name, simply alter the settings object</p>\n\n    <h3 class="ui header">Common Settings</h3>\n    <p>The following is a list of common settings usually found in javascript modules.\n    <table class="ui celled sortable definition table segment">\n      <thead>\n        <th>Name</th>\n        <th>Usage</th>\n      </thead>\n      <tbody>\n        <tr>\n          <td>name</td>\n          <td>Name used in debug logs to differentiate this widget from other debug statements.</td>\n        </tr>\n        <tr>\n          <td>debug</td>\n          <td>Whether to provide standard debug output to console.</td>\n        </tr>\n        <tr>\n          <td>performance</td>\n          <td>Whether to provide performance logging to console of internal method calls.</td>\n        </tr>\n        <tr>\n          <td>verbose</td>\n          <td>Whether to provide extra debug output to console</td>\n        </tr>\n        <tr>\n          <td>namespace</td>\n          <td>Namespace used for DOM event and metadata namespacing. Allows module\'s destroy method to not affect other modules.</td>\n        </tr>\n        <tr>\n          <td>metadata</td>\n          <td>An object containing any metadata attributes used.</td>\n        </tr>\n        <tr>\n          <td>selectors</td>\n          <td>An object containing all selectors used in the module, these are usually children of the module.</td>\n        </tr>\n        <tr>\n          <td>classNames</td>\n          <td>An object containing all class names used in the module.</td>\n        </tr>\n        <tr>\n          <td>errors</td>\n          <td colspan="2">A javascript array of error statements used in the plugin. These may sometimes appear to the user, but most often appear in debug statements.\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <h3 class="ui header">Changing Settings</h3>\n    <p>The following examples use <a href="/modules/popup.html">popup</a> as an example for how to modify settings</p>\n    <div class="ui ordered very relaxed list">\n      <div class="item">\n        <div class="header">Setting module defaults</div>\n        Default settings for the module can be overridden by modifying <b>$.fn.module.settings</b>.\n        <br>\n        <div class="code">\n        $.fn.popup.settings.moduleName = \'Godzilla\';\n        </div>\n      </div>\n      <div class="item">\n        <div class="header">At initialization</div>\n        A settings object can be passed in when initializing the plugin\n        <br>\n      <div class="code">\n      $(\'.foo\')\n        .popup({\n          moduleName : \'Godzilla\',\n          verbose    : true\n        })\n      ;\n      </div>\n      </div>\n      <div class="item">\n        <div class="header">After initialization</div>\n        Settings can be changed after a module is initialized by calling the \'settings\' method on the module with either a settings object or a name, value pair.\n        <br>\n      <div class="code">\n      $(\'.foo\')\n        // lets initialize that!\n        .popup()\n        // oh wait forgot something\n        .popup(\'setting\', \'moduleName\', \'Godzilla\')\n        // and some more things\n        .popup(\'setting\', {\n          debug   : true,\n          verbose : true\n        })\n      ;\n      </div>\n      </div>\n    </div>\n    <h3 class="ui header">Reading Settings</h3>\n    <p>Settings can also be read programmatically:\n    <div class="code">\n      // outputs \'godzilla\' (1) or [\'godzilla\', \'godzilla\'...] (2 or more)\n      $(\'.foo\').popup(\'setting\', \'moduleName\');\n    </div>\n  </div>\n</div>');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
