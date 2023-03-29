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
    //"mongodb+srv://fbalozs60:XeAEUfRPoNCH9qRQ@cluster0.40aoczy.mongodb.net/test?retryWrites=true&w=majority"
    'mongodb+srv://taksasbettina:yoM85tAN2SEt0Hmf@donatetopets.wc9gqxa.mongodb.net/test'
); 

app.get('/api/animal', async (req, res) => {
    const animals = await Animal.find();
    res.send(animals);

})

app.post('/api/animal', async (req, res) => {
    const data = await req.body;
    const newAnimal = new Animal({
        details: data.details,
        donate: data.donate
    });
    newAnimal.save()
    .then(newAnimal => res.json(newAnimal))
    .catch(err => res.status(400).json({ success: false }));
});




app.delete('/support/delete/:id', async (req, res) => {
	const result = await Animal.findByIdAndDelete(req.params.id);
	res.json({result});
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

