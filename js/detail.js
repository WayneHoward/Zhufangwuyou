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

   
    // 创建地图实例 
    var map = new BMapGL.Map("container");
    // 创建点坐标 
    var point = new BMapGL.Point(116.404, 39.915);
    // 初始化地图，设置中心点坐标和地图级别 
    map.centerAndZoom(point, 17);
    //开启鼠标滚轮缩放
    map.enableScrollWheelZoom(true); 
    //点击获取当前位置
    touch.on($('.orientation'),'tap',function(e){
        var e = e || window.event;
        e.stopPropagation();
        e.cancelBubble = true;
        e.preventDefault();
        e.returnValue = false;
        $('.orientation .i1').hide();
        $('.orientation .i2').show();
        setTimeout(function(){
          // var geoc = new BMapGL.Geocoder();
          var geolocation = new BMapGL.Geolocation();
          geolocation.getCurrentPosition(function(r){
          　　if(this.getStatus() == BMAP_STATUS_SUCCESS){
          　　　　var mk = new BMapGL.Marker(r.point);
          　　　　map.addOverlay(mk);
          　　　　map.panTo(r.point);
                $('.orientation .i2').hide();
                $('.orientation .i1').show();
          　　　　console.log("当前位置经度为:"+r.point.lng+"纬度为:"+r.point.lat);
          　　} else {
                $('.orientation .i2').hide();
                $('.orientation .i1').show();
          　　　　console.log('无法定位到您的当前位置，导航失败，请手动输入您的当前位置！'+this.getStatus());
          　　}
          },{enableHighAccuracy: true});
        },100);
    });
});