/**
 * Created by yuan on 2016/2/17.
 */
var Demo = (function(){
    var vue;

    vue = new Vue({
        el: "body",
        data: {
            sitename: 'demo样例',
            menus: [],
            hadMenu: false
        },
        methods: {
            getNav: function(){
                var menus = this.menus;

                if(localStorage.menu){
                    this.hadMenu = true;
                    $.each(localStorage.menu.split(";"), function(j, q){
                        if($.inArray(q, menus) < 0){
                            var json = $.parseJSON(q);
                            menus.push(json)
                        }
                    });
                }else{
                    this.hadMenu = false;
                }
            }
        }
    });

    vue.getNav();
})();