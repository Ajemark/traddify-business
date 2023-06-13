"use client"
import React, { useState } from 'react';

const options = [
    { value: 'All Employee', label: 'All Employee' },
    { value: 'All Employee', label: 'All Employee' },
    { value: 'All Employee', label: 'All Employee' },
];

export default function SelectOptions({ classes }: any) {

    const [selectedOption, setSelectedOption] = useState();

    return (
        <div className="App ">
            <select
                className={`outline-none ${classes}`}
                onChange={() => setSelectedOption(selectedOption)}
                name=""
                id="">
                {options.map((option, i) => (
                    <option key={i} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}