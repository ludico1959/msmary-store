const mongoose = require('mongoose');

afterEach(async () => {
  await Promise.all(
    Object.keys(mongoose.connection.collections).map(async (collection) => {
      await mongoose.connection.collections[collection].deleteMany({});
    })
  );
});
