const controller = {};

// Listar todos los registros
controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        if (error) return res.status(500).json(error);
        conn.query('select * from empleados', (err, employees) => {
            if (err) return res.status(500).json(err);
            res.json(employees);
        });
    });
};

// Obtener un registro por su id
controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((error, conn) => {
        if (error) return res.status(500).json(error);
        conn.query('select * from empleados where idemp = ?', [id], (err, employee) => {
            if (err) return res.status(500).json(err);
            if (employee.length === 0) return res.status(404).json({ message: "Registro no encontrado" });
            res.json(employee[0]);
        });
    });
};

// Insertar un registro
controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((error, conn) => {
        if (error) return res.status(500).json(error);
        conn.query('insert into empleados set ?', [data], (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Registro Guardado", id: result.insertId });
        });
    });
};

// Actualizar un registro
controller.update = (req, res) => {
    const { id } = req.params;
    const newEmployee = req.body;
    req.getConnection((error, conn) => {
        if (error) return res.status(500).json(error);
        conn.query('update empleados set ? where idemp = ?', [newEmployee, id], (err, result) => {
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
        conn.query('delete from empleados where idemp = ?', [id], (err, result) => {
            if (err) return res.status(500).json(err);
            if (result.affectedRows === 0) return res.status(404).json({ message: "Registro no encontrado" });
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;
