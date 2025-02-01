import Image from "next/image";

export const VaultsCard = ({data}) => {
    return (
        <div className="w-56 h-52 bg-gray-800 border border-slate-500 rounded-lg">
            <div className="flex flex-row align-center">
              <div className="p-2 m-3 mb-0 h-14 w-14 flex justify-center align-center rounded-full bg-gray-900">
                <Image src={data.asset_icon} width={35} height={35} alt="asset_icon"/>
              </div>
              <span className="font-bold self-center text-xl">{data.asset_symbol}</span>
            </div>
            <div className="flex flex-row m-3">
              <div className="p-1 mr-2 h-6 w-6 flex justify-center align-center rounded-full bg-gray-900">
                <Image src={data.protocol_icon} width={15} height={15} alt="protocol_icon"/>
              </div>
              <span className="font-semibold justify-center align-center">
                {data.protocol_display_name}'s Protocol
              </span>
            </div>
            <div className="flex flex-col m-1 mr-2 items-end">
              <span  className="font-bold text-green-300">
                {data.grr}
              </span>
              <div className="flex w-full justify-between ml-2">
                <span className="ml-16 font-bold text-red-300">
                  -
                </span>
                <span className="font-bold text-red-300">
                  {data.nrr}
                </span>
              </div>
              <div className="flex w-full justify-between ml-2">
                <span className="ml-16 font-bold text-teal-100">
                  =
                </span>
                <span className="font-bold text-teal-100">
                  {data.grr - data.nrr}
                </span>
              </div>
            </div>
          </div>
    )
}