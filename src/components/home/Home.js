import React from 'react';
import {useSelector} from "react-redux";

const Home = () => {
    const colors = useSelector(state => state.arrayHexColors);

    return (
        <div>
          Home
            {colors.map(color => <div style={{background: `linear-gradient(${color.first}, ${color.second})`}} key={color.second}>dddddddasdasdasdasdasdasd</div>)}
        </div>
    );
};

export default Home;
