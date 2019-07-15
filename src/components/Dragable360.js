import React from 'react';

const style360 = {
  display: 'block'
};

const Dragable360 = () => {
	return(
	  <div className='interactivo360'>
      	<div className='img-container'>      
           <img id='ts' className='full' src='./img/360Compress/ts_1.jpg'/> 
           <div id='preload-imgs' style={style360}></div>  
        </div> 
    </div>
	)
};



export default Dragable360;