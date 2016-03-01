var home = require('../routes/home/home');

module.exports = function(app) {
    //Rutas Controller Home
    app.get('/', home.getIndex);
    app.get('/Curso/transmitir', home.getTransmitirCurso);
    app.get('/Curso/getVideoCurso', home.getViewVideo);
    app.get('/Curso/getEmmiter', home.getStreamVideo);
    app.post('/Curso/sendVideo', home.postImage);
}
