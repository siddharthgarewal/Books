const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bookSchema = Schema ({
    id: {default: '', type: Number },
    title: {default: '', type: String },
    price: {default: '', type: Number },
    page_count: {default: '', type: Number },
    image_url: {default: '', type: String },
    description: {default: '', type: String },
    author: { type: Schema.Types.ObjectId, ref: 'Author' },
    comments: {default: [], type: Array }
}, {
    versionKey: false
});

var bookData = mongoose.model('Books',bookSchema);
module.exports = bookData;