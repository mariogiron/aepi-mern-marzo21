const router = require('express').Router();
const Usuario = require('../../models/Usuario');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

// /api/usuarios/registro
router.post('/registro', [
    check('username').exists(),
    check('email').exists().isEmail(),
    check('password').exists().matches(/^([a-zA-Z0-9@*#]{8,15})$/),
    check('email').custom(async value => {
        const usuario = await Usuario.findOne({ email: value });
        console.log(usuario);
        if (usuario) {
            throw new Error('Email ya existe');
        } else {
            return true;
        }
    })
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({ error: errors.array() });
    }

    // Encripto la password
    req.body.password = bcrypt.hashSync(req.body.password, 10);

    Usuario.create(req.body)
        .then(nuevoUsuario => {
            res.json({ success: 'Se ha creado el usuario' });
        }).catch(error => {
            res.json({ error: 'Se ha producido un error en el registro' });
        });
});

module.exports = router;