const { User } = require("../models");

class UserController {
    static async register(req, res) {
        try {
        const { nama, email, password } = req.body;
        const newUser = await User.create({ nama, email, password });
        res.status(201).json({
            status: "success",
            message: "User created successfully",
            data: newUser,
        });
        } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
        }
    }

    static async getAllUsers(req, res) {
        try {
        const users = await User.findAll();
        res.status(200).json({
            status: "success",
            message: "Users retrieved successfully",
            data: users,
        });
        } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
        }
    }
}

module.exports = UserController;