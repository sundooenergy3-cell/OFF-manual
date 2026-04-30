import { useNavigate } from 'react-router-dom'
import './MainPage.css'

const categories = [
  { path: '/boiler', icon: '🔥', label: '보일러', desc: '시공비 · 모델별 단가 · 추가비용', color: 'amber' },
  { path: '/elec-water', icon: '⚡', label: '전기온수기', desc: '용량별 시공비 · 설치 안내', color: 'blue' },
  { path: '/gas-water', icon: '💧', label: '가스온수기', desc: '용량별 단가 · 주의사항', color: 'teal' },
  { path: '/gas-range', icon: '🍳', label: '가스레인지', desc: '빌트인 · 타공 · 설치비', color: 'orange' },
  { path: '/hood', icon: '💨', label: '후드', desc: '슬림 · 디럭스 · 침니형', color: 'purple' },
  { path: '/dryer', icon: '👕', label: '건조기', desc: '이전설치 · 신규설치', color: 'green' },
  { path: '/sash', icon: '🪟', label: '샤시', desc: '재단공식 · 타공기준', color: 'blue' },
  { path: '/commercial', icon: '🏪', label: '업소용', desc: '튀김기 · 취반기 · 쌍형렌지', color: 'red' },
]

function MainPage() {
  const navigate = useNavigate()

  return (
    <div className="main-page">
      <div className="main-hero">
        <div className="main-hero-label">OFFLINE CS MANUAL</div>
        <h1 className="main-hero-title">오프라인 CS 매뉴얼</h1>
        <p className="main-hero-sub">카테고리를 선택해 상세 내용을 확인하세요</p>
      </div>
      <div className="category-grid">
        {categories.map((cat) => (
          <button
            key={cat.path}
            className={`category-card color-${cat.color}`}
            onClick={() => navigate(cat.path)}
          >
            <div className="category-icon">{cat.icon}</div>
            <div className="category-label">{cat.label}</div>
            <div className="category-desc">{cat.desc}</div>
            <div className="category-arrow">→</div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default MainPage