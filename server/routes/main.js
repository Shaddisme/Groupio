const express = require('express');
const router = express.Router();

// Routes
router.get('', (req, res) => {
    const locals = {
        title: "Groupio",
        description: "Group travel website"
    }
    res.render('index', locals);
});

router.get('/register', (req, res) => {
    res.render('register');
});



module.exports = router;