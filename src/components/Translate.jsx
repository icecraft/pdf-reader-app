import React, { useReducer, useState } from 'react';
import { useSelector} from "react-redux";

import { Divider } from 'antd';

export default function Translate() {
  const translateS = useSelector(state => state.translateState);

  return (
    <div>
      <p> word &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : {translateS.word} </p>
      <p> 中文释义 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : {translateS.cn} </p>
      <p> English Meaning &nbsp;: {translateS.english} </p>
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