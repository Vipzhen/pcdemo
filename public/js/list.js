$(function(){
    var $ul = $('[data-img=show]'),$shadow = $('.img-shadow'),
		    $largeImg=$('[data-img=lg]'),WIDTH=64,moved=0;
		$('[data-img=move]').on('mouseenter','img',function(){
			$(this).parent().addClass('hover').siblings().removeClass('hover');
			$('[data-img=md]').attr('src',$(this).data('md'));
			$('[data-img=lg]').attr('src',$(this).data('lg'));
		})
		.on('click','a.prev:not(.disabled)',()=>move(-1))
		.on('click','a.next:not(.disabled)',()=>move(1));
		function move(dir){
			moved+=dir;
			$ul.css('transform',`translate(${-WIDTH*moved}px)`);
			// 判断按钮状态
			if(moved==0)
				$('[data-img=move]>.prev').addClass('disabled');
			else
				$('[data-img=move]>.prev').removeClass('disabled');
			if(moved+5==$ul.children().length)
				$('[data-img=move]>.next').addClass('disabled');
			else
				$('[data-img=move]>.next').removeClass('disabled');
		}
		$('[data-img=cover]').hover(
			()=>$shadow.show().next().show(),
			()=>$shadow.hide().next().hide()
		).on('mousemove',e=>{
			var offsetX = e.offsetX,offsetY = e.offsetY;
			var left = offsetX-270/2,top=offsetY-270/2;
			left=left<0?0:left>270?270:left;
			top=top<0?0:top>270?270:top;
			$shadow.css({'left':left,'top':top});
			$largeImg.css({'left':-left*30/19,'top':-top*30/19});
        })
        
        $(function(){
            $('.num_dw').on('click',function(){
                console.log(1111)
                var num=$(this).prev();
                var n= parseInt(num.val());
                n++;
                num.val(n);
            }).prev().prev().on('click',function(){
                var num=$(this).next();
                var n= parseInt(num.val())
                if(n>1){
                    n--;
                }else{
                    return 
                }
                num.val(n);
            })
        })
})