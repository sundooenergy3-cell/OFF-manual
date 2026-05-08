import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const menus = [
  {
    group: '상담 메뉴얼',
    items: [
      { path: '/consult', icon: '📞', label: '상담 메뉴얼' },
    ]
  },
  {
    group: '일반 안내',
    items: [
      { path: '/install-cost', icon: '💰', label: '설치비용 안내' },
      { path: '/construction', icon: '🏗️', label: '시공 전 주의사항' },
      { path: '/trade', icon: '🏢', label: '판매구매 (거래처)' },
    ]
  },
  {
    group: '난방 / 온수',
    items: [
      { path: '/boiler', icon: '🔥', label: '보일러' },
      { path: '/distributor', icon: '🔩', label: '분배기' },
      { path: '/each-room', icon: '🏠', label: '각방' },
      { path: '/install-info', icon: '📋', label: '설치정보' },
      { path: '/elec-water', icon: '⚡', label: '전기온수기' },
      { path: '/gas-water', icon: '💧', label: '가스온수기' },
    ]
  },
  {
    group: '주방',
    items: [
      { path: '/gas-range', icon: '🍳', label: '가스레인지' },
      { path: '/other-brand', icon: '🔄', label: '타사 제품' },
      { path: '/hood', icon: '💨', label: '후드' },
    ]
  },
  {
    group: '생활가전',
    items: [
      { path: '/dryer', icon: '👕', label: '건조기' },
      { path: '/sash', icon: '🪟', label: '샤시' },
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