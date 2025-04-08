//Here you will import route files and export them as used in previous labs
import charactersRoutes from './characters.js';
import {static as staticDir} from 'express';

const constructorMethod = (app) => {
  app.use('/', charactersRoutes);
  app.use('/public', staticDir('public'));
  app.use('*', (req, res) => {
    res.redirect('/');
  });
};

export default constructorMethod;
