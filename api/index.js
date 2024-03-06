// server.js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    const homePage = renderHomePage();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(homePage);
  } else if (url === '/car') {
    const carPage = renderCarPage();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(carPage);
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page not found');
  }
});

const renderHomePage = () => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Revlift</title>
      <style>
        header {
          background-color: #333;
          color: #fff;
          padding: 20px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>Revlift</h1>
      </header>
      <main>
        <h2>Welcome to Revlift!</h2>
      </main>
    </body>
    </html>
  `;
  return html;
};

const renderCarPage = () => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Car Page</title>
      <style>
        header {
          background-color: #333;
          color: #fff;
          padding: 20px;
          text-align: center;
        }
        .car-image {
          display: block;
          margin: 0 auto;
          max-width: 100%;
          height: auto;
        }
        .buy-button {
          display: block;
          margin: 20px auto;
          padding: 10px 20px;
          background-color: #333;
          color: #fff;
          border: none;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>Revlift</h1>
      </header>
      <main>
        <img src="/car.jpg" alt="Car Image" class="car-image">
        <button class="buy-button">Buy Now</button>
      </main>
    </body>
    </html>
  `;
  return html;
};

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});