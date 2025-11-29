import React from 'react'
import { useState } from 'react';
import { buyIceCream } from '../redux'
import { connect } from 'react-redux'
// import { buyCake } from '../redux/cake/cakeAction';

function NewCakeContainer(props) {

    const[numIceCream,setNumIceCream] = useState(1);

    const HandelCake = (e) => {
    setNumIceCream(e.target.value);
    }

    return (
        <div>
            <h1>Ice Cream Shop Container..</h1>
            <p>Num of Ice Cream: {props.numOfIceCreams}</p>
            <input type='text' value={numIceCream}  onChange={HandelCake}/>
            <button onClick={() => props.buyIceCream(numIceCream)}>Buy {numIceCream} Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream:numIceCream => dispatch(buyIceCream(numIceCream))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)