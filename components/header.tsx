"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0, // Bring to its original position
        transition: {
          duration: 1.5,
        },
      });
    }
  }, [controls, inView]);

  function isMenuOpenHandler() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    }

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      ref={ref}
      initial={{ opacity: 0, y: -5 }}
      animate={controls}
      className="flex justify-around pt-8 pb-4"
    >
      <Link href="#home">
        <h1 className="text-3xl cursor-pointer">
          <span className="text-red-500">E</span>RWD.
        </h1>
      </Link>
      <nav ref={menuRef}>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="md:hidden">
              <NavigationMenuTrigger onClick={isMenuOpenHandler}>
                {isMenuOpen ? <X /> : <Menu />}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li onClick={closeMenu}>
                    <Link href="#home" legacyBehavior passHref>
                      <NavigationMenuLink>Home</NavigationMenuLink>
                    </Link>
                  </li>
                  <li onClick={closeMenu}>
                    <Link href="#about" legacyBehavior passHref>
                      <NavigationMenuLink>About</NavigationMenuLink>
                    </Link>
                  </li>
                  <li onClick={closeMenu}>
                    <Link href="#services" legacyBehavior passHref>
                      <NavigationMenuLink>Services</NavigationMenuLink>
                    </Link>
                  </li>
                  <li onClick={closeMenu}>
                    <Link href="#portfolio" legacyBehavior passHref>
                      <NavigationMenuLink>Portfolio</NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="hidden md:block">
              <Link href="#home" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block">
              <Link href="#about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block">
              <Link href="#portfolio" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block">
              <Link href="#contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </motion.header>
  );
}

export default Header;
