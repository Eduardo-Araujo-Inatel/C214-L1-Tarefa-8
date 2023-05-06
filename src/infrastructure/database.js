const mongoose = require('mongoose');

const uri = `mongodb+srv://eduardo:root123@cluster0.pq9mk7s.mongodb.net/?retryWrites=true&w=majority`;
mongoose.set('strictQuery', true);

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const { Schema } = mongoose;

const CarSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    marca: String,
    modelo: String,
    cor: String,
    ano: Number,
});

const CarModel = mongoose.model('CarModel', CarSchema);

module.exports = {
    CarModel,
};