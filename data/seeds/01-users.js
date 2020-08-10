
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'aniigar', password: 'passtheword1'},
        {id: 2, username: 'agarris', password: 'passtheword2'},
        {id: 3, username: 'aginnis', password: 'passtheword3'}
      ]);
    });
};
