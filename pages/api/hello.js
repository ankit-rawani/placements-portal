import Joi from 'joi';

import validate from '../../../utils/middlewares/validation';

const schema = {
    body: Joi.object({
        name: Joi.string().email().optional()
    })
};

const handler = async (req, res) => {
    if (req.method == 'GET' || req.method == 'POST') {
        if(req.body.name) {
            res.status(200).json({ message: `Hello ${req.body.name}!`});
        }
        else res.status(200).json({message: 'Hello!'});
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};

export default validate(schema, handler);