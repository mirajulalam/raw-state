import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';

const Child = () => {
    const {count,setCount}=useContext(COUNTER_CONTEXT);
    return (
        <div class="max-w-md mx-auto mt-10 space-y-5">
             
        <div
                    class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
                >
                    <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
                Child
            </h1>
                    <div class="text-2xl font-semibold" id="counter">{count}</div>
                    <div class="flex space-x-3">
                        <button
                            class="bg-red-400 text-white px-3 py-2 rounded shadow"
                            id="decrement" onClick={()=>setCount(count-1)}
                        >
                            Decrement
                        </button>
                        <button
                            class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                            id="increment" onClick={()=>setCount(count+1)}
                        >
                            Increment
                        </button>
                    </div>
                </div>
                </div>
    );
};

export default Child;