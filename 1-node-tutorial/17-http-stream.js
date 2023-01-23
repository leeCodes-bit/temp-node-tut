let http = require('http')
let fs = require('fs')

http.createServer(function (req, res){
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    // let's refactor the above code we have same sizeof file but the response header transfer encoding is chunked
    // if we can read files in chunk we can also write files in chunk, the pipe is pushing from the readstream into writestream
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
})
.listen(5000)