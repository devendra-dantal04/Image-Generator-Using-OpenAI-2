const router = require('express').Router()
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
    res.send("Hello World Namaste")
})
    .post(async (req, res) => {
        try {
            const { prompt } = req.body;

            const aiResponse = await openai.createImage({
                prompt,
                n: 1,
                size: '1024x1024',
                response_format: 'b64_json'
            });

            const image = aiResponse.data.data[0].b64_json;
            res.status(200).json({ photo: image })

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    })


module.exports = router