const express = require('express');
const router = express.Router();
//const cookie =require('cookie-parser')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const db = require('../db');
const authenticate = require('../authenticate');
router.post('/register', async (req, res) => {
    // console.log(req.body)
    const { email, password } = req.body;
    if (!email || !password) {
        const result = { message: "Allfields are require", status: 401 }
        return res.send(result);
    }
    try {

        var sql = 'Select * from users where email=?';
        await db.query(sql, [email], async (err, result) => {
            if (err) throw err;
            else {
                if (result.length > 0) {
                    return res.send({
                        message: "Email already exist",
                        status: 202
                    })
                }
                else {
                    const hashedPassword = await bcrypt.hash(password, 10);
                    // console.log(hashedPassword)

                    var sql = 'INSERT INTO users (email,password) VALUES (?,?)';
                    await db.query(sql, [email, hashedPassword], function (err, result) {
                        if (err) throw err;
                        else {
                            // console.log(result)
                            return res.send({
                                message: "user Logged in successfully",
                                status: 202
                            })
                        }



                    });
                }
            }

        });


    }

     catch (err) { console.log(err.message) };
})


router.post('/login', async (req, res) => {
    //  console.log(req.body)
    const { email, password } = req.body;
    if (!email || !password) {
        const result = { message: "Allfields are require", status: 401 }
        return res.send(result);
    }
    try {

        var sql = 'Select * from users where email=?';
        await db.query(sql, [email], async (err, result) => {
            if (err) throw err;
            if (!result.length) {
                // console.log(result)
                return res.send({
                    message: "Email or password is incorrect",
                    status: 401
                })
            }
            else {

                await bcrypt.compare(password, result[0].password, (err, data) => {
                    if (err) throw err
                            // console.log("POO")
                    if (data) {
                        const token = jwt.sign({ id: result[0].UserId ,
                            email:result[0].email
                        }, process.env.SECRET_KEY, { expiresIn: '5min' });
                        // db.query(
                        //     `UPDATE users SET last_login = now() WHERE id = '${result[0].id}'`
                        // );
                        res.cookie("jwtttt",token,{
                            expiresIn: '5min'
                            
                        })
                        return res.status(200).send({
                            msg: 'Logged in!',
                            token,
                            user: result[0]
                        });
                    }
                    else {
                        return res.status(401).send("Email or password is incorrect")
                    }

                })
            }



        });
    }
    catch (err){
        return res.send(err)
    }


})


router.post('/users/hello',authenticate,async(req,res)=>{

    // console.log(req.token)
    // if(!req.token)
    // return res.send('user unauthorized')
    //      await jwt.verify(req.token,process.env.SECRET_KEY,function(err, decoded) {
    //     if (err)
    //     return res.status(500).send({ auth: false, message: err }); 
    //     //req.username = decoded.username;
    //     // console.log(decoded)
    //     //console.log(verifyToken)
    //             if(decoded)
    // return res.send("Welcome")
    // else return res.send("User unauthorized")
        //console.log(req.data)
        return res.send("Welcome")
                
})


module.exports = router