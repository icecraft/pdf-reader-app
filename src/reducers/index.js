import { combineReducers } from 'redux';

import pdfViewReducer from './pdfView';


const rootReducer = combineReducers({
  pdfViewState: pdfViewReducer,
});

export default rootReducer;