const router = require('express').Router();
const { v2: cloudinary } = require('cloudinary');
const Post = require('../models/post.model');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


router.route('/')
    .get(async (req, res) => {
        try {
            const posts = await Post.find({});

            res.status(200).json({ success: true, data: posts })
        } catch (err) {
            res.status(500).json({ success: false, message: err.message })
        }
    })
    .post(async (req, res) => {
        try {
            const { name, prompt, photo } = req.body;
            const photoUrl = await cloudinary.uploader.upload(photo);

            const newPost = Post.create({
                name,
                prompt,
                photo: photoUrl.url
            })

            res.status(201).json({ data: newPost })
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    })



module.exports = router




