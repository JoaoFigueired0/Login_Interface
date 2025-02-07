import React from 'react';

function ButtonWhite(props) {
    return (
      <div className="flex w-[100%] flex-row justify-around content-center">
        <a className="flex py-[1px] px-[5px] relative right-[15px]" href={props.link}>{props.nameLink}</a>
        <button className="flex py-[2px] px-[15px] bg-[#E3E2E2] rounded-[5px]">{props.name}</button>
      </div>
    );
  }
  
  export default ButtonWhite;