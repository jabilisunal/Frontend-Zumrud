import express from 'express';
import cors from 'cors'
import mongoose, { Schema } from 'mongoose';
const app = express()
const port = 3100
app.use(express.json())
app.use(cors())

const serviceSchema = new Schema({
    icon: String,
    title: String,
    about: String,
});

const serviceModel = mongoose.model('services', serviceSchema);

app.get('/', async (req, res) => {
    try {
        const service = await serviceModel.find({})
        res.send(service)
    } catch (error) {
        res.send(error.message)
    }
})

app.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const service = await serviceModel.findById(id)
        res.send(service)
    } catch (error) {
        res.send(error.message)
        
    }
})

app.post('/', async (req, res) => {
    try {
        const { icon, title, about } = req.body
        const newService = new serviceModel({ icon, title, about })
        await newService.save()
        res.send("added")
    } catch (error) {
        res.send(error.message)
    }

})

app.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const { icon, title, about } = req.body
        const service = await serviceModel.findByIdAndDelete(id)
        res.send(service)
    } catch (error) {
        res.send(error.message)
    }
})

mongoose.connect('mongodb+srv://Zumrud03:Durmuz2003@zumrud.qilshcl.mongodb.net/')
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})