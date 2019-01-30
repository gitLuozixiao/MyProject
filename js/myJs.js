/**
 * Created by zixiao on 2019/1/9.
 */

$(document).ready(function(){
    $("#to_top").click(function(){
        //点击“回到顶部”，滚动到顶部，并带动画效果
        $("html,body").animate({scrollTop:0},500);
    });
    $('.cell img').zoomify();
    $('.page img').zoomify();
    $('.illustration img').zoomify();
});