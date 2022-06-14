import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;
const databasePromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoritedbRestaurant = {
  async getRestaurant(id) {
    if (!id) {
      return;
    }
    return (await databasePromise).get(OBJECT_STORE_NAME, id);
  },

  async getALLRestaurant() {
    return (await databasePromise).getAll(OBJECT_STORE_NAME);
  },

  async putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
    return (await databasePromise).put(OBJECT_STORE_NAME, restaurant);
  },

  async deleteRestaurant(id) {
    return (await databasePromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoritedbRestaurant;
