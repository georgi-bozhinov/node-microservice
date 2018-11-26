const express = require('express');

const app = express();
const db = require('./db');

app.get('/userinfo', (_req, res) => {
  db.raw('SELECT current_user, session_user').then(user => {
    let users = {};
    users.application_user = user.rows[0].current_user;
    users.current_user = user.rows[0].current_user;
    users.session_user = user.rows[0].current_user;

    res.send({ dbInfo: [users] });
  }).catch(err => {
    return res.status(500).send(`Error while getting user: ${err}!`);
  });
});

app.listen(process.env.PORT || 3000);

module.exports = { app };
