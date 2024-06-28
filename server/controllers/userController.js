const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Defining function to register user 

const registerUser = async (res, req) => {
    const {name, email, password} = req.body;

    try{
        let user = await User.findOne({email});
        if(user) {
            return res.status(400).json({message: 'User already exist'});
        }

        user = new User({name, email, password});

        const salt = await bcrypt.genSalt(10);// genSalt is a radom string that is added to the password before hashing, to make the password unic. 
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = { user:{ id: user.id}};
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h'}, (err, token) => {
            if (err) throw err;
            res.json({token});
        });
    }catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = { registerUser};