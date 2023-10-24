$(document).ready(function(){
    mobile_menu();
});

function mobile_menu(){
    /* 변수 선언 */
    var $menu = null;
    var $left_gnb = null; // 영역 전체
    var $depth1_wrap = null;
    var $depth1 = null;
    var $depth1_btn = null;
    
    /* 시작 함수 */
    function start(){
        init();
        init_event();
    }
    /* 변수 초기화 함수 */
    function init(){
        $menu = $('.m_menu');
        $left_gnb = $('.left_gnbWrap'); // 영역 전체
        $depth1_wrap = $('.left_gnb>li');
        $depth1 = $depth1_wrap.children('ul');
        $depth1_btn = $depth1_wrap.children('a');
    }
    /* 이벤트 함수 */
    function init_event(){
        
        /* 모바일 메뉴 버튼 클릭했을때 모바일 메뉴영역 나오게 하기 */
        $menu.click(function(event){
            event.preventDefault();
            $left_gnb.addClass('on');
            $('#modal').addClass('on');
        });
        
        /* x버튼 눌렀을때 모바일 메뉴 닫기 */
        $('#modal').click(function(event){
            event.preventDefault();

            $left_gnb.removeClass('on');
            $('#modal').removeClass('on');
            
            // x버튼 누르면 시간차 약간두고 소메뉴 닫히게 하기
            setTimeout(function(){
                $depth1_btn.removeClass('on');
                $depth1.slideUp();
            },300)
        });
        
     /* depth1의 각메뉴 클릭시 depth2 나오게 하기 */
//        $depth1_btn.click(function(event){
//            event.preventDefault();
//            var $this = $(this);
//            var $this_ul = $this.siblings('ul');
//
//            var check = $this.hasClass('on');
//            if(check){
//                $this.removeClass('on');
//                $this_ul.stop(true,true).slideUp();
//            }else{
//                $depth1_btn.removeClass('on');
//                $depth1.stop().slideUp();
//                $this.addClass('on');
//                $this_ul.stop(true,true).slideDown();
//            }
//        });
        
        /* 디바이스 크기 변경시 모바일 메뉴영역 숨기기 */
        $(window).resize(function(){
            $left_gnb.removeClass('on');
        });
    }
    
    start(); // 시작 호출
}

/* IE 버벅거림 해결 */
$('body').on("mousewheel", function(){
    Event.preventDefault();
    
    var wheelDelta = Event.wheelDelta;
    
    var currentScrollPosition = window.pageYOffset;
    window.scroll(0, currentScrollPosition - wheelDelta);
  
    
    
});

// 텍스트 효과 //

var settings = {
          //height of sphere container
          height: 800,
          //width of sphere container
          width: 800,
          //radius of sphere
          radius: 280,
          //rotation speed
          speed: 0.5,
          //sphere rotations slower
          slower: 0.4,
          //delay between update position
          timer: 5,
          //dependence of a font size on axis Z
          fontMultiplier: 15,
          //tag css stylies on mouse over
          hoverStyle: {
              border: 'none',
              color: '#144364'
          },
          //tag css stylies on mouse out
          mouseOutStyle: {
              border: '',
              color: ''
          }
      };


//$(function(){
//  var $header = $('#header'); //헤더를 변수에 넣기
//  var $page = $('.main-font'); //색상이 변할 부분
//  var $window = $(window);
//  var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
//  
//  $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
//    pageOffsetTop = $page.offset().top;
//  });
//  
//  $window.on('scroll', function(){ //스크롤시
//    var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
//    $header.toggleClass('down', scrolled); //클래스 토글
//  });
//});



// 마우스 스크롤
$(document).ready(function(){
    
    $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});

$('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop:0},800);
    return false;
});

$('.popup a').click(function(){
    $('.popup').hide();
});
    
});



//
//var settings1 = {
//          //height of sphere container
//          height: 400,
//          //width of sphere container
//          width: 400,
//          //radius of sphere
//          radius: 100,
//          //rotation speed
//          speed: 0.2,
//          //sphere rotations slower
//          slower: 0.1,
//          //delay between update position
//          timer: 5,
//          //dependence of a font size on axis Z
//          fontMultiplier: 15,
//          //tag css stylies on mouse over
//          hoverStyle: {
//              border: 'none',
//              color: '#144364'
//          },
//          //tag css stylies on mouse out
//          mouseOutStyle: {
//              border: '',
//              color: ''
//          }
//      };



      $(document).ready(function(){
          $('#tagcloud').tagoSphere(settings);
          
//          function fixDiv(){
//
//                if($(window).innerWidth() > 780){
//                   $('#tagcloud').tagoSphere(settings);
//
//                }else if($(window).innerWidth() > 540){
//                    $('#tagcloud').tagoSphere(settings1);
//                }else{
//
//                }
//        }
//
//        $(window).resize(fixDiv);
//        fixDiv();
      });
    




