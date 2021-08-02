import React from 'react';

const Box = (props) => {
    const {boxadd}=props
    return (
        <>
            <div  style={{display:'flex'}}>
            {
                boxadd.map((value, i) => 
                <>
                <div key={i} style={{backgroundColor:value.color, width:value.width, height:value.height,margin:"10px"}}></div>
                </>
                )
            }
            </div>
        </>
    );
};
    
export default Box;