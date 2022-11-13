// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/javascript/icons.js":[function(require,module,exports) {
var svgPlaceholder = document.createElement('div');
svgPlaceholder.style.position = 'absolute';
svgPlaceholder.style.width = '0';
svgPlaceholder.style.height = '0';
svgPlaceholder.style.overflow = 'hidden';
document.body.appendChild(svgPlaceholder);
svgPlaceholder.innerHTML = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n    <symbol id=\"like\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n    <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n        d=\"M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8Z\"\n        data-follow-stroke=\"#f5f5f5\" />\n    </symbol>\n    <symbol id=\"download\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n        <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"M24 29 12 17h8V6h8v11h8L24 29Z\" clip-rule=\"evenodd\" data-follow-stroke=\"#f5f5f5\" />\n        <path stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\" d=\"M42 37H6M34 44H14\" data-follow-stroke=\"#f5f5f5\" />\n    </symbol>\n    <symbol id=\"share\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n        <path stroke-linejoin=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"M35 16a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM13 29a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z\" data-follow-stroke=\"#f5f5f5\" />\n        <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"m30 13.575-12.66 7.67M17.338 26.564l13.34 7.883\" data-follow-stroke=\"#f5f5f5\" />\n        <path stroke-linejoin=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\" d=\"M35 32a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z\"\n            data-follow-stroke=\"#f5f5f5\" />\n    </symbol>\n    <symbol id=\"comment\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n        <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"M44 6H4v30h9v5l10-5h21V6ZM14 21h20\" data-follow-stroke=\"#f5f5f5\" />\n    </symbol>\n    <symbol id=\"more\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n        <path stroke-linejoin=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z\" data-follow-stroke=\"#f5f5f5\" />\n        <circle fill=\"#f5f5f5\" r=\"3\" cy=\"24\" cx=\"14\" data-follow-fill=\"#f5f5f5\" />\n        <circle fill=\"#f5f5f5\" r=\"3\" cy=\"24\" cx=\"24\" data-follow-fill=\"#f5f5f5\" />\n        <circle fill=\"#f5f5f5\" r=\"3\" cy=\"24\" cx=\"34\" data-follow-fill=\"#f5f5f5\" />\n    </symbol>\n    <symbol id=\"play-once\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n        <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"M43.823 25.23a13.965 13.965 0 0 1-2.837 6.448A13.975 13.975 0 0 1 30 37H16C9.397 37 4 31.678 4 25c0-6.65 5.396-12 12-12h28\"\n            data-follow-stroke=\"#f5f5f5\" />\n        <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"m38 7 6 6-6 6M24 19v12M24 19l-3 3-1.5 1.5\" data-follow-stroke=\"#f5f5f5\" />\n    </symbol>\n    <symbol id=\"pre\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n        <path stroke-linejoin=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z\" data-follow-stroke=\"#f5f5f5\" />\n        <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"m22 31-7-7 7-7M31 31l-7-7 7-7\" data-follow-stroke=\"#f5f5f5\" />\n    </symbol>\n    <symbol id=\"play\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n        <path stroke-linejoin=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z\" data-follow-stroke=\"#f5f5f5\" />\n        <path stroke-linejoin=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\" d=\"M20 24v-6.928l6 3.464L32 24l-6 3.464-6 3.464V24Z\"\n            data-follow-stroke=\"#f5f5f5\" />\n    </symbol>\n    <symbol id=\"next\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n        <path stroke-linejoin=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z\" data-follow-stroke=\"#f5f5f5\" />\n        <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"m17 31 7-7-7-7M26 31l7-7-7-7\" data-follow-stroke=\"#f5f5f5\" />\n    </symbol>\n    <symbol id=\"list\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n        <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"M7.95 11.95h32M7.95 23.95h32M7.95 35.95h32\" data-follow-stroke=\"#f5f5f5\" />\n    </symbol>\n</svg>\n";
},{}],"src/javascript/index.js":[function(require,module,exports) {
"use strict";

require("./icons");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var $ = function $(selector) {
  return document.querySelector(selector);
};
var $$ = function $$(selector) {
  return document.querySelectorAll(selector);
};
var Player = /*#__PURE__*/function () {
  function Player(node) {
    _classCallCheck(this, Player);
    this.root = typeof node === 'string' ? $(node) : node;
    this.songList = [];
    this.currentIndex = 0;
    this.start();
    // https://github.com/Mohism-Wargo/Simulate-data/blob/main/music-list.json
  }
  _createClass(Player, [{
    key: "start",
    value: function start() {
      var _this = this;
      fetch('https://github.com/Mohism-Wargo/Simulate-data/blob/main/music-list.json', {
        mode: 'no-cors'
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log(data);
        _this.songList = data;
      });
    }
  }, {
    key: "bind",
    value: function bind() {}
  }]);
  return Player;
}();
new Player('#player');
},{"./icons":"src/javascript/icons.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55980" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/javascript/index.js"], null)
//# sourceMappingURL=/javascript.19a21263.js.map