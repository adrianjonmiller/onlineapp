(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["transition.html"] = function(__obj) {
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
      
        __out.push('---\nlayout      : \'default\'\ncss         : \'transition\'\n\ntitle       : \'Transition\'\ndescription : \'A transition is an animation usually used to move content in or out of view\'\ntype        : \'UI Module\'\n---\n\n');
      
        __out.push(this.partial('header', {
          tabs: 'module'
        }));
      
        __out.push('\n\n<div class="main container">\n\n  <div class="ui active tab" data-tab="definition">\n    <div class="fixed column">\n      <img src="/images/cat2.png" class="ui cat image">\n    </div>\n    <div class="examples">\n\n      <h2 class="ui dividing header">Types</h2>\n\n      <h3>Emphasis</h3>\n      <div class="no example">\n        <h4 class="ui header">Flash</h4>\n        <p>An element can flash to draw attention to itself</p>\n        <div class="code" data-demo="true">\n        $(\'.cat.image\')\n          .transition(\'flash\')\n        ;\n        </div>\n      </div>\n      <div class="no example">\n        <h4 class="ui header">Shake</h4>\n        <p>An element can shake to draw attention to its position</p>\n        <div class="code" data-demo="true">\n        $(\'.cat.image\')\n          .transition(\'shake\')\n        ;\n        </div>\n      </div>\n      <div class="no example">\n        <h4 class="ui header">Pulse</h4>\n        <p>An element can pulse to draw attention to its visibility</p>\n        <div class="code" data-demo="true">\n        $(\'.cat.image\')\n          .transition(\'pulse\')\n        ;\n        </div>\n      </div>\n      <div class="no example">\n        <h4 class="ui header">Tada</h4>\n        <p>An element can give user positive feedback for an action</p>\n        <div class="code" data-demo="true">\n        $(\'.cat.image\')\n          .transition(\'tada\')\n        ;\n        </div>\n      </div>\n      <div class="no example">\n        <h4 class="ui header">Bounce</h4>\n        <p>An element can bounce to politely remind you of itself</p>\n        <div class="code" data-demo="true">\n        $(\'.cat.image\')\n          .transition(\'bounce\')\n        ;\n        </div>\n      </div>\n\n      <h3>Appearance</h3>\n      <div class="no example">\n        <h4 class="ui header">Flip</h4>\n        <p>An element can flip into or out of view vertically or horizontally</p>\n        <div class="code" data-demo="true">\n        $(\'.cat.image\')\n          .transition(\'horizontal flip\')\n        ;\n        </div>\n        <div class="code" data-demo="true">\n        $(\'.cat.image\')\n          .transition(\'vertical flip\')\n        ;\n        </div>\n      </div>\n      <div class="no example">\n        <h4 class="ui header">Fade</h4>\n        <p>An element can fade into or out of view descending and ascending</p>\n        <div class="code" data-demo="true">\n        $(\'.cat.image\')\n          .transition(\'fade\')\n        ;\n        </div>\n        <div class="code" data-demo="true">\n        $(\'.cat.image\')\n          .transition(\'fade up\')\n        ;\n        </div>\n        <div class="code" data-demo="true">\n        $(\'.cat.image\')\n          .transition(\'fade down\')\n        ;\n        </div>\n      </div>\n      <div class="no example">\n        <h4 class="ui header">Scale</h4>\n        <p>An element can scale into or out of view</p>\n        <div class="code" data-demo="true">\n        $(\'.cat.image\')\n          .transition(\'scale\')\n        ;\n        </div>\n      </div>\n\n      <div class="no example">\n        <h4 class="ui header">Slide</h4>\n        <p>An element can appear to slide in from above or below\n        <div class="code" data-demo="true">\n        $(\'.cat.image\')\n          .transition(\'slide down\')\n        ;\n        </div>\n        <div class="code" data-demo="true">\n        $(\'.cat.image\')\n          .transition(\'slide up\')\n        ;\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="ui tab" data-tab="usage">\n    <div class="fixed column">\n      <img src="/images/dog.png" class="ui dog image">\n    </div>\n    <div class="examples">\n      <h2 class="ui dividing header">Introduction</h2>\n\n      <p>UI Transitions provide a wrapper for using css transitions in javascript providing cross-browser callbacks, advanced queuing, and feature detection.</p>\n      <p>Transitions are loosely coupled with other ui modules like <a href="/modules/dropdown.html">dropdowns</a> and <a href="/modules/modal.html">modals</a> to provide element transitions</p>\n\n      <h3 class="ui header">Types</h3>\n      <p>Transitions are separated into three categories. <b>Inward transitions</b>, <b>outward transitions</b>, and <b>static transitions</b>. These three categories determine the visibility of the element after the animation completes.</p>\n\n      <h2 class="ui dividing header">Usage</h2>\n\n      <h3 class="ui header">Initializing</h3>\n\n      <p>If a transition is called without any arguments all default settings will be used.</p>\n\n      <div class="code" data-demo="true" data-title="Initializing a transition">\n      $(\'.dog.image\')\n        // default everything\n        .transition()\n      ;\n      </div>\n\n      <h3 class="ui header">Passing in settings</h3>\n      <p>Transitions use similar argument shorthand as <a href="http://api.jquery.com/animate/">animate</a>. You can specify callback functions, animation duration, and other settings using the same arguments. Durations can be specified as strings with css shorthand, or with numbers.</p>\n      <div class="code" data-demo="true" data-title="Settings objects">\n      $(\'.dog.image\')\n        .transition({\n          animation : \'scale\',\n          duration  : \'2s\',\n          complete  : function() {\n            alert(\'done\');\n          }\n        })\n      ;\n      </div>\n\n      <h3 class="ui header">Display Type</h3>\n\n      <p>Animations can be used on any display type not just block level elements. For example you can animate a button while preserving its inline-block status.</p>\n      <div class="code" data-demo="true" data-title="Queueing animations">\n      $(\'.test.button\')\n        .transition(\'horizontal flip\', \'500ms\')\n      ;\n      </div>\n      <div class="ui divider"></div>\n      <div class="ui teal test labeled icon button">\n        <i class="icon user"></i> Sign-up\n      </div>\n\n      <h3 class="ui header">Queuing animations</h3>\n\n      <p>Animations called in sequence will be queued. Any queued animation will automatically determine the transition direction if none is specified.</p>\n      <div class="code" data-demo="true" data-title="Queueing animations">\n      $(\'.dog.image\')\n        .transition(\'horizontal flip\', \'500ms\')\n        .transition(\'horizontal flip\', 500, function() {\n          alert(\'done!\');\n        })\n      ;\n      </div>\n      <h2 class="ui dividing header">Behavior</h2>\n\n      <p>All the following <a href="/module.html#/behavior">behaviors</a> can be called using the syntax:</p>\n      <div class="code">\n      $(\'.your.element\')\n        .dropdown(\'behavior name\', argumentOne, argumentTwo)\n      ;\n      </div>\n\n      <table class="ui definition sortable celled table segment">\n        <thead>\n          <tr>\n          <th>Behavior</th>\n          <th>Description</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>force repaint</td>\n            <td>Forces reflow using a more expensive but stable method</td>\n          </tr>\n          <tr>\n            <td>repaint</td>\n            <td>Triggers reflow on element</td>\n          </tr>\n          <tr>\n            <td>reset</td>\n            <td>Resets all conditions changes during transition</td>\n          </tr>\n          <tr>\n            <td>looping</td>\n            <td>Enables animation looping</td>\n          </tr>\n          <tr>\n            <td>remove looping</td>\n            <td>Removes looping state from element</td>\n          </tr>\n          <tr>\n            <td>stop</td>\n            <td>Stops current transition</td>\n          </tr>\n          <tr>\n            <td>start</td>\n            <td>Restarts a stopped transition</td>\n          </tr>\n          <tr>\n            <td>toggle</td>\n            <td>Toggles current transition on/off</td>\n          </tr>\n          <tr>\n            <td>set duration(duration)</td>\n            <td>Modifies element animation duration</td>\n          </tr>\n          <tr>\n            <td>save conditions</td>\n            <td>Saves all class names and styles to cache to be retrieved after animation</td>\n          </tr>\n          <tr>\n            <td>restore conditions</td>\n            <td>Adds back cached names and styles to element</td>\n          </tr>\n          <tr>\n            <td>get animation name</td>\n            <td>Returns vendor prefixed animation property for animationname</td>\n          </tr>\n          <tr>\n            <td>get animation event</td>\n            <td>Returns vendor prefixed animation property for animationend</td>\n          </tr>\n          <tr>\n            <td>is visible</td>\n            <td>Returns whether element is currently visible</td>\n          </tr>\n          <tr>\n            <td>is animating</td>\n            <td>Returns whether transition is currently occurring</td>\n          </tr>\n          <tr>\n            <td>is looping</td>\n            <td>Returns whether animation looping is set</td>\n          </tr>\n          <tr>\n            <td>is supported</td>\n            <td>Returns whether animations are supported</td>\n          </tr>\n          <tr>\n            <td>is visible</td>\n            <td>Returns whether element is visible</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <div class="ui tab" data-tab="examples">\n    <div class="fixed column">\n      <img src="/images/cat.png" class="ui kitten image">\n    </div>\n    <div class="examples">\n      <h3 class="ui header">Visibility</h3>\n      <p>After the animation queue finishes for an element, its final visibility state is determined. If an animation is an outward transition, the final visibility status will be hidden. If an animation is inward the element will be visible after the animation finishes.</p>\n      <div class="code" data-demo="true" data-title="Disapearing element">\n      $(\'.kitten.image\')\n        .transition(\'scale\')\n      ;\n      </div>\n\n      <h3 class="ui header">Transition Direction</h3>\n\n      <p>If an animation direction is not specified it will automatically be determined based on the elements current visibility. For no example, if the element is visible the animation "fade out" will be called, if the animation is not visible "fade in".</p>\n\n      <div class="code" data-demo="true" data-title="Automatically choosing direction">\n      $(\'.kitten.image\')\n        // fade up out is used if available\n        .transition(\'fade up\')\n        // this is now fade up in\n        .transition(\'fade up\')\n      ;\n      </div>\n      <div class="code" data-demo="true" data-title="Specifying a direction">\n      $(\'.kitten.image\')\n        // if a direction if specified it will be obeyed\n        .transition(\'horizontal flip in\')\n        .transition(\'vertical flip in\')\n      ;\n      </div>\n\n      <h3 class="ui header">Static Animations</h3>\n      <p>Animations that do not have an in or out animation defined, will maintain their current visibility after running</p>\n      <div class="code" data-demo="true" data-title="Static transitions">\n      $(\'.kitten.image\')\n        .transition(\'pulse\')\n      ;\n      </div>\n\n      <h3 class="ui header">Looping</h3>\n      <p>Animation loops can be controlled by setting looping. Callbacks will occur after each loop cycle</p>\n      <div class="code" data-demo="true" data-title="Starting looping">\n      $(\'.kitten.image\')\n        .transition(\'set looping\')\n        .transition(\'bounce\', \'2000ms\')\n      ;\n      </div>\n      <div class="code" data-demo="true" data-title="Ending looping">\n      $(\'.kitten.image\')\n        .transition(\'remove looping\')\n      ;\n      </div>\n    </div>\n  </div>\n\n  <div class="ui tab" data-tab="settings">\n\n    <h3 class="ui header">\n      Transition Settings\n      <div class="sub header">Form settings modify the transition behavior</div>\n    </h3>\n    <table class="ui red celled sortable definition table segment">\n      <thead>\n        <tr>\n        <th>Setting</th>\n        <th class="four wide">Default</th>\n        <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>animation</td>\n          <td>fade</td>\n          <td>Named animation event to used. Must be defined in css.</td>\n        </tr>\n        <tr>\n          <td>duration</td>\n          <td>700ms</td>\n          <td>Duration of the css transition animation</td>\n        </tr>\n        <tr>\n          <td>allowRepeats</td>\n          <td>false</td>\n          <td>If enabled will allow same animation to be queued while it is already occurring</td>\n        </tr>\n        <tr>\n          <td>queue</td>\n          <td>true</td>\n          <td>Whether to automatically queue animation if another is occurring</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div class="ui horizontal divider"><i class="icon setting"></i></div>\n\n    <h3 class="ui header">\n      Callbacks\n      <div class="sub header">Callbacks specify a function to occur after a specific behavior.</div>\n    </h3>\n\n    <table class="ui celled sortable definition table segment">\n      <thead>\n        <tr>\n        <th class="four wide">Setting</th>\n        <th>Context</th>\n        <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>onShow</td>\n          <td>transitioned element</td>\n          <td>Callback on each transition that changes visibility to shown</td>\n        </tr>\n        <tr>\n          <td>onHide</td>\n          <td>transitioned element</td>\n          <td>Callback on each transition that changes visibility to hidden</td>\n        </tr>\n        <tr>\n          <td>complete</td>\n          <td>transitioned element</td>\n          <td>Callback on each transition complete</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div class="ui horizontal divider"><i class="icon setting"></i></div>\n\n    <h3 class="ui header">\n      DOM Settings\n      <div class="sub header">DOM settings specify how this module should interface with the DOM</div>\n    </h3>\n    <table class="ui celled sortable definition table segment">\n      <thead>\n        <tr>\n        <th>Setting</th>\n        <th class="six wide">Default</th>\n        <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>namespace</td>\n          <td>transition</td>\n          <td>Event namespace. Makes sure module teardown does not effect other events attached to an element.</td>\n        </tr>\n        <tr>\n          <td>className</td>\n          <td>\n            <div class="code">\n  className    : {\n    animating  : \'animating\',\n    disabled   : \'disabled\',\n    hidden     : \'hidden\',\n    inward     : \'in\',\n    loading    : \'loading\',\n    looping    : \'looping\',\n    outward    : \'out\',\n    transition : \'ui transition\',\n    visible    : \'visible\'\n  }\n            </div>\n          </td>\n          <td>Class names used to attach style to state</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div class="ui horizontal divider"><i class="icon setting"></i></div>\n\n    <h3 class="ui header">\n      Debug Settings\n      <div class="sub header">Debug settings controls debug output to the console</div>\n    </h3>\n\n    <table class="ui celled sortable definition table segment">\n      <thead>\n        <tr>\n        <th>Setting</th>\n        <th class="four wide">Default</th>\n        <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>name</td>\n          <td>Transition</td>\n          <td>Name used in debug logs</td>\n        </tr>\n        <tr>\n          <td>debug</td>\n          <td>True</td>\n          <td>Provides standard debug output to console</td>\n        </tr>\n        <tr>\n          <td>performance</td>\n          <td>True</td>\n          <td>Provides standard debug output to console</td>\n        </tr>\n        <tr>\n          <td>verbose</td>\n          <td>True</td>\n          <td>Provides ancillary debug output to console</td>\n        </tr>\n        <tr>\n          <td>errors</td>\n          <td colspan="2">\n            <div class="code">\n  errors   : {\n    noAnimation : \'There is no css animation matching the one you specified.\',\n    method      : \'The method you called is not defined\'\n  }\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n</div>');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);