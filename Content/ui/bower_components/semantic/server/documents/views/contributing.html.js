(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["contributing.html"] = function(__obj) {
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
      
        __out.push('  ---\nlayout      : \'default\'\ncss         : \'guide\'\n\ntitle       : \'Contributing\'\ndescription : \'It takes a village\'\ntype        : \'Semantic Project\'\n---\n<script src="/javascript/intro.js"></script>\n\n');
      
        __out.push(this.partial('header', this.tabs = {
          introduction: 'Introduction',
          contributing: 'Contributing',
          learn: 'Learning More'
        }));
      
        __out.push('\n\n<div class="main container">\n\n  <div class="ui active tab" data-tab="introduction">\n\n    <p>There are a variety of ways to contribute to the development of Semantic. We are a very new project and are looking for an enthusiastic and like-minded group of core contributors.\n\n    <h3 class="ui header">Publicity</h3>\n\n    <p>One of the easiest ways to support Semantic UI is to get the word out</p>\n\n    <script id=\'fbrob7c\'>(function(i){var f,s=document.getElementById(i);f=document.createElement(\'iframe\');f.src=\'//api.flattr.com/button/view/?uid=semantic-org&button=compact&url=https%3A%2F%2Fgithub.com%2Fsemantic-org%2FSemantic-UI\';f.title=\'Flattr\';f.height=31;f.width=110;f.style.marginRight=10;f.style.borderWidth=0;s.parentNode.insertBefore(f,s);})(\'fbrob7c\');</script>\n\n    <iframe src="http://ghbtns.com/github-btn.html?user=semantic-org&repo=semantic=ui&type=watch&count=true&size=large"\n    allowtransparency="true" frameborder="0" scrolling="0" width="90" height="30"></iframe>\n\n    <iframe src="http://ghbtns.com/github-btn.html?user=semantic-org&repo=semantic=ui&type=follow&count=true&size=large"\n    allowtransparency="true" frameborder="0" scrolling="0" width="170" height="30"></iframe>\n\n    <iframe src="http://ghbtns.com/github-btn.html?user=semantic-org&repo=semantic=ui&type=fork&count=true&size=large"\n    allowtransparency="true" frameborder="0" scrolling="0" width="90" height="30"></iframe>\n\n    <a href="https://twitter.com/intent/tweet?button_hashtag=semanticui" class="twitter-hashtag-button" data-size="large" data-url="http://www.semantic-ui.com"></a>\n\n    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\'://platform.twitter.com/widgets.js\';fjs.parentNode.insertBefore(js,fjs);}}(document, \'script\', \'twitter-wjs\');</script>\n\n    <h3 class="ui header">Squashing Bugs</h3>\n\n    <p>Please submit any bugs you encounter when using the library to our <a href="https://github.com/semantic-org/Semantic-UI/issues?state=open">Github Issues Tracker</a>.</p>\n\n    <p>Be sure to include a set of steps to reproduce the issue and any related information, browser, OS etc. If we can\'t see the issue then it will make solving things much more difficult.</p>\n\n    <div class="ui warning message">When submitting a bug report, please <a href="http://jsfiddle.net/pMDsH/">Fork this JSFiddle</a> to create a test-case. It will have Semantic and normalize.css included for you automatically.</div>\n\n    <a class="ui teal button" href="https://github.com/semantic-org/Semantic-UI/issues/new"><i class="github icon"></i> Submit a bug report</a>\n\n    <h3 class="ui header">Pull Requests</h3>\n\n    <p>If you see a bug and you\'d like to fix it, feel free to open a pull request.</p>\n    <div class="ui buttons">\n      <a class="ui teal button" href="https://github.com/semantic-org/Semantic-UI/compare/">Create a Pull Request</a>\n      <a class="ui button" href="https://github.com/semantic-org/Semantic-UI/issues?state=open">View Open Issues</a>\n    </div>\n\n  </div>\n\n  <div class="ui tab" data-tab="contributing">\n\n    <h2 class="ui dividing header">Ideas</h2>\n\n    <p>Semantic is looking for people to help contribute new core UI components, and suggest extensions for the library.</p>\n\n    <p>If you have suggestions for components missing from Semantic which you\'d like to see in future versions please add them to our public UI Component board. The current list of upcoming components, and their current development status can be seen on the contributor UI board.</p>\n\n    <a class="ui button" href="https://github.com/semantic-org/Semantic-UI/issues/new"><i class="lightbulb icon"></i> Add an idea</a>\n\n    <h2 class="ui dividing header">Code</h2>\n\n    <p>We are looking for a few good coders to help us push out important new features for a release version of Semantic. Here\'s an overview of current features in development</p>\n\n    <h3 class="ui header">CSS Variables</h3>\n\n    <p>We are working on porting Semantic to using CSS variables to allow for easier theming. We are currently planning on using a CSS Pre-processor to move useful values over to variables. The current plan is to <b>not use mix-ins or pre-processor specific code</b> besides variables, and to add vendor prefixing using Grunt.</p>\n    <a class="ui teal vertical animated button" href="mailto:jacklukic@gmail.com?Subject=I%20would%20love%20to%20work%20on%20%3Cinsert%20feature%20name%3E&Body=Hey%2C%20I%20just%20wanted%20to%20introduce%20myself%0A%0A%3CHere%27s%20a%20link%20to%20info%20about%20me%20or%20my%20github%3E%0A%0A%3CHere%27s%20a%20bit%20about%20what%20i%20need%20to%20help%20contribute%3E%0A%0A%3CHere%27s%20how%20i%20think%20i%27ll%20get%20started%20on%20that%20feature%3E">\n      <div class="visible content">Help code this</div>\n      <div class="hidden content"><i class="mail icon"></i> Reach Out</div>\n    </a>\n    <a class="ui button" href="https://github.com/semantic-org/Semantic-UI/issues/216">Share Ideas</a>\n\n    <div class="ui section divider"></div>\n\n    <h3 class="ui header">Example Layouts</h3>\n\n    <p>We are looking to create example layouts with Semantic to help people make sites quicker, and to learn the intracicies of using Semantic UI. The plan is to eventually create a sister site <b>learnsemantic.com</b> which will contain useful features for learning to use Semantic.</p>\n\n    <a class="ui teal vertical animated button" href="mailto:jacklukic@gmail.com?Subject=I%20would%20love%20to%20work%20on%20%3Cinsert%20feature%20name%3E&Body=Hey%2C%20I%20just%20wanted%20to%20introduce%20myself%0A%0A%3CHere%27s%20a%20link%20to%20info%20about%20me%20or%20my%20github%3E%0A%0A%3CHere%27s%20a%20bit%20about%20what%20i%20need%20to%20help%20contribute%3E%0A%0A%3CHere%27s%20how%20i%20think%20i%27ll%20get%20started%20on%20that%20feature%3E">\n      <div class="visible content">Help code this</div>\n      <div class="hidden content"><i class="mail icon"></i> Reach Out</div>\n    </a>\n    <a class="ui button" href="https://github.com/semantic-org/Semantic-UI/issues/206">Share Ideas</a>\n\n    <div class="ui section divider"></div>\n\n    <h3 class="ui header">Build Tools</h3>\n\n    <p>We need to create a customizer for Semantic so user\'s can choose which components they would like to include and create custom zips with their minified concatenated code.</p>\n    <p>Most likely this means creating a standalone server that can take API requests for custom builds of semantic and return zip with minified and uncompressed source, or with a little ingenuity in-page javascript which uses JSZIP to do the same</p>\n\n    <a class="ui teal vertical animated button" href="mailto:jacklukic@gmail.com?Subject=I%20would%20love%20to%20work%20on%20%3Cinsert%20feature%20name%3E&Body=Hey%2C%20I%20just%20wanted%20to%20introduce%20myself%0A%0A%3CHere%27s%20a%20link%20to%20info%20about%20me%20or%20my%20github%3E%0A%0A%3CHere%27s%20a%20bit%20about%20what%20i%20need%20to%20help%20contribute%3E%0A%0A%3CHere%27s%20how%20i%20think%20i%27ll%20get%20started%20on%20that%20feature%3E">\n      <div class="visible content">Help code this</div>\n      <div class="hidden content"><i class="mail icon"></i> Reach Out</div>\n    </a>\n    <a class="ui button" href="https://github.com/semantic-org/Semantic-UI/issues/189">Share Ideas</a>\n\n    <div class="ui section divider"></div>\n\n    <h3 class="ui header">Test Coverage</h3>\n\n    <p>Semantic uses <a href="">Jasmine</a> with <a href="http://karma-runner.github.io/0.10/index.html" target="_blank">Karma Test Runner</a> and <a href="https://travis-ci.org/semantic-org/Semantic-UI" target="_blank">Travis CI</a> to write unit tests for our UI modules.</p>\n\n    <p>We need help to increase our code coverage by writing Jasmine tests for <a href="/module.html">modules</a> and to write feature specs which can be used to write tests.</p>\n\n    <a class="ui teal vertical animated button" href="mailto:jacklukic@gmail.com?Subject=I%20would%20love%20to%20work%20on%20%3Cinsert%20feature%20name%3E&Body=Hey%2C%20I%20just%20wanted%20to%20introduce%20myself%0A%0A%3CHere%27s%20a%20link%20to%20info%20about%20me%20or%20my%20github%3E%0A%0A%3CHere%27s%20a%20bit%20about%20what%20i%20need%20to%20help%20contribute%3E%0A%0A%3CHere%27s%20how%20i%20think%20i%27ll%20get%20started%20on%20that%20feature%3E">\n      <div class="visible content">Help code this</div>\n      <div class="hidden content"><i class="mail icon"></i> Reach Out</div>\n    </a>\n    <a class="ui button" href="https://github.com/semantic-org/Semantic-UI/issues/244">Share Ideas</a>\n\n  </div>\n\n  <div class="ui tab" data-tab="learn">\n\n    <h3 class="ui header">Style Guide</h3>\n    <p>Contributors may find it useful to read over the coding guidelines for the project. Most importantly, the guide for language, as it is one of the most important parts about Semantic UI.</p>\n\n    <div class="ui buttons">\n      <a class="ui button" href="/guide/styleguide.html">Language</a>\n      <a class="ui button" href="/guide/cssguide.html">CSS</a>\n      <a class="ui button" href="/guide/javascriptguide.html">Javascript</a>\n    </div>\n  </div>\n</div>\n');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
