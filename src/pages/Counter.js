import React, { useReducer } from 'react';

const Counter = () => {

    const initialState =0;

    const reducer =(state,action)=>{
        if(action.type === "INCREMENT"){
            return state +1;
        }
        else if(action.type === "DECREMENT"){
            return state -1;
        }
    }

    const [state,dispatch]=useReducer(reducer,initialState)
    return (
        <div class="max-w-md mx-auto mt-10 space-y-5">
        <div
                    class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
                >
                    <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
                Counter
            </h1>
                    <div class="text-2xl font-semibold" id="counter">{state}</div>
                    <div class="flex space-x-3">
                        <button
                            class="bg-red-400 text-white px-3 py-2 rounded shadow"
                            id="decrement" onClick={()=> dispatch({type:"DECREMENT"})}
                        >
                            Decrement
                        </button>
                        <button
                            class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                            id="increment" onClick={()=> dispatch({type:"INCREMENT"})}
                        >
                            Increment
                        </button>
                    </div>
                </div>
                </div>
    );
};

export default Counter;