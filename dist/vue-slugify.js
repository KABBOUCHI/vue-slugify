(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
const VueSlugify = require('./vue-slugify.js');

global.VueSlugify = VueSlugify;

window.Vue && global.Vue.use(VueSlugify);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./vue-slugify.js":2}],2:[function(require,module,exports){
var VueSlugify = {
    install: function (Vue) {
        Vue.directive('slugify', {

                    twoWay: true,
                    bind: function(el) {

                    el.addEventListener('keyup', function() {
                        this.value = slugify(this.value)
                    });


            }
        })
    }
};

function slugify(text){

    return text.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/--+/g, '-'); // Replace multiple - with single -
}

if (typeof exports == "object") {
    module.exports = VueSlugify
} else if (typeof define == "function" && define.amd) {
    define([], function() {
        return VueSlugify
    })
}
},{}]},{},[1]);
