let oriImgSrc = $('.curation_left_img img').attr('src');    
let oriH4 = $('.curation_right h4').text();  
let oriTarget = $('#curation_target').html();
// 큐레이션 마우스 오버 이벤트
$('.curation_right_img picture').mouseenter(function(){
  let imgSrc = $(this).children('source').attr('srcset');
  let imgAlt = $(this).children('img').attr('alt');
  $('.curation_left_img img').attr('src',imgSrc);      
  $('.curation_right h4').text('[영화] ' + imgAlt);
  let imgNum = imgSrc[imgSrc.indexOf('0') + 1];
  $('#curation_target').load('./curation.html #curation0' + imgNum);
})
// 큐레이션 마우스 아웃 이벤트
$('.curation_right_imgs').mouseleave(function(){      
  $('.curation_left_img img').attr('src',oriImgSrc);
  $('.curation_right h4').text(oriH4);
  $('#curation_target').html(oriTarget);      
})
// 큐레이션 클릭이벤트
$('.curation_right_img picture').click(function(){
  oriImgSrc = $(this).children('source').attr('srcset');
  oriH4 = $(this).children('img').attr('alt');
  oriTarget = $('#curation_target').html();
  $('.curation_left_img img').attr('src',oriImgSrc);      
  $('.curation_right h4').text('[영화] ' + oriH4);
  $('#curation_target').html(oriTarget);
})