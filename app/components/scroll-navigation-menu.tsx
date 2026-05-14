"use client"

import * as React from "react"
import { useState } from "react"
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  Variants,
} from "framer-motion"
import {
  Menu,
  X,
  Home,
  User,
  Settings,
  Mail,
  BookAudio,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import brandrikoLogo from "@/public/brandriko_dullbgGraphics_logo.png"

/* ================== TYPES ================== */

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
  { id: 1, title: "Home", url: "/", icon: <Home className="w-4 h-4" /> },
  { id: 2, title: "About", url: "/about", icon: <User className="w-4 h-4" /> },
  { id: 3, title: "Services", url: "/services", icon: <Settings className="w-4 h-4" /> },
  { id: 4, title: "Our Work", url: "/portfolio", icon: <BookAudio className="w-4 h-4" /> },
  { id: 6, title: "Contact", url: "/contact", icon: <Mail className="w-4 h-4" /> },
]

/* ================== VARIANTS ================== */

const menuVariants: Variants = {
  closed: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    filter: "blur(10px)",
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
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      delayChildren: 0.1,
      staggerChildren: 0.07,
    },
  },
}

const itemVariants: Variants = {
  closed: { x: -10, opacity: 0 },
  open: { x: 0, opacity: 1 },
}

/* ================== COMPONENT ================== */

export const ScrollNavigationMenu: React.FC<ScrollNavbarProps> = ({
  menuItems = defaultMenuItems,
  className = "",
}) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 80)
  })

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled 
            ? "bg-transparent pointer-events-none" 
            : "bg-black/80 backdrop-blur-md border-b border-gray-100"
        } ${className}`}
        initial={{ y: 0 }}
        animate={{ y: isScrolled ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="relative z-10 hover:opacity-80 transition-opacity">
            <Image src={brandrikoLogo} width={60} height={60} alt="Logo" className="object-contain" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-1 bg-gray-100/50 p-1 rounded-full border border-gray-200/50">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
              >
                {hoveredItem === item.id && (
                  <motion.span
                    layoutId="nav-hover"
                    className="absolute inset-0 bg-white rounded-full shadow-sm border border-gray-200"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {item.icon}
                  {item.title}
                </span>
              </Link>
            ))}
          </div>

          <button onClick={toggleMenu} className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </motion.nav>

      {/* FLOATING TRIGGER */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-orange-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-orange-200 border border-orange-500"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        )}
      </AnimatePresence>

      {/* OVERLAY MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-white/60 backdrop-blur-xl z-[60]"
            />

            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 flex items-center justify-center z-[70] pointer-events-none"
            >
              <div className="w-[90%] max-w-sm bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] pointer-events-auto">
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-4 ml-4">Navigation</p>
                  {menuItems.map((item) => (
                    <motion.div key={item.id} variants={itemVariants}>
                      <Link
                        href={item.url}
                        onClick={toggleMenu}
                        className="group flex items-center justify-between p-4 rounded-2xl hover:bg-orange-50 transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-orange-600 transition-colors shadow-sm">
                            {item.icon}
                          </div>
                          <span className="text-lg font-semibold text-gray-800 group-hover:text-orange-700 transition-colors">
                            {item.title}
                          </span>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0">
                           <div className="w-2 h-2 rounded-full bg-orange-600" />
                        </div>
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