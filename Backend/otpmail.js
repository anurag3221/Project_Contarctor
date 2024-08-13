const nodemailer = require("nodemailer");

async function sendOtpMail(formData)
{
    const transporter= nodemailer.createTransport({
         service:'gmail',
         auth:{
             user:'cu.16bcs2823@gmail.com',
             pass:'sjdvtqjkaereftxm'
         }
     })
 
     const mailOptions = {
         from: 'cu.16bcs2823@gmail.com',
         to:formData.email,
         subject:'Digest Report OTP',
         text:`Your OTP for Digest Report is ${formData.otp_val}`,
     }
 
     try {
        const result= await transporter.sendMail(mailOptions)
        console.log('OTP email sent')
     } catch (error) {
         console.log(error);
     }
 }
 // Export send otp mail function
 module.exports = sendOtpMail;