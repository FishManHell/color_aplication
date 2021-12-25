import React from 'react';
const New = ({herColor, setHexColor, checkReg}) => {
    return (
        <div>
            <input type="text" value={herColor.first} onChange={e => setHexColor({...herColor, first: e.target.value})}/>
            <input type="text" value={herColor.second} onChange={e => setHexColor({...herColor, second: e.target.value})}/>
            <button onClick={checkReg}>Edit</button>
        </div>
    );
};

export default New;
