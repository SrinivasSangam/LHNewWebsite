$('#dvLoading').show();
setTimeout(function(){$('#dvLoading').fadeOut();}, 2000);

   $(function () {

      var totalItems = $('.item').length;
      var currentIndex = $('.item.active').index() + 1;
      $('.currentSlide').html('0'+currentIndex+' / 0'+totalItems+'');

      $('#myCarousel').carousel({
        interval: 6000
      });  

      $('#myCarousel').bind('slid', function() {
        currentIndex = $('.item.active').index() + 1;
        $('.currentSlide').html(''+currentIndex+'/'+totalItems+'');
      });     
    });
    $(document).ready(function(){      
        updateImageSize();
        $(window).resize(function(){
            updateImageSize();
        });
    });
    function updateImageSize() {     
      $(".carousel-inner .item").each(function(){
        var ratio_cont = $(this).width()/$(this).height();            
        var $img = $(this).find("img");            
        var ratio_img = $img.width()/$img.height();        
        var carouselCaption = $( ".carousel-caption" );
        var carouselCaptionOffset = carouselCaption.offset();        
        var carouselIndicators = $( ".carousel-indicators" );
        var carouselIndicatorsOffset = carouselIndicators.offset();       
        if (ratio_cont > ratio_img) {
          $(".carousel-inner").css({"width": "100%", "height": $img.height()+"px"});
          $(".carousel-caption").css({"margin-top": $img.height()/100*3.3333+"%"});
          $(".carousel-indicators").css({"top": $img.height()/100*88+"px"});                
        }
        else if (ratio_cont < ratio_img) {

          $(".carousel-inner").css({"width": "auto", "height": $img.height()+"px"});
          $(".carousel-caption").css({"margin-top": $img.height()/100*5.3333+"%"});
        }
        if (ratio_img <= 1024 || ratio_img < 980) {
          $(".carousel-caption").css({"margin-top": $img.height()/100*3.5+"%"});
          $(".carousel-indicators").css({"top": $img.height()/100*85+"px"});
        }   
      }); 
    }
