import { FaEthereum } from 'react-icons/fa';
import { SiPolygon } from 'react-icons/si';
import { FaBitcoin } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';

export function RenderIcon(iconType: string) {
    console.log(iconType)
    switch (iconType.toLowerCase()) {
        case 'ethereum':
            return <FaEthereum className='text-blue-600 w-4 h-4' />;
        case 'eth':
            return <FaEthereum className='text-blue-600 w-4 h-4' />;
        case 'polygon':
            return <SiPolygon className='text-purple-700 w-4 h-4' />;
        case 'wbtc':
            return <FaBitcoin className='text-orange-600 w-4 h-4' />;
        case 'usd':
            return <FaDollarSign className='text-green-500  w-4 h-4' />;

        default:
            return null;
    }
};
