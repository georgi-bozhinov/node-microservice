const express = require('express');

const app = express();
const db = require('./db');

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

app.get('/api/addressbook/books/select', (req, res) => {
  db.select()
    .table('books')
    .then(books => {
      res.send(books);
    })
    .catch(err => {
      res.status(500).send('Error while getting books!');
    });
});

app.get('/api/addressbook/books/insert', (req, res) => {
  const id = getRandomInt(1, 100000);
  const name = `My Book #${id}`;
  const book = {id, name};
  db.insert(book)
    .into('books')
    .returning('id')
    .then(id => {
      res.json({book_id: id});
    })
    .catch(err => {
      console.log(err.stack);
      res.status(500).send('Error while inserting!');
    });
});

app.get('/api/addressbook/books/delete', (req, res) => {
  db('books')
    .del()
    .then(() => {
      res.json({status: 'success'});
    })
    .catch(err => {
      console.log(err.stack);
      res.status(500).send('Error while deleting!');
    });
});

app.listen(process.env.PORT || 3000);

module.exports = {app};
