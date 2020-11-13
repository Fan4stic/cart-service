const faker = require('faker');
const db = require('./connection.js').connection;

const menu = [
  {name: 'bread', description: '', price: 1.00},
  {name: 'soup', description: 'chicken, carrot, onion, noodle: Served with crackers', price: 2.00},
  {name: 'B.L.T', description: 'bacon, lettuce, tomatoes: Served on white bread', price: 7.50},
  {name: 'veggie burger', description: 'Black bean patty served on toasted bun', price: 8.00},
  {name: 'coke', description: 'A refreshing sugar bomb!', price: 3.50}
];

const options = [
  {option: 'no pork', special: 'cut in half'},
  {option: '', special: 'soak it in coke'},
  {option: 'extra mayo, no pickles', special: ''},
  {option: 'no ketchup', special: 'deep fry in lard'},
  {option: 'add lemon juice', special: 'cough in it'}
];

function getRandomMenuItem() {
  let num = faker.random.number({'min': 0, 'max': menu.length - 1});
  return menu[num];
}

function getRandomMenuOptions() {
  let num = faker.random.number({'min': 0, 'max': options.length - 1});
  return options[num];
}

function seedDB() {

  for (var i = 0; i < 10; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email();
    db.query(`INSERT INTO user (username, email) VALUES ("${username}", "${email}");`);
  }
  for (var i = 0; i < 10; i++) {
    const num = faker.random.number({'min': 0, 'max': 3});
    const url = faker.image.food();
    db.query(`INSERT INTO photos (photo_num, url) VALUES ("${num}", "${url}");`);
  }
  for (var i = 0; i < 10; i++) {
    let order = getRandomMenuItem();
    const name = order.name;
    const description = order.description;
    const price = order.price;
    db.query(`INSERT INTO item_details (item_name, item_description, item_price) VALUES ("${name}", "${description}", "${price}");`);
  }
  for (var i = 0; i < 10; i++) {
    let orderOption = getRandomMenuOptions();
    const quantity = faker.random.number({'min': 0, 'max': 10});
    const specialOptions = orderOption.option;
    const specialInstructions = orderOption.special;
    db.query(`INSERT INTO options (quantity, options, special_instructions) VALUES ("${quantity}", "${specialOptions}", "${specialInstructions}");`);
  }
  for (var i = 0; i < 10; i++) {
    const date = faker.date.past();
    db.query(`INSERT INTO cart (date_created) VALUES ("${date}");`);
  }
  db.end();
  console.log('Database seeded');
}

seedDB();