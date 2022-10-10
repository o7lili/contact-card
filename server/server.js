const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

<<<<<<< HEAD
app.use(express.static("../client/dist/"))
=======
app.use(express.static('../client/'));
>>>>>>> 7c60a680a9f7aaea31e020cc891d511a93d1478f
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes.js')(app);

app.listen(PORT, function() {
<<<<<<< HEAD
  console.log(`Now listening on port: ${PORT}`);
});
=======
    console.log(`Now listening on port: ${PORT}`);
});
>>>>>>> 7c60a680a9f7aaea31e020cc891d511a93d1478f
