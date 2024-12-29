import React, { forwardRef, SelectHTMLAttributes } from 'react';
import { RenderIcon } from './icons';

interface SelectProp extends SelectHTMLAttributes<HTMLSelectElement> {

    value: string;
    options: string[];
}

const Select = forwardRef<HTMLSelectElement, SelectProp>(({ value, options, ...props }, ref) => {
    return (
        <div className={`relative w-full  bg-gray-100 p-2 rounded-md `}>
            <div className='flex gap-1 items-center '>
                {RenderIcon(value)}
                <select value={value} ref={ref} {...props} name="" id="" className='bg-transparent w-full font-medium capitalized'
                >
                    {
                        options.map(ele =>
                            <option value={ele} key={ele} className='uppercase'>
                                {ele}
                            </option>
                        )
                    }
                </select>
            </div>
        </div >
    );
});

Select.displayName = 'Select';

export default Select;
