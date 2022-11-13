import React from 'react'
import { useParams } from "react-router-dom";

export default function ViewMore() {
    let { showname } = useParams();
    console.log(showname);
  return (
    <div>ViewMore: {showname}</div>
  )
}
