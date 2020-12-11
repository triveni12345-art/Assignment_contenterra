import React,{useReducer} from 'react'
const initialState={
        firstCounter:0,
        secondCounter:1
    }

    const reducer =(state,action)=>{
        switch(action.type){
            case 'increment':
            return  {...state,firstCounter:state.firstCounter+ action.value};
             
            case 'decrement':
                return  { ...state, firstCounter:state.firstCounter-action.value};

                case 'increment2':
            return  {...state,secondCounter:state.firstCounter+ action.value};
             
            case 'decrement2':
                return  { ...state, secondCounter:state.firstCounter-action.value};



                case 'reset':
                    return initialState
                    default:
                        return state
        }
    }
    function Q1(){
        const [count,dispatch]=useReducer(reducer,initialState)
    return(
        <div>
            <div>count={count.firstCounter}</div>
            <div>count={count.secondCounter}</div>

            <button onClick={()=>dispatch({type:'increment',value:1})}>Add1</button>
            <button onClick={()=>dispatch({type:'decrement',value:1})}>decrement</button><br/>
            <button onClick={()=>dispatch({type:'increment',value:5})}>increment5</button>
            <button onClick={()=>dispatch({type:'decrement',value:5})}>decrement5</button><br/>
            <button onClick={()=>dispatch({type:'increment2',value:1})}>increment</button>
            <button onClick={()=>dispatch({type:'decrement2',value:1})}>decrement</button><br/>
            <button onClick={()=>dispatch({type:'reset'})}>reset</button>

        </div>
    )
}
export default Q1