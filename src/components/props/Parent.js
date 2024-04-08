import React from 'react'
import Child from "./Child"

const Parent = () => {
    return (
        <div>
            <Child name='Ilyas'/>
            <Child age='19'/>
        </div>
    );
};

export default Parent;