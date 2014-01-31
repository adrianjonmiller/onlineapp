(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["index.html"] = function(__obj) {
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
        var element, uiCollections, uiElements, uiModules, uiViews, _i, _j, _k, _l, _len, _len1, _len2, _len3,
          __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
      
        __out.push('---\nlayout : \'default\'\ncss    : \'index\'\ntitle  : \'Introduction\'\ntype   : \'Semantic\'\n---\n\n');
      
        uiElements = this.getCollection("uiElements").toJSON();
      
        __out.push('\n');
      
        uiCollections = this.getCollection("uiCollections").toJSON();
      
        __out.push('\n');
      
        uiViews = this.getCollection("uiViews").toJSON();
      
        __out.push('\n');
      
        uiModules = this.getCollection("uiModules").toJSON();
      
        __out.push('\n<script src="/javascript/home.js"></script>\n\n<div class="masthead segment">\n  <div class="ui page grid">\n    <div class="column">\n      <div class="introduction">\n        <h1 class="ui header">Semantic UI <a class="ui black label" href="https://github.com/semantic-org/Semantic-UI/blob/master/RELEASE%20NOTES.md">0.12.3</a></h1>\n        <h2 class="ui header">UI is the vocabulary of the web.</h2>\n        <p>Semantic empowers designers and developers by creating a language for sharing UI.</p>\n        <a class="ui black large labeled launch icon button"><i class="icon list layout"></i> View UI</a>\n        <a class="ui red large labeled icon button" href="build/semantic.zip"><i class="awesome download cloud icon"></i> Download</a>\n      </div>\n      <div class="inverted advertisement">\n        ');
      
        if (__indexOf.call(this.getEnvironments(), 'development') < 0) {
          __out.push('\n        <div id="carbonads-container">\n          <div class="carbonad">\n            <div id="azcarbon"></div>\n            <script type="text/javascript">var z = document.createElement("script"); z.type = "text/javascript"; z.async = true; z.src = "http://engine.carbonads.com/z/51619/azcarbon_2_1_0_VERTDARK"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(z, s);</script>\n          </div>\n        </div>\n        ');
        }
      
        __out.push('\n      </div>\n    </div>\n  </div>\n</div>\n<div class="stripe">\n  <div class="ui page grid">\n    <div class="ui column">\n      <h2 class="ui header">\n        <i class="circular emphasized book icon"></i>\n        <div class="content">\n          Lose the Hieroglyphics\n          <div class="sub header">Semantic is structured around natural language conventions to make development more intuitive.\n          </div>\n        </div>\n      </h2>\n      <div class="ui message">\n        Semantic is tag agnostic meaning you can use <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list" target="_blank">any html tags</a> with UI elements.\n      </div>\n      <div class="ui stackable two column grid">\n        <div class="column">\n          <a class="ui teal label" href="/collections/grid.html">Semantic</a>\n          <div class="code" data-type="html">\n          <main class="ui three column grid">\n            <aside class="column">1</aside>\n            <section class="column">2</section>\n            <section class="column">3</section>\n          </main>\n          </div>\n        </div>\n        <div class="column">\n          <div class="ui black label">Bootstrap</div>\n          <div class="code" data-type="html">\n          <div class="row">\n            <div class="col-lg-4">1</div>\n            <div class="col-lg-4">2</div>\n            <div class="col-lg-4">3</div>\n          </div>\n          </div>\n        </div>\n        <div class="column">\n          <a class="ui teal label" href="/collections/menu.html">Semantic</a>\n          <div class="code" data-type="html">\n          <nav class="ui menu">\n            <h3 class="header item">Title</h3>\n            <a class="active item">Home</a>\n            <a class="item">Link</a>\n            <a class="item">Link</a>\n            <span class="right floated text item">\n              Signed in as <a href="#">user</a>\n            </span>\n          </nav>\n          </div>\n        </div>\n        <div class="column">\n          <div class="ui black label">Bootstrap</div>\n          <div class="code" data-type="html">\n          <div class="navbar">\n            <a class="navbar-brand" href="#">Title</a>\n            <ul class="nav navbar-nav">\n              <li class="active"><a href="#">Home</a></li>\n              <li><a href="#">Link</a></li>\n              <li><a href="#">Link</a></li>\n              <p class="navbar-text pull-right">Signed in as <a href="#" class="navbar-link">User</a></p>\n            </ul>\n          </div>\n          </div>\n        </div>\n        <div class="column">\n          <a class="ui teal label" href="/elements/button.html">Semantic</a>\n          <div class="code" data-type="html">\n          <button class="large ui button">\n            <i class="heart icon"></i>\n            Like it\n          </button>\n          </div>\n        </div>\n        <div class="column">\n          <div class="ui black label">Bootstrap</div>\n          <div class="code" data-type="html">\n          <button type="button" class="btn btn-primary btn-lg">\n            <span class="glyphicon glyphicon-heart"></span>\n            Like\n          </button>\n          </div>\n        </div>\n    </div>\n    </div>\n  </div>\n</div>\n<div class="dark stripe">\n  <div class="ui page grid">\n    <div class="column">\n      <h2 class="ui huge inverted center aligned icon header">\n        <i class="circular emphasized inverted teal chat outline icon"></i>\n        <div class="content">Have a conversation with your components<div class="sub header">Semantic gives you a variety of UI components with real-time debug output, letting your code tell you what its doing.</div>\n        </div>\n      </h2>\n      <div class="ui inverted horizontal section divider">\n        <i class="circular heart icon"></i>\n      </div>\n      <div class="ui stackable grid" data-demo="true">\n        <div class="row">\n          <div class="ten wide column">\n          <div class="ui teal header">Open up your web console.</div>\n          <p>Semantic provides tracing for javascript behavior so your components can tell you what they\'re doing as they do it.</p>\n          <div class="code" data-type="javascript" data-demo="true">\n          $(\'.kitten.image\')\n            .transition(\'scale in\')\n            .transition(\'tada\', \'800ms\')\n          ;\n          </div>\n<!--           <div class="ui raised segment">\n            <div class="ui black top attached label">Console</div>\n            <pre class="console"></pre>\n          </div> -->\n          <a href="module.html" class="ui teal right labeled button">Learn about modules <i class="right arrow icon"></i></a>\n          </div>\n          <div class="five wide right floated column">\n            <img src="/images/cat.png" class="ui kitten image">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="stripe" style="display:none">\n  <h2 class="ui center aligned icon header">\n    <i class="circular emphasized lab icon"></i>\n    <div class="content">\n      Alter Designs Effortlessly\n      <div class="sub header">Redesign without lifting a finger\n      </div>\n    </div>\n  </h2>\n<div class="ui page grid">\n  <div class="column">\n    <h3 class="ui header">Let\'s create some tabs</h3>\n    <div class="code" data-preview="true" data-type="html">\n    <div class="ui menu">\n      <div class="header item">Site.com</div>\n      <a class="item">Browse</a>\n      <a class="active item">Search</a>\n      <a class="item">Help</a>\n    </div>\n    <div class="ui segment">\n      <p>Tab content</p>\n    </div>\n    </div>\n    <div class="ui divider"></div>\n    <h3 class="ui header">Hmm maybe it should point to the content below it</h3>\n    <div class="code" data-preview="true" data-type="html">\n    <div class="ui pointing menu">\n      <div class="header item">Site.com</div>\n      <a class="item">Home</a>\n      <a class="active item">About</a>\n      <a class="item">Contact</a>\n    </div>\n    <div class="ui segment">\n      <p>Tab content</p>\n    </div>\n    </div>\n  </div>\n</div>\n</div>\n<div class="final stripe" >\n  <div class="ui page grid">\n    <div class="column">\n      <h2 class="ui center aligned icon header">\n        <i class="circular emphasized users icon"></i>\n        <div class="content">Growing Every Day\n          <div class="sub header">New UI components are written every day. Check back soon to see more.</div>\n        </div>\n      </h2>\n      <div class="ui horizontal divider">\n        <i class="circular heart icon"></i>\n      </div>\n      <div class="ui stackable grid" data-demo="true">\n        <div class="four column center aligned row">\n          <div class="column">\n            <div class="ui stacked segment">\n              <div class="ui statistic">\n                <div class="number">');
      
        __out.push(__sanitize(uiElements.length));
      
        __out.push('</div>\n                <div class="description">UI Elements</div>\n              </div>\n              <div class="ui divided selection list">\n                ');
      
        for (_i = 0, _len = uiElements.length; _i < _len; _i++) {
          element = uiElements[_i];
          __out.push('\n                  <a class="item" href="');
          __out.push(__sanitize(element.url));
          __out.push('">');
          __out.push(__sanitize(element.title));
          __out.push('</a>\n                ');
        }
      
        __out.push('\n              </div>\n            </div>\n          </div>\n          <div class="column">\n            <div class="ui stacked segment">\n              <div class="ui statistic">\n                <div class="number">');
      
        __out.push(__sanitize(uiCollections.length));
      
        __out.push('</div>\n                <div class="description">UI Collections</div>\n              </div>\n              <div class="ui divided selection list">\n                ');
      
        for (_j = 0, _len1 = uiCollections.length; _j < _len1; _j++) {
          element = uiCollections[_j];
          __out.push('\n                  <a class="item" href="');
          __out.push(__sanitize(element.url));
          __out.push('">');
          __out.push(__sanitize(element.title));
          __out.push('</a>\n                ');
        }
      
        __out.push('\n              </div>\n            </div>\n          </div>\n          <div class="column">\n            <div class="ui stacked segment">\n              <div class="ui statistic">\n                <div class="number">');
      
        __out.push(__sanitize(uiViews.length));
      
        __out.push('</div>\n                <div class="description">UI Views</div>\n              </div>\n              <div class="ui divided selection list">\n                ');
      
        for (_k = 0, _len2 = uiViews.length; _k < _len2; _k++) {
          element = uiViews[_k];
          __out.push('\n                  <a class="item" href="');
          __out.push(__sanitize(element.url));
          __out.push('">');
          __out.push(__sanitize(element.title));
          __out.push('</a>\n                ');
        }
      
        __out.push('\n              </div>\n            </div>\n          </div>\n          <div class="column">\n            <div class="ui stacked segment">\n              <div class="ui statistic">\n                <div class="number">');
      
        __out.push(__sanitize(uiModules.length));
      
        __out.push('</div>\n                <div class="description">UI Modules</div>\n              </div>\n              <div class="ui divided selection list">\n                ');
      
        for (_l = 0, _len3 = uiModules.length; _l < _len3; _l++) {
          element = uiModules[_l];
          __out.push('\n                  <a class="item" href="');
          __out.push(__sanitize(element.url));
          __out.push('">');
          __out.push(__sanitize(element.title));
          __out.push('</a>\n                ');
        }
      
        __out.push('\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="ui divider"></div>\n\n<div class="ui divided horizontal footer link list">\n  <div class="item">jack lukic 2013</div>\n  <a href="https://github.com/semantic-org/Semantic-UI" class="item">Github</a>\n  <div class="item">\n    Made possible by <a href="http://www.quirky.com" target="_blank">Quirky.com</a>\n  </div>\n  <div class="item">\n    Tested with <a href="http://www.browserstack.com" target="_blank">Browser Stack</a>\n  </div>\n</div>\n');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
