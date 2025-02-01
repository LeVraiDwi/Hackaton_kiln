import React, { useState } from "react"
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'

export const LeftSidebar = ({isActivated, toggleActive}) => {
    return (
        <>
        <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform 
            -translate-x-full shadow-xl shadow-black
            ${isActivated ? 
                '' : 'translate-x-0'
            }
        `}
        aria-label="Sidebar"
      >
        <a className="cursor absolute top-4 right-4" onClick={() => toggleActive()}>
         <FontAwesomeIcon  size={"lg"} icon={icons.faClose}/>
        </a>
        <div className="h-full px-3 py-4 bg-gray-50 dark:bg-gray-800">
          <a href="https://kiln.fi/" className="flex items-center ps-2.5 mb-5">
          <Image
            aria-hidden
            src="/kiln.svg"
            alt="Kiln icon"
            width={120}
            height={50}
          />
          </a>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                    <FontAwesomeIcon  size={"lg"} icon={icons.faHome} className="shrink-0 w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3 font-bold">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon size={"lg"} icon={icons.faChartPie} className="shrink-0 w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3 font-bold">Assets</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon  size={"lg"} icon={icons.faCoins} className="shrink-0 w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3 font-bold">DeFi</span>
              </a>
            </li>
            <div className="pt-4 pb-4">
                <hr/>
            </div>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <div className="flex bg-gray-500/40 w-7 h-7 rounded-full justify-center items-center">
                    <FontAwesomeIcon icon={icons.faPlus} className="shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </div>
                <span className="ms-3 font-bold">Buy</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <div className="flex bg-gray-500/40 w-7 h-7 rounded-full justify-center items-center">
                    <FontAwesomeIcon icon={icons.faRotate} className="shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </div>
                <span className="ms-3 font-bold">Swap</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <div className="flex bg-gray-500/40 w-7 h-7 rounded-full justify-center items-center">
                    <FontAwesomeIcon icon={icons.faArrowUp} className="shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </div>
                <span className="ms-3 font-bold">Send</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <div className="flex bg-gray-500/40 w-7 h-7 rounded-full justify-center items-center">
                    <FontAwesomeIcon icon={icons.faArrowDown} className="shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </div>
                <span className="ms-3 font-bold">Receive</span>
              </a>
            </li>
         </ul>
        </div>
      </aside>
    </>
    )
}