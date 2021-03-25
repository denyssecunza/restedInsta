const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


app.get('/starter_route', (req,res) => {
    res.send({express:"The backend is connected to React"})
})



app.listen(PORT, () => console.log(`Listen on port http://localhost:${PORT}`))