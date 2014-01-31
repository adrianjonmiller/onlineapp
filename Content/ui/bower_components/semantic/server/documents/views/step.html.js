(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["step.html"] = function(__obj) {
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
      
        __out.push('---\nlayout      : \'default\'\ncss         : \'steps\'\ntitle       : \'Step\'\ndescription : \'Steps show the current activity in a series of consecutive activities.\'\ntype        : \'UI Element\'\n---\n\n');
      
        __out.push(this.partial('header'));
      
        __out.push('\n\n<div class="main container">\n\n  <div class="peek">\n    <div class="ui vertical pointing secondary menu">\n      <a class="active item">Element</a>\n      <a class="item">Groups</a>\n      <a class="item">States</a>\n      <a class="item">Variations</a>\n    </div>\n  </div>\n\n  <h2 class="ui dividing header">Standard</h2>\n  <div class="example">\n    <h4 class="ui header">Step</h4>\n    <p>A step</p>\n    <div class="ui steps">\n      <div class="ui step">\n        Shipping\n      </div>\n    </div>\n  </div>\n\n  <h2 class="ui dividing header">Groups</h2>\n  <div class="example">\n    <h4 class="ui header">Steps</h4>\n    <p>A set of step</p>\n    <div class="ui steps">\n      <div class="ui step">\n        Shipping\n      </div>\n      <div class="ui active step">\n        Billing\n      </div>\n      <div class="ui disabled step">\n        Confirm Order\n      </div>\n      <div class="ui disabled step">\n        Complete\n      </div>\n    </div>\n  </div>\n\n  <h2 class="ui dividing header">States</h2>\n\n  <div class="example">\n    <h4 class="ui header">Active</h4>\n    <p>A step can be highlighted as active</p>\n    <div class="ui steps">\n      <div class="ui active step">\n        Billing\n      </div>\n    </div>\n  </div>\n\n  <div class="example">\n    <h4 class="ui header">Disabled</h4>\n    <p>A step can show that it cannot be selected</p>\n    <div class="ui steps">\n      <div class="ui disabled step">\n        Billing\n      </div>\n    </div>\n  </div>\n\n  <h2 class="ui dividing header">Variations</h2>\n\n  <div class="example">\n    <h4 class="ui header">Size</h4>\n    <p>Steps can have different sizes</p>\n\n    <div class="ui small steps">\n      <div class="ui active step">\n        Shipping\n      </div>\n      <div class="ui disabled step">\n        Billing\n      </div>\n      <div class="ui disabled step">\n        Confirm Order\n      </div>\n      <div class="ui disabled step">\n        Complete\n      </div>\n    </div>\n    <br><br>\n    <div class="ui large steps">\n      <div class="ui active step">\n        Shipping\n      </div>\n      <div class="ui disabled step">\n        Billing\n      </div>\n      <div class="ui disabled step">\n        Confirm Order\n      </div>\n      <div class="ui disabled step">\n        Complete\n      </div>\n    </div>\n  </div>\n\n\n  <div class="example">\n    <h4 class="ui header">Step</h4>\n    <p>Steps can be divided evenly inside their parent</p>\n    <div class="ui four steps">\n      <div class="ui active step">\n        Shipping\n      </div>\n      <div class="ui disabled step">\n        Billing\n      </div>\n      <div class="ui disabled step">\n        Confirm Order\n      </div>\n      <div class="ui disabled step">\n        Complete\n      </div>\n    </div>\n  </div>\n\n\n</div>');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
