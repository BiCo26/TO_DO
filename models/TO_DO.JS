

const db = require('../db/config');

const To_Do = {};

To_Do.findAll = () => {
  return db.query('SELECT * FROM TO_DOS');
}

To_Do.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM TO_DOS
    WHERE id = $1
  `, [id]);
}

To_Do.create = (TO_DOS) => {
  return db.one(`
    INSERT INTO TO_DOS
    (task, due_date)
    VALUES ($1, $2)
    RETURNING *
  `, [To_Do.task, To_Do.due_date]);
}

To_Do.update = (TO_DOS, id) => {
  return db.one(`
    UPDATE TO_DOS SET
    task = $1,
    due_date = $2,
    WHERE id = $3
    RETURNING *
  `, [To_Do.task, To_Do.due_date, id]);
}

To_Do.destroy = (id) => {
  return db.none(`
    DELETE FROM TO_DOS
    WHERE id = $1
  `, [id]);
}

module.exports = To_Do;