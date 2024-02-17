const nodemailer = require("nodemailer")

const sendEmail = ({
    to,
    message = "Email",
    subject = "subject"
}
) => new Promise((resole, reject) => {
    try {
        console.log(process.env.FROM_EMAIL)
        console.log(process.env.EMAIL_PASS)
        const miler = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.FROM_EMAIL,
                pass: process.env.EMAIL_PASS,
            },

        });
        console.log(to);
        miler.sendMail({
            to: process.env.FROM_EMAIL,
            subject,
            text: message,
            from: process.env.FROM_EMAIL
        }, (err) => {

            if (err) {
                console.log(err)
                return reject(err)
            } else {

                console.log("email success")
                return resole("email success")
            }
        })
    } catch (error) {
        console.log(error)
        return reject(error.message)
    }
})

module.exports = sendEmail