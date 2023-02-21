import React, { useReducer, useState } from 'react';
import { useSelector} from "react-redux";

import { Divider } from 'antd';

export default function Translate() {
  const translateS = useSelector(state => state.translateState);

  return (
    <div>
      <p> word &nbsp; :  &nbsp;&nbsp; {translateS.word} </p>
      <Divider />
      <p> CN &nbsp; &nbsp; :  &nbsp;&nbsp; {translateS.cn} </p>
      <Divider />
      <p> EN: </p>
      <ul> 
       {
         translateS.english.map((example, index) => (<li key={index}>{example}</li>))
       }
      </ul>
      <Divider />
      <p > Examples: </p> 
      <ul> 
       {
         translateS.examples.map((example, index) => (<li key={index}>{example}</li>))
       }
      </ul>
    </div>
  );
}