import { combineReducers } from 'redux';

import pdfViewReducer from './pdfView';
import translateReducer from './translate';

const rootReducer = combineReducers({
  pdfViewState: pdfViewReducer,
  translateState: translateReducer
});


export default rootReducer;

