const db = require("../db/db");
const bcrypt = require('bcrypt');

const comparePassword = async (userEnteredPassword, hashedPassword) => {
    const isMatch = await bcrypt.compare(userEnteredPassword, hashedPassword);
    if (isMatch) {
        console.log("usuário válido");
        return isMatch;
    } else {
        console.log("senha ou email incorretos");
        return isMatch;
    }
}

exports.getUserData = async (req, res) => {
    const { email, password } = req.body;
    try {
        let userData = await db.query('SELECT * FROM usuario WHERE email = $1', [email]);

        if (userData.rowCount === 0) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        await userData.map(user => {
            userData = {
                email: user.email,
                password: user.senha
            }
        });

        if ('email' in userData) {
            await comparePassword(password, userData.password);
            return res.status(204).send();
        } else {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        
    } catch (error) {
        throw new Error(error);
    }
}
