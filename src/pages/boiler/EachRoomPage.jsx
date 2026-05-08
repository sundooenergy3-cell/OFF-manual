import './EachRoomPage.css'
import imgEachRoom from '../../assets/each-room-parts.png'

function EachRoomPage() {
  return (
    <div className="er-page">

      <div className="er-page-hero">
        <div className="er-page-hero-label">EACH ROOM</div>
        <h1 className="er-page-hero-title">🏠 각방</h1>
        <p className="er-page-hero-sub">구수별 견적 · 부품 단가 · 각방제어 교체</p>
      </div>

      {/* ━━━━ 각방 설치 견적 ━━━━ */}
      <section className="er-section">
        <div className="er-section-header">
          <div className="er-section-icon">📊</div>
          <div>
            <div className="er-section-title">분배기 구수별 각방 설치 견적</div>
          </div>
        </div>
        <div className="er-card-grid">

          <div className="er-card full">
            <div className="er-card-head er-ch-green">
              <span className="er-card-head-icon">📊</span>
              <div className="er-card-head-title">구수별 설치 견적 (설치비 포함)</div>
            </div>
            <div className="er-card-body">
              <div className="er-table-wrap">
                <table className="er-data-table">
                  <thead>
                    <tr>
                      <th>분배기 구수</th>
                      <th>설치비</th>
                      <th>각방밸브 교체 추가 (구당 5만원)</th>
                      <th>합계</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>2구</td><td>450,000</td><td>100,000</td><td className="total-col">550,000</td></tr>
                    <tr><td>3구</td><td>500,000</td><td>150,000</td><td className="total-col">650,000</td></tr>
                    <tr><td>4구</td><td>650,000</td><td>200,000</td><td className="total-col">850,000</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="er-notice info" style={{marginTop:'10px'}}>
                <span className="er-notice-icon">ℹ️</span>
                <div className="er-notice-body">
                  5, 6구 : 구당 × 15만원 / 7~9구 : 구당 × 13만원 / 10구~ : 구당 × 12만원
                </div>
              </div>
            </div>
          </div>

          <div className="er-card">
            <div className="er-card-head er-ch-purple">
              <span className="er-card-head-icon">⚙️</span>
              <div className="er-card-head-title">각방제어 / 메인조절 교체</div>
            </div>
            <div className="er-card-body">
              <ul className="er-detail-list">
                <li>각방제어 4구 (교체만가능 새로설치x) : <strong>65만원</strong></li>
                <li>메인조절 → 각방제어기 : <strong>100~120만원</strong></li>
                <li>평수 확인 / 각방 온도조절기 + 분배기가 2개 이상이면 추가 +5만 / 작업시간 2시간 내외</li>
              </ul>
            </div>
          </div>

          <div className="er-card">
            <div className="er-card-head er-ch-slate">
              <span className="er-card-head-icon">🔧</span>
              <div className="er-card-head-title">부품 단가</div>
            </div>
            <div className="er-card-body">
              <div className="er-table-wrap">
                <table className="er-data-table">
                  <thead>
                    <tr><th>제어기</th><th>메인룸콘</th><th>각방룸콘</th><th>구동기</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="hl">75,000</td>
                      <td className="hl">36,500</td>
                      <td className="hl">32,000</td>
                      <td className="hl">28,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="er-card full">
            <div className="er-card-head er-ch-slate">
              <span className="er-card-head-icon">📷</span>
              <div className="er-card-head-title">각방 부품 사진</div>
            </div>
            <div className="er-card-body">
              <img src={imgEachRoom} alt="각방 부품" className="er-img large" />
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default EachRoomPage