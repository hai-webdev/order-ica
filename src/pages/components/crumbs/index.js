import "./index.less";
$(".news-tab-item").on("click", function(){
    const index = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".m .news-cate-item").eq(index).addClass("on").siblings().removeClass("on");
})