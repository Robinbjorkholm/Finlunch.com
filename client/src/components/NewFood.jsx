import React from "react";

function NewFood({ closeFoodForm }) {
  return (
    <div>
      <button onClick={closeFoodForm}>&#x2715;</button>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugit libero, reprehenderit
      atque, quas dicta consequatur et repudiandae cupiditate ipsam expedita qui mollitia minus
      laboriosam illo nemo ipsa soluta hic!
    </div>
  );
}

export default NewFood;
