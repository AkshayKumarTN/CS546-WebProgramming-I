import express from 'express';
const app = express();
import session from 'express-session';
import configRoutes from './routes/index.js';
import exphbs from 'express-handlebars';

const rewriteUnsupportedBrowserMethods = (req, res, next) => {
  // If the user posts to the server with a property called _method, rewrite the request's method
  // To be that method; so if they post _method=PUT you can now allow browsers to POST to a route that gets
  // rewritten in this middleware to a PUT route
  if (req.body && req.body._method) {
    req.method = req.body._method;
    delete req.body._method;
  }

  // let the next middleware run:
  next();
};

app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rewriteUnsupportedBrowserMethods);

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(
  session({
    name: 'AuthenticationState',
    secret: "This is a secret.. shhh don't tell anyone",
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 60000 }
  })
);

app.use((req, res, next) => {
  const timestamp = new Date().toUTCString();
  const method = req.method;
  const path = req.path;
  const sessionUser = req.session.user;
  let isAuthenticated = '(Non-Authenticated)';
  if (sessionUser) {
    isAuthenticated = `(Authenticated ${sessionUser.role === 'superuser' ? 'Super User' : 'User'})`;
  }
  console.log(`[${timestamp}]: ${method} ${path} ${isAuthenticated}`);
  next();
});

app.get('/login', (req, res, next) => {
  if (req.session.user) {
    const user = req.session.user;
    if (user.role === 'superuser') {
      return res.redirect('/superuser');
    } else {
      return res.redirect('/user');
    }
  }
  next();
});
app.get('/register', (req, res, next) => {
  if (req.session.user) {
    const user = req.session.user;
    if (user.role === 'superuser') {
      return res.redirect('/superuser');
    } else {
      return res.redirect('/user');
    }
  }
  next();
});

app.use('/user', (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
});

app.use('/superuser', (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  const user = req.session.user;
  if (user.role !== 'superuser') {
    res.status(403).render('error', {
      title: 'Access Denied',
      errorMessage: 'You do not have permission to view this page.',
      redirectLink: '/user',
      linkText: 'Go to User Dashboard'
    });
  }
  next();
});

app.get('/signout', (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
});

app.use((req, res, next) => {
  if (req.session && req.session.user && req.session.user.themePreference) {
    res.locals.backgroundColor = req.session.user.themePreference.backgroundColor || '#ffffff';
    res.locals.fontColor = req.session.user.themePreference.fontColor || '#000000';
  } else {
    res.locals.backgroundColor = '#ffffff';
    res.locals.fontColor = '#000000';
  }
  next();
});


configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});



