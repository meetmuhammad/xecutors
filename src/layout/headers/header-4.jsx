import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import useSticky from "../../hooks/use-sticky";
import MobileMenu from "./mobile-menu";
import NavMenus from "./nav-menus";
import Calendaly from "../../components/contact/calendaly";

const HeaderFour = (menu) => {
  const { headerSticky } = useSticky();
  const [showCalendaly, setShowCalendaly] = useState(false);
  const handleBookCall = () => {
    setShowCalendaly(true);
  };
  return (
    <React.Fragment>
      {showCalendaly && (
        <div className="BookCallModal">
          <div className="BookCallContainer">
            <Calendaly />
            <div className="closeFrame" onClick={() => setShowCalendaly(false)}>
              {" "}
              close
            </div>
          </div>
        </div>
      )}
      <header className="d-none d-lg-block">
        <div
          id="header-sticky"
          className={`tp-header-area-two header-transparent header-space-three pl-115 pr-115 pt-10 ${
            headerSticky ? "header-sticky" : ""
          }`}
        >
          <div className="w-full px-[12px]">
            <div className="flex items-center">
              <div className="max-w-[200px] w-full">
                <div className="tp-logo text-start">
                  <Link href="/">
                    <a>
                      <Image
                        width={250}
                        height={53}
                        src={"/assets/img/logo/siteLogo.svg"}
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="w-full">
                <div className="tp-main-menu tp-menu-black text-center">
                  <nav id="mobile-menu">
                    {/* nav menus start */}
                    <NavMenus menu={menu} />
                    {/* nav menus end */}
                  </nav>
                </div>
              </div>
              <div className="max-w-[200px] w-full">
                <div className="tp-header-left d-flex align-items-center justify-content-end">
                  <div className="tp-header-login login-color-black d-none d-xxl-block "></div>
                  <div className="tp-header-yellow-button">
                    <button className="tp-btn" onClick={handleBookCall}>
                      Book A Free Call
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- mobile-menu-area --> */}
      <MobileMenu logo={"logo-blue.webp"} />
      {/* <!-- mobile-menu-area-end --> */}
    </React.Fragment>
  );
};

export default HeaderFour;
