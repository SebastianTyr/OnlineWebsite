const express = require('express')
const port = 8080

const app = express()

app.use(express.static(__dirname + '/'))

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/main_page.html')
})

app.listen(port, () =>{
    console.log(`Server runnig at port ${port}`)
})