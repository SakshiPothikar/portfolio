const sendEmail = require("../utils/email")

exports.contactEmail = async (req, res) => {
    try {
        console.log(req.body)
        const x = await sendEmail({
            to: req.body.to,
            subject: `Hey, ${req.body.subject}`,
            message: `Email ${req.body.to},${req.body.message} `
        })
        if (x) {
            res.status(200).json({ message: "email send " })
        } else {
            res.status(400).json({ message: "Email unable to send" })
        }
    }


    catch (error) {
        res.status(500).json({ message: error.message || "something went wrong" })
    }
}