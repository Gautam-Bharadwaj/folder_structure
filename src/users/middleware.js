const validationMiddleware = (req, res, next) => {
    const { email, name } = req.body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
        return res.status(400).json({ err: "Valid email is required." });
    }

    if (!name || typeof name !== "string") {
        return res.status(400).json({ err: "Valid name is required." });
    }

    next();
};

module.exports = { validationMiddleware };
