import "../common/reset.css";
import "@/assets/global.less";
import "../common/header";
import "../components/crumbs";
import "../components/news";
import "../common/footer";
import "./index.less";
const headHeight = $(".m-header").height();
$(".major-tab-item a").on("click", function(){
    const href = $(this).data("href");
    const top = $(href).offset().top - headHeight - 10;
    $(window).scrollTop(top);
    return;
})