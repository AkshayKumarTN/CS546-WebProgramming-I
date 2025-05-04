//Here you will require route files and export the constructor method as shown in lecture code and worked in previous labs.
import routesApiRoutes from './routesApi.js';
import {static as staticDir} from 'express';

const constructorMethod = (app) => {
  app.use('/', routesApiRoutes);
  app.use('/public', staticDir('public'));
  app.use('*', (req, res) => {
    res.redirect('/');
  });
};

export default constructorMethod;