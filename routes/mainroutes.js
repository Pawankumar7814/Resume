let router = require('express').Router();


//My routes
router.get('/', (req, res) => {
    res.status(200).render('../views/index.ejs');
});

router.get('/index', (req, res) => {
    res.status(200).render('../views/index.ejs');
});

router.get('/*', (req, res) => {
    res.status(404).render('../views/error404.ejs');
});

module.exports = router;