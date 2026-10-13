const crypto = require('crypto');

const controller = {};

// La clave nunca se devuelve y se guarda cifrada con SHA-256,
// igual que SHA2(..., 256) en el script de la base de datos.
const columns = 'userid, idempresa, idsuc, idtpusuario, idemp, usuario, estado';

const hashPassword = (data) => {
    if (data.clave) {
        data.clave = crypto.createHash('sha256').update(data.clave).digest('hex');
    }
    return data;
};

// Listar todos los registros
controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        if (error) return res.status(500).json(error);
        conn.query(`select ${columns} from usuario`, (err, users) => {
            if (err) return res.status(500).json(err);
            res.json(users);
        });
    });
};

// Obtener un registro por su id
controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((error, conn) => {
        if (error) return res.status(500).json(error);
        conn.query(`select ${columns} from usuario where userid = ?`, [id], (err, user) => {
            if (err) return res.status(500).json(err);
            if (user.length === 0) return res.status(404).json({ message: "Registro no encontrado" });
            res.json(user[0]);
        });
    });
};

// Insertar un registro
controller.save = (req, res) => {
    const data = hashPassword({ ...req.body });
    req.getConnection((error, conn) => {
        if (error) return res.status(500).json(error);
        conn.query('insert into usuario set ?', [data], (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Registro Guardado", id: result.insertId });
        });
    });
};

// Actualizar un registro
controller.update = (req, res) => {
    const { id } = req.params;
    const newUser = hashPassword({ ...req.body });
    req.getConnection((error, conn) => {
        if (error) return res.status(500).json(error);
        conn.query('update usuario set ? where userid = ?', [newUser, id], (err, result) => {
            if (err) return res.status(500).json(err);
            if (result.affectedRows === 0) return res.status(404).json({ message: "Registro no encontrado" });
            res.json({ message: "Registro Actualizado" });
        });
    });
};

// Eliminar un registro
controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((error, conn) => {
        if (error) return res.status(500).json(error);
        conn.query('delete from usuario where userid = ?', [id], (err, result) => {
            if (err) return res.status(500).json(err);
            if (result.affectedRows === 0) return res.status(404).json({ message: "Registro no encontrado" });
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;
