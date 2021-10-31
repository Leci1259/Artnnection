const path = require('path');
const express = require("express");
const routes = require("./controllers");
const sequelize = require('./config/connection');
const session = require('express-session');
const exphbs = require('express-handlebars');
const passport = require("passport");
const crypto =require("crypto");
const { dirname } = require('path');

//-------------- EXPRESS SERVER ---------------

const app = express();
const PORT = process.env.PORT || 3001;

//-------------- HANDLEBARS ---------------

const hbs = exphbs.create({
  defaultLayout: "main",
  extname: ".handlebars",
  helpers: {
    section: function(name, options) { 
      if (!this._sections) this._sections = {};
        this._sections[name] = options.fn(this); 
        return null;
      }
  }    
});
app.engine('handlebars', hbs.engine);
app.set('view engine', '.handlebars');

//-------------- REQ/RES handlers ---------------

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//-------------- SESSION MANAGEMENT ---------------

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
};

app.use(session(sess));

//-------------- AUTHENTICATION ---------------

require("./config/passport")
app.use(passport.initialize());
app.use(passport.session());

//-------------- ROUTE ---------------

app.use(routes);

//-------------- SEQUELIZE ---------------
// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
