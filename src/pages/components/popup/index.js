import "./index.less";
$(".popup-btn").on("click",function(){
    $(".popup-container").fadeIn();
    return false;
})
$(".popup-box").on("click", function(){
    return false;
})
$(".popup-container .close").on("click", function(){
    $(".popup-container").fadeOut();
})