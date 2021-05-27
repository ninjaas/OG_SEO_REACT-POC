const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')

app.get('/', function(request, response) {
  console.log('Home page visited!');
  const filePath = path.resolve(__dirname, './react/build', 'index.html');
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, 'Home Page');
    data = data.replace(/\$OG_DESCRIPTION/g, "Home page description");
    result = data.replace(/\$OG_IMAGE/g, 'https://cdn.picpil.com/fit-in/600x600/assets/2020/11/9/73502ac9c83e4ff3a962944943deae55.jpg');
    response.send(result);
  });
});

app.get('/about', function(request, response) {
  console.log('About page visited!');
  const filePath = path.resolve(__dirname, './react/build', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, 'About Page');
    data = data.replace(/\$OG_DESCRIPTION/g, "About page description");
    result = data.replace(/\$OG_IMAGE/g, 'https://cdn.picpil.com/fit-in/600x600/assets/2020/11/9/48ed54cf551e4f9ab6c6d3472fab5e32.jpg');
    response.send(result);
  });
});

app.get('/contact', function(request, response) {
  console.log('Contact page visited!');
  const filePath = path.resolve(__dirname, './react/build', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, 'Contact Page');
    data = data.replace(/\$OG_DESCRIPTION/g, "Contact page description");
    result = data.replace(/\$OG_IMAGE/g, 'https://cdn.picpil.com/fit-in/600x600/assets/2020/11/9/75ac44541e2f453c8a3a4eae5cc9ff4c.jpg');
    response.send(result);
  });
});

app.use(express.static(path.resolve(__dirname, './react/build')));

app.get('*', function(request, response) {
  const filePath = path.resolve(__dirname, './react/build', 'index.html');
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));