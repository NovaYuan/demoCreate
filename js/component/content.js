/**
 * Created by yuan on 2016/2/17.
 */
var Content = (function(){
    var setItem,
        getItem;

    setItem = new Vue({
        el: ".input-content",
        data: {
            item: "",
            link: "",
            components: [
                {
                    value: 'menu',
                    text: 'menu'
                }
            ]
        },
        methods: {
            enterItem: function(e){
                if(e.keyCode == 13){
                    this.addItem();
                }
            },
            addItem: function(e){
                var selected = $("select[name=components]").val(),
                    inputVal = $("input[name='create-content']").val(),
                    linkVal = $("input[name='link']").val(),
                    $list = $("#item-list");

                if(inputVal == ""){
                    return;
                }
                getItem.exists = true;
                if(localStorage[selected]){
                    localStorage[selected] += ';' + '{"item": "' + this.item + '", "link": "'+ this.link +'"}'
                }else{
                    localStorage[selected] = '{"item": "' + this.item + '", "link": "'+ this.link +'"}'
                }

                //if($list.children().length <= 0 || $(".item-name-" + selected).length <= 0){
                //    $list.append(
                //        '<li>' +
                //        '<span class="green item-name-'+ selected +'">'+ selected +': </span><br/>' +
                //        '<span class="item-label">' +
                //        '<label class="label label-success" v-on:click="deleteItem">'+ this.item +'</label>' +
                //        '</span>' +
                //        '</li>'
                //    )
                //}else{
                //    $(".item-name-" + selected).parent().append(
                //        '<span class="item-label">' +
                //        '<label class="label label-success" v-on:click="deleteItem">'+ this.item +'</label>' +
                //        '</span>'
                //    )
                //}
            },
            addLine: function(e){
                if(e.target.value === ""){
                    e.target.value += "/"
                }
            }
        }
    });

    getItem = new Vue({
        el: ".data-show",
        data: {
            itemNames: [],
            items: [],
            exists: false
        },
        methods: {
            getItems: function(e){
                var items = this.items,
                    name = this.itemNames;

                if(localStorage.length > 0){
                    this.exists = true;
                    for(var i = 0; i < localStorage.length; i++){
                        name.push(localStorage.key(i));

                        $.each(localStorage[localStorage.key(i)].split(";"), function(j, q){
                            if($.inArray(q, items) < 0){
                                var json = $.parseJSON(q);
                                items.push(json)
                            }
                        });
                    }
                }
            },
            openModal: function(e){
                var name,
                    content,
                    modal;

                name = $(e.target).data("name");
                modal = new Modal(name);
            },
            deleteItem: function(e){
                var selected = $("select[name=components]").val();

                this.items.splice(-1);
                localStorage.setItem(selected, this.items);
                if(localStorage[selected] == ""){
                    localStorage.clear();
                    $("#item-list").empty();
                    this.exists = false;
                }
            }
        }
    });

    getItem.getItems();
});