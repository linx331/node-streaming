var connectionsVideo = [];
var imgVid       = {img : '', opcion : 0};

module.exports = {

  getIndex : function(req, res) {
    res.render('home/index');
  },
  getTransmitirCurso : function(req, res) {
    res.render('home/transmitirView');
  },
  getStreamVideo : function(req, res) {
    res.emitUp();
    res.sendImg();
    connectionsVideo.push(res);
  },
  getViewVideo : function (req, res) {
    res.render('home/viewVideo');
  },

  postImage : function(req, res) {
    if(req.query.foto != '')imgVid.img = req.body.foto;

    for (var i = 0; i < connectionsVideo.length; i++) {
        connectionsVideo[i].sendImg(imgVid);
    }
    res.sendStatus(200);
  }
}
