import React, {useState}  from 'react';

const PkmnSpiningImage = ({img,filter}) =>{
    
    return(
        
        filter ? 
            (<img
                src={img} 
                className="App-logo"
                 alt=" " 
                 />
            ) : 
            ( 
            <img
                src={img} 
                className="App-logo oscuro"
                 alt=" " 
             />
            )
        
       
    );
}
/*
const ComponentName = (props) =>{

    return ( <Component />) a JSX.Element like <div> </div
}
*/

/*
const {
    img
} = props

*/

/*
props = {
    img: value
}

const component = ({img})

{img} = {img:value}

*/
export default PkmnSpiningImage
