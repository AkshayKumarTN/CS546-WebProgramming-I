//Here you will import route files and export them as used in previous labs
import arraySortRoutes from './arraySort.js';
import {static as staticDir} from 'express';

const constructorMethod = (app) => {
  app.use('/', arraySortRoutes);
  app.use('/public', staticDir('public'));
  app.use('*', (req, res) => {
    res.redirect('/');
  });
};

export default constructorMethod;
