const
    express = require('express'),
    path = require('path'),
    app = express()

app.use(express.static('public'))  
app.get('/', (req,res) => res.sendFile(path.join(__dirname + '/views/index.html')))
app.listen(3000, () => console.log('Example app listening on port 3000!'))
