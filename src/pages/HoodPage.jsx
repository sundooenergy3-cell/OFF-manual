import './HoodPage.css'
import imgSlim from '../assets/hood-slim.jpg'
import imgDeluxeWhite from '../assets/hood-deluxe-white.jpg'
import imgDeluxeBlack from '../assets/hood-deluxe-black.jpg'
import imgChimney from '../assets/hood-chimney.jpg'

function HoodPage() {
  return (
    <div className="hd-page">

      {/* ── 페이지 헤더 ── */}
      <div className="hd-page-hero">
        <div className="hd-page-hero-label">HOOD</div>
        <h1 className="hd-page-hero-title">💨 후드</h1>
        <p className="hd-page-hero-sub">슬림형 · 디럭스형 · 침니형 모델별 단가 및 스펙</p>
      </div>

      <div className="hd-notice warn">
        <span className="hd-notice-icon">⚠️</span>
        <div>비용2 철거 — <strong>16만원</strong> / 기존 배수구 있어야 함</div>
      </div>

      {/* ━━━━ 슬림 ━━━━ */}
      <section className="hd-section">
        <div className="hd-section-header">
          <div className="hd-section-icon">💨</div>
          <div>
            <div className="hd-section-title">슬림형 — RSH-S630A</div>
            <div className="hd-section-sub">RSH-S611 대체</div>
          </div>
        </div>
        <div className="hd-card-grid">

          <div className="hd-card">
            <div className="hd-card-head hd-ch-slate">
              <span className="hd-card-head-icon">📷</span>
              <div className="hd-card-head-title">슬림 RSH-S630A</div>
            </div>
            <div className="hd-card-body">
              <img src={imgSlim} alt="슬림 후드" className="hd-product-img" />
            </div>
          </div>

          <div className="hd-card">
            <div className="hd-card-head hd-ch-blue">
              <span className="hd-card-head-icon">📋</span>
              <div className="hd-card-head-title">제품 스펙</div>
            </div>
            <div className="hd-card-body">
              <div className="hd-table-wrap">
                <table className="hd-data-table">
                  <tbody>
                    <tr><td className="hd-label">전면패널</td><td>실버/블랙(모델명상이)</td></tr>
                    <tr><td className="hd-label">규격(mm)</td><td>(W)598 *(D)285 *(H)144</td></tr>
                    <tr><td className="hd-label">소비전력</td><td>51W</td></tr>
                    <tr><td className="hd-label">풍량조절</td><td>Rocker 스위치 2단조절</td></tr>
                    <tr><td className="hd-label">필터</td><td>알루미늄</td></tr>
                    <tr><td className="hd-label">RSH-S630A 실버</td><td className="hl">-</td></tr>
                    <tr><td className="hd-label">RSH-S640G 블랙</td><td className="hl">-</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="hd-card">
            <div className="hd-card-head hd-ch-green">
              <span className="hd-card-head-icon">💰</span>
              <div className="hd-card-head-title">가격</div>
            </div>
            <div className="hd-card-body">
              <div className="hd-table-wrap">
                <table className="hd-data-table">
                  <thead>
                    <tr><th>구분</th><th>대리점</th><th>온라인</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>제품만</td><td className="hl">90,000</td><td className="hl">화이트 63,000 / 블랙 68,000</td></tr>
                    <tr><td>설치포함</td><td className="hl">250,000</td><td className="hl">130,000</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="hd-notice info" style={{marginTop:'10px'}}>
                <span className="hd-notice-icon">ℹ️</span>
                <div className="hd-notice-body">* 25.06 단가인상 / 후드 교체시 소화기장치 교체여부 확인, 교체시 추가요금 발생</div>
              </div>
              <div className="hd-notice warn" style={{marginTop:'8px'}}>
                <span className="hd-notice-icon">📍</span>
                <div className="hd-notice-body">김포사우동-삼보아파트, 청구한라아파트 동양매직(RHD-420L 598*290*114)</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ━━━━ 디럭스 ━━━━ */}
      <section className="hd-section">
        <div className="hd-section-header">
          <div className="hd-section-icon">💨</div>
          <div>
            <div className="hd-section-title">디럭스형</div>
            <div className="hd-section-sub">RSH-D630S (실버) · RSH-D640G (블랙)</div>
          </div>
        </div>
        <div className="hd-card-grid">

          {/* 디럭스 실버 */}
          <div className="hd-card">
            <div className="hd-card-head hd-ch-slate">
              <span className="hd-card-head-icon">📷</span>
              <div className="hd-card-head-title">디럭스 RSH-D630S (실버)</div>
            </div>
            <div className="hd-card-body">
              <img src={imgDeluxeWhite} alt="디럭스 실버 후드" className="hd-product-img" />
            </div>
          </div>

          <div className="hd-card">
            <div className="hd-card-head hd-ch-blue">
              <span className="hd-card-head-icon">📋</span>
              <div className="hd-card-head-title">RSH-D630S 스펙 (RSH-D611 대체)</div>
            </div>
            <div className="hd-card-body">
              <div className="hd-table-wrap">
                <table className="hd-data-table">
                  <tbody>
                    <tr><td className="hd-label">전면패널</td><td>실버</td></tr>
                    <tr><td className="hd-label">규격(mm)</td><td>(W)598 *(D)305 *(H)700</td></tr>
                    <tr><td className="hd-label">소비전력</td><td>70W</td></tr>
                    <tr><td className="hd-label">풍량조절</td><td>PUSH 3단</td></tr>
                    <tr><td className="hd-label">필터</td><td>알루미늄</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="hd-table-wrap" style={{marginTop:'10px'}}>
                <table className="hd-data-table">
                  <thead>
                    <tr><th>구분</th><th>대리점</th><th>온라인</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>제품만</td><td className="hl">240,000</td><td className="hl">178,900</td></tr>
                    <tr><td>설치포함</td><td className="hl">430,000</td><td className="hl">220,000</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="hd-notice info" style={{marginTop:'10px'}}>
                <span className="hd-notice-icon">ℹ️</span>
                <div className="hd-notice-body">* 25.06 단가인상 / 경서동-가이아샹베르 교체가능</div>
              </div>
            </div>
          </div>

          {/* 디럭스 블랙 */}
          <div className="hd-card">
            <div className="hd-card-head hd-ch-slate">
              <span className="hd-card-head-icon">📷</span>
              <div className="hd-card-head-title">디럭스 RSH-D640G (블랙)</div>
            </div>
            <div className="hd-card-body">
              <img src={imgDeluxeBlack} alt="디럭스 블랙 후드" className="hd-product-img" />
            </div>
          </div>

          <div className="hd-card">
            <div className="hd-card-head hd-ch-blue">
              <span className="hd-card-head-icon">📋</span>
              <div className="hd-card-head-title">RSH-D640G 스펙 (RSH-D621G 대체)</div>
            </div>
            <div className="hd-card-body">
              <div className="hd-table-wrap">
                <table className="hd-data-table">
                  <tbody>
                    <tr><td className="hd-label">전면패널</td><td>블랙</td></tr>
                    <tr><td className="hd-label">규격(mm)</td><td>(W)598 *(D)305 *(H)700</td></tr>
                    <tr><td className="hd-label">소비전력</td><td>70W</td></tr>
                    <tr><td className="hd-label">풍량조절</td><td>터치식 스위치 3단조절</td></tr>
                    <tr><td className="hd-label">필터</td><td>알루미늄</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="hd-table-wrap" style={{marginTop:'10px'}}>
                <table className="hd-data-table">
                  <thead>
                    <tr><th>구분</th><th>대리점</th><th>온라인</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>제품만</td><td className="hl">330,000</td><td className="hl">299,000</td></tr>
                    <tr><td>설치포함</td><td className="hl">550,000</td><td className="hl">220,000</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ━━━━ 침니 ━━━━ */}
      <section className="hd-section">
        <div className="hd-section-header">
          <div className="hd-section-icon">💨</div>
          <div>
            <div className="hd-section-title">침니형 — RSH-C930P</div>
            <div className="hd-section-sub">RSH-C911 대체</div>
          </div>
        </div>
        <div className="hd-card-grid">

          <div className="hd-card">
            <div className="hd-card-head hd-ch-slate">
              <span className="hd-card-head-icon">📷</span>
              <div className="hd-card-head-title">침니 RSH-C930P</div>
            </div>
            <div className="hd-card-body">
              <img src={imgChimney} alt="침니 후드" className="hd-product-img" />
            </div>
          </div>

          <div className="hd-card">
            <div className="hd-card-head hd-ch-blue">
              <span className="hd-card-head-icon">📋</span>
              <div className="hd-card-head-title">제품 스펙</div>
            </div>
            <div className="hd-card-body">
              <div className="hd-table-wrap">
                <table className="hd-data-table">
                  <tbody>
                    <tr><td className="hd-label">전면패널</td><td>실버/블랙(모델명상이)</td></tr>
                    <tr><td className="hd-label">규격(mm)</td><td>(W)898 *(D)450 *(H)700</td></tr>
                    <tr><td className="hd-label">소비전력</td><td>153W</td></tr>
                    <tr><td className="hd-label">풍량조절</td><td>PUSH형 스위치(3단)</td></tr>
                    <tr><td className="hd-label">필터</td><td>알루미늄</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="hd-table-wrap" style={{marginTop:'10px'}}>
                <table className="hd-data-table">
                  <thead>
                    <tr><th>구분</th><th>대리점</th><th>온라인</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>제품만</td><td className="hl">280,000</td><td className="hl">블랙 279,000 / 화이트 229,000</td></tr>
                    <tr><td>설치포함</td><td className="hl">630,000</td><td className="hl">330,000</td></tr>
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

export default HoodPage