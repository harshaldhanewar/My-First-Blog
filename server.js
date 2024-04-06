import express from "express"
// import cors from "cors";

const app = express();
const port = 3000;

// const corsOptions = {
//     origin: [`http://localhost:6001`, `http://localhost:3000`],
//     optionsSuccessStatus: 200,
//     // credentials: true,
// }

// app.use(cors(corsOptions))

app.get('/', (req, res) => {
    console.log('req reached')
    return res.send({message: 'Request successful'})
})

app.listen(port, () => {
    console.log(`listening on port :${port}`);
})