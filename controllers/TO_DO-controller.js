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

movieController.create = (req, res) => {
  Movie.create({
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

movieController.update = (req, res) => {
  Movie.update({
//     title: req.body.title,
//     year: req.body.year,
//     genre: req.body.genre,
//   }, req.params.id).then(movie => {
//     res.redirect(`/movies/${req.params.id}`);
//   }).catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// };

// movieController.edit = (req, res) => {
//   Movie.findById(req.params.id)
//     .then(movie => {
//       res.render('movies/movie-single-edit', {
//         currentPage: 'edit',
//         data: movie,
//       });
//     }).catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// }

// movieController.delete = (req, res) => {
//   Movie.destroy(req.params.id)
//     .then(() => {
//       res.redirect('/movies');
//     }).catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// }

// module.exports = movieController;