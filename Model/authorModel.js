const mongoose = require('mongoose')
const Schema = mongoose.Schema
const authorSchema = Schema({
    id: {default: '', type: Number },
    name: {default: '', type: String },
    books: [{ type: Schema.Types.ObjectId, ref: 'Books' }],
    image_url: {default: '', type: String },
    description: {default: '', type: String },
}, {
    versionKey: false
});

var authordata = mongoose.model('Author',authorSchema);
module.exports = authorData;