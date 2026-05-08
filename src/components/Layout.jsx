import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import './Layout.css'

function Layout() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="layout-wrap">
      <header className="header">
        <div className="header-logo">
          <span className="logo-dot" />
          <span className="logo-text">오프라인 CS 매뉴얼</span>
          <span className="logo-badge">INTERNAL</span>
        </div>
      </header>
      <div className="layout-body">
        <Sidebar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
      {showTop && (
        <button className="top-btn" onClick={scrollToTop}>
          Top
        </button>
      )}
    </div>
  )
}

export default Layout