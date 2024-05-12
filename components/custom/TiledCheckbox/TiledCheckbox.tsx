'use client';
import React from "react";
import { Icon } from '@iconify-icon/react';

interface TiledCheckboxProps {
    icon: string;
    id: string;
    name: string;
}

function TiledCheckbox({ id, name, icon }: TiledCheckboxProps) {
    return (
        <div className="tile relative cursor-pointer group py-8">
            <input type="checkbox" name={name} id={id} className="absolute h-full w-full  rounded-2xl cursor-pointer appearance-none "  />
            <label htmlFor={id} className="flex flex-col items-center justify-center gap-4 h-80% w-full absolute bottom-0 cursor-pointer">
                <Icon icon={icon} width="64" height="64" className="text-black transition-border p-2 duration-200 ease-in-out group-hover:border-green-500 group-hover:border-2 group-hover:rounded-md" />
                <h6 className="font-poppins text-sm font-normal text-gray-600 uppercase">{name}</h6>
            </label>

        </div>
    );
}

export default TiledCheckbox;
