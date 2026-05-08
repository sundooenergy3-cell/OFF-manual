import './DistributorPage.css'
import imgDistributor from '../../assets/distributor.png'

function DistributorPage() {
  return (
    <div className="dist-page">

      <div className="dist-page-hero">
        <div className="dist-page-hero-label">DISTRIBUTOR</div>
        <h1 className="dist-page-hero-title">🔩 분배기</h1>
        <p className="dist-page-hero-sub">구수별 단가 · 설치비용</p>
      </div>

      <section className="dist-section">
        <div className="dist-section-header">
          <div className="dist-section-icon">🔩</div>
          <div>
            <div className="dist-section-title">분배기</div>
            <div className="dist-section-sub">분배기 1구 추가 시 5만원</div>
          </div>
        </div>
        <div className="dist-card-grid">

          <div className="dist-card">
            <div className="dist-card-head dist-ch-slate">
              <span className="dist-card-head-icon">📷</span>
              <div className="dist-card-head-title">분배기 사진</div>
            </div>
            <div className="dist-card-body">
              <img src={imgDistributor} alt="분배기" className="dist-img large" />
            </div>
          </div>

          <div className="dist-card">
            <div className="dist-card-head dist-ch-amber">
              <span className="dist-card-head-icon">📊</span>
              <div className="dist-card-head-title">구수별 단가</div>
            </div>
            <div className="dist-card-body">
              <div className="dist-table-wrap">
                <table className="dist-data-table">
                  <thead>
                    <tr><th>구수</th><th>노출형 분배기</th><th>싱크대 내부 분배기</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>2구</td><td className="hl">250,000</td><td className="hl">450,000</td></tr>
                    <tr><td>3구</td><td className="hl">300,000</td><td className="hl">500,000</td></tr>
                    <tr><td>4구</td><td className="hl">350,000</td><td className="hl">550,000</td></tr>
                    <tr><td>5구</td><td className="hl">400,000</td><td className="hl">600,000</td></tr>
                    <tr><td>6구</td><td className="hl">450,000</td><td className="hl">650,000</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="dist-notice warn" style={{marginTop:'10px'}}>
                <span className="dist-notice-icon">⚠️</span>
                <div className="dist-notice-body">분배기 1구 추가 시 <strong>5만원</strong> / 설치비용 200,000원</div>
              </div>
            </div>
          </div>

          {/* <div className="dist-card full">
            <div className="dist-card-head dist-ch-slate">
              <span className="dist-card-head-icon">📷</span>
              <div className="dist-card-head-title">분배기 참고 사진</div>
            </div>
            <div className="dist-card-body">
              <img src={imgDistributor} alt="분배기 참고" className="dist-img" />
            </div>
          </div> */}

        </div>
      </section>

    </div>
  )
}

export default DistributorPage