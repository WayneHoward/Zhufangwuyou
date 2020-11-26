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

   
    var map = new BMapGL.Map("container");
        // 创建地图实例 
        var point = new BMapGL.Point(113.6871, 34.8103);
        // 创建点坐标 
        map.centerAndZoom(point, 20);
        // 初始化地图，设置中心点坐标和地图级别 

        $("#load_geolocation").text("正在获取位置......");  
        //创建百度地图控件  
        var geolocation = new BMap.Geolocation();  
        geolocation.getCurrentPosition(function(r){  
            if(this.getStatus() == BMAP_STATUS_SUCCESS){  
                //以指定的经度与纬度创建一个坐标点  
                var pt = new BMap.Point(r.point.lng,r.point.lat);  
                //创建一个地理位置解析器  
                var geoc = new BMap.Geocoder();  
                geoc.getLocation(pt, function(rs){//解析格式：城市，区县，街道  
                    var addComp = rs.addressComponents;  
                    $("#load_geolocation").text(addComp.city + ", " + addComp.district + ", " + addComp.street);  
                });      
            }  
            else {  
                $("#load_geolocation").text('定位失败');  
            }          
        },{enableHighAccuracy: true})//指示浏览器获取高精度的位置，默认false  

});