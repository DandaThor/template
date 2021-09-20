        addEventListener("load", function() {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }


        $(function() {
          var header = $(".bg-dark");
        
          $(window).scroll(function() {    
              var scroll = $(window).scrollTop();
              if (scroll >= 950) {
                  header.addClass("scrolled");
              } else {
                  header.removeClass("scrolled");
              }
          });
        
      });
      

//contact form

/*validation
$(document).ready(function(){
  $("#submit-form").validate({
    rules:{
      name:{
        required:true,
      },
      email:{
        email:true
      },
      message:{
        required:true,
        minlength:10
      }
      
    }
  })
})
*/

/*form-submition
$("#submit-form").submit((e)=>{
  e.preventDefault()
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbymM0eObSYynWca7LC3jmVAm3gD-A2qOQXG4n8YsWaqY28gJVXb7E1zOPuwLDhuT_F6/exec",
      data:$("#submit-form").serialize(),
      method:"post",
      success:function (response){
          alert("Form submitted successfully")
          window.location.reload()
          //window.location.href="https://google.com"
      },
      error:function (err){
          alert("Something Error")

      }
  })
})
*/
$(document).ready(function(){
  $("#submit-form").validate({
    rules:{
      name:{
        required:true,
      },
      email:{
        email:true
      },
      message:{
        required:true,
        minlength:10
      }
    },

    submitHandler: function(form) {
      $.ajax({
        url:"https://script.google.com/macros/s/AKfycbymM0eObSYynWca7LC3jmVAm3gD-A2qOQXG4n8YsWaqY28gJVXb7E1zOPuwLDhuT_F6/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
      });
    }


  });
})


$('.brand-carousel').owlCarousel({
  loop:true,
  margin:10,
  autoplay:true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:5
    }
  }
}) 






//animation
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();
