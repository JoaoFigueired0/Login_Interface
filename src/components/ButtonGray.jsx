import React from 'react';

function ButtonGray(props) {
  return (
    <div>
      <button
        className="flex rounded-[5px] px-[10px] py-[1px] border 1 border-[#FFFFFF] text-center"
        onClick={props.onClick}
      >
        {props.name}
      </button>
    </div>
  );
}

export default ButtonGray;