import Link from "next/link";
import React, { useState, useEffect } from "react";
import menu_data from "./menu-data";

const NavMenus = (menu) => {
  const [currentSection, setCurrentSection] = useState("");
  const [menuItems, setMenuItems] = useState(menu?.menu?.menu);

  function handleScroll() {
    const header = document.getElementById("header");
    const section = document.getElementById("specific-section");

    if (header && section) {
      const sectionPosition = section.getBoundingClientRect();

      if (
        sectionPosition.top <= header.offsetHeight &&
        sectionPosition.bottom > header.offsetHeight
      ) {
        setCurrentSection("");
      } else {
        setCurrentSection("Home");
      }
    }
  }

  useEffect(() => {
    // setMenuItems(menu?.menu);
    // console.log("menu", menuItems);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToSection(id) {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <ul>
      <li id="header">
        <Link href="/">
          <a>{currentSection}</a>
        </Link>
      </li>
      {menuItems
        ? menuItems?.map((menu, i) => (
            <li
              key={i}
              id="specific-section"
              onClick={() => scrollToSection(menu.link)}
            >
              <Link href={menu.link}>
                <a>{menu.title}</a>
              </Link>
            </li>
          ))
        : menu_data.map((menu, i) => (
            <li key={i} id="specific-section">
              <Link href={menu.link}>
                <a>{menu.title}</a>
              </Link>
            </li>
          ))}
    </ul>
  );
};

export default NavMenus;
