$(function(){
  let chk = 0;
  docPlay();
  
  // 혜택 슬라이더01 생성
  const benefitsSwiper01 = new Swiper('.bentfits_swiper01',{
    touchRatio:0,
  });
  // 혜택 슬라이더02 생성
  const benefitsSwiper02 = new Swiper('.bentfits_swiper02', {
    effect:'fade',
    touchRatio:0,
  });

  //혜택 슬라이더 자동실행 이벤트
  $('#btn_play').on('click',function(){
      btnPlay(this,benefitsSwiper01,benefitsSwiper02);
    }
  );
  
  

  //혜택 슬라이더 실행멈춤 이벤트
  $('#btn_pause').on('click',function(){
    btnPause(this,benefitsSwiper01,benefitsSwiper02);
  });

  
  // 혜택 슬라이더 이전버튼 이벤트
  $('#btn_prev').on('click',function(){
    benefitsSwiperPrev(benefitsSwiper01,benefitsSwiper02);
  })

  

   // 혜택 슬라이더 다음버튼 이벤트
   $('#btn_next').on('click',function(){
    benefitsSwiperNext(benefitsSwiper01,benefitsSwiper02);
  })

  

  // 혜택 슬라이더 체인지 이벤트
  benefitsSwiper01.on('slideChange', function () {
    let acIndex = benefitsSwiper01.activeIndex;
    $('.scroll').css('margin-left',acIndex * 9.090909090909091 + '%');
  });

  //윈도우 리사이즈 이벤트
  $(window).on('resize',function(){
    let winWidth = $(window).width();
    if(winWidth <= 860){
      $('#movie_search input').attr('placeholder','영화명 입력');
    }else{
      $('#movie_search input').attr('placeholder','영화명을 입력해 주세요');
    }
      
  })

  // 박스오피스 슬라이드 전환 이벤트
  $('.box_office_top li').on('click',function(){
    let thisIndex = $(this).index();
    $('.box_office_top li').removeClass('active');
    $(this).addClass('active');
    $('.main_slider li').removeClass('active');
    $('.main_slider li').eq(thisIndex).addClass('active');
  })

  // 팝업 닫기 이벤트
  $('.pop_up_close span:last-child').on('click',function(){
    if(chk == 1){
      $.cookie('sevenClose','y',{expires:7});
    }
    $('.pop_up').css({
      display:'none',
    })
  })

  // 팝업 7일간 열지 않기 이벤트
  $('.pop_up_close span:first-child').on('click',function(){
    console.log('저장하기 클릭');
    if(chk == 0){
      $(this).addClass('active');
      chk = 1;
    }else{
      $(this).removeClass('active');
      chk = 0;
    }
  })

  // 네비게이션 호출 이벤트
  $('#btn_menu').on('click',function(){
    let winWidth = $(window).width();
    if(winWidth <= 767){
      moOpNav();
    }
  }); 

  // 모바일 로그인 오픈 이벤트
  $('#btn_login,.mo_nav .login span').on('click',function(){
    let winWidth = $(window).width();
    if(winWidth <= 767){
      moCloNav();
      moOpLog();
      autoId();
    }
  })     

  // 모바일 네비게이션 로그인 닫기1 이벤트
  $('#btn_close,#btn_close2').on('click',function(){
    moClose();
  })

  // 모바일 네이게이션 로그인 닫기2 이벤트
  $(window).on('resize',function(){
    let winWidth = $(window).width();
    if(winWidth >= 768){
      moClose();
    }
  })

  // 모바일 로그인 버튼 이벤트
  $('#btn_mo_login').on('click',function(){
    let idValue = $('form>input:nth-child(1)').val();
    let saveId = $('label input').is(':checked');
    console.log(saveId);
    if(saveId){
      $.cookie('myid',idValue,{expires:36500});
    }
    $('form>input:nth-child(1)').val('');
    moCloLog();                
  })

  // aTag 클릭 이벤트
  $('a').on('click',function(){
    let aTagHref = $(this).attr('href');
    if(aTagHref == '#'){
      return false;
    }
    console.log($(this).attr('href'));
  })
  
   
})