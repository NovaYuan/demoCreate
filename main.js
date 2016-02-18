require.config({
    paths: {
        "jquery": "bower_components/jquery/dist/jquery.min",
        "bootstrap": "bower_components/bootstrap/dist/js/bootstrap.min",
        "vue": "bower_components/vue/dist/vue.min",
        "app": "js/app"
    }
});

require(["jquery", "vue"], function(a, b){
    console.log(a);
    console.log(b);
});

require(["app"], function(a){

});