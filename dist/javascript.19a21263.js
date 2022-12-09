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
svgPlaceholder.innerHTML = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n    <symbol id=\"like-icon\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n    <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n        d=\"M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8Z\"\n        data-follow-stroke=\"#f5f5f5\" />\n    </symbol>\n    <symbol id=\"download-icon\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n        <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"M24 29 12 17h8V6h8v11h8L24 29Z\" clip-rule=\"evenodd\" data-follow-stroke=\"#f5f5f5\" />\n        <path stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\" d=\"M42 37H6M34 44H14\" data-follow-stroke=\"#f5f5f5\" />\n    </symbol>\n    <symbol id=\"share-icon\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n        <path stroke-linejoin=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"M35 16a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM13 29a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z\" data-follow-stroke=\"#f5f5f5\" />\n        <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"m30 13.575-12.66 7.67M17.338 26.564l13.34 7.883\" data-follow-stroke=\"#f5f5f5\" />\n        <path stroke-linejoin=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\" d=\"M35 32a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z\"\n            data-follow-stroke=\"#f5f5f5\" />\n    </symbol>\n    <symbol id=\"comment-icon\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n        <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"M44 6H4v30h9v5l10-5h21V6ZM14 21h20\" data-follow-stroke=\"#f5f5f5\" />\n    </symbol>\n    <symbol id=\"more-icon\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n        <path stroke-linejoin=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z\" data-follow-stroke=\"#f5f5f5\" />\n        <circle fill=\"#f5f5f5\" r=\"3\" cy=\"24\" cx=\"14\" data-follow-fill=\"#f5f5f5\" />\n        <circle fill=\"#f5f5f5\" r=\"3\" cy=\"24\" cx=\"24\" data-follow-fill=\"#f5f5f5\" />\n        <circle fill=\"#f5f5f5\" r=\"3\" cy=\"24\" cx=\"34\" data-follow-fill=\"#f5f5f5\" />\n    </symbol>\n    <symbol id=\"pre-icon\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n        <path stroke-linejoin=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z\" data-follow-stroke=\"#f5f5f5\" />\n        <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"m22 31-7-7 7-7M31 31l-7-7 7-7\" data-follow-stroke=\"#f5f5f5\" />\n    </symbol>\n    <symbol id=\"play-icon\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n        <path stroke-linejoin=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z\" data-follow-stroke=\"#f5f5f5\" />\n        <path stroke-linejoin=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\" d=\"M20 24v-6.928l6 3.464L32 24l-6 3.464-6 3.464V24Z\"\n            data-follow-stroke=\"#f5f5f5\" />\n    </symbol>\n    <symbol id=\"next-icon\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n        <path stroke-linejoin=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z\" data-follow-stroke=\"#f5f5f5\" />\n        <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"m17 31 7-7-7-7M26 31l7-7-7-7\" data-follow-stroke=\"#f5f5f5\" />\n    </symbol>\n    <symbol id=\"list-icon\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n        <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"M7.95 11.95h32M7.95 23.95h32M7.95 35.95h32\" data-follow-stroke=\"#f5f5f5\" />\n    </symbol>\n    <symbol id=\"pause-icon\"\"  xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n        <path stroke-linejoin=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z\" data-follow-stroke=\"#f5f5f5\" />\n        <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\" d=\"M19 18v12M29 18v12\"\n            data-follow-stroke=\"#f5f5f5\" />\n    </symbol>\n    <symbol id=\"order-icon\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n        <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"M4 25c0-6.65 5.396-12 12-12h28\" data-follow-stroke=\"#f5f5f5\" />\n        <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"m38 7 6 6-6 6M44 23c0 6.65-5.396 12-12 12H4\" data-follow-stroke=\"#f5f5f5\" />\n        <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\" d=\"m10 41-6-6 6-6\"\n            data-follow-stroke=\"#f5f5f5\" />\n    </symbol>\n    <symbol id=\"unordered-icon\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n        <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"m40 33 4 4-4 4M40 7l4 4-4 4\" data-follow-stroke=\"#f5f5f5\" />\n        <path stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"M44 11h-7c-7.18 0-13 5.82-13 13s5.82 13 13 13h7M4 37h7c7.18 0 13-5.82 13-13s-5.82-13-13-13H4\"\n            data-follow-stroke=\"#f5f5f5\" />\n    </symbol>\n    <symbol id=\"loop-icon\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n        <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"M43.823 25.23a13.965 13.965 0 0 1-2.837 6.448A13.975 13.975 0 0 1 30 37H16C9.397 37 4 31.678 4 25c0-6.65 5.396-12 12-12h28\"\n            data-follow-stroke=\"#f5f5f5\" />\n        <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#f5f5f5\"\n            d=\"m38 7 6 6-6 6M24 19v12M24 19l-3 3-1.5 1.5\" data-follow-stroke=\"#f5f5f5\" />\n    </symbol>\n    <symbol id=\"hidden-icon\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 48 48\">\n        <path stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"4\" stroke=\"#73A4B9\"\n            d=\"M36 12 24 24 12 12M36 24 24 36 12 24\" data-follow-stroke=\"#73A4B9\" />\n    </symbol>  \n</svg>\n";
},{}],"src/javascript/Swiper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Swiper = /*#__PURE__*/_createClass(function Swiper(node) {
  _classCallCheck(this, Swiper);
  if (!node) throw new Error('请传递需要绑定的DOM元素');
  var root = typeof node === 'string' ? document.querySelector(node) : node;
  var eventHub = {
    'swipeLeft': [],
    'swipeRight': []
  };
  var initX;
  var newX;
  var clock;
  root.ontouchstart = function (e) {
    initX = e.changedTouches[0].pageX;
  };
  root.ontouchmove = function (e) {
    if (clock) clearInterval(clock);
    clock = setTimeout(function () {
      newX = e.changedTouches[0].pageX;
      if (newX - initX > 50) {
        eventHub['swipeRight'].forEach(function (fn) {
          return fn.bind(root)();
        });
      } else if (initX - newX > 50) {
        eventHub['swipeLeft'].forEach(function (fn) {
          return fn.bind(root)();
        });
      }
    }, 100);
  };
  this.on = function (type, fn) {
    if (eventHub[type]) {
      eventHub[type].push(fn);
    }
  };
  this.off = function (type, fn) {
    var index = eventHub[type].indexOf(fn);
    if (index !== -1) {
      eventHub[type].splice(index, 1);
    }
  };
});
var _default = Swiper;
exports.default = _default;
},{}],"src/javascript/index.js":[function(require,module,exports) {
"use strict";

require("./icons");
var _Swiper = _interopRequireDefault(require("./Swiper.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
// 可选的播放模式
var avaliablePlayModeList = ['order', 'unordered', 'loop'];
var Player = /*#__PURE__*/function () {
  function Player(node) {
    var _this = this;
    _classCallCheck(this, Player);
    this.root = typeof node === 'string' ? document.querySelector(node) : node;
    this.$ = function (selector) {
      return _this.root.querySelector(selector);
    };
    this.$$ = function (selector) {
      return _this.root.querySelectorAll(selector);
    };
    this.songList = [];
    this.currentIndex = 0;
    this.audio = new Audio();
    this.lyricsArr = [];
    this.lyricIndex = -1;
    this.setUpPlayMode();
    this.start();
    this.bind();
    // https://mohism-wargo.github.io/Simulate-data/music-list.json
  }

  // 设置模式按钮的UI
  _createClass(Player, [{
    key: "setPlayModeButton",
    value: function setPlayModeButton() {
      var button = this.$('.btn-play-mode');
      button.classList = [];
      button.classList.add('btn-play-mode');
      button.classList.add(this.playMode);
      button.querySelector('use').setAttribute('xlink:href', "#".concat(this.playMode, "-icon"));
    }
    // 初始化播放模式
  }, {
    key: "setUpPlayMode",
    value: function setUpPlayMode() {
      // 从本地读取模式
      var modeFromStore = window.localStorage.getItem('playMode');
      // 校验
      if (avaliablePlayModeList.includes(modeFromStore)) {
        this.playMode = modeFromStore;
      } else {
        // 不是有效的就使用默认模式
        this.playMode = avaliablePlayModeList[0];
      }
      this.setPlayModeButton();
    }

    // 切换模式
  }, {
    key: "changePlayMode",
    value: function changePlayMode() {
      // 按顺序切换模式
      var nextPlayModeIndex = (avaliablePlayModeList.indexOf(this.playMode) + 1) % avaliablePlayModeList.length;
      this.playMode = avaliablePlayModeList[nextPlayModeIndex];
      // 记录到本地
      window.localStorage.setItem('playMode', this.playMode);
      // 设置ui
      this.setPlayModeButton();
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;
      fetch('https://mohism-wargo.github.io/Simulate-data/music-list.json').then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log(data);
        _this2.songList = data;
        _this2.loadSong();
        _this2.showPlayList();
      });
    }
  }, {
    key: "bind",
    value: function bind() {
      var _this3 = this;
      var self = this;
      this.$('.btn-play').onclick = function () {
        if (this.classList.contains('pause')) {
          self.audio.play();
          self.animationPlayState.call(self);
          this.classList.remove('pause');
          this.classList.add('playing');
          this.querySelector('use').setAttribute('xlink:href', '#pause-icon');
        } else if (this.classList.contains('playing')) {
          self.audio.pause();
          self.animationPlayState.call(self);
          this.classList.remove('playing');
          this.classList.add('pause');
          this.querySelector('use').setAttribute('xlink:href', '#play-icon');
        }
      };

      // 统一展示播放列表的逻辑
      this.$('.btn-list').onclick = this.showList.bind(this);
      this.$('.hidden').onclick = this.hideList.bind(this);

      // 列表音乐播放的逻辑
      this.$('.list').addEventListener('click', function (e) {
        var t = e.target;
        if (t.tagName.toLowerCase() === 'p') {
          _this3.currentIndex = t.dataset.index;
          _this3.hideList();
          _this3.loadSong();
          _this3.playSong();
          _this3.playIcon();
          _this3.animation();
        }
      });

      // 统一播放上下一首的逻辑
      this.$('.btn-pre').onclick = this.preSong.bind(this);
      this.$('.btn-next').onclick = this.nextSong.bind(this);
      this.audio.addEventListener('ended', this.nextSong.bind(this));
      this.$('.btn-play-mode').onclick = this.changePlayMode.bind(this);
      this.audio.ontimeupdate = function () {
        self.locateLyric();
        self.setProgressBar();
      };
      var swiper = new _Swiper.default(this.$('.show-area'));
      swiper.on('swipeLeft', function () {
        this.classList.remove('home');
        this.classList.add('all-lyrics');
        self.slideRight.call(self);
      });
      swiper.on('swipeRight', function () {
        this.classList.remove('all-lyrics');
        this.classList.add('home');
        self.slideLeft.call(self);
      });
    }
  }, {
    key: "slideRight",
    value: function slideRight() {
      var capsule = this.$('.slide .current');
      if (capsule.classList.contains('left')) {
        capsule.classList.remove('left');
        capsule.classList.add('right');
      }
    }
  }, {
    key: "slideLeft",
    value: function slideLeft() {
      var capsule = this.$('.slide .current');
      if (capsule.classList.contains('right')) {
        capsule.classList.remove('right');
        capsule.classList.add('left');
      }
    }

    // 播放上一首歌
  }, {
    key: "preSong",
    value: function preSong() {
      // 根据不同的模式进行不同的处理
      switch (this.playMode) {
        case 'order':
          {
            if (this.currentIndex !== 0) {
              this.currentIndex = (this.currentIndex - 1) % this.songList.length;
            } else if (this.currentIndex === 0) {
              this.currentIndex = this.songList.length - 1;
            }
            this.loadSong();
            break;
          }
        case 'unordered':
          {
            this.currentIndex = Math.floor(Math.random() * this.songList.length);
            console.log('当前歌曲的下标：', this.currentIndex);
            this.loadSong();
            break;
          }
        case 'loop':
          {
            this.audio.currentTime = 0;
            break;
          }
        default:
          {
            return console.error('不是有效的播放模式');
          }
      }
      this.playSong();
      this.playIcon();
      this.animation();
    }

    // 播放下一首歌
  }, {
    key: "nextSong",
    value: function nextSong() {
      // 根据不同的模式进行不同的处理
      switch (this.playMode) {
        case 'order':
          {
            this.currentIndex = (this.currentIndex + 1) % this.songList.length;
            // console.log("余数:", this.currentIndex)
            this.loadSong();
            break;
          }
        case 'unordered':
          {
            this.currentIndex = Math.floor(Math.random() * this.songList.length);
            this.loadSong();
            break;
          }
        case 'loop':
          {
            this.audio.currentTime = 0;
            break;
          }
        default:
          {
            return console.error('不是有效的播放模式');
          }
      }
      console.log('当前歌曲的下标：', this.currentIndex);
      this.playSong();
      this.playIcon();
      this.animation();
    }
    // 切歌时播放UI变化
  }, {
    key: "playIcon",
    value: function playIcon() {
      var btnPlay = this.$('.btn-play');
      if (btnPlay.classList.contains('pause')) {
        btnPlay.classList.remove('pause');
        btnPlay.classList.add('playing');
        btnPlay.querySelector('use').setAttribute('xlink:href', '#pause-icon');
      }
    }
    //  动效播放的逻辑
  }, {
    key: "animationPlayState",
    value: function animationPlayState() {
      var frame = this.$('.frame');
      if (frame.classList.contains('pause')) {
        frame.classList.remove('pause');
        frame.classList.add('running');
      } else if (frame.classList.contains('running')) {
        frame.classList.remove('running');
        frame.classList.add('pause');
      }
    }
    //  切歌时动效播放的逻辑
  }, {
    key: "animation",
    value: function animation() {
      var frame = this.$('.frame');
      if (frame.classList.contains('pause')) {
        frame.classList.remove('pause');
        frame.classList.add('running');
      }
    }

    //  播放列表的展示与隐藏
  }, {
    key: "showList",
    value: function showList() {
      var playBox = this.$('.playBox');
      if (playBox.classList.contains('hide')) {
        playBox.classList.remove('hide');
        playBox.classList.add('display');
      }
    }
  }, {
    key: "hideList",
    value: function hideList() {
      var playBox = this.$('.playBox');
      if (playBox.classList.contains('display')) {
        playBox.classList.remove('display');
        playBox.classList.add('hide');
      }
    }
  }, {
    key: "showPlayList",
    value: function showPlayList() {
      var Arr = this.songList;
      var fragment = document.createDocumentFragment();
      // const list = Arr.map(item => {
      //     return {
      //         id: item.id,
      //         title: item.title,
      //         author: item.author
      //     }
      // })
      // console.log(list)
      Arr.forEach(function (arr, index) {
        var node = document.createElement('p');
        node.setAttribute('data-index', index);
        var span = document.createElement('span');
        node.innerText = arr.title;
        span.innerText = ' - ' + arr.author;
        node.appendChild(span);
        fragment.appendChild(node);
      });
      this.$('.playList .list').innerHTML = '';
      this.$('.playList .list').appendChild(fragment);
    }
    //  播放列表的展示与隐藏 ^
  }, {
    key: "loadSong",
    value: function loadSong() {
      var _this4 = this;
      var songObj = this.songList[this.currentIndex];
      this.$('.header h1').innerText = songObj.title;
      this.$('.header p').innerText = songObj.author + '-' + songObj.album;
      this.audio.src = songObj.url;
      this.audio.onloadedmetadata = function () {
        return _this4.$('.time-end').innerText = _this4.formatTime(_this4.audio.duration);
      };
      this.loadLyrics();
    }
  }, {
    key: "playSong",
    value: function playSong() {
      var _this5 = this;
      this.audio.oncanplaythrough = function () {
        return _this5.audio.play();
      };
    }
  }, {
    key: "loadLyrics",
    value: function loadLyrics() {
      var _this6 = this;
      fetch(this.songList[this.currentIndex].lyric).then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log(data.lrc.lyric);
        _this6.setLyrics(data.lrc.lyric);
        window.lyrics = data.lrc.lyric;
      });
    }
  }, {
    key: "locateLyric",
    value: function locateLyric() {
      if (this.lyricIndex === this.lyricsArr.length - 1) return;
      var currentTime = this.audio.currentTime * 1000;
      var nextLineTime = this.lyricsArr[this.lyricIndex + 1][0];
      if (currentTime > nextLineTime && this.lyricIndex < this.lyricsArr.length - 1) {
        this.lyricIndex++;
        var node = this.$('[data-time="' + this.lyricsArr[this.lyricIndex][0] + '"]');
        if (node) this.setLyricToCenter(node);
        this.$$('.show-area .lyrics p')[0].innerText = this.lyricsArr[this.lyricIndex][1];
        this.$$('.show-area .lyrics p')[1].innerText = this.lyricsArr[this.lyricIndex + 1] ? this.lyricsArr[this.lyricIndex + 1][1] : '';
      }
    }
  }, {
    key: "setLyrics",
    value: function setLyrics(lyrics) {
      this.lyricIndex = 0;
      var fragment = document.createDocumentFragment();
      var lyricsArr = [];
      this.lyricsArr = lyricsArr;
      lyrics.split(/\n/).filter(function (str) {
        return str.match(/\[.+?\]/);
      }).forEach(function (line) {
        var str = line.replace(/\[.+?\]/g, '');
        line.match(/\[.+?\]/g).forEach(function (t) {
          t = t.replace(/[\[\]]/g, '');
          var milliseconds = parseInt(t.slice(0, 2)) * 60 * 1000 + parseInt(t.slice(3, 5)) * 1000 + parseInt(t.slice(6));
          if (str !== '') lyricsArr.push([milliseconds, str]);
        });
      });
      this.lyricsArr.filter(function (line) {
        return line[1].trim() !== '';
      });
      this.lyricsArr.sort(function (v1, v2) {
        if (v1[0] > v2[0]) {
          return 1;
        } else {
          return -1;
        }
      }).forEach(function (line) {
        var node = document.createElement('p');
        node.setAttribute('data-time', line[0]);
        node.innerText = line[1];
        fragment.appendChild(node);
      });
      this.$('.show-lyrics .container').innerHTML = '';
      this.$('.show-lyrics .container').appendChild(fragment);
    }
  }, {
    key: "setLyricToCenter",
    value: function setLyricToCenter(node) {
      var translateY = node.offsetTop - this.$('.show-lyrics').offsetHeight / 2;
      translateY = translateY > 0 ? translateY : 0;
      this.$('.show-lyrics .container').style.transform = "translateY(-".concat(translateY, "px)");
      this.$$('.show-lyrics p').forEach(function (node) {
        return node.classList.remove('current');
      });
      node.classList.add('current');
    }
  }, {
    key: "setProgressBar",
    value: function setProgressBar() {
      var percent = this.audio.currentTime / this.audio.duration * 100 + '%';
      this.$('.bar .progress').style.width = percent;
      this.$('.time-start').innerText = this.formatTime(this.audio.currentTime);
    }
  }, {
    key: "formatTime",
    value: function formatTime(secondsTotal) {
      var minutes = parseInt(secondsTotal / 60);
      minutes = minutes >= 10 ? '' + minutes : '0' + minutes;
      var seconds = parseInt(secondsTotal % 60);
      seconds = seconds >= 10 ? '' + seconds : '0' + seconds;
      return minutes + ':' + seconds;
    }
  }]);
  return Player;
}();
window.p = new Player('#player');
},{"./icons":"src/javascript/icons.js","./Swiper.js":"src/javascript/Swiper.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59882" + '/');
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