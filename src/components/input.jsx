import React from 'react';


function Input(props) {
    return (
        <div className="flex flex-col w-[250px] ml-[5%]">
            <label className="flex w-[45px] relative left-[3px]">{props.label}</label>
            <input className="flex w-[290px] h-[30px] bg-[#E3E2E2] px-[5px] py-[3px] rounded-[5px] text-[11px] content-center" type="email" placeholder={props.placeholder} required />
            <img className="flex h-[15px] w-[15px] relative left-[266px] bottom-[21px]" src={props.linkImg} alt="" />
        </div>
    );
}

export default Input;