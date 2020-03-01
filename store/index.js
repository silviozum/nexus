import Vuex from 'vuex';
import Data from './modules/data';
import Address from './modules/address';


const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      data:Data,
      address:Address
    }
  });
};

export default createStore