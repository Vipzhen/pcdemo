$(function(){
    $(".add").on("click",function(){
        var prev=$(this).prev()
        var add=parseInt(prev.html());
        add++;
        prev.html(add); 
    })
    $(".minu").on("click",function(){
        var next=$(this).next();
        var minu=next.html();
        if(minu>1){
            minu--;
            next.html(minu);
        }   
    })
})