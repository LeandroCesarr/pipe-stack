'use strict';

const seeds = []

for (let i = 0; i < 10; i++) {
  seeds[i] = {
    name: `Nome ${i}`,
    email: `email${i}@bol.com`,
    password: '123456'
  }
}

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', seeds),
  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
