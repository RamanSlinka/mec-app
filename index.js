require('dotenv').config()
const  express = require( 'express');
const  mongoose = require( 'mongoose');


const PORT = process.env.PORT || 5000;
const DB_URL = 'mongodb+srv://Roman:1234@cluster.2imnv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();

app.use(express.json())

app.post('/', (req, res)  => {
    res.status(200).json('server working')

})

async  function startApp () {
    try{
      await mongoose.connect(process.env.DB_URL)
        app.listen(PORT, () => console.log(`server working , PORT ${PORT}`))
    }
    catch (e) {
        console.log(e)
    }
}
startApp();


