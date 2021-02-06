import React, { useState } from "react"
import { Link } from "gatsby"
import { Transition } from "@headlessui/react"
import { PropTypes } from "prop-types"

const ModulePopUp = ({ show, isMobileMenuShown, domains }) => {
  const [mouseInsidePopup, setMouseInsidePopup] = useState(false)

  return (
    <div
      id="module-popup-main"
      className="fixed top-0 z-50"
      style={
        !isMobileMenuShown ? { left: "320px", top: "65px" } : { top: "110px" }
      }
      onMouseEnter={() => {
        if (show) setMouseInsidePopup(true)
      }}
      onMouseLeave={() => setMouseInsidePopup(false)}
    >
      <Transition
        className="lg:m-4 p-2 border border-coolGray-100 rounded-lg bg-white whitespace-nowrap shadow-md z-50"
        style={
          isMobileMenuShown
            ? {
                width: "100%",
                marginTop: "10px",
              }
            : { width: "100%" }
        }
        show={mouseInsidePopup || show}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="flex flex-col lg:flex-row w-screen max-w-5xl h-full px-6">
          {domains.map(domain => {
            return (
              <div
                key={domain.title}
                className="flex-1 pb-6 w-full"
                style={{ minWidth: "280px" }}
              >
                <div className="uppercase text-coolGray-800 font-bold my-4">
                  {domain.title}
                </div>
                {domain.modules.map(module => {
                  const { icon, path, title, subtitle } = module
                  const IconImported = require("../../../../images/icons/" +
                    icon)
                  return (
                    <Link
                      key={path}
                      to={path}
                      className="block whitespace-normal px-4 py-2 hover:bg-coolGray-100 rounded-xl"
                    >
                      <div className="flex justify-left items-center">
                        <div
                          style={{
                            minWidth: "50px",
                            maxWidth: "50px",
                            marginRight: "20px",
                          }}
                        >
                          <IconImported
                            width="100%"
                            height="auto"
                            className="mr-4"
                          />
                        </div>
                        <div>
                          <div className="font-bold">{title}</div>
                          <p dangerouslySetInnerHTML={{ __html: subtitle }} />
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            )
          })}
        </div>
      </Transition>
    </div>
  )
}

ModulePopUp.propTypes = {
  /**
   * Whether or not to render the domains pop-up menu.
   */
  show: PropTypes.bool,
  /**
   * Whether not we are currently on a mobile screen size.
   */
  isMobileMenuShown: PropTypes.bool,
  /**
   * The domains to render as part of this pop-up menu.
   */
  domains: PropTypes.any,
}

ModulePopUp.defaultProps = {
  show: false,
  isMobileMenuShown: false,
  domains: [],
}

export default ModulePopUp
