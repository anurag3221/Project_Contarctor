const express = require('express')
const app=express();
const PORT= process.env.PORT||9005;
const cors = require('cors')
const mongoose=require('mongoose');
const User = require('./models/users');
const sendOtpMail = require('./otpmail');
const sendOtpMailDikat = require('./senddikatmail');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

mongoose.connect('mongodb+srv://deepakxkumar:deepakxkumar@contact-us.qdzpdlf.mongodb.net/?retryWrites=true&w=majority&appName=contact-us/user').then(()=>{
    console.log('Connected to MongoDb');
}).catch((err)=>{
    console.log(err);
})
app.post('/regi',async(req,res)=>{
try {
    const {name,email,password}=req.body
    const user = await User.create({
        name,
        password,
        email
    })
    res.send("user created")
} catch (error) {
    console.log(error)
    res.send('not ok')
}
// console.log("working")
 
})

app.post('/otpmail', (req, res) => {
    const { otp_val, email } = req.body
    if (otp_val && email) {
        sendOtpMail({ otp_val, email })
        res.send({ message: "OTP sent" })
    }
    else {
        res.send({ message: "Unable to sent OTP" })
    }


})



app.post('/login', async (req, res) => {
    try {
        const { email, passwordi } = req.body
        const conf = User.findOne({ email: email })  // checks from backend weather user exist or not
            .then((docs) => {
                if (docs === null) {
                    res.json({
                        isLoggedIn: false,
                    })
                }
                else {
                    // checkUser(passwordi, docs.password)
                    // async function checkUser(password, phash) {
                        // const match = await bcrypt.compare(password, phash);  // hasing of password using bcrypt

                        if (passwordi===docs.password) {
                            res.json({
                                isLoggedIn: true,

                            });
                        }
                        else {
                            res.json({
                                isLoggedIn: false,
                            })
                        }
                    // }

                }
            })

    }
    catch (error) {
        console.log(error);
    }
})




app.post('/resetotpmail', async (req, res) => {
    const { otp_val, email } = req.body
    if (otp_val && email) {
        const mila = await User.findOne({ email:email })    //finds the admin from database weather it exist or not then send otp to mail
            .then((resp) => {
                if (resp === null) {
                    res.json({
                        find: false
                    })
                }
                else {
                    sendOtpMail({ otp_val, email })
                    res.send({ message: "OTP sent" })

                }

            })

    }
    else {
        res.send({ message: "Unable to sent OTP" })
    }


})



app.post('/reset', async (req, res) => {
    const { email, passwordi } = req.body
    const badla = await User.findOneAndUpdate({ email: email }, { password: passwordi })  // find the admin and upadtes password
        .then((chabi) => {
            res.send({ message: "password Updated" })
        })
})

// app.post('/dikat', async(req,res)=>{
//     const {problem,imageLink,selectedOption}=req.body
//     // console.log(bhjna,image);
//     sendOtpMailDikat({problem,imageLink,selectedOption});
//     res.json({
//         find: true
//     })
// })


const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); 

app.post('/dikat', upload.single('image'), async (req, res) => {
    const { problem, selectedOption } = req.body;
    const imageLink = req.file ? req.file.path : null; 

    sendOtpMailDikat({ problem, imageLink, selectedOption });

    res.json({
        find: true
    });
});







app.listen(PORT,()=>{
    console.log("server is up at PORT:",PORT);
})