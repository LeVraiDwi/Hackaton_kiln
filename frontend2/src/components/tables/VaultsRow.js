import Image from "next/image";

export const VaultsRow = ({item}) => {
    return (
        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className="flex flex-row align-center">
                    <div className="p-1 mr-3 mb-0 h-8 w-8 flex justify-center align-center rounded-full bg-gray-900">
                        <Image src={item.asset_icon} width={25} height={25} alt="asset_icon"/>
                    </div>
                    <span className="font-bold self-center text-md">{item.asset_symbol}</span>
                </div>
            </th>
            <td className="px-6 py-4">
                <div className="flex flex-row align-center">
                <div className="p-1 mr-2 h-6 w-6 flex justify-center align-center rounded-full bg-gray-900">
                    <Image src={item.protocol_icon} width={15} height={15} alt="protocol_icon"/>
                </div>
                <span className="font-semibold justify-center align-center">
                    {item.protocol_display_name}'s Protocol
                </span>
                </div>
            </td>
            <td className="px-6 py-4">
                <span  className="font-bold text-green-300">
                    {item.grr}
                </span>
            </td>
            <td className="px-6 py-4">
                <span  className="font-bold text-red-300">
                    {item.nrr}
                </span>
            </td>
            <td className="px-6 py-4">
                <span  className="font-bold text-teal-300">
                    {item.grr - item.nrr}
                </span>
            </td>
        </tr>
    )
}