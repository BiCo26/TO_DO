

const express = require('express');
const TO_DORoutes = express.Router();

const TO_DOController = require('../controllers/TO_DO-controller');

const authHelpers = require('../services/auth/auth-helpers');


TO_DORoutes.get('/', TO_DOController.index);
TO_DORoutes.post('/', TO_DOController.create);

TO_DORoutes.get('/add', (req, res) => {
  res.render('TO_DOS/TO_DO-add', {
    currentPage: 'add',
  });
});

TO_DORoutes.get('/:id', TO_DOController.show);
TO_DORoutes.get('/:id/edit', TO_DOController.edit);
TO_DORoutes.put('/:id', TO_DOController.update);
TO_DORoutes.delete('/:id', TO_DOController.delete);

module.exports = TO_DORoutes;