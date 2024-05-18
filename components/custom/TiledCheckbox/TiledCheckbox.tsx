'use client'
import React, { useState } from "react";
import { Icon } from '@iconify-icon/react';

interface TiledCheckboxProps {
    icon: string;
    id: string;
    name: string;
}

function TiledCheckbox({ id, name, icon }: TiledCheckboxProps) {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnClick = () => {
        setIsChecked(!isChecked);
        console.log(`${name} checkbox is checked: ${!isChecked}`);
    };

    return (
        <div className={`tile grid grid-cols-1 grid-rows-4 cursor-pointer group `}>
            <input
                type="checkbox"
                name={name}
                id={id}
                className={`row-start-1 row-end-5 col-start-1 w-full rounded-2xl cursor-pointer appearance-none border-green-500 ${isChecked ? 'border-2' : 'group-hover:border-2'}`}
                checked={isChecked}
                onChange={handleOnClick}
            />
            <label htmlFor={id} className="flex flex-col items-center justify-center w-full col-start-1 row-start-2 row-end-4 cursor-pointer">
                <Icon icon={icon} width="64" height="64" className="text-black transition-border p-2 duration-200 ease-in-out" />
                <h6 className="font-poppins text-sm font-normal text-gray-600 uppercase">{name}</h6>
            </label>
        </div>
    );
}

export default TiledCheckbox;
