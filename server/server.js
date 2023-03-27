const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
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

/* mongoose.connect(
    ''
); */

app.get('/', (req, res) => {
    res.send('Welcome in Hogwarts!');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
