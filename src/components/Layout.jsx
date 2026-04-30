import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import './Layout.css'

function Layout() {
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
    </div>
  )
}

export default Layout