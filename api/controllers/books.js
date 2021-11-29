const db =require('../config/dbconfig');

const getAllBooks = (request,response) => {
    
    db.query(`select * from mydb.Books`, (err,res) => {

        if(err){
            response.status(500).json(err);
        }
        
       response.status(res.statusCode).json(res.data);
    })

};


 
const addBooks = async (request,response) => {
    
    try {
        const newBook = await db.insert({
            table: 'Books',
            records: [
                {
                    Book_ID: request.body.Book_ID,
                    Author: request.body.Author,
                    Book_Name: request.body.Book_Name,
                    Category: request.body.Category
                }
            ]
        })
        response.send({ newBook });
    } catch (error) {
        response.send({ error });
    }
};



module.exports = {
    getAllBooks,
    addBooks
}