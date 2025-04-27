//import express, express router as shown in lecture code
import helpers from '../helpers.js';
import { Router } from 'express';
import * as usersMethods from '../data/users.js';
const router = Router();

router.route('/').get(async (req, res) => {
  //code here for GET
  try {
    if (req.session.user) {
      const user = req.session.user;
      const isSuperuser = user.role === 'superuser';
      res.render('home', { 
        title: 'Lab 10 - Login System',
        loggedIn: true,
        isSuperuser: isSuperuser
       });
    }
    else{
      res.render('home', { title: 'Lab 10 - Login System' });
    }
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
      res.render('register', { title: 'Register' });
    } catch (e) {
      return res.status(500).render('error', {
        title: '500 - Error',
        errorMessage: e
      });
    }
  })
  .post(async (req, res) => {
    //code here for POST
    let newUserInfo = req.body;
    if (!newUserInfo || Object.keys(newUserInfo).length === 0) {
      return res.status(400).render('register', {
        title: 'register',
        errorMessage: 'Error 400: There are no fields in the request body'
      });
    }
    try {
      helpers.CheckName(newUserInfo.firstName, 'firstName');
      helpers.CheckName(newUserInfo.lastName, 'lastName');
      helpers.CheckUserId(newUserInfo.userId);
      helpers.CheckPassword(newUserInfo.password);
      if (newUserInfo.password !== newUserInfo.confirmPassword) {
        throw "Password and Confirm Password do not match.";
      }
      helpers.CheckFavoriteQuote(newUserInfo.favoriteQuote);
      helpers.CheckThemePreference(newUserInfo.themePreference);
      helpers.CheckRole(newUserInfo.role);
    } catch (e) {
      return res.status(400).render('register', {
        title: 'register',
        errorMessage: 'Error 400: ' + e
      });
    }
    try {
      const newUser = await usersMethods.register(
        newUserInfo.firstName,
        newUserInfo.lastName,
        newUserInfo.userId,
        newUserInfo.password,
        newUserInfo.favoriteQuote,
        newUserInfo.themePreference,
        newUserInfo.role
      );
      if (newUser.registrationCompleted) {
        res.redirect('/login');
      }
      else {
        throw '500';
      }
    } catch (e) {
      if (e === '500' || typeof e !== 'string' || !e) {
        return res.status(500).render('register', {
          title: 'register',
          errorMessage: 'Error 500: Internal Server Error'
        });
      }
      return res.status(400).render('register', {
        title: 'register',
        errorMessage: 'Error 400: ' + e
      });
    }
  });

router
  .route('/login')
  .get(async (req, res) => {
    //code here for GET
    try {
      res.render('login', { title: 'Login' });
    } catch (e) {
      return res.status(500).render('error', {
        title: '500 - Error',
        errorMessage: e
      });
    }
  })
  .post(async (req, res) => {
    //code here for POST
    let loginInfo = req.body;
    if (!loginInfo || Object.keys(loginInfo).length === 0) {
      return res.status(400).render('Login', {
        title: 'Login',
        errorMessage: 'Error 400: There are no fields in the request body'
      });
    }
    try {
      //Validation.....
      helpers.CheckUserId(loginInfo.userId);
      helpers.CheckPassword(loginInfo.password);
    } catch (e) {
      return res.status(400).render('Login', {
        title: 'Login',
        errorMessage: 'Error 400: ' + e
      });
    }
    try {
      const safeUserInfo = await usersMethods.login(
        loginInfo.userId,
        loginInfo.password
      );
      req.session.user = safeUserInfo;
      if (safeUserInfo.role == 'superuser') {
        res.redirect('/superuser');
      }
      else {
        res.redirect('/user');
      }
    } catch (e) {
      if (e === '500' || typeof e !== 'string' || !e) {
        return res.status(500).render('Login', {
          title: 'Login',
          errorMessage: 'Error 500: Internal Server Error'
        });
      }
      return res.status(400).render('Login', {
        title: 'Login',
        errorMessage: 'Error 400: ' + e
      });
    }
  });

router.route('/user').get(async (req, res) => {
  //code here for GET
  try {
    const user = req.session.user;
    const now = new Date();
    res.render('user', {
      title: 'User',
      firstName: user.firstName,
      lastName: user.lastName,
      currentTime: now.toLocaleTimeString(),
      currentDate: now.toLocaleDateString(),
      signupDate: user.signupDate,
      lastLogin: user.lastLogin,
      favoriteQuote: user.favoriteQuote,
      role: user.role,
      isSuperUser: user.role === 'superuser'
    });
  } catch (e) {
    return res.status(500).render('error', {
      title: '500 - Error',
      errorMessage: e
    });
  }
});

router.route('/superuser').get(async (req, res) => {
  //code here for GET
  try {
    const user = req.session.user;
    const now = new Date();
    res.render('superuser', {
      title: 'Superuser',
      firstName: user.firstName,
      lastName: user.lastName,
      currentTime: now.toLocaleTimeString(),
      currentDate: now.toLocaleDateString(),
      signupDate: user.signupDate,
      lastLogin: user.lastLogin,
      favoriteQuote: user.favoriteQuote
    });
  } catch (e) {
    return res.status(500).render('error', {
      title: '500 - Error',
      errorMessage: e
    });
  }
});

router.route('/signout').get(async (req, res) => {
  //code here for GET
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('An error occurred while logging out.');
    }
    res.clearCookie('AuthenticationState');
    res.render('signout', {
      title: 'Logged Out',
      message: 'You have been successfully logged out.',
      redirectLink: '/login',
      linkText: 'Login Again'
    });
  });
});


export default router;