const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try{
            console.log("came here mailsender")
            let transporter = nodemailer.createTransport({
                host:process.env.MAIL_HOST,
                auth:{
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                }
            })

            console.log("came here transporter");
            let info = await transporter.sendMail({
                from: 'StudyNotion || CodeHelp - by Akram',
                to:`${email}`,
                subject: `${title}`,
                html: `${body}`,
            })
            console.log("finsh")
            console.log(info);
            return info;
    }
    catch(error) {
        console.log("came here mailsender with fail")
        console.log(error.message);
    }
}


module.exports = mailSender;