import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';
import avatar from '@/img/jpg/avatar.jpg';

export const OperationsCard = ({data}) => {
    return (
        <div className="w-72 h-40 bg-gray-800 border border-slate-500 rounded-lg">
            <div className="flex flex-row justify-between h-full">
                <div className="w-1/3 text-ellipsis overflow-hidden ...">
                    <div className="flex justify-center items-center">
                        <div className="p-2 ml-3 mt-3 mb-0 h-11 w-11 flex rounded-full bg-gray-900 overflow-hidden">
                            <Image className="rounded-full" src={avatar} width={35} height={35} alt="asset_icon"/>
                        </div>
                    </div>
                    <div className="ml-3 mt-2 block text-xs truncate ...">
                        <span title={data.owner} className="text-xs truncate ...">
                            {data.owner}
                        </span>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col justify-center items-center">
                    <span className="bg-gray-800 font-semibold text-xs mb-2">{data.type == 'deposit' ? 'Deposit' : 'Withdrawal'}</span>
                    <div className="p-2 mt-1 mb-0 h-12 w-12 flex justify-center items-center rounded-full bg-gray-900 font-bold">
                    {
                        data.type == 'deposit' ?
                        <FontAwesomeIcon size="lg" icon={icons.faAnglesRight}/>
                        :
                        <FontAwesomeIcon size="lg" icon={icons.faAnglesLeft}/>
                    }
                    </div>
                    <div className="mt-3">
                        <span>
                            {data.assets / data.shares}
                        </span>
                    </div>
                </div>
                <div className="w-1/3 truncate ...">
                    <div className="flex justify-center items-center">
                        <div className="p-2 mt-3 mb-0 h-11 w-11 flex rounded-full bg-gray-900 overflow-hidden">
                            <Image src={'https://public.kiln.fi/icons/assets/usdc.svg'} width={35} height={35} alt="asset_icon"/>
                        </div>
                    </div>
                    <div className="ml-3 mt-2 block text-xs truncate ...">
                        <span title={data.vault} className="text-xs truncate ...">
                            {data.vault}
                        </span>
                    </div>
                </div>
            </div>  
        </div>
    )
}