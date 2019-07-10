import React from 'react';
import logo from './logo.svg';
import './App.css';
const style360 = {
  display: 'block'
};


function interactivo360() {
  return (
    <div className="interactivo360">
      <div className="img-container">      
           <img id="ts" className="full" src="./img/360Compress/ts_1.jpg"/> 
           <div id="preload-imgs" style={style360}>
           </div>  
        </div> 
    </div>
  );
}

export default interactivo360;

