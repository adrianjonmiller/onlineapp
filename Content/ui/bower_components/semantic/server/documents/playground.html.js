(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["playground.html"] = function(__obj) {
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
        var element, uiCollections, uiElements, uiModules, uiViews, _i, _j, _k, _l, _len, _len1, _len2, _len3;
      
        __out.push('---\nlayout : \'default\'\ncss    : \'playground\'\n\ntitle  : \'Playground\'\ntype   : \'Library\'\n---\n');
      
        uiElements = this.getCollection("documents").findAllLive({
          type: {
            $in: ['UI Element']
          }
        }, [
          {
            title: 1
          }
        ]).toJSON();
      
        __out.push('\n');
      
        uiCollections = this.getCollection("documents").findAllLive({
          type: {
            $in: ['UI Collection']
          }
        }, [
          {
            title: 1
          }
        ]).toJSON();
      
        __out.push('\n');
      
        uiModules = this.getCollection("documents").findAllLive({
          type: {
            $in: ['UI Module']
          }
        }, [
          {
            title: 1
          }
        ]).toJSON();
      
        __out.push('\n');
      
        uiViews = this.getCollection("documents").findAllLive({
          type: {
            $in: ['UI View']
          }
        }, [
          {
            title: 1
          }
        ]).toJSON();
      
        __out.push('\n<script src="/javascript/library/zencoding.js"></script>\n<script src="/javascript/library/handlebars.js"></script>\n<script src="/build/uncompressed/modules/dropdown.js"></script>\n<script src="/build/uncompressed/modules/behavior/api.js"></script>\n<script src="/javascript/playground.js"></script>\n\n<div class="ui page grid center aligned title">\n  <div class="ten wide column">\n    <h1 class="ui dividing header">\n      <i class="icon circular lab"></i> Playground\n    </h1>\n  </div>\n</div>\n<div class="ui page grid">\n  <div class="ui three wide column">\n    <div class="ui fluid vertical ui element menu">\n      <div class="header item">Choose UI</div>\n      <div class="item">\n        <form class="ui form">\n          <div class="field">\n            <label>Elements</label>\n            <div class="ui fluid dropdown selection">\n              <input type="hidden" name="element">\n              <i class="icon dropdown"></i>\n              <div class="text">Button</div>\n              <div class="menu">\n                ');
      
        for (_i = 0, _len = uiElements.length; _i < _len; _i++) {
          element = uiElements[_i];
          __out.push('\n                  <div data-value="');
          __out.push(__sanitize(element.title.toLowerCase()));
          __out.push('" class="item">\n                    ');
          __out.push(__sanitize(element.title));
          __out.push('\n                  </div>\n                ');
        }
      
        __out.push('\n              </div>\n            </div>\n          </div>\n          <div class="field">\n            <label>Collections</label>\n            <div class="ui fluid dropdown selection">\n              <input type="hidden" name="collection">\n              <i class="icon dropdown"></i>\n              <div class="text">---</div>\n              <div class="menu">\n                ');
      
        for (_j = 0, _len1 = uiCollections.length; _j < _len1; _j++) {
          element = uiCollections[_j];
          __out.push('\n                  <div data-value="');
          __out.push(__sanitize(element.title.toLowerCase()));
          __out.push('" class="item">\n                    ');
          __out.push(__sanitize(element.title));
          __out.push('\n                  </div>\n                ');
        }
      
        __out.push('\n              </div>\n            </div>\n          </div>\n          <div class="field">\n            <label>Modules</label>\n            <div class="ui fluid dropdown selection">\n              <input type="hidden" name="module">\n              <i class="icon dropdown"></i>\n              <div class="text">---</div>\n              <div class="menu">\n                ');
      
        for (_k = 0, _len2 = uiModules.length; _k < _len2; _k++) {
          element = uiModules[_k];
          __out.push('\n                  <div data-value="');
          __out.push(__sanitize(element.title.toLowerCase()));
          __out.push('" class="item">\n                    ');
          __out.push(__sanitize(element.title));
          __out.push('\n                  </div>\n                ');
        }
      
        __out.push('\n              </div>\n            </div>\n          </div>\n          <div class="field">\n            <label>Views</label>\n            <div class="ui fluid dropdown selection">\n              <input type="hidden" name="view">\n              <i class="icon dropdown"></i>\n              <div class="text">---</div>\n              <div class="menu">\n                ');
      
        for (_l = 0, _len3 = uiViews.length; _l < _len3; _l++) {
          element = uiViews[_l];
          __out.push('\n                  <div data-value="');
          __out.push(__sanitize(element.title.toLowerCase()));
          __out.push('" class="item">\n                    ');
          __out.push(__sanitize(element.title));
          __out.push('\n                  </div>\n                ');
        }
      
        __out.push('\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class="type menu">\n        <div class="header item">Types</div>\n        <div class="type item">\n          <form class="ui form">\n          </form>\n        </div>\n      </div>\n      <div class="variation menu">\n        <div class="header item">Variations</div>\n        <div class="variation item">\n          <form class="ui form">\n          </form>\n        </div>\n      </div>\n      <div class="item">\n        <div class="ui large red fluid add button"><i class="icon add"></i>Add</div>\n      </div>\n    </div>\n\n\n  </div>\n  <div class="ui ten wide default page column">\n    <div class="ui raised segment">\n      <div class="ui large message warning">\n        <div class="header"><i class="icon empty heart"></i> No Designs Yet!</div>\n        Add an element to the left to begin\n      </div>\n    </div>\n  </div>\n  <div class="three wide column">\n\n  <div class="ui purple segment">\n    <div class="ui small dividing header">Preview</div>\n    <div class="ui secondary preview segment">\n    </div>\n  </div>\n  <div class="ui blue segment">\n    <div class="ui small dividing header">Text</div>\n    <div class="ui form">\n      <div class="field">\n        <textarea class="text"></textarea>\n      </div>\n      <div class="ui fluid blue button">Update Text</div>\n    </div>\n  </div>\n  <div class="ui green segment">\n    <div class="ui small dividing header">View</div>\n    <div class="ui two fluid secondary view buttons">\n      <div class="ui active preview button">Preview</div>\n      <div class="ui html button">Code</div>\n    </div>\n    <div class="ui small dividing header">Finish Up</div>\n    <div class="ui positive secondary fluid download button">Download</div>\n  </div>\n</div>\n</body>\n\n<script class="checkbox" type="text/x-handlebars-template">\n<div class="inline field">\n  <div class="ui checkbox">\n    <input type="checkbox" name="{{name}}" value="{{value}}" />\n    <div class="box"></div>\n  </div>\n  {{#if name}}\n  <label>{{name}}</label>\n  {{else}}\n  <label>{{uppercase value}}</label>\n  {{/if}}\n</div>\n</script>\n\n\n<script class="select" type="text/x-handlebars-template">\n<div class="field">\n  <label>{{name}}</label>\n  <div class="ui fluid dropdown {{value}} selection">\n    <input type="hidden" name="{{name}}" value="none">\n    <i class="icon dropdown"></i>\n    <div class="text">Standard</div>\n    <div class="menu">\n      <div class="item" data-value="none">---</div>\n      {{#each values}}\n        {{#if @key}}\n        <div data-value="{{this}}" class="item">\n          {{@key}}\n        </div>\n        {{else}}\n        <div data-value="{{this}}" class="item">\n          {{uppercase this}}\n        </div>\n        {{/if}}\n      {{/each}}\n    </div>\n  </div>\n</div>\n</script>\n\n</html>');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
