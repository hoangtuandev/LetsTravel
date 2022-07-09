import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import TypeTourism from './routers/type-tourism.js'
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.port || 5000;
const URI = 'mongodb+srv://admin:PHTuan_2807@cluster0.kv4uo.mongodb.net/letsTravelDB?retryWrites=true&w=majority'

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
app.use(express.json());
app.use(cors());

// Router
app.use('/TypeTourism', TypeTourism)

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to DB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    }).catch(err => {
        console.log('err', err)
    })
