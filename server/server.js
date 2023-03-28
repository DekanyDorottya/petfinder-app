const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const Animal = require('./model/Animal');
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
    "mongodb+srv://fbalozs60:XeAEUfRPoNCH9qRQ@cluster0.40aoczy.mongodb.net/test?retryWrites=true&w=majority"
); 


app.post('/api/animal', (req, res) => {
    console.log(req.body)

    const newAnimal = new Animal({
        details: req.body.details,
        donate: req.body.donate
    })
   newAnimal.save()
    .then(newAnimal => res.json(newAnimal))
    .catch(err => res.status(400).json({ success: false }));
})

app.get('/api/animal', (req, res) => {
    Animal.find().then(animals => {
        res.send(animals)
        
    })
        .catch((error) => {
            console.log(error)
        })
})



app.delete('/support/delete/:id', async (req, res) => {
	const result = await Animal.findByIdAndDelete(req.params.id);
	res.json({result});
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

