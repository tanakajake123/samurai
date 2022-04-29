import React, { useState } from 'react';

function Block(props) {

   const [count, setCount] = useState(0);
   const maxCount = props.max;

   const onClick = () => {

      console.log("count=" + count + " max=" + maxCount);
      if(count >= maxCount){
         alert("no coin");
         return;
      }

      props.onBlockClicked()
      setCount(count + 1);

   }

   let blockColor = "red";
   if(count >= maxCount){
      blockColor = "green";
   }

   return (
      <>
         <div
            style={{
               "width":"50px",
               "height":"50px",
               "backgroundColor": blockColor
            }}
            onClick={ onClick }
            >


         </div>
      </>
   )


}

export default Block;
