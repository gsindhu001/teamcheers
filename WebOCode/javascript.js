document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems,{
      edge:'left',
      draggable:'true',
      inDuration:350,
      outDuration:300
    });
  });
  window.addEventListener('scroll',function(){
    let headpart =document.querySelector('nav');
   // let scrollHeight=window.scrollY>0;
    headpart.classList.toggle('scrolling-active',window.scrollY>0);
});
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, {
      closeOnClick:true,
      hover:true,
      constrainWidth:false,
      alignment:'right',
      coverTrigger:false,
      container:null,
      inDuration:200,
      outDuration:250
  });
});

//...................carousel,,,,,,,,,,,,,,,,,,,,,,,,,,
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
      duration:200,
      dist:-100,
      shift:0,
      fullWidth:false,
      indicators: true

      });
});
$('.slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
