(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "axios"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("axios"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.axios);
    global.AnimalApi = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _axios) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _axios = _interopRequireDefault(_axios);
  function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
  const getDog = () => {
    return _axios.default.get('https://random.dog/woof.json').then(r => {
      return {
        imageSrc: r.data.url,
        text: 'DOG'
      };
    });
  };
  const getCat = () => {
    return _axios.default.get('https://aws.random.cat/meow').then(r => {
      return {
        imageSrc: r.data.file,
        text: 'CAT'
      };
    });
  };
  const getGoat = () => {
    return Promise.resolve({
      imageSrc: 'http://placegoat.com/200',
      text: 'GOAT'
    });
  };
  var _default = _exports.default = {
    getCat,
    getDog,
    getGoat
  };
});