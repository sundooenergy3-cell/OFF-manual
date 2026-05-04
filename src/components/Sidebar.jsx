import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const menus = [
  {
    group: '난방 / 온수',
    items: [
      { path: '/boiler', icon: '🔥', label: '보일러' },
      { path: '/install-info', icon: '📋', label: '설치정보 및 기타사항' },
      { path: '/elec-water', icon: '⚡', label: '전기온수기' },
      { path: '/gas-water', icon: '💧', label: '가스온수기' },
    ]
  },
  {
    group: '주방',
    items: [
      { path: '/gas-range', icon: '🍳', label: '가스레인지' },
      { path: '/other-brand', icon: '🔄', label: '타사 제품 정보' },
      { path: '/hood', icon: '💨', label: '후드' },
    ]
  },
  {
    group: '생활가전',
    items: [
      { path: '/dryer', icon: '👕', label: '건조기' },
      // { path: '/sash', icon: '🪟', label: '샤시' },
    ]
  },
  {
    group: '업소용',
    items: [
      { path: '/commercial', icon: '🏪', label: '업소용' },
    ]
  },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      {menus.map((group) => (
        <div key={group.group}>
          <div className="sidebar-group-title">{group.group}</div>
          <ul className="sidebar-nav">
            {group.items.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="sidebar-divider" />
        </div>
      ))}
    </aside>
  )
}

export default Sidebar