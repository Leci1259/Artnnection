const path = require('path');
const express = require("express");
const routes = require("./routes");
const sequelize = require('./config/connection');
const session = require('express-session');
const exphbs = require('express-handlebars');
const { dirname } = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

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

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
};

app.use(session(sess));

//Express.js handlebar connection
app.engine('handlebars', hbs.engine);
app.set('view engine', '.handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
