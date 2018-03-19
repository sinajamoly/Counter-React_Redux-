import * as actionType from './actions';
const initialState={
    counter: 10,
    result:[]
}
const reducer=(state=initialState,action)=>{
    switch (action.type){
        case actionType.INCREMENT:
            return{
                ...state,
                counter:state.counter+1
            }
        case actionType.DECREMENT:
            return{
                ...state,
                counter:state.counter-1
            }
        case actionType.ADD:
            return{
                ...state,
                counter:state.counter+ action.val
            }
        case actionType.SUBTRACT:
            return{
                ...state,
                counter:state.counter - action.val
            }
        case actionType.STORE_RESULT:
            return{
                ...state,
                result: state.result.concat({id:new Date(),value:state.counter})
            }
        case actionType.DELETE_RESULT:
            const array=state.result.filter(result=>result.id !==action.resultElId);
            return{
                ...state,
                result: array
            }
    }
    return state;
}

export default reducer;