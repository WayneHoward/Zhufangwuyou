$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                   ' / ' +
                   '<span class="' + totalClass + '"></span>';
          },
        }
    });

    // $.ajax({
    //     type:"GET",
    //     // url:"http://api.map.baidu.com/location/ip?ak=5OEPochRvW3HpUWOdrbbvq3mPw00A0Vq&ip=192.168.1.8&coor=bd09ll",
    //     url:"https://api.map.baidu.com/location/ip?ak=5OEPochRvW3HpUWOdrbbvq3mPw00A0Vq&ip=192.168.1.8&coor=bd09ll",
    //     success:function(msg){
    //         console.log(msg);
    //     }
    // });
});