import Vuex from 'vuex';
import Data from './modules/data';


const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      data:Data
    }
  });
};

export default createStore