var pageViewVideo = (function() {
  var source = null;

  function eventoEscuchaMensaje() {
    source.addEventListener('message', function(e) {
        data = JSON.parse(e.data);
        var imgCont = document.getElementById('play');
        imgCont.src = data.img;
    }, false);
  }
  function eventoEscuchaAbierto() {
    source.addEventListener('open', function(e) {
        $("#state").text("Connected");
    }, false);
  }
  function eventoEscuchaError() {
    source.addEventListener('error', function(e) {
        if (e.target.readyState == EventSource.CLOSED) {
            $("#state").text("Disconnected");
        }
        else if (e.target.readyState == EventSource.CONNECTING) {
            $("#state").text("Connecting...");
        }
    }, false);
  }

  var setUpEventos = function () {
    eventoEscuchaMensaje();
    eventoEscuchaAbierto();
    eventoEscuchaError();
  }
  var canEventSource = function() {

      if(!!window.EventSource) {
          source = new EventSource('/Curso/getEmmiter');
      } else {
          console.log("Your browser doesn't support SSE");
      }
  }

  return {
    init : function () {
      canEventSource();
      setUpEventos();
    }
  }
})();
