import { configureStore } from '@reduxjs/toolkit';
import incdecReducer from './reducers/index';

export default configureStore({
    reducer : {
        number : incdecReducer,
    }
})

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;


