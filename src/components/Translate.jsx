import React, { useReducer, useState } from 'react';
import { useSelector} from "react-redux";

import { Divider } from 'antd';

export default function Translate() {
  const translateS = useSelector(state => state.translateState);

  return (
    <div>
      <p> word: {translateS.word} </p>
      <p> 中文释义: {translateS.cn} </p>
      <p> English Meaning: {translateS.english} </p>
      <Divider />
      <ul> 
        Examples: 
       {translateS.examples}.map((example) => <li>{example}</li>)
      </ul>
    </div>
  );
}