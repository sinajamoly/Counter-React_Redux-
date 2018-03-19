import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionType from '../../store/actions'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={()=>this.props.onAddCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)}  />
                <hr/>
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.result.map(results=> (
                        <li onClick={()=>this.props.onDeleteResult(results.id)} key={results.id}>{results.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
const mapStateToProps= state=>{
    return{
        ctr:state.ctr.counter,
        result:state.res.result
    };
}

const mapDispatchToProps=dispatch=>{
    return{
        onIncrementCounter: ()=>dispatch({type:actionType.INCREMENT}),
        onDecrementCounter: ()=>dispatch({type:actionType.DECREMENT}),
        onAddCounter: (number)=>dispatch({type:actionType.ADD,val:number}),
        onSubtractCounter: (number)=>dispatch({type:actionType.SUBTRACT,val:number}),
        onStoreResult:(ctr)=>dispatch({type:actionType.STORE_RESULT,value:ctr}),
        onDeleteResult:(id)=>dispatch({type:actionType.DELETE_RESULT, resultElId:id})
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);