import Select from "@/ui/select";

import { CustomType } from "@/app/type";

interface IPROPS {
    state: CustomType,
    onChange: Function
}


const SelectorComponent = (props: IPROPS) => {
    const { state, onChange } = props;

    const networkOptions = ['Ethereum', 'Polygon'];
    const tokenOptions = ['WBTC', 'ETH'];

    const handleSelectChange = (key: string, value: any) => {
        onChange((prevState: CustomType) => ({
            ...prevState,
            [key]: value,
        }));
    };

    return (
        <div className="mb-4 border-2 border-gray-100 rounded-md p-2.5 flex gap-2 flex-col">

            <Select
                value={state.network}
                options={networkOptions}
                onChange={e => handleSelectChange('network', e.target.value)}
            />

            <div className="flex items-center justify-between gap-2">
                <div className="relative">
                    {
                        state.amount === 250 ? <><span className="p-0.5 absolute z-10 top-1/2 -translate-y-1/2 right-7 text-sm border-2 rounded-md">max</span></> : <></>
                    }
                    <input
                        type="number"
                        value={state.amount}
                        onChange={e => handleSelectChange('amount', e.target.valueAsNumber)} // Update amount
                        max={250}
                        placeholder="100"
                        className="w-48 p-1 bg-transparent focus:outline-none  border-2 border-gray-200 rounded-md"
                    />
                </div>

                <Select
                    value={state.token}
                    options={tokenOptions}
                    onChange={e => handleSelectChange('token', e.target.value)}
                />
            </div>

            <div className="text-xs flex justify-between items-center">
                $100,502,500 {/* Dynamically display calculated amount */}

                <span>
                    <span className="text-gray-500">Balance:</span>
                    {state.balance} {/* Display dynamic balance */}
                </span>
            </div>
        </div>
    );
};

export default SelectorComponent;