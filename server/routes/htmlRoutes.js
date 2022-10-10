const path = require('path');

module.exports = function(app) {
<<<<<<< HEAD
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  });
};
=======
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../../clinet/index.html'));
    });
};
>>>>>>> 7c60a680a9f7aaea31e020cc891d511a93d1478f
