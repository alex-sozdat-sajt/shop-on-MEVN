const dollarsToCents = require('dollars-to-cents');

const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const CreatePaymentIntent = async ({ body: { amount } }, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: dollarsToCents(amount),
            currency: 'usd',
            payment_method_types: ['card'],
        });
        
        return res.status(200).send(paymentIntent);
    } catch (err) {
        res.status(500).send(err);
    }
 
};

const stripeWebHook = async ({ body }, res) => { 
    try {

    } catch (err) { 

    }

}
module.exports = {
    CreatePaymentIntent,
};