(function() {
  this.ecoTemplates || (this.ecoTemplates = {});
  this.ecoTemplates["development.html"] = function(__obj) {
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
      
        __out.push('  ---\nlayout      : \'default\'\ncss         : \'guide\'\n\ntitle       : \'Local Docs\'\ndescription : \'A guide to generating docs locally\'\ntype        : \'Semantic Project\'\n---\n<script src="/javascript/intro.js"></script>\n\n');
      
        __out.push(this.partial('header'));
      
        __out.push('\n<div class="main container">\n  <div class="peek">\n    <div class="ui vertical pointing secondary menu">\n      <a class="active item">Install Steps</a>\n      <a class="item">Using Grunt</a>\n    </div>\n  </div>\n\n  <h2 class="ui dividing header">Step by Step</h2>\n\n  <p>It may be useful to run the development docs locally when working on a forked version of semantic, as the docs themselves help in testing out changes to ui components.</p>\n\n  <h3 class="ui header">1. Install Node</h3>\n  <p>Semantic docs are written in DocPad which requires NodeJS. </p>\n\n  <div class="ui warning message">Make sure npm does not require sudo to operate, this might cause permissions issues.</div>\n\n  <p>There are many tutorials online on how to install node in your environment, here are a few we think are helpful:</p>\n\n  <ul class="ui list">\n    <li><a href="https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager">Node JS via Package Manager</a></li>\n    <li><a href="https://gist.github.com/isaacs/579814">Installing Node JS without sudo</a></li>\n  </ul>\n\n  <h3 class="ui header">2. Fork Semantic</h3>\n\n  <iframe src="http://ghbtns.com/github-btn.html?user=semantic-org&repo=semantic=ui&type=fork&count=true&size=large"\n  allowtransparency="true" frameborder="0" scrolling="0" width="90" height="30"></iframe>\n  <p>Fork the Semantic repo into a directory on your local machine and navigate into that directory</p>\n\n  <p>Alternatively, you can <a href="https://github.com/Semantic-Org/Semantic-UI/archive/master.zip">download the entire repository as a zip</a> instead of using Git</p>\n\n  <h3 class="ui header">3. Install Dependencies</h3>\n  <p>NPM (Node Package Manager) keeps track of all the dependencies required for the project.</p>\n\n  <p>Updating npm inside the local directory will grab all development dependencies from <code>package.json</code> and store them in the root of the project.</p>\n\n  <div class="code" data-title="Installing dependencies" data-type="terminal">\n    npm update; npm install;\n  </div>\n\n  <h3 class="ui header">4a Creating Packages for Server</h3>\n\n\n  <p>Additionally your server needs to have the latest version of Semantic built before the documentation will appear formatted correctly. Running <code>grunt build</code> will create a version of the library at <code>docs/build</code> available for your server</p>\n\n  <div class="code" data-title="Updating semantic for docs" data-type="terminal">\n    grunt build\n  </div>\n  <h3 class="ui header">4b Watching Files</h3>\n\n  <p>Docpad will automatically generate a static (html/css only) version of the documentation everytime you update a file inside <code>server/</code></p>\n\n  <p>If you would like it to build semantic everytime you edit a file inside <code>src/</code> you will have to run the grunt watch script.</p>\n\n  <div class="code" data-title="Installing dependencies" data-type="terminal">\n    grunt watch;\n  </div>\n\n  <h3 class="ui header">4c. Start Your Server</h3>\n\n  <p>Now that you\'ve installed all the dependencies, starting your server should be a simple command</p>\n\n  <div class="code" data-title="Starting server locally" data-type="terminal">\n    docpad run\n  </div>\n\n  <p>Docpad should now run the documentation on a local server accessible at <code>http://localhost:9778</code></p>\n\n  <p>A static version of the documentation will be generated every time you make a change to a document. This will also be available in the <code>docs/</code> folder.\n\n  <h3 class="ui header">5. (Optional) Install Karma</h3>\n\n  <p>\n    Unit tests are written in Jasmine, but are run using a test runner called Karma. To install karma you need to grab the npm package.\n  </p>\n  <div class="code" data-title="Installing Test Runner" data-type="terminal">\n    npm install -g karma\n  </div>\n\n  <p>Installing Karma will allow you to run the unit tests on Javascript to ensure all tests are passed when changes are made to javascript code. This will also occur automatically when you create a pull request</p>\n\n  <h2 class="ui dividing header">Using Grunt</h2>\n\n  <h3 class="ui header">Watch Changes in Source</h3>\n\n  <p>If you are working on fixing a UI component that is part of Semantic, your best bet is to work actively on the file in <code>/src/{type}/{elementname}/</code> while running a watch script from grunt. This will rebuild the docs after you make changes, so you can see if you have corrected the issue you are fixing.</p>\n\n  <p>To see exactly what this grunt tasks is doing view our <a href="https://github.com/semantic-org/Semantic-UI/blob/master/Gruntfile.js">commented gruntfile</a></p>\n\n  <div class="code" data-title="Watching Changes" data-type="terminal">\n    grunt\n  </div>\n\n  <p>The watch task is the default grunt task for Semantic, so you can start it quite simply. This will copy files automatically from the <code>src</code> directory, compiling LESS files, whenever any changes are made.</p>\n\n  <h3 class="ui header">Run Unit Tests</h3>\n  <p>Tests will automatically run with <code>grunt watch</code> if you have started karma</p>\n\n  <div class="code" data-title="Execute tests while developing" data-type="terminal">\n    karma start\n    grunt watch\n  </div>\n\n  <p>You can also run the test suite manually</p>\n  <div class="code" data-title="Execute tests while developing" data-type="terminal">\n    npm test\n    // or\n    grunt test\n    // or\n    karma run\n  </div>\n\n  <h3 class="ui header">Build Semantic Packages Locally</h3>\n  <p>There is also a separate grunt command for building minified, packaged, and compressed versions of the library. This might be useful when creating custom builds of Semantic.</p>\n\n  <div class="code" data-title="Building Release Files" data-type="terminal">\n    grunt build\n  </div>\n\n\n  <h3 class="ui header"></h3>\n\n  <div class="ui divider"></div>\n  <a class="ui large right labeled teal icon button" href="/introduction.html">\n    Next: Library Introduction\n    <i class="right arrow icon"></i>\n  </a>\n</div>\n');
      
      }).call(this);
      
    }).call(__obj);
    __obj.safe = __objSafe, __obj.escape = __escape;
    return __out.join('');
  };
}).call(this);
