const nodemailer = require("nodemailer");

const send_Mail = async (req, res) => {
    try {
        // service
        const transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: "akashkakadiya0@gmail.com",
                pass: "yjfvvlgeouvgbbrx",
            },
        });

        const mail_send = await transport.sendMail({
            from: "akashkakadiya0@gmail.com",
            to: "akashkakadiya00@gmail.com",
            subject: "Test Mail",
            text: "Hello World",
        });

        if (!mail_send) {
            throw new Error("Mail not Sent");
        }
        res.status(200).json({
            success: true,
            message: "Mail sent successfully",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = { send_Mail };
