

const jwt = require("jsonwebtoken")
const db = require("./db");
const authenticate = async (req, res, next) => {
    try {

        const authorization = req.body.headers.Authorization;

        if (authorization) {
            const token = authorization.slice(7, authorization.length);

            req.token = token;
            if (!req.token)
                return res.send('user unauthorized')
            await jwt.verify(req.token, process.env.SECRET_KEY, function (err, decoded) {
                if (err)
                    return res.status(500).send({ auth: false, message: err });
            //         console.log(decoded)
            //     if (decoded)
            //        { 
                        
            //             //console.log(req.body)
            //             return res.send("Welcome")
                        
            // }
            //     else return res.send("User unauthorized")
            });

        }
        else return res.send("User unauthorized")




        next();
    }
    catch (err) {
        //console.log("hy");
        res.send("user unauthorized")
        //console.log(err.message);
    }

}

module.exports = authenticate;
