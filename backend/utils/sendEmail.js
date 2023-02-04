const nodemailer = require("nodemailer") ; 

const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({

        host : process.nextTick.SMPT_HOST ,
        port : 465 ,
        service : process.env.SMPT_SERVICE ,
        auth : {
            user : process.env.SMPT_MAIL ,
            pass : process.env.SMPT_PASSWORD 
        }

    })
    const mailOptions = {
        from : process.env.SMPT_MAIL , 
        to : options.email , 
        subject : options.subject , 
        text : options.message,
    }

    await transporter.sendMail(mailOptions) ;
} ;




module.exports = sendEmail ;