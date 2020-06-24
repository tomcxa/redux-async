import { createStore, combineReducers } from "redux";
import serviceListReducer from '../reducers/serviceList';
import serviceAddReducer from '../reducers/serviceAdd';
import serviceEditReducer from '../reducers/serviceEdit';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
  serviceEdit: serviceEditReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
