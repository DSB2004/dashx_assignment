import React, { forwardRef, SelectHTMLAttributes, useEffect, useState } from 'react';
import { RenderIcon } from './icons';
import { FiChevronDown } from 'react-icons/fi';
import { error } from 'console';

interface SelectProp extends SelectHTMLAttributes<HTMLSelectElement> {
    options: string[];
    defaultValue?: string;
    error?: string;
    changeFuntion: Function;
}

const Select = forwardRef<HTMLSelectElement, SelectProp>(({ options, defaultValue, changeFuntion, error, ...props }, ref) => {

    const [isOpen, setIsOpen] = useState(false);
    const [currentValue, setValue] = useState<string>(defaultValue || '');

    const toggleDropdown = () => setIsOpen(!isOpen);


    const handleSelect = (value: string) => {
        setValue(value);
        setIsOpen(false);
        changeFuntion(value)
    };


    useEffect(() => {
        if (defaultValue) {
            setValue(defaultValue)
        }
    }, [defaultValue])


    return (
        <div className="relative w-full">
            <div
                className={`w-full p-1.5 bg-selectbox border ${error ? "border-red-600" : "border-customGray"}  rounded-md items-center flex justify-between`}
                onClick={toggleDropdown}
            >
                <div className='flex gap-1 items-center'>
                    {RenderIcon(currentValue)} {/* Render icon based on the value */}
                    <span className="text-sm font-medium capitalize">{currentValue || 'Select'}</span>
                </div>
                <FiChevronDown className='w-3 h-3' />
            </div>

            {isOpen && (
                <ul className="text-sm font-medium absolute left-0 w-full z-50 bg-white border border-customGray rounded-md shadow-lg mt-1">
                    <li
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSelect('')}
                    >
                        Select
                    </li>
                    {options.map((ele) => (
                        <li
                            key={ele}
                            className="flex items-center p-2 gap-1 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelect(ele)}
                        >
                            {RenderIcon(ele)}
                            {ele}
                        </li>
                    ))}
                </ul>
            )}


            <select
                ref={ref}
                value={currentValue}
                {...props}
                className="hidden"
            >
                <option value="">Select</option>
                {options.map((ele) => (
                    <option key={ele} value={ele}>
                        {ele}
                    </option>
                ))}
            </select>
        </div>
    );
});

Select.displayName = 'Select';

export default Select;
