$(function(){
    var aa = function(e){
        e.preventDefault();
    }
    $('.nav>li>a').each(function(index,item){
        touch.on(item,'tap',function(){
            $('.nav>li>a').css('color','rgb(102,102,102)');
            $(this).css('color','#ff8a00');
            // 阻止页面滚动
            document.body.addEventListener('touchmove',aa, { passive: false }); 
            switch(index){
                case 0:
                    $('.area1,.area2,.area3').hide();
                    $('.area').slideDown('fast');
                    $('.hid').fadeIn('fast');
                    
                    $('.down1').show();
                    $('.up').hide();
                    $(item).parent().find('.arrow-down .down1').hide();
                    $(item).parent().find('.arrow-down .up').show();
                    break;
                case 1:
                    $('.area,.area2,.area3').hide();
                    $('.area1').slideDown('fast');
                    $('.hid').fadeIn('fast');

                    $('.down1').show();
                    $('.up').hide();
                    $(item).parent().find('.arrow-down .down1').hide();
                    $(item).parent().find('.arrow-down .up').show();
                    break;
                case 2:
                    $('.area1,.area,.area3').hide();
                    $('.area2').slideDown('fast');
                    $('.hid').fadeIn('fast');

                    $('.down1').show();
                    $('.up').hide();
                    $(item).parent().find('.arrow-down .down1').hide();
                    $(item).parent().find('.arrow-down .up').show();
                    break;
                case 3:
                    $('.area1,.area2,.area').hide();
                    $('.area3').slideDown('fast');
                    $('.hid').fadeIn('fast');

                    $('.down1').show();
                    $('.up').hide();
                    $(item).parent().find('.arrow-down .down1').hide();
                    $(item).parent().find('.arrow-down .up').show();
                    break;
            }
        });
    });
    touch.on($('.hid'),'tap',function(){
        $('.area').slideUp('fast');
        $('.area1').slideUp('fast');
        $('.area2').slideUp('fast');
        $('.area3').slideUp('fast');
        $('.hid').fadeOut('fast');
        $('.nav>li>a').css('color','#666666');
        //箭头朝上
        $('.down1').show();
        $('.up').hide();
        //释放页面滚动
        document.body.removeEventListener('touchmove',aa);
    });
    
    //区域单选
    $('.area .right ul li a').each(function(index,item){
        touch.on(item,'tap',function(){
            $('.area .right ul li a').css('color','#666666');
            $(item).css('color','#ff8a00');
        });
    });

    //价格单选
    $('.area1 li a').each(function(index,item){
        touch.on(item,'tap',function(){
            $('.area1 li a').css('color','#666666');
            $(item).css('color','#ff8a00');
        });
    });

    //房型单选框
    $('.area2 li .s2').each(function(index,item){
        touch.on(item,'tap',function(){
            $('.area2 li:eq(0)').find('a').css('color','rgb(102,102,102)');
            $('.ok').hide();
            $('.area2 li .s2').css('border-color','#878787');
            $(item).find('.ok').show();
            $(item).css('border-color','#ff8a00');
        });
    });
    touch.on($('.area2 li:eq(0) a'),'tap',function(){
        $(this).css('color','#ff8a00');
        $('.ok').hide();
        $('.area2 li .s2').css('border-color','#878787');
    });

    //更多单选
    $('.area3 .fir,.sec,.thir ul li a').each(function(index,item){
        touch.on($('.area3 .fir ul li a'),'tap',function(){
            $('.area3 .fir ul li a').css({
                'color':'#878787',
                'border-color':'rgb(201,201,201)'
            });
            $(this).css({
                'color':'#ff8a00',
                'border-color':'#ff8a00'
            });
        });
        touch.on($('.area3 .sec ul li a'),'tap',function(){
            $('.area3 .sec ul li a').css({
                'color':'#878787',
                'border-color':'rgb(201,201,201)'
            });
            $(this).css({
                'color':'#ff8a00',
                'border-color':'#ff8a00'
            });
        });
        touch.on($('.area3 .thir ul li a'),'tap',function(){
            $('.area3 .thir ul li a').css({
                'color':'#878787',
                'border-color':'rgb(201,201,201)'
            });
            $(this).css({
                'color':'#ff8a00',
                'border-color':'#ff8a00'
            });
        });
    });
});
