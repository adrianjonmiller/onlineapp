(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["reveal.html"] = function(__obj) {
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
      
        __out.push('---\nlayout      : \'default\'\ncss         : \'reveal\'\n\ntitle       : \'Reveal\'\ndescription : \'A reveal is an element that shows different content below it when hovered\'\ntype        : \'UI Element\'\n---\n\n');
      
        __out.push(this.partial('header'));
      
        __out.push('\n\n<div class="main container">\n\n  <div class="peek">\n    <div class="ui vertical pointing secondary menu">\n      <a class="active item">Types</a>\n      <a class="item">Variations</a>\n      <a class="item">States</a>\n    </div>\n  </div>\n\n  <h2 class="ui dividing header">Types</h2>\n\n  <div class="example">\n    <h4 class="ui header">Reveal</h4>\n    <p>A standard reveal has no special formatting</p>\n    <div class="ui ignored red message">\n      A reveal will take no action unless a type of reveal is specified.\n    </div>\n    <div class="ui circular reveal">\n      <img class="visible content" src="/images/demo/stickfigure.jpg">\n      <img class="hidden content" src="/images/demo/photo2.jpg">\n    </div>\n  </div>\n  <div class="example">\n    <h4 class="ui header">Fade</h4>\n    <p>An element can disappear to reveal content below</p>\n    <div class="ui fade reveal">\n      <img class="visible content" src="/images/demo/invention.jpg">\n      <img class="hidden content" src="/images/demo/title.png">\n    </div>\n  </div>\n\n  <div class="example">\n    <h4 class="ui header">Move</h4>\n    <p>An element can move in a direction to reveal content</p>\n    <div class="ui move reveal">\n      <img class="visible content" src="/images/demo/invention.jpg">\n      <img class="hidden content" src="/images/demo/title.png">\n    </div>\n  </div>\n  <div class="another example">\n    <div class="ui move right reveal">\n      <img class="visible content" src="/images/demo/invention.jpg">\n      <img class="hidden content" src="/images/demo/title.png">\n    </div>\n  </div>\n\n  <div class="another example">\n    <div class="ui move up reveal">\n      <img class="visible content" src="/images/demo/invention.jpg">\n      <img class="hidden content" src="/images/demo/title.png">\n    </div>\n  </div>\n\n  <div class="another example">\n    <div class="ui move down reveal">\n      <img class="visible content" src="/images/demo/invention.jpg">\n      <img class="hidden content" src="/images/demo/title.png">\n    </div>\n  </div>\n\n  <div class="example">\n    <h4 class="ui header">Rotate</h4>\n    <p>An element can rotate to reveal content below</p>\n    <div class="ui circular rotate reveal image">\n      <img class="visible content" src="/images/demo/stickfigure.jpg">\n      <img class="hidden content" src="/images/demo/photo2.jpg">\n    </div>\n  </div>\n  <div class="another example">\n    <div class="ui circular rotate left reveal image">\n      <img class="visible content" src="/images/demo/stickfigure.jpg">\n      <img class="hidden content" src="/images/demo/photo2.jpg">\n    </div>\n  </div>\n\n  <h2 class="ui dividing header">Variations</h2>\n\n  <div class="example">\n    <h4 class="ui header">Masked</h4>\n    <p>An element can mask its content so that an element does not escape its parent</p>\n    <div class="ui masked move reveal">\n      <img class="visible content" src="/images/demo/invention.jpg">\n      <img class="hidden content" src="/images/demo/title.png">\n    </div>\n  </div>\n\n  <div class="example">\n    <h4 class="ui header">Instant</h4>\n    <p>An element can show its content without delay</p>\n    <div class="ui instant masked move reveal">\n      <img class="visible content" src="/images/demo/invention.jpg">\n      <img class="hidden content" src="/images/demo/title.png">\n    </div>\n  </div>\n\n\n  <h2 class="ui dividing header">States</h2>\n\n  <div class="example">\n    <h4 class="ui header">Disabled</h4>\n    <p>A disabled reveal will not animate when hovered</p>\n    <div class="ui circular disabled move reveal">\n      <img class="visible content" src="/images/demo/stickfigure.jpg">\n      <img class="hidden content" src="/images/demo/photo2.jpg">\n    </div>\n  </div>\n\n\n\n</div>\n');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
