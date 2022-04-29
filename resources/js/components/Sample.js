import React, { useState } from 'react';

function Sample(props) {

   const className = "btn btn-" + props.btn
   //const [count, setCount] = useState(0);

   return (
      <>
      <h1>{ props.title }</h1>
      <p>{props.count}</p>
      <button onClick={() => props.setCount(props.count + 1)}
         type="button"
         className={ className }>Primary</button>
      </>
   )


}

export default Sample;
