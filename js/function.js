function benefitsSwiperNext(self01,self02){
  self01.slideNext(300, true);
  self02.slideNext(300, true);
}

function benefitsSwiperPrev(self01,self02){
  self01.slidePrev(300, true);
  self02.slidePrev(300, true);
}

function btnPause(self,self2,self3){
  console.log('멈춤');
  $(self).toggleClass('active');
  $('#btn_play').toggleClass('active');
  self2.autoplay.stop();
  self3.autoplay.stop();
}

function btnPlay(self,self2,self3){
  console.log('실행');
  $(self).toggleClass('active');
  $('#btn_pause').toggleClass('active');
  self2.autoplay.start();
  self3.autoplay.start();
}

function moClose(){
  moCloNav();
  moCloLog();
}

function autoId(){
  let saveId = $.cookie('myid');
  $('form>input:nth-child(1)').val(saveId);
}

function moCloLog(){
  $('.mo_login,.mo_login_header').removeClass('active');
  wrapUnLock();
}

function moOpLog(){
  $('.mo_login,.mo_login_header').addClass('active');
  wrapLock();
}

function moCloNav(){
  $('.mo_nav,.mo_header,.mo_footer').removeClass('active');
  wrapUnLock();
}

function moOpNav(){
  $('.mo_nav,.mo_header,.mo_footer').addClass('active');
  wrapLock();
}

function wrapLock(){
  $('.wrap').addClass('lock');
}

function wrapUnLock(){
  $('.wrap').removeClass('lock');
}

function popUpNone(){
  let pop = $.cookie('sevenClose');
  if(pop == 'y'){
    $('.pop_up').css({
      display:'none',
    })
  }else{
    $('.pop_up').css({
      display:'block',
    })
  }
}

function docPlay(){
  let moHeaderHeight = $('.mo_header').height();
  let moFooterHeight = $('.mo_footer').height();
  $('.mo_main').css({
    paddingTop:moHeaderHeight,
    paddingBottom:moFooterHeight,
  })
  autoId();
  popUpNone();
}
 