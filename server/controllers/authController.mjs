import { UserModel } from "../models/userModel.mjs";

export class AuthClass {
    static Register = async (req, res) => {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: "Invalid credentials!" });
        }
        try {
            const user = await UserModel.create({
                username: username,
                password: password
            });
            return res.status(201).json({ message: "User registered!", user: user });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "User registration failed!" });
        }
    }

    static Login = async (req, res) => {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: "Invalid credentials!" });
        }
        try {
            const user = await UserModel.find({username:username});
            if (user) {
                return res.status(200).json({ message: "User logged in!", user: user });
            } else {
                return res.status(401).json({ message: "Invalid username or password!" });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "User login failed!" });
        }
    }
}
