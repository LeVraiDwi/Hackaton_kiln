import { VaultsRow } from "./VaultsRow"

export const VaultsTable = ({data}) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Asset
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Protocol
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Gross Rate
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Net Rate
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fee
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => 
                            <VaultsRow item={item} key={index}/>
                        )
                    }
                </tbody>
            </table>
        </div>

    )
}