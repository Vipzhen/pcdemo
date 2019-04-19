$(function(){
    ///轮播
    $(function() {
        //$("#toright").hide();
        //$("#toleft").hide();
        $('#toright').hover(function() {
            $("#toleft").hide()
        }, function() {
            $("#toleft").show()
        })
        $('#toleft').hover(function() {
            $("#toright").hide()
        }, function() {
            $("#toright").show()
        })
    })

    var t;
    var index = 0;
    /////自动播放
    t = setInterval(play, 1000)

    function play() {
        index++;
        if (index > 4) {
            index = 0
        }
        // console.log(index)
        $("#lunbobox ul li").eq(index).css({
            "background": "#999",
            "border": "1px solid #ffffff"
        }).siblings().css({
            "background": "#cccccc",
            "border": ""
        })

        $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
    };

    ///点击鼠标 图片切换
    $("#lunbobox ul li").click(function() {

        //添加 移除样式
        //$(this).addClass("lito").siblings().removeClass("lito"); //给当前鼠标移动到的li增加样式 且其余兄弟元素移除样式   可以在样式中 用hover 来对li 实现
        $(this).css({
            "background": "#999",
            "border": "1px solid #ffffff"
        }).siblings().css({
            "background": "#cccccc"
        })
        var index = $(this).index(); //获取索引 图片索引与按钮的索引是一一对应的
        // console.log(index);

        $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）
    });

    /////////////上一张、下一张切换
    $("#toleft").click(function() {
        index--;
        if (index <= 0) //判断index<0的情况为：开始点击#toright  index=0时  再点击 #toleft 为负数了 会出错
        {
            index = 4
        }
        console.log(index);
        $("#lunbobox ul li").eq(index).css({
            "background": "#999",
            "border": "1px solid #ffffff"
        }).siblings().css({
            "background": "#cccccc"
        })

        $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）必须要写
    }); // $("#imgbox a ")获取到的是一个数组集合 。所以可以用index来控制切换

    $("#toright").click(function() {
        index++;
        if (index > 4) {
            index = 0
        }
        console.log(index);
        $(this).css({
            "opacity": "0.5"
        })
        $("#lunbobox ul li").eq(index).css({
            "background": "#999",
            "border": "1px solid #ffffff"
        }).siblings().css({
            "background": "#cccccc"
        })
        $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）
    });
    $("#toleft,#toright").hover(function() {
        $(this).css({
            "color": "black"
        })
    },
    function() {
        $(this).css({
            "opacity": "0.3",
            "color": ""
        })
    })
    ///

    ///////鼠标移进  移出
    $("#lunbobox ul li,.lunbo a img,#toright,#toleft ").hover(
        ////////鼠标移进
        function() {
            $('#toright,#toleft').show()
            clearInterval(t);

        },
        ///////鼠标移开
        function() {
            //$('#toright,#toleft').hide()
            //alert('aaa')
            t = setInterval(play, 3000)

            function play() {
                index++;
                if (index > 4) {
                    index = 0
                }
                $("#lunbobox ul li").eq(index).css({
                    "background": "#999",
                    "border": "1px solid #ffffff"
                }).siblings().css({
                    "background": "#cccccc"
                })
                $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
            }
        })

        //tabs标签原生切换方法

        // $(function(){
        //     //查找触发事件的元素
        //     document.getElementById("qg_top1").style.zIndex="9";
        //     var tabs=document.querySelectorAll("[data-toggle=tab]");
        //     console.log(tabs);
        //     var n=10;
        //     //绑定事件处理函数
        //     for(var tab of tabs){
        //         tab.onclick=function(){
        //             var tab=this;
        //             //查找要修改的元素
        //             var id=tab.getAttribute("data-target");
        //             console.log(id);
        //             //用id查找对应div
        //             var content=document.getElementById(id);
        //             //修改元素                    
        //             content.style.zIndex=n;
        //             n++;
                    
        //         }
        //     }
        // })

        //tabs标签jQuery切换方法
    $(function(){
        $(".qgxx").find("div").hover(function(){
        $(this).attr("class","qg_top_on").siblings("div").attr("class","qg_top");
        $i=$(this).index();	
        $(".qg_t:eq("+$i+")").show().siblings("div").hide();
		})
    })

})