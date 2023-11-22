//import express
import express from "express";
 
// init express
const app = express();
 
// basic route
app.get('/biodata', (req, res) => {
    res.send(
        'Nama : M Rafi Faizul Anwar');
});
 
// listen on port
app.listen(3000, () => console.log('Server Running at http://localhost:3000'));