(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["default.html"] = function(__obj) {
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
        var currentCollection, element, index, pageCollection, pageCount, pageNumber, uiBehavior, uiCollections, uiElements, uiGuide, uiIntroduction, uiModules, uiProject, uiSpecification, uiViews, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _len5, _len6, _len7, _len8, _len9, _m, _n, _o, _p, _q, _r,
          __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
      
        __out.push('<!DOCTYPE html>\n<html>\n<head>\n');
      
        uiIntroduction = this.getCollection("documents").findAll({
          type: {
            $in: ['UI Introduction']
          }
        }, [
          {
            title: 1
          }
        ]).toJSON();
      
        __out.push('\n');
      
        uiProject = this.getCollection("documents").findAll({
          type: {
            $in: ['Semantic Project']
          }
        }, [
          {
            title: 1
          }
        ]).toJSON();
      
        __out.push('\n');
      
        uiGuide = this.getCollection("documents").findAll({
          type: {
            $in: ['UI Guide']
          }
        }, [
          {
            title: 1
          }
        ]).toJSON();
      
        __out.push('\n');
      
        uiElements = this.getCollection("documents").findAll({
          type: {
            $in: ['UI Element']
          }
        }, [
          {
            title: 1
          }
        ]).toJSON();
      
        __out.push('\n');
      
        uiCollections = this.getCollection("documents").findAll({
          type: {
            $in: ['UI Collection']
          }
        }, [
          {
            title: 1
          }
        ]).toJSON();
      
        __out.push('\n');
      
        uiViews = this.getCollection("documents").findAll({
          type: {
            $in: ['UI View']
          }
        }, [
          {
            title: 1
          }
        ]).toJSON();
      
        __out.push('\n');
      
        uiModules = this.getCollection("documents").findAll({
          type: {
            $in: ['UI Module']
          }
        }, [
          {
            title: 1
          }
        ]).toJSON();
      
        __out.push('\n');
      
        uiBehavior = this.getCollection("documents").findAll({
          type: {
            $in: ['UI Behavior']
          }
        }, [
          {
            title: 1
          }
        ]).toJSON();
      
        __out.push('\n');
      
        uiSpecification = this.getCollection("documents").findAll({
          type: {
            $in: ['UI Specification']
          }
        }, [
          {
            title: 1
          }
        ]).toJSON();
      
        __out.push('\n');
      
        currentCollection = this.getCollection("documents").findAll({
          type: {
            $in: [this.document.type]
          }
        }, [
          {
            title: 1
          }
        ]).toJSON();
      
        __out.push('\n');
      
        pageCount = this.pageCount(currentCollection);
      
        __out.push('\n');
      
        pageNumber = this.getPage(currentCollection, this.document.id);
      
        __out.push('\n');
      
        pageCollection = this.getPageCollection(currentCollection, this.document.id);
      
        __out.push('\n  <!-- Standard Meta -->\n  <meta charset="utf-8" />\n  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n\n  <link rel="image_src" type="image/jpeg" href="images/share.png" />\n\n  <!-- Site Properities -->\n  ');
      
        __out.push(this.getBlock('meta').toHTML());
      
        __out.push('\n  <title>');
      
        __out.push(__sanitize(this.getPreparedTitle()));
      
        __out.push('</title>\n\n  <meta name="description" content="');
      
        __out.push(__sanitize(this.getPreparedDescription()));
      
        __out.push('" />\n  <meta name="keywords" content="');
      
        __out.push(__sanitize(this.getPreparedKeywords()));
      
        __out.push('" />\n\n  <link href=\'http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700|Open+Sans:300italic,400,300,700\' rel=\'stylesheet\' type=\'text/css\'>\n\n  ');
      
        if (__indexOf.call(this.getEnvironments(), 'development') >= 0) {
          __out.push('\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/elements/basic.icon.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/elements/icon.css">\n\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/elements/button.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/elements/divider.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/elements/header.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/elements/image.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/elements/input.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/elements/label.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/elements/loader.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/elements/reveal.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/elements/progress.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/elements/segment.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/elements/step.css">\n\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/collections/breadcrumb.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/collections/form.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/collections/grid.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/collections/menu.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/collections/message.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/collections/table.css">\n\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/views/comment.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/views/list.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/views/feed.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/views/item.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/views/statistic.css">\n\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/modules/modal.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/modules/accordion.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/modules/dropdown.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/modules/popup.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/modules/rating.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/modules/sidebar.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/modules/shape.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/modules/tab.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/modules/checkbox.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/modules/dimmer.css">\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/uncompressed/modules/transition.css">\n  ');
        } else {
          __out.push('\n  <link rel="stylesheet" type="text/css" class="ui" href="/build/packaged/css/semantic.min.css">\n  ');
        }
      
        __out.push('\n\n  <link rel="stylesheet" type="text/css" href="/stylesheets/semantic.css">\n\n  ');
      
        if (__indexOf.call(this.getEnvironments(), 'development') >= 0) {
          __out.push('\n  <script>\n  (function () {\n    var\n      eventSupport = (\'querySelector\' in document && \'addEventListener\' in window)\n      jsonSupport  = (typeof JSON !== \'undefined\'),\n      jQuery       = (eventSupport && jsonSupport)\n        ? \'/javascript/library/jquery.js\'\n        : \'/javascript/library/jquery.legacy.js\'\n    ;\n    document.write(\'<script src="\' + jQuery + \'"><\\/script>\');\n  }());\n  </script>\n  ');
        } else {
          __out.push('\n  <script>\n  (function () {\n    var\n      eventSupport = (\'querySelector\' in document && \'addEventListener\' in window)\n      jsonSupport  = (typeof JSON !== \'undefined\'),\n      jQuery       = (eventSupport && jsonSupport)\n        ? \'/javascript/library/jquery.min.js\'\n        : \'/javascript/library/jquery.legacy.min.js\'\n    ;\n    document.write(\'<script src="\' + jQuery + \'"><\\/script>\');\n  }());\n  </script>\n  ');
        }
      
        __out.push('\n  <script src="/javascript/library/history.js"></script>\n  <script src="/javascript/library/easing.js"></script>\n  <script src="/javascript/library/ace/ace.js"></script>\n  <script src="/javascript/library/tablesort.js"></script>\n  <script src="/javascript/library/waypoints.js"></script>\n\n  ');
      
        if (__indexOf.call(this.getEnvironments(), 'development') >= 0) {
          __out.push('\n  <script src="/build/uncompressed/modules/behavior/api.js"></script>\n  <script src="/build/uncompressed/modules/behavior/state.js"></script>\n  <script src="/build/uncompressed/modules/accordion.js"></script>\n  <script src="/build/uncompressed/modules/checkbox.js"></script>\n  <script src="/build/uncompressed/modules/dimmer.js"></script>\n  <script src="/build/uncompressed/modules/dropdown.js"></script>\n  <script src="/build/uncompressed/modules/modal.js"></script>\n  <script src="/build/uncompressed/modules/popup.js"></script>\n  <script src="/build/uncompressed/modules/rating.js"></script>\n  <script src="/build/uncompressed/modules/shape.js"></script>\n  <script src="/build/uncompressed/modules/sidebar.js"></script>\n  <script src="/build/uncompressed/modules/tab.js"></script>\n  <script src="/build/uncompressed/modules/transition.js"></script>\n  ');
        } else {
          __out.push('\n  <script src="/build/packaged/javascript/semantic.min.js"></script>\n  ');
        }
      
        __out.push('\n\n  <script src="/javascript/semantic.js"></script>\n  <script>\n  (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');\n\n  ga(\'create\', \'UA-44039803-1\', \'semantic-ui.com\');\n  ga(\'send\', \'pageview\');\n\n  </script>\n</head>\n<body id="example" class="');
      
        __out.push(__sanitize(this.document.css));
      
        __out.push('">\n  <div class="ui large vertical inverted labeled icon sidebar menu" id="menu">\n    <a class="hide item">\n      <i class="close icon"></i> Close Menu\n    </a>\n    <a class="item" href="/build/semantic.zip">\n      <i class="inverted circular red awesome download cloud icon"></i> <b>Download</b>\n    </a>\n    <div class="item">\n      <a href="/">\n        <b>Introduction</b>\n      </a>\n      <div class="menu">\n        ');
      
        for (_i = 0, _len = uiIntroduction.length; _i < _len; _i++) {
          element = uiIntroduction[_i];
          __out.push('\n          <a class="');
          __out.push(__sanitize(element.id === this.document.id ? 'active ' : void 0));
          __out.push('item" href="');
          __out.push(__sanitize(element.url));
          __out.push('">');
          __out.push(__sanitize(element.title));
          __out.push('</a>\n        ');
        }
      
        __out.push('\n      </div>\n    </div>\n    <div class="item">\n      <b>Project</b>\n      <div class="menu">\n        ');
      
        for (_j = 0, _len1 = uiProject.length; _j < _len1; _j++) {
          element = uiProject[_j];
          __out.push('\n          <a class="');
          __out.push(__sanitize(element.id === this.document.id ? 'active ' : void 0));
          __out.push('item" href="');
          __out.push(__sanitize(element.url));
          __out.push('">');
          __out.push(__sanitize(element.title));
          __out.push('</a>\n        ');
        }
      
        __out.push('\n      </div>\n    </div>\n    <div class="item">\n      <a href="/element.html"><b>Elements</b></a>\n      <div class="menu">\n        ');
      
        for (_k = 0, _len2 = uiElements.length; _k < _len2; _k++) {
          element = uiElements[_k];
          __out.push('\n          <a class="');
          __out.push(__sanitize(element.id === this.document.id ? 'active ' : void 0));
          __out.push('item" href="');
          __out.push(__sanitize(element.url));
          __out.push('">');
          __out.push(__sanitize(element.title));
          __out.push('</a>\n        ');
        }
      
        __out.push('\n      </div>\n    </div>\n    <div class="item">\n      <a href="/collection.html"><b>Collections</b></a>\n      <div class="menu">\n        ');
      
        for (_l = 0, _len3 = uiCollections.length; _l < _len3; _l++) {
          element = uiCollections[_l];
          __out.push('\n          <a class="');
          __out.push(__sanitize(element.id === this.document.id ? 'active ' : void 0));
          __out.push('item" href="');
          __out.push(__sanitize(element.url));
          __out.push('">');
          __out.push(__sanitize(element.title));
          __out.push('</a>\n        ');
        }
      
        __out.push('\n      </div>\n    </div>\n    <div class="item">\n      <b>Views</b>\n      <div class="menu">\n        ');
      
        for (_m = 0, _len4 = uiViews.length; _m < _len4; _m++) {
          element = uiViews[_m];
          __out.push('\n          <a class="');
          __out.push(__sanitize(element.id === this.document.id ? 'active ' : void 0));
          __out.push('item" href="');
          __out.push(__sanitize(element.url));
          __out.push('">');
          __out.push(__sanitize(element.title));
          __out.push('</a>\n        ');
        }
      
        __out.push('\n      </div>\n    </div>\n    <div class="item">\n      <a href="/module.html"><b>Modules</b></a>\n      <div class="menu">\n        ');
      
        for (_n = 0, _len5 = uiModules.length; _n < _len5; _n++) {
          element = uiModules[_n];
          __out.push('\n          <a class="');
          __out.push(__sanitize(element.id === this.document.id ? 'active ' : void 0));
          __out.push('item" href="');
          __out.push(__sanitize(element.url));
          __out.push('">');
          __out.push(__sanitize(element.title));
          __out.push('</a>\n        ');
        }
      
        __out.push('\n      </div>\n    </div>\n    <div class="item">\n      <b>Behavior</b>\n      <div class="menu">\n        ');
      
        for (_o = 0, _len6 = uiBehavior.length; _o < _len6; _o++) {
          element = uiBehavior[_o];
          __out.push('\n          <a class="');
          __out.push(__sanitize(element.id === this.document.id ? 'active ' : void 0));
          __out.push('item" href="');
          __out.push(__sanitize(element.url));
          __out.push('">');
          __out.push(__sanitize(element.title));
          __out.push('</a>\n        ');
        }
      
        __out.push('\n      </div>\n    </div>\n    <div class="item">\n      <b>Style Guide</b>\n      <div class="menu">\n        ');
      
        for (_p = 0, _len7 = uiGuide.length; _p < _len7; _p++) {
          element = uiGuide[_p];
          __out.push('\n          <a class="');
          __out.push(__sanitize(element.id === this.document.id ? 'active ' : void 0));
          __out.push('item" href="');
          __out.push(__sanitize(element.url));
          __out.push('">');
          __out.push(__sanitize(element.title));
          __out.push('</a>\n        ');
        }
      
        __out.push('\n      </div>\n    </div>\n<!--     <div class="item">\n      <b>Specification</b>\n      <div class="menu">\n        ');
      
        for (_q = 0, _len8 = uiSpecification.length; _q < _len8; _q++) {
          element = uiSpecification[_q];
          __out.push('\n          <a class="');
          __out.push(__sanitize(element.id === this.document.id ? 'active ' : void 0));
          __out.push('item" href="');
          __out.push(__sanitize(element.url));
          __out.push('">');
          __out.push(__sanitize(element.title));
          __out.push('</a>\n        ');
        }
      
        __out.push('\n      </div>\n    </div> -->\n  </div>\n\n  <div class="ui fixed transparent inverted main menu">\n    <div class="container">\n      <a class="launch item"><i class="icon list layout"></i> Content</a>\n      <div class="title item">\n        <b>');
      
        __out.push(__sanitize(this.document.type));
      
        __out.push(':</b> ');
      
        __out.push(__sanitize(this.document.title));
      
        __out.push('\n      </div>\n      ');
      
        if (pageNumber > 1 && (currentCollection[pageNumber - 2] != null)) {
          __out.push('\n      <a class="icon item" href="');
          __out.push(__sanitize(currentCollection[pageNumber - 2].url));
          __out.push('"><i class="left arrow icon"></i></a>\n      ');
        } else {
          __out.push('\n      <div class="disabled icon item"><i class="left arrow icon"></i></div>\n      ');
        }
      
        __out.push('\n      <div class="section ui dropdown link item">\n        <span class="count">');
      
        __out.push(__sanitize("" + pageNumber + " of " + pageCount));
      
        __out.push('</span>\n        <div class="menu">\n          ');
      
        for (index = _r = 0, _len9 = currentCollection.length; _r < _len9; index = ++_r) {
          element = currentCollection[index];
          __out.push('\n            <div class="');
          __out.push(__sanitize(element.id === this.document.id ? 'active ' : void 0));
          __out.push('item">\n              <a href="');
          __out.push(__sanitize(element.url));
          __out.push('">');
          __out.push(__sanitize(index + 1));
          __out.push('. ');
          __out.push(__sanitize(element.title));
          __out.push('</a>\n            </div>\n          ');
        }
      
        __out.push('\n        </div>\n      </div>\n      ');
      
        if (pageNumber !== pageCount && (currentCollection[pageNumber] != null)) {
          __out.push('\n      <a class="icon item" href="');
          __out.push(__sanitize(currentCollection[pageNumber].url));
          __out.push('"><i class="right arrow icon"></i></a>\n      ');
        } else {
          __out.push('\n      <div class="disabled icon item"><i class="right arrow icon"></i></div>\n      ');
        }
      
        __out.push('\n      <div class="right menu">\n        <div class="vertically fitted borderless item">\n          <iframe src="http://ghbtns.com/github-btn.html?user=semantic-org&repo=semantic-ui&type=watch&count=true"\n  allowtransparency="true" frameborder="0" scrolling="0" width="95" height="20"></iframe>\n        </div>\n        ');
      
        if (this.document.type === 'UI Element' || this.document.type === 'UI View' || this.document.type === 'UI Collection' || this.document.type === 'UI Module') {
          __out.push('\n<!--         <a class="popup overview icon item" data-content="Toggle Definition">\n          <i class="book icon"></i>\n        </a> -->\n        <a class="popup designer icon item" data-content="Designer Mode">\n          <i class="basic paint icon"></i>\n        </a>\n        <a class="popup developer icon item" data-content="Developer Mode">\n          <i class="terminal icon"></i>\n        </a>\n        ');
        }
      
        __out.push('\n        <a class="popup icon github item" data-content="View project on Github" href="https://github.com/quirkyinc/semantic">\n          <i class="icon github"></i>\n        </a>\n        <!--\n        <div class="ui simple dropdown item">\n          <i class="icon tint"></i> Theme\n          <div class="theme menu">\n            <div class="active item" data-theme="flat">Flat</div>\n            <div class="item" data-theme="shaded">Shaded</div>\n            <div class="item" data-theme="classic">Classic</div>\n          </div>\n        </div>\n        !-->\n      </div>\n    </div>\n  </div>\n    <div class="ui black huge launch right attached button">\n      <i class="icon list layout"></i>\n      <span class="text">Menu</span>\n    </div>\n  ');
      
        __out.push(this.content);
      
        __out.push('\n</body>\n\n</html>');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
