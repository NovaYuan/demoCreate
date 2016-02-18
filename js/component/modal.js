var Modal = (function(title, content){
    var vue,
        contentTpt,
        titleTpt,
        $modal = $("#common-modal");

    contentTpt = Vue.extend({
        template: content
    });
    titleTpt = Vue.extend({
        template: title
    });
    vue = new Vue({
        el: "#common-modal",
        data: {
            title: title
        },
        methods: {
            renderContent: function(){

                vue.$mount('.modal-body')
            }
        }
    });

    vue.renderContent();
    $modal.modal('show');
});