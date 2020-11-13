const faker = require('faker');
const db = require('./connection.js').connection;

const menu = [
  {name: 'bread', price: 1.00},
  {name: 'soup', price: 2.00},
  {name: 'B.L.T', price: 7.50},
  {name: 'veggie burger', price: 8.00},
  {name: 'coke', price: 3.50}
];

function getRandomMenuItem() {
  let num = faker.random.number({'min': 0, 'max': menu.length - 1});
  return menu[num];
}

function seedDB() {

  for (var i = 0; i < 10; i++) {
    const num = faker.random.number({'min': 0, 'max': 3});
    const url = faker.image.food();
    db.query(`INSERT INTO photos (photo_num, url) VALUES ("${num}", "${url}");`);
  }
  for (var i = 0; i < 10; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email();
    db.query(`INSERT INTO user (username, email) VALUES ("${username}", "${email}");`);
  }
  for (var i = 0; i < 10; i++) {
    let order = getRandomMenuItem();
    const photoId = faker.random.number({'min': 1, 'max': 10});
    const name = order.name;
    const description = faker.lorem.sentence();
    const price = order.price;
    db.query(`INSERT INTO item_details (photo_id, item_name, item_description, item_price) VALUES (${photoId}, "${name}", "${description}", "${price}");`);
  }
  for (var i = 0; i < 10; i++) {
    const itemId = faker.random.number({'min': 1, 'max': 10});
    const quantity = faker.random.number({'min': 0, 'max': 10});
    const specialOptions = faker.lorem.words();
    const specialInstructions = faker.lorem.sentence();
    db.query(`INSERT INTO options (item_id, quantity, options, special_instructions) VALUES (${itemId}, ${quantity}, "${specialOptions}", "${specialInstructions}");`);
  }
  for (var i = 0; i < 10; i++) {
    const optionsId = faker.random.number({'min': 1, 'max': 10});
    const userId = faker.random.number({'min': 1, 'max': 10});
    const date = faker.date.past();
    db.query(`INSERT INTO cart (options_id, user_id, date_created) VALUES (${optionsId}, ${userId}, "${date}");`);
  }
  db.end();
  console.log('Database seeded');
}

module.exports = {seedDB};