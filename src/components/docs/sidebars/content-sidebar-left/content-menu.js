import React from "react"
import { Link } from "gatsby"
import CloseIcon from "../../../../images/icons/close.svg"
import Chevron from "../../../../images/icons/chevron.svg"
import ChapterMenuItem from "./chapter"

const ContentsMenu = ({
  isMobileMenuOpen,
  closeMobileMenu,
  CurrentIconImported,
  currentTitle,
  currentChapters,
  currentPathBeingViewed,
  setIsModuleSelectorMousedOver,
}) => {
  return (
    <div
      id="contents-sidebar-left"
      className={
        (isMobileMenuOpen ? "" : "invisible ") +
        "xl:visible z-30 contents-sidebar fixed bg-coolGray-50 min-h-screen border-r border-coolGray-100 border-solid w-full xl:w-320"
      }
    >
      <div id="mobile-menu-button" className="absolute inset-0">
        <div
          className="xl:hidden pointer-cursor my-4 mx-4"
          onClick={closeMobileMenu}
        >
          <CloseIcon
            width="24"
            height="24"
            className="fill-current text-coolGray-500 inline-block"
          />
          <span className="ml-2">Close</span>
        </div>
        <div
          id="module-selector"
          className="h-28"
          role="link"
          tabIndex={0}
          onMouseEnter={() => {
            if (!isMobileMenuOpen) setIsModuleSelectorMousedOver(true)
          }}
          onMouseLeave={() => {
            if (!isMobileMenuOpen) setIsModuleSelectorMousedOver(false)
          }}
          onClick={() => {
            setIsModuleSelectorMousedOver(true)
          }}
        >
          <div className="flex w-full items-center justify-center bg-coolGray-100 hover:bg-coolGray-200 h-28 px-4 cursor-pointer border-b border-coolGray-200">
            <div className="w-full flex items-center justify-center">
              <CurrentIconImported
                className="mr-2"
                width="40px"
                height="40px"
              />
              <span
                className="font-semibold text-coolGray-700 whitespace-nowrap"
                style={{ fontSize: "18px" }}
              >
                {currentTitle}
              </span>
              <Chevron
                className="ml-2 fill-current text-coolGray-500"
                width="16px"
                height="16px"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0">
          <div className="h-screen overflow-y-scroll">
            <div className="my-2 mx-3 pb-60">
              {currentChapters.map(e => (
                <ChapterMenuItem
                  key={e.title}
                  chapter={e}
                  currentPathBeingViewed={currentPathBeingViewed}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentsMenu
