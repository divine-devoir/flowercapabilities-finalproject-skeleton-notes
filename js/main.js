$(document).on('ready',function(){
  $(".foo-hamburger").on('click',function(){
    $(".navmobile-wrapper").toggle();
  });
  //$(window).scrollTo(/*can put to content inside of section*/, 250);
  // get height of .nav-wrapper (including any margins)
  var offset = $('.navdesktop-wrapper .navmobile-wrapper').outerHeight(true);
  console.log(offset);

  // add margin-top to our body
  $('body').css('margin-top', offset);
    $('.navdesktop-wrapper .navmobile-wrapper').outerHeight(true);


  $('.navmobile-wrapper a').on('click',function(event){
    //scroll to the page associated with 'this' link
    console.log(event);

    event.preventDefault();

    var pageToScrollTo = $(this).attr('href');
    //console.log(pageToScrollTo)
    // use pageToScrollTo in a .scrollto function

    $(window).scrollTo(/*can put to content inside of section*/pageToScrollTo, 800, {offset: -offset});

  });
  $('.navdesktop-wrapper a').on('click',function(event){
    //scroll to the page associated with 'this' link
    console.log(event);

    event.preventDefault();

    var pageToScrollTo = $(this).attr('href');
    //console.log(pageToScrollTo)
    // use pageToScrollTo in a .scrollto function

    $(window).scrollTo(/*can put to content inside of section*/pageToScrollTo, 800, {offset: -offset});

  });


  function show() {
      document.getElementById('run').style.visibility = 'visible';
  }



  //set interval

//var foo = setInterval(function(){
  //console.log('you win');
//}, 1000);
//console.log(foo);
//clearInterval(foo);
//onclick play

//show first image by default
$('img').eq(0).show();
var currentSlideNum = 0;
var slideCount = $('img').length;

var doSlides = function(direction){
  if(direction === 'next'){
    if(currentSlideNum === 0){
      $('img').eq(slideCount-1).hide();
    }
    //hide the current slide
    $('img').eq(currentSlideNum).hide();
    //show the next one
    currentSlideNum++;
    //show the next slide
    $('img').eq(currentSlideNum).show();

    // if current slide is the last slide
   if(currentSlideNum === slideCount-1) {
      currentSlideNum = 0;
    }

} else if (direction === 'prev'){
  //current slide is at the last slide return to 0 or first slide
      if(currentSlideNum === 0) {
        currentSlideNum = slideCount -1;
          }
  $('img').eq(currentSlideNum).hide();
  //decrease slide num by 1
  currentSlideNum = currentSlideNum -1;

  $('img').eq(currentSlideNum).show();

}
}
//automatic setinterval
/*  var autoPlay = setInterval(function(){
     doSlides(); }, 3000);*/

//attach click event to button
$(".js-next").on('click', function(){
  doSlides('next');
});

$(".js-prev").on('click', function(){
    doSlides('prev');
  });
//click to play set interval
$(".js-play").on('click', function(){
  play = setInterval(function(){
         doSlides('next'); }, 1000);
});
  //pause button

$('.js-pause').on('click', function(){
  clearInterval(play) })
})
