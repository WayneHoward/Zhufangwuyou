$(function(){
    touch.on($('.close'),'tap',function(){
        $('.ad').hide();
    });

    //tab切换
    $('.attention .title p').each(function(index,item){
        touch.on($(item),'tap',function(){
            $('.attention .title p').css({
                'color':'#848484',
                'border-bottom':'none'
            });
            $(item).css({
                'color':'#ff8a00',
                'border':'0 0 1px 0',
                'border-bottom-style':'solid',
                'border-color':'#ff8a00'
            });
            $('.attention .content').hide();
            switch(index){
                case 0 :
                    $('.attention .c2').hide();
                    $('.attention .c1').show();
                break;
                case 1 :
                    $('.attention .c1').hide();
                    $('.attention .c2').show();
                break;
            }
        });
    });
});
