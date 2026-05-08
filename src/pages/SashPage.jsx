import './SashPage.css'

function SashPage() {
  return (
    <div className="sash-page">

      <div className="sash-page-hero">
        <div className="sash-page-hero-label">SASH</div>
        <h1 className="sash-page-hero-title">🪟 샤시</h1>
        <p className="sash-page-hero-sub">재단 공식 · 타공 기준 · 설치비 12만부터</p>
      </div>

      {/* ━━━━ 주의사항 ━━━━ */}
      <section className="sash-section">
        <div className="sash-section-header">
          <div className="sash-section-icon">⚠️</div>
          <div>
            <div className="sash-section-title">주의사항</div>
          </div>
        </div>
        <div className="sash-card-grid">
          <div className="sash-card full">
            <div className="sash-card-head sash-ch-red">
              <span className="sash-card-head-icon">⚠️</span>
              <div className="sash-card-head-title">샤시 주의사항</div>
            </div>
            <div className="sash-card-body">
              <ul className="sash-detail-list">
                <li>※ 구형샤시 (+2만) 폭 18cm / 타공 최대 14~15cm 가능 / 재입고 예정x — 재고 소진 시 판매불가 / 이사님 확인하기</li>
                <li>※ 타공 지름 120 이상 요청 시 구형샤시 (타공가능 옵션있음 / 120 · 125 · 140 · 145 · 150) — 원터치아답타 불가</li>
                <li>※ 특수레일 (모서리 레일사진 받기)</li>
                <li>아답타 바닥면 1/3 날림(고정) &amp; 모서리 한칸 or 한칸반 or 두칸</li>
                <li>어댑터끼울 수 있는 레일 두께 1.1 이하</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ 타공 기준 ━━━━ */}
      <section className="sash-section">
        <div className="sash-section-header">
          <div className="sash-section-icon">📐</div>
          <div>
            <div className="sash-section-title">원타공 기준</div>
          </div>
        </div>
        <div className="sash-card-grid">
          <div className="sash-card full">
            <div className="sash-card-head sash-ch-blue">
              <span className="sash-card-head-icon">📐</span>
              <div className="sash-card-head-title">제품별 원타공 기준</div>
            </div>
            <div className="sash-card-body">
              <div className="sash-table-wrap">
                <table className="sash-data-table">
                  <thead>
                    <tr><th>제품</th><th>원타공 기준</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>벽걸이 에어컨</td><td className="hl">위에서 50cm 원타공 (50mm)</td></tr>
                    <tr><td>스탠드 에어컨</td><td className="hl">밑에서 5cm 원타공 (60mm)</td></tr>
                    <tr><td>로봇청소기</td><td className="hl">하부 모서리 원타공 (20mm)</td></tr>
                    <tr><td>보일러 연통</td><td className="hl">100mm</td></tr>
                    <tr><td>건조기 연통 83파이</td><td className="hl">배슬관 세트 포함 타공 76mm</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ 재단 공식 ━━━━ */}
      <section className="sash-section">
        <div className="sash-section-header">
          <div className="sash-section-icon">📏</div>
          <div>
            <div className="sash-section-title">샤시 재단 공식 / 설치비 12만 부터</div>
          </div>
        </div>
        <div className="sash-card-grid">

          {/* 총길이 재단 */}
          <div className="sash-card full">
            <div className="sash-card-head sash-ch-green">
              <span className="sash-card-head-icon">📏</span>
              <div className="sash-card-head-title">아답타별 총길이 재단</div>
            </div>
            <div className="sash-card-body">
              <div className="sash-table-wrap">
                <table className="sash-data-table">
                  <thead>
                    <tr><th>구분</th><th>아답타</th><th>내용</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>총길이</td><td>일반</td><td className="hl">-1.2cm</td></tr>
                    <tr><td>총길이</td><td>원터치</td><td className="hl">-3.7cm</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 타공위치 재단 */}
          <div className="sash-card full">
            <div className="sash-card-head sash-ch-amber">
              <span className="sash-card-head-icon">📐</span>
              <div className="sash-card-head-title">타공위치 재단</div>
            </div>
            <div className="sash-card-body">
              <div className="sash-table-wrap">
                <table className="sash-data-table">
                  <thead>
                    <tr><th>구분</th><th>원타공</th><th>재단타공</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>타공위치 (아래부터)</td><td className="hl">-0.5cm</td><td className="hl">-0.5cm</td></tr>
                    <tr><td>타공위치 (위부터)</td><td className="hl" colSpan={2}>전체길이 - 요청길이 - 타공cm - 0.5cm</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 재단타공 도면 */}
          <div className="sash-card full">
            <div className="sash-card-head sash-ch-teal">
              <span className="sash-card-head-icon">📋</span>
              <div className="sash-card-head-title">재단타공 (도면)</div>
            </div>
            <div className="sash-card-body">
              <div className="sash-table-wrap">
                <table className="sash-data-table">
                  <thead>
                    <tr><th>구분</th><th>ㄷ타공</th><th>ㄱ타공</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>재단타공</td>
                      <td className="hl">가로 +1.5cm</td>
                      <td className="hl">가로 +1.5cm, 세로 -0.5cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default SashPage