import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';
import Child from './Child';

const Parent = () => {
    const {count}=useContext(COUNTER_CONTEXT)
    return (
        <div class="max-w-md mx-auto mt-10 space-y-5">
            
        <div
                    class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
                >
                    <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
                Parents
            </h1>
                    <div class="text-2xl font-semibold" id="counter">{count}</div>
                </div>
                <Child/>
                </div>
    );
};

export default Parent;