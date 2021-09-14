const booksModel = require('../Model/bookModel');

exports.addBook = async (req, res) => {
    console.log("Add book working");
    try {
        const {
            id,
            title,
            price,
            page_count,
            image_url,
            description,
            author,
            comments,
        } = req.body;
        await booksModel.create({
            id: id,
            title: title,
            price: price,
            page_count: page_count, 
            image_url: image_url,
            description: description,
            author: author,
            comments: comments
        })

        res.json({
            success: true,
            message: "Book added successfully"
        })
    } catch(e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}