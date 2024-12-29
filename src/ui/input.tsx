import React, { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    condition: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ condition, onChange, error, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Convert value to number before passing it to the form
        if (e.target.type === 'number') {
            e.target.value = e.target.value === '' ? '' : String(Number(e.target.value));
        }

        if (onChange) {
            onChange(e);
        }
    };

    return (
        <div className="relative">
            {condition && (
                <span className="p-0.5 absolute z-10 top-1/2 -translate-y-1/2 right-7 text-xxs border rounded-sm bg-[]">max</span>
            )}
            <input
                ref={ref}
                {...props}
                onChange={handleChange}
                className={`p-1 bg-transparent focus:outline-none border ${error ? "border-red-500" : "border-customGray "} rounded-md`}
            />
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
