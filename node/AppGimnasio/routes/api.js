const router = require('express').Router();

const clientesApiRouter = require('./api/clientes');
const usuariosApiRouter = require('./api/usuarios');

router.use('/clientes', clientesApiRouter);
router.use('/usuarios', usuariosApiRouter);

module.exports = router;