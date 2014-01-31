(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["breadcrumb.html"] = function(__obj) {
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
      
        __out.push('---\nlayout      : \'default\'\ncss         : \'breadcrumb\'\ntitle       : \'Breadcrumb\'\ndescription : \'A breadcrumb is a menu to show the location of the current section in relation to other sections.\'\ntype        : \'UI Collection\'\n---\n\n');
      
        __out.push(this.partial('header'));
      
        __out.push('\n\n<div class="main container">\n\n  <div class="peek">\n    <div class="ui vertical pointing secondary menu">\n      <a class="active item">Types</a>\n      <a class="item">Elements</a>\n      <a class="item">Variations</a>\n    </div>\n  </div>\n\n  <h2 class="ui dividing header">Types</h2>\n\n  <div class="example">\n    <h4 class="ui header">A simple breadcrumb</h4>\n    <div class="ui breadcrumb">\n      <a class="section">Food</a>\n      <div class="divider"> / </div>\n      <a class="section">Fruit</a>\n      <div class="divider"> / </div>\n      <div class="active section">Apples</div>\n    </div>\n  </div>\n\n  <h2 class="ui dividing header">Elements</h2>\n\n  <div class="example">\n    <h4 class="ui header">A divider</h4>\n    <p>A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text.</p>\n    <div class="ui breadcrumb">\n      <a class="section">Food</a>\n      <i class="right arrow icon divider"></i>\n      <a class="section">Fruit</a>\n      <i class="right arrow icon divider"></i>\n      <div class="active section">Apples</div>\n    </div>\n  </div>\n\n  <div class="example">\n    <h4 class="ui header">A section</h4>\n    <p>A breadcrumb can contain sections that can either be formatted as a link or text</p>\n    <div class="ui breadcrumb">\n      <a class="section">Food</a>\n      <div class="divider"> / </div>\n      <a class="section">Fruit</a>\n      <div class="divider"> / </div>\n      <div class="active section">Apples</div>\n    </div>\n  </div>\n\n  <h2 class="ui dividing header">Variations</h2>\n\n  <div class="example">\n    <h4 class="ui header">Size</h4>\n    <p>A breadcrumb can vary in size</p>\n    <div class="ui small breadcrumb">\n      <a class="section">Food</a>\n      <div class="divider"> / </div>\n      <a class="section">Fruit</a>\n      <div class="divider"> / </div>\n      <div class="active section">Apples</div>\n    </div>\n  </div>\n  <div class="another example">\n    <div class="ui large breadcrumb">\n      <a class="section">Food</a>\n      <div class="divider"> / </div>\n      <a class="section">Fruit</a>\n      <div class="divider"> / </div>\n      <div class="active section">Apples</div>\n    </div>\n  </div>\n  <div class="another example">\n    <div class="ui huge breadcrumb">\n      <a class="section">Food</a>\n      <div class="divider"> / </div>\n      <a class="section">Fruit</a>\n      <div class="divider"> / </div>\n      <div class="active section">Apples</div>\n    </div>\n  </div>\n\n</div>\n');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
