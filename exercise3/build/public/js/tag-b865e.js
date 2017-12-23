webpackJsonp([1],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var f = new _index2.default();
xtag.register('x-praise', {
  content: '<div class="praise" id="thumb">\
    <div class="finger finger0"></div>\
    <div class="finger finger1"></div>\
    <div class="finger finger2"></div>\
    <div class="finger finger3"></div>\
    <div class="finger finger4"></div>\
    <div class="add" id="add">+1</div>\
  </div>',
  methods: {
    praise: function praise() {
      var _this = this;
      f.clickAction();
      var animation = _this.querySelector('#add');
      animation.className = 'hide num';
      setTimeout(function () {
        animation.className = 'hide';
      });
    }
  },
  events: {
    click: function click(e) {
      var _this = this;
    }
  }
});

/***/ })

},[4]);