$(document).ready(function(){
    if($("body").hasClass("wtt")){
        // loadSong(apiKey);
        
        $(".flip-card").click(function (e) { 
            // e.preventDefault();
            // alert("HOLA")
            const isPlaying = $(".flip-card").hasClass("active");   
            $(".flip-card").toggleClass("active");    
            
        });
    }
  
    });