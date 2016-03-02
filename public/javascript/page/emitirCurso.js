var pageVideo = (function() {
    var video  = document.getElementById('video');
    var canvas  = document.getElementById("preview");
    var context = canvas.getContext("2d");

    function logger(msg) {
      $('#logger').text(msg);
    }
    function loadCam(stream) {
      video.src = URL.createObjectURL(stream);
      logger('camara conectada correctamente');
    }
    function loadFail() {
      logger('camara no conectada');
    }

    var sendImage = function (img) {
      var obj = {image : img };
      $.post('/Curso/sendVideo', {foto : img}, function(data) {

      });
    }
    var viewVideo = function (video, context) {
      context.drawImage(video,0,0,context.width,context.height);
      sendImage(canvas.toDataURL('image/webp'));
    }
    var setSizeCanvas = function() {
        canvas.width  = 400;
        canvas.height = 220;

        context.width   = canvas.width;
        context.height  = canvas.height;
    }
    var initTransmision = function() {
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      if(navigator.getUserMedia) {
            navigator.getUserMedia({video:true}, loadCam, loadFail);
      }

      setInterval(function() {
            viewVideo(video, context);
      },170);
    }


    return  {
      init : function () {
          initTransmision();
          setSizeCanvas();
      }
    }
})();
