const mongoose = require('mongoose');
const connection = require('../src/infra/database/mongo');

global.beforeAll(async () => connection);

global.afterEach(async () => {
  await Promise.all(
    Object.keys(mongoose.connection.collections).map(async (collection) => {
      await mongoose.connection.collections[collection].deleteMany({});
    })
  );
});

global.afterAll(async () => connection.disconnect());
