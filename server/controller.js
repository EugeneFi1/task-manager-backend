const express = require('express')
const app = express()
const port = 3000

app.get('/tasks', (req, res) => {
    const tasks = ['add new item', 'read book', 'running']
    res.send(tasks)
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
