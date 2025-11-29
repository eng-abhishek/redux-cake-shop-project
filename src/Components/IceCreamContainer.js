import React from 'react'
import { buyIceCream } from '../redux'
import { connect } from 'react-redux'

// import { buyCake } from '../redux/cake/cakeAction';

function iceCreamContainer(props) {

    return (
        <div>
            <h1>Ice Cream Shop Container..</h1>
            <p>Num of Ice Cream: {props.numOfIceCreams}</p>
            <button onClick={props.buyIceCream}>Buy Cake</button>
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
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(iceCreamContainer)