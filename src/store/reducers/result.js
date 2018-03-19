import * as actionType from '../actions';
const initialState={
    result:[]
}
const reducer=(state=initialState,action)=>{
    switch (action.type){
        case actionType.STORE_RESULT:
            return{
                ...state,
                result: state.result.concat({id:new Date(),value:action.value})
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