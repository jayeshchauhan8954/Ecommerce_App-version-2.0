const db = require("./../model/index");
const config = require("./../config/auth.config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Sequelize } = require("sequelize");
const User = db.user;
const Roles = db.roles;

let signup = async (req, res) => {
    let user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),

    })

    if (req.body.roles) {
        let roles = await Roles.findAll({
            where: {
                name: {
                    [Sequelize.Op.or]: req.body.roles,
                },
            },
        });
        await user.setRoles(roles);
        res.status(200).json({
            message: "User registered successfully"
        })
    } else {
        await user.setRoles([1]);
        res.status(200).json({
            message: "Registered with user role"
        });
    }
};
let signin = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let userName = await User.findOne({
        where: {
            username: username,
        },
    });

    if (!userName) {
        res.status(404).json({
            message: "User not found",
        });
        return;
    }

    let isValidPassword = bcrypt.compareSync(
        req.body.password,
        userName.password
    );

    if (!isValidPassword) {
        res.status(401).json({
            message: "Password is incorrect",
        });
        return;
    }
    let token = jwt.sign({ id: userName.id }, config.secret, {
        expiresIn: 86400,
    });

    let authorities = [];
    let roles = await userName.getRoles();
    for (let i = 0; i < roles.length; i++) {
        authorities.push("ROLE_" + roles[i].name.toUpperCase());
    }

    res.status(200).send({
        id: userName.id,
        username: userName.username,
        email: userName.email,
        roles: authorities,
        accessToken: token,
    });
};

module.exports = { signin, signup, };