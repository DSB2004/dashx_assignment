

import { FiChevronDown } from 'react-icons/fi';

const SelectorLoading = () => {

    return (
        <div className="rounded-2xl p-2.5 flex gap-2 flex-col w-full">

            <div className=" bg-gray-200 animate-pulse text-gray-400  flex justify-between items-center p-2 rounded-md border text-sm">
                Select
                <FiChevronDown className='w-3 h-3' />
            </div>

            <div className="flex items-center justify-between gap-2">
                <div className="relative w-56 animate-pulse text-gray-400  p-2 rounded-md border border-customGray text-sm">
                    100
                </div>

                <div className=" bg-gray-200  flex-1 animate-pulse flex justify-between items-center  text-gray-400  p-2 rounded-md border text-sm">
                    Select
                    <FiChevronDown className='w-3 h-3' />
                </div>
            </div>

            <div className="text-xs flex justify-between items-center animate-pulse text-gray-400">
                $0 {/* Dynamically display calculated amount */}

                <span className="flex gap-1">
                    <span className="">Balance:</span>
                    0.00
                </span>
            </div>
        </div >
    );
};

export default SelectorLoading;