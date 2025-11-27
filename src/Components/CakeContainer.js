import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function CakeContainer(props){

    return(
       <div>
         <h1>Cake Shop Container..</h1>
         <p>Num of cake: {props.numberOfCake}</p>
         <button onClick={props.buyCake}></button>
       </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        numberOfCake:state.numberOfCake
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer)