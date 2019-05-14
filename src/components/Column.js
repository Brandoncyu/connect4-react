import React from 'react';

const Column = ({addToColumn, number}) => {
    return (<div onClick={()=>addToColumn(number)}>
        {number}
    </div>)
}

export default Column;
