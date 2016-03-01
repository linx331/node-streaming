/**
 * Created by Edgar on 29/02/16.
 */
module.exports = function(req, res, next) {
  res.emitUp = function() {
      res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
      });
  }

  res.sendImg = function(data) {
    res.write('data: ' + JSON.stringify(data) + '\n\n');
  }

  next()
}
