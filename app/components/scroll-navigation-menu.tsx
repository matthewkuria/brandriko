"use client"

import * as React from "react"
import { useState } from "react"
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion"
import {
  Menu,
  X,
  Home,
  User,
  Settings,
  Mail,
  Info,
  PenBoxIcon,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import brandrikoLogo from "@/public/brandriko_dullbgGraphics_logo.png"

interface MenuItem {
  id: number
  title: string
  url: string
  icon: React.ReactNode
}

interface ScrollNavbarProps {
  menuItems?: MenuItem[]
  className?: string
}

const defaultMenuItems: MenuItem[] = [
  
  { id: 1, title: "Home", url: "/", icon: <Home className="w-5 h-5" /> },
  { id: 2, title: "Who We Are", url: "/#about", icon: <User className="w-5 h-5" /> },
  {
    id: 3,
    title: "Services",
    url: "/services",
    icon: <Settings className="w-5 h-5" />,
  },
  { id: 5, title: "Blog", url: "/blog", icon: <PenBoxIcon className="w-5 h-5" /> },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
    icon: <Mail className="w-5 h-5" />,
  },
]

export const ScrollNavigationMenu: React.FC<ScrollNavbarProps> = ({
  menuItems = defaultMenuItems,
  className = "",
}) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 100)
  })

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    closed: { y: 20, opacity: 0, scale: 0.8 },
    open: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 400, damping: 25 },
    },
  }

  return (
    <>
      {/* TOP NAVBAR */}
      <motion.nav
        animate={{
          y: isScrolled ? -100 : 0,
          opacity: isScrolled ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border ${className}`}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="text-xl font-bold">
            <Image src={brandrikoLogo} width={70} height={70} alt="Brandriko Digital solutions logo"/>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative"
              >
                <Link
                  href={item.url}
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:text-primary"
                >
                  {item.icon}
                  {item.title}
                </Link>

                {hoveredItem === item.id && (
                  <motion.div
                    layoutId="hover-bg"
                    className="absolute inset-0 bg-muted rounded-md -z-10"
                  />
                )}
              </div>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button onClick={toggleMenu} className="md:hidden">
            <Menu />
          </button>
        </div>
      </motion.nav>

      {/* FLOATING BUTTON */}
      <motion.button
        onClick={toggleMenu}
        animate={{
          scale: isScrolled ? 1 : 0,
          opacity: isScrolled ? 1 : 0,
        }}
        className="fixed top-6 right-6 z-50 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg"
      >
        <Menu />
      </motion.button>

      {/* POPUP MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* MENU */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
            >
              <div className="bg-background p-6 rounded-2xl shadow-xl min-w-[280px] relative">
                {/* CLOSE */}
                <button
                  onClick={toggleMenu}
                  className="absolute top-3 right-3"
                >
                  <X />
                </button>

                {/* ITEMS */}
                <div className="space-y-4 mt-6">
                  {menuItems.map((item) => (
                    <motion.div key={item.id} variants={itemVariants}>
                      <Link
                        href={item.url}
                        onClick={toggleMenu}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted"
                      >
                        {item.icon}
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}