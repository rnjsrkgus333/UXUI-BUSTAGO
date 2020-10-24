$(function(){

     let smartPhone = ['iphone','ipad','android'];
            for(let i in smartPhone) {
                //.toLowerCase(); 소문자로 변환
                if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhone[i]))) {
                    alert('본 페이지는 PC에 최적화된 홈페이지입니다.');
                 location = 'https://rnjsrkgus333.github.io/UXUI-BUSTAGO/mobile.html'
                }
            }

    var typewriter = new Typewriter('#persona_txtBox_p', {
                        loop: true //반복
                    });
    typewriter.typeString('"깔끔하고 예약하기 쉬운 버스 예약 어플이 필요해요"') //글자 입력
                        .pauseFor(4000) //딜레이
                        .start();

    // 핸드폰 스크롤 fixed
    $(window).scroll(function(){
        let windowht = $(window).scrollTop();
        var infoOffset = $('.info').offset();
        var researchOffset = $('.research').offset();
        let imght = $('.phone_img .rela').height();
        let added = Number(researchOffset.top) - Number(imght);
         if (windowht >= infoOffset.top) {
             $('.img_fix').addClass('fixed');
            $('.fixed').css({'top':'0','bottom':'auto'});
            if (windowht >= added) {
            $('.img_fix').removeClass('fixed');
            $('.info .phone_img').css({'align-items':'flex-end'});
            }} else {
            $('.img_fix').removeClass('fixed');
            $('.info .phone_img').css({'align-items':'flex-start'});
            }
    });

    //경쟁사 분석
     $('div.app').on('click', function(){
                           $('li').removeClass();
                           $(this).parent().addClass('on');
    });

    //키워드 width
    let keyword_wt = $('.style_box .keyword #keyword_2').width();
    $('.style_box .keyword #keyword_1').width(keyword_wt);

    // more
    let footerht = $('.footer').height();
    let calc = '100vh' - footerht;
    $('.more').height(calc);


    //버튼 호버
    $('btn_box a').hover(function(){
        $(this).animate({boxShadow:'10px 10px #eee9e4'},200).clearQueue();
    },function(){
        $(this).animate({boxShadow:'0px 0px'},200).clearQueue();
    });

    // wow
    var wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
        }
    );
    wow.init();
});