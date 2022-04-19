const express = require("express")
const app = express();

app.get('/', (req, res,) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/about', (req, res,) => {
    res.sendFile(__dirname + '/views/about.html')
})


app.listen(3002, () => {
console.log("first page view")
});