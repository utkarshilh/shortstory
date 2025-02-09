const express = require('express');
const cors = require('cors');
const axios = require('axios')



const app = express();


app.use(cors())
app.use(express.json())


// const client = new ElevenLabsClient({
//     apiKey: process.env.ELEVENLABS_API_KEY, // Use API key from .env
// });


app.get('/generateAudio', async (req, res) => {
    console.log(req.body)
})

app.get('/api/stories', async (req, res) => {

    try {
        const response = await axios.get('https://shortstories-api.onrender.com/stories')
        // console.log(response)
        res.json(response.data)

    }
    catch (error) {
        console.error('Error fetching data:', error)
        res.send(error)


    }
})


app.listen(9000, () => {
    console.log("listening at prot 9000")
})