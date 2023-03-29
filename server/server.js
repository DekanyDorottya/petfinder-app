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


app.post('/api/animal', (req, res) => {
    console.log(req.body)

    const newAnimal = new Animal({
        details: data.details,
        donate: data.donate
    });
    newAnimal.save()
    .then(newAnimal => res.json(newAnimal))
    .catch(err => res.status(400).json({ success: false }));
});

app.get('/api/animal', (req, res) => {
    Animal.find().then(animals => {
        res.send(animals)
        
    })
        .catch((error) => {
            console.log(error)
        })
})


app.patch('/api/todo/:id', async (req, res) => {
    const { title, comment } = req.body;
    const { id } = req.params;
    try {
      const todo = await Todo.findByIdAndUpdate(id, { title, comment }, { new: true });
      if (!todo) {
        return res.status(404).send({ message: 'Todo item not found' });
      }
      res.send(todo);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  })
  
app.delete('/support/delete/:id', async (req, res) => {
	const result = await Animal.findByIdAndDelete(req.params.id);
	res.json({result});
});
app.delete('/support/delete/:id', async (req, res) => {
	const result = await Animal.findByIdAndDelete(req.params.id);
	res.json({result});
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

