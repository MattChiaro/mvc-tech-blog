const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: Comment,
                    attributes: ['body'],
                },
                {
                    model: User,
                    attributes: ['username', 'id'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            loggedIn: req.session.loggedIn,
            posts,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
