import React, { ButtonHTMLAttributes } from 'react'

export default function Button({ className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {

    return (
        <button className={`p-2 text-gray-600 rounded-md ${className}`} {...props}>
            {children}
        </button>
    )
}
