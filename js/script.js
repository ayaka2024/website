//ヘッダー
$(".header").hover(
    function () {
        // When the mouse enters
        $(".header").css('background-color', '#FFFFFF');
        $(".header_logo").css('color', '#333333');
        $(".menu_item a").css('color', '#333333');
    },
    function () {
        // When the mouse leaves
        $(".header").css('background-color', '#333333');
        $(".header_logo").css('color', '#FFFFFF');
        $(".menu_item a").css('color', '#FFFFFF');
    }
);

//メニュー
$(".menu_item").hover(
    function () {
        // When the mouse enters
        $(this).css('border-bottom', '3px solid #FFF333');
    },
    function () {
        // When the mouse leaves
        $(this).css('border-bottom', 'none');
    }
);

//メインビジュアル
$(function () {
    $('.main_img').slick({
        autoplay: true, //自動スクロール
        fade: true,
        autoplaySpeed: 5000, //自動再生時のスライド切り替えの時間
        speed: 1000, //スライドが流れるスピード
        arrows: false, //左右の矢印を非表示
        swipe: false,//スワイプ禁止
        slidesToShow: 1, //表示するスライドの数
        cssEase: 'linear',
        pauseOnFocus: false, //フォーカスしても止めない
        pauseOnHover: false, //マウスホバーしても止めない
    });
});

//ギャラリー
$(function () {
    $('.galley_list').slick({
        autoplay: true, //自動スクロール
        autoplaySpeed: 0, //自動再生時のスライド切り替えの時間
        speed: 10000, //スライドが流れるスピード
        arrows: false, //左右の矢印を非表示
        swipe: false,//スワイプ禁止
        slidesToShow: 5, //表示するスライドの数
        cssEase: "linear",
    });
});

//お問い合わせ
$(".submitBtn").hover(
    function () {
        // When the mouse enters
        $(this).css('color', '#333333');
        $(this).css('background-color', '#FFFFFF');
        $(this).css('border', '2px solid #333333');
    },
    function () {
        // When the mouse leaves
        $(this).css('color', '#FFFFFF');
        $(this).css('background-color', '#333333');
    }
);

//ページトップボタン
$(function () {
    var topBtn = $('#pagetop');
    
    //ボタンの表示設定
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            topBtn.fadeIn();
        }
        else {
            topBtn.fadeOut();
        }
    });

    //クリックしたらトップへ戻る
    topBtn.click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
