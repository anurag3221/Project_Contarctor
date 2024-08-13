// const { text } = require("express");
// const nodemailer = require("nodemailer");

// async function sendOtpMailDikat(formData)
// {
//     const transporter= nodemailer.createTransport({
//          service:'gmail',
//          auth:{
//              user:'cu.16bcs2823@gmail.com',
//              pass:'sjdvtqjkaereftxm'
//          }
//      })
 
//      const mailOptions = {
//          from: 'cu.16bcs2823@gmail.com',
//          to:formData.selectedOption,
//          subject:'Happy to Help Issue',
//          html: ` <h3>${formData.problem}<h3/>
//          <br/>
//          <br/>
//          <img src="${formData.imageLink}" width="640" height="480" allow="autoplay"></img>`  ,
//      }
 
//      try {
//         const result= await transporter.sendMail(mailOptions)
//         console.log('email sent')
//      } catch (error) {
//          console.log(error);
//      }
//  }
//  // Export send otp mail function
//  module.exports = sendOtpMailDikat;


// // const sendDikat = (e) => {
// //     e.preventDefault(); // Prevent form submission (if not handled elsewhere)
// //     const formData = new FormData();
// //     formData.append('likha', bhjna.likha);
// //     bhjna.images.forEach((image, index) => {
// //       formData.append(`image${index + 1}`, image);
// //     });
// //     console.log(formData); // Check formData before sending
// //     axios.post('http://localhost:9005/dikat', formData)
// //       .then((res) => {
// //         console.log('Response from server:', res.data); // Log the response
// //         if (res.data.find === true) {
// //           console.log('Mail sent to admin');
// //           navigate('/complaint');
// //         } else {
// //           console.log('Mail not sent, error');
// //         }
// //       })
// //       .catch(error => {
// //         console.error('Error uploading images:', error);
// //       });
// //   };
  

const nodemailer = require("nodemailer");

async function sendOtpMailDikat(formData) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'cu.16bcs2823@gmail.com',
            pass: 'sjdvtqjkaereftxm'
        }
    });

    const mailOptions = {
        from: 'cu.16bcs2823@gmail.com',
        to: formData.selectedOption,
        subject: 'Happy to Help Issue',
        html: `
            <h3>${formData.problem}</h3>
            <br/>
            <br/>
            <img src="${formData.imageLink}" width="640" height="480" alt="Problem Image" />
        `
    };

    try {
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent');
    } catch (error) {
        console.log('Error sending email:', error);
    }
}

module.exports = sendOtpMailDikat;


