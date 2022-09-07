$(function () {
    // 1. 小圆点切换
    var timer = null;
    var flag = true;
    $("ol li").on("click", function () {
        tabs($(this).index());

        count = $(this).index();
    })
    function tabs(n) {
        $("ol li").eq(n).addClass("current")
            .siblings().removeClass("current");
        $("ul li").eq(n).fadeIn(
            1000, function () {
                // flag=true;
                // console.log("结束了");
            }
        ).siblings().fadeOut(
            1000, function () {
                console.log("结束了");
            }
        );
    }
    // 2. 左右按钮显示
    $(".container").hover(function () {
        $(".arrow a").show();
        // clearInterval(timer);
    }, function () {
        $(".arrow a").hide();
        // clearInterval(timer);
        // timer=setInterval(function(){
        //     $(".container a").last().click();
        // },1500)
    })
    // 3. 左右按钮的点击切换
    var count = 0;
    $(".container a").first().on("click", function () {
        if (flag) {
            flag = false;
            count--;
            if (count < 0) {
                count = $("ul li").length - 1;
            }
            tabs(count);
        }
    })
    $(".container a").last().on("click", function () {
        if (flag) {
            // flag = false;
            count++;
            if (count > $("ul li").length - 1) {
                count = 0;
            }
            tabs(count);
        }
    })
    //4.自动播放
    // timer = setInterval(function () {
    //     $(".container a").last().click();
    // }, 1500)
})