const express = require('express');
const app = express();
const path= require('path');

//加载静态地址
app.use(express.static(__dirname));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.use(function(req, res) {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, function () {
  console.log('Server listening on http://localhost:8080, Ctrl+C to stop')
})
