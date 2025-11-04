const { createUser } = require("./services");

const create = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await createUser({ name, email });
        return res.status(200).json({ message: "User created", user });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ err: error.message });
    }
};

module.exports = { create };
