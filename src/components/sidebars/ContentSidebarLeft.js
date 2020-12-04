import { Transition } from "@headlessui/react"
import React, { useState } from "react"
import Chevron from "../../icons/chevron.svg"
import GenomicsPlatformLogo from "../../icons/stjudecloud-genomics-platform-logo.svg"

const ContentsSidebarLeft = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="invisible xl:visible z-30 contents-sidebar fixed w-1/5 bg-coolGray-50 min-h-screen border-r border-coolGray-100 border-solid">
      <div className="flex items-center justify-center bg-coolGray-100 hover:bg-coolGray-200 px-4 h-28 cursor-pointer">
        <div
          className="flex items-center"
          onMouseEnter={() => {
            setIsOpen(true)
          }}
          onMouseLeave={() => setIsOpen(false)}
        >
          <GenomicsPlatformLogo className="mr-2" width="48px" height="48px" />
          <span
            className="font-semibold text-coolGray-700"
            style={{ fontSize: "18px" }}
          >
            Genomics Platform
          </span>
          <Chevron
            style={{ transform: [{ rotate: "90deg" }] }}
            className="ml-2 fill-current text-coolGray-500"
            width="16px"
            height="16px"
          />
        </div>
      </div>
      <ul className="pt-6 pl-7 pr-3">
        <li className="title">Getting Started</li>
        <li>First Steps</li>
        <li>Accounts / Billing</li>
        <li>Requesting Data</li>
        <li>About Our Data</li>
        <li className="active">Making a Data Request</li>
        <li>Filling Out the DAA</li>
        <li>Decision Making Criteria</li>

        <li className="title">Managing Data</li>
        <li>Overview</li>
        <li>Uploading / Downloading Data</li>
        <li>Renewing Your DAA</li>

        <li className="title">Analyzing Data</li>
        <li>Command Line Interaction</li>
        <li>Running Our Workflows</li>
        <li>Create Your Own Workflow</li>

        <li className="title">Frequently Asked Questions</li>
        <li>Frequently Asked Questions</li>
      </ul>
    </div>
  )
}

export default ContentsSidebarLeft

{
  /* <div className="ml-96 bg-white h-20">
 <Transition
    className=""
    show={true}
    enter="transition-opacity duration-75"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity duration-150"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
<div className="whitespace-nowrap">I will fade in and out</div>
</Transition>
</div> */
}
