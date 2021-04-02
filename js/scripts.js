 
  $("#postSec").change(function () {
      readResim(this);
  });
  
  
	function readResim(input){
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
              $('#goster').css({'background-image':'url(' + e.target.result + ')'}); 
          }
          reader.readAsDataURL(input.files[0]);
      }
  }