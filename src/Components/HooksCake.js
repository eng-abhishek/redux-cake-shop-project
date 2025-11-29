import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCake(){

 const numOfCake = useSelector(state => state.cake.numberOfCakes);
 const dispatch = useDispatch();

  return(
    <>
    <div>
        <h2>Num of Cake- {numOfCake}</h2>
        <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>

    </div>
    </>
  )

}

export default HooksCake;