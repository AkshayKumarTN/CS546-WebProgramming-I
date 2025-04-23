//import express, express router as shown in lecture code
import helpers from '../helpers.js';
import { Router } from 'express';
const router = Router();

router.route('/').get(async (req, res) => {
  //code here for GET
  try {
    res.render('home',{title: 'Lab 10 - Login System'});
    } catch (e) {
      return res.status(500).render('error', {
        title: '500 - Error',
        errorMessage: e
      });
    }
});

router
  .route('/register')
  .get(async (req, res) => {
    //code here for GET
    try {
      res.render('register',{title: 'Register'});
      } catch (e) {
        return res.status(500).render('error', {
          title: '500 - Error',
          errorMessage: e
        });
      }
  })
  .post(async (req, res) => {
    //code here for POST
  });

router
  .route('/login')
  .get(async (req, res) => {
    //code here for GET
    try {
      res.render('login',{title: 'Login'});
      } catch (e) {
        return res.status(500).render('error', {
          title: '500 - Error',
          errorMessage: e
        });
      }
  })
  .post(async (req, res) => {
    //code here for POST
  });

router.route('/user').get(async (req, res) => {
  //code here for GET
});

router.route('/superuser').get(async (req, res) => {
  //code here for GET
});

router.route('/signout').get(async (req, res) => {
  //code here for GET
});


export default router;