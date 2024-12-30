import React, { forwardRef, InputHTMLAttributes, } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

    error?: string

}

const Input = forwardRef<HTMLInputElement, InputProps>(({ error, ...props }, ref) => {

    return (
        <div className="relative">

            <input
                ref={ref}
                {...props}
                className={`p-1 bg-transparent focus:outline-none border ${error ? "border-red-500" : "border-customGray "} rounded-md`}
            />
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
