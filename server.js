var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })

app.use(express.static('./'))

app.post('/', upload.single('file'), function (req, res, next) {
  var result = {size: req.file.size}
  res.end(JSON.stringify(result))
})

app.listen(port)
