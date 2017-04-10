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