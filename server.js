const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local');

app.use(session({ secret: 'secret sauce' }));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// passport strategy
passport.use(new LocalStrategy(function(username, password, done) {
  // Find the user with the given username
    User.findOne({ username: username }, function (err, user) {
      // if there's an error, finish trying to authenticate (auth failed)
      if (err) {
        console.log(err);
        return done(err);
      }
      // if no user present, auth failed
      if (!user) {
        console.log(user);
        return done(null, false, { message: 'Incorrect username.' });
      }
      // if passwords do not match, auth failed
      if (user.password !== password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      // auth has has succeeded
      return done(null, user);
    });
  }
));

app.use(passport.initialize());
app.use(passport.session());







const User = require('./User');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', "login.html"))
})

app.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', "register.html"));
});

app.post('/register', (req, res) => {
  const newUser = new User(req.body);

  newUser.save((err, result) => {
    if (err) {
      res.send("There was some kind of error");
    } else {
      res.redirect('/login');
    }
  });
});

app.get('/getAllUsers', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.send("error");
    } else {
      res.json(users);
    }
  });
});

// app.use((req, res, next) => {
//   if(req.user) {
//     next();
//   } else {
//     res.redirect('/login');
//   }
// });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', "main.html"));
})

app.listen(3000);
