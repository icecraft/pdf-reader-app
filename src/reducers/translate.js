import {
    UPDATE_TRANSLATE_CONTENT
  } from '../constants/actionTypes';
  
const initState = {
  word: "bee",
  cn: "蜜蜂",
  english: "any of numerous hairy-bodied insects including social and solitary species",
  examples: ["a swarm of bees", "Bees were buzzing in the clover."],
  synonyms: []
}

function translateReducer (state = initState, action) {
    switch (action.type) {
      case UPDATE_TRANSLATE_CONTENT:
        return {
          ...state,
          word: action.payload.word,
          cn: action.payload.cn,
          english: action.payload.english,
          examples: action.payload.examples,
          synonyms: action.payload.synonyms
        };
      default:
        return state;
    }
  };
  

export default translateReducer;
