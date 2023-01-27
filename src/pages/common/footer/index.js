// 页尾的js代码
import "./index.less";

$(".to-up").on("click", function () {
  $("html,body").scrollTop(0);
});

$(window).scroll(function(){
    if($(window).scrollTop() > 1200){
        $(".to-up").removeClass("hide");
    } else{
        $(".to-up").addClass("hide");
    }
})