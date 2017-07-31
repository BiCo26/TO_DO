const To_Do = require('../models/TO_DO');

const TO_DOController = {};

TO_DOController.index = (req, res) => {
  To_Do.findAll()
    .then(to_do => {
        //views/TO_DOS/TO_DO-index.ejs
      res.render('TO_DOS/TO_DO-index', {
        currentPage: 'index',
        message: 'ok',
        data: movies,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
};

TO_DOController.show = (req, res) => {
  TO_DO.findById(req.params.id)
    .then(To_Do => {
      res.render('To_Do/to_do-single', {
        currentPage: 'show',
        message: 'ok',
        data: movie,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

Controller.create = (req, res) => {
  TO_DO.create({
    title: req.body.title,
    year: req.body.year,
    genre: req.body.genre,
  }).then(() => {
    res.redirect('/movies');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

TO_DOController.update = (req, res) => {
  TO_DO.update({
//     title: req.body.title,
//     year: req.body.year,
//     genre: req.body.genre,
//   }, req.params.id).then(TO_DO => {
//     res.redirect(`/TO_DOS/${req.params.id}`);
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// };

// TO_DOController.edit = (req, res) => {
//   To_Do.findById(req.params.id)
//     .then(movie => {
//       res.render('TO_DOS/to_do-single-edit', {
//         currentPage: 'edit',
//         data: TO_DOS,
//       });
//     }).catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// }

// TO_DOController.delete = (req, res) => {
//   To_Do.destroy(req.params.id)
//     .then(() => {
//       res.redirect('/TO_DOS');
//     }).catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// }

// module.exports = TO_DOController;