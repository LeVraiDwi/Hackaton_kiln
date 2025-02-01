import React, { useState } from "react"
import { LeftSidebar } from "@/components/sidebars/LeftSidebar";
import { AssetCard } from "@/components/cards/AssetsCard";
import { Header } from "@/components/headers/Header";
import { VaultsTable } from "@/components/tables/VaultsTable";
import NetworkStatsData from "@/data/NetworkStatsData";
import OperationsData from "@/data/OperationsData";
import StackesData from "@/data/StackesData";
import { VaultsCard } from "@/components/cards/VaultsCard";
import { OperationsCard } from "@/components/cards/OperationsCard";
import { BarChart } from "@/components/charts/Bar";
export default () => {
    return (
        <div className={`p-4 ${isActivated ? '' : 'ml-64'}`}>
                <div className="p-4 mb-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <h1 className="font-bold mb-4 text-xl">Lasts Operations</h1>
                <div className="flex flex-row">
                  {OperationsData.data.map((item, index) => 
                  <div key={index} className="mr-6">
                    <OperationsCard data={item} key={index}/>
                  </div>
                  )}
                  </div>
                </div>
                <div className="p-4 mb-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <h1 className="font-bold mb-4 text-xl">Bestss Vaults</h1>
                <div className="flex flex-row">
                 {NetworkStatsData.data.map((item, index) => 
                 <div key={index} className="mr-6">
                  <VaultsCard data={item} key={index}/>
                  </div>
                 )}
                </div>
                
              </div>
              <div className="p-4 mb-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                  <h1 className="font-bold mb-4 text-xl">List Vaults</h1>
                  <VaultsTable data={NetworkStatsData.data}/>
              </div>
              <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <h1 className="font-bold mb-4 text-xl">Users Stackes Stats</h1>
                <div className="flex flex-row">
                  {StackesData.data.map((item, index) => 
                  <div key={index} className="mr-6 block">
                    <BarChart item={item} index={index} key={index} label={`Stack ${item.chain.toUpperCase()}`}/>
                  </div>
                  )}
                  </div>
                </div>
          </div> 
    )
}