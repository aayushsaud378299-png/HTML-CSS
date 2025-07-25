import React from 'react'
import{Link} from 'react-router-dom'

const Footer = (props) => {
  return (
    <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <a
        href="#"
        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
      >
        <img
          src="https://www.logodesign.net/logo-new/building-with-negative-space-window-5487ld.png?nwm=1&nws=1&industry=hotel&txt_keyword=All"
          className="h-8"
          alt="Flowbite Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Hotel Tikapur Kailai
        </span>
      </a>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Rooms
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2023{" "}
      <a href="#" className="hover:underline">
        Flowbite™
      </a>
      . All Rights Reserved.
    </span>
  </div>
</footer>

  )
}

export default Footer