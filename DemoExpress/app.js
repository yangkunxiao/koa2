const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // res.writeHead(200, { "Content-type": "text/plain" });
    res.send("hello world");
    res.end()
})

app.listen(3000, () => {
    console.log("your server is running at localhost:3000")
})