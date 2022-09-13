<<<<<<< HEAD
const path = require("path");
const express = require("express");
const app = express(); // create express app
// add middlewares
app.use(express.static(path.join(__dirname,  "build")));
app.use(express.static("public"));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname,  "build", "index.html"));
});
// start express server on port 5000
// app.listen(3000, () => {
//   console.log("server started on port 5000");
=======

// const express = require('express');
// const path = require('path');
// const app = express();


// // const publicPath = path.join(__dirname, '', '');
//  const port = process.env.PORT || 5000;




// // app.use(express.static(publicPath));
// app.get('/', (req, res) => {
//    // res.sendFile(path.join(publicPath, 'index.html'));
//    res.sendFile(path.join(__dirname, "build", "index.html"));
// });


// // const port = process.env.PORT || 3000;
// app.listen(port, () => {
//    console.log(`Server is up on port ${port}!`);
// });

const path = require("path");
const express = require("express");
const app = express(); // create express app

// add middlewares
app.use(express.static(path.join(__dirname,  "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname,  "build", "index.html"));
});

// start express server on port 5000
// app.listen(3000, () => {
//   console.log("server started on port 5000");

>>>>>>> 3d60f6fceee5b4eee940853883db80eef38b5d1d
// });
app.listen(process.env.PORT || 5000);