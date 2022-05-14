import { createStore } from 'redux';
import rootDeducer from './reducers'

export default createStore(rootDeducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())