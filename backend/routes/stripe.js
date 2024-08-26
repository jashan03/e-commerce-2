const router = require("express").Router();
const dotenv = require("dotenv")
dotenv.config();

const stripe = require("stripe")(process.env.STRIPE_KEY); 

router.post('/payment', async (req, res) => {
    try {
        const charge = await stripe.charges.create({
            source: req.body.tokenId, // created from customers' card details
            amount: req.body.amount,
            currency: "usd"
        });
        res.status(200).json(charge);
        
    } catch (err) {
        console.error('Error creating charge:', err);
        res.status(500).json(err);
    }
});

module.exports = router

// for testing payments instaedd of postman use react stripe checkout library
