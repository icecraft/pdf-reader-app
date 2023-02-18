import {
    LOAD_PDF
  } from '../constants/actionTypes';
  
const initState = {
  pdf_file: ''

}

function pdfViewReducer (state = initState, action) {
    switch (action.type) {
      case LOAD_PDF:
        return {
          ...state,
          pdf_file: action.payload
        };
      default:
        return state;
    }
  };
  

export default pdfViewReducer;
