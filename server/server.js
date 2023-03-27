const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const NewAnimal = require('./model/NewAnimal');
const port = 5000;

app.use(
    cors({
        origin: '*',
    })
);

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

 mongoose.connect(
    'mongodb+srv://taksasbettina:fkwFhtX0qsRIAX1N@adoptpets.qhiehyf.mongodb.net/test'
); 

app.get('/', (req, res) => {
    res.send('Welcome support some animal!');
});
app.get('/support', async (req, res) => {
    const supports = await NewAnimal.find()
    res.json(supports);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
