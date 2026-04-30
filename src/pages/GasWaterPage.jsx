import './GasWaterPage.css'

function GasWaterPage() {
  return (
    <div className="gw-page">

      {/* ── 페이지 헤더 ── */}
      <div className="gw-page-hero">
        <div className="gw-page-hero-label">GAS WATER HEATER</div>
        <h1 className="gw-page-hero-title">💧 가스온수기</h1>
        <p className="gw-page-hero-sub">모델별 단가 · 시공비 · 용량 비교 · 참고사항</p>
      </div>

      {/* ── 서브탭 ── */}
      <div className="gw-sub-tabs">
        {[
          { id: 'gw-model', label: '📋 모델별 단가' },
          { id: 'gw-install', label: '💰 시공 비용' },
          { id: 'gw-capacity', label: '📊 용량 비교' },
          { id: 'gw-notes', label: '📌 참고사항' },
        ].map(tab => (
          <button
            key={tab.id}
            className="gw-sub-tab"
            onClick={() => {
              const el = document.getElementById(tab.id)
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ━━━━ 참고사항 ━━━━ */}
      <section className="gw-section" id="gw-notes">
        <div className="gw-section-header">
          <div className="gw-section-icon">📌</div>
          <div>
            <div className="gw-section-title">참고사항</div>
          </div>
        </div>
        <div className="gw-card-grid">

          <div className="gw-card full">
            <div className="gw-card-head gw-ch-blue">
              <span className="gw-card-head-icon">📢</span>
              <div className="gw-card-head-title">일반 안내</div>
            </div>
            <div className="gw-card-body">
              <ul className="gw-detail-list">
                <li>가스온수기 20만 / 근거리 20만(기본연도) / 벽타공 5.5만, 연도길이 추가금 有/5M 까지, 개조해서 최대가능길이7M /가스막음4만</li>
                <li>LPG - 용량변경 문제x, 신규시 가스업체에 가스배관 빼달라고 해야함</li>
                <li>LNG - 용량 변경시 소비량 가스공사에 신고 비용 5~60만 / 교체 시 동일용량으로 권장</li>
                <li>1대 설치민경우 22, 3대 한번이면 대당 18.7</li>
                <li><strong style={{color:'#d97706'}}>계약서 작성 후 메세지 전송 : 주황색 공지, 특정문구 견적서</strong></li>
              </ul>
              <div className="gw-notice warn" style={{marginTop:'12px'}}>
                <span className="gw-notice-icon">⚠️</span>
                <div className="gw-notice-body">
                  *단종RW-13AF=RW-14BF설치<br />
                  *소형충고온수기RW-05BS(5호기)-33만원(관내), 35만(관외)/구매만 25만
                </div>
              </div>
            </div>
          </div>

          <div className="gw-card">
            <div className="gw-card-head gw-ch-green">
              <span className="gw-card-head-icon">🆕</span>
              <div className="gw-card-head-title">신규 설치</div>
            </div>
            <div className="gw-card-body">
              <ul className="gw-detail-list">
                <li>신규 시 5만5천원 추가(연통, 후렉시블, 설치부속)</li>
                <li>콘크리트 벽 타공 시 5만5천원 추가</li>
                <li>설치공간 사진받기(연도포함 900높이필요)</li>
                <li>견적서 발송</li>
                <li>도시가스 시공 업체 끼고 하는지 확인하고 사용가능한 가스 사용량 확인후 시공</li>
              </ul>
            </div>
          </div>

          <div className="gw-card">
            <div className="gw-card-head gw-ch-amber">
              <span className="gw-card-head-icon">🔄</span>
              <div className="gw-card-head-title">교체 설치</div>
            </div>
            <div className="gw-card-body">
              <ul className="gw-detail-list">
                <li>기존 설치환경 사진받고 연도 등 추가금 확인</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ━━━━ 모델별 단가 ━━━━ */}
      <section className="gw-section" id="gw-model">
        <div className="gw-section-header">
          <div className="gw-section-icon">📋</div>
          <div>
            <div className="gw-section-title">모델별 단가</div>
            <div className="gw-section-sub">기본설치비용 20만 / 규격 535*340*247.5 / 카드 결제금액 기준 / 세금계산서 발행시 별도</div>
          </div>
        </div>
        <div className="gw-card-grid">

          {/* 대리점 구매 */}
          <div className="gw-card full">
            <div className="gw-card-head gw-ch-blue">
              <span className="gw-card-head-icon">💧</span>
              <div className="gw-card-head-title">가스온수기 (대리점 구매)</div>
            </div>
            <div className="gw-card-body">
              <div className="gw-table-wrap">
                <table className="gw-data-table">
                  <thead>
                    <tr>
                      <th>용량 (1분당)</th>
                      <th>모델명</th>
                      <th>열량</th>
                      <th>제품값</th>
                      <th>설치포함 (VAT별도)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>8L</td><td className="hl">RW-08SF</td><td>14,400</td><td className="hl">43만</td><td className="hl">60만</td></tr>
                    <tr><td>10L</td><td className="hl">RW-10SF</td><td>18,000</td><td className="hl">45만</td><td className="hl">62만</td></tr>
                    <tr><td>14L</td><td className="hl">RW-14BF</td><td>24,500</td><td className="hl">50만</td><td className="hl">65만</td></tr>
                    <tr><td>18L</td><td className="hl">RW-18BF</td><td>32,500</td><td className="hl">52만</td><td className="hl">71만</td></tr>
                    <tr><td>24L</td><td className="hl">RW-24BF</td><td>43,400</td><td className="hl">57만</td><td className="hl">76만</td></tr>
                    <tr><td>캐스케이드</td><td className="hl">RCS-50WF</td><td></td><td className="hl">50,000</td><td></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 온라인 구매 */}
          <div className="gw-card full">
            <div className="gw-card-head gw-ch-teal">
              <span className="gw-card-head-icon">🛒</span>
              <div className="gw-card-head-title">시공 비용 (온라인구매)</div>
            </div>
            <div className="gw-card-body">
              <div className="gw-table-wrap">
                <table className="gw-data-table">
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>8L</th>
                      <th>10L</th>
                      <th>14L</th>
                      <th>18L</th>
                      <th>24L</th>
                      <th>캐스케이드</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="hl">제품가</td>
                      <td className="hl">425,000</td>
                      <td className="hl">425,000</td>
                      <td className="hl">472,000</td>
                      <td className="hl">498,000</td>
                      <td className="hl">548,000</td>
                      <td className="hl">1,100,000</td>
                    </tr>
                    <tr>
                      <td className="hl">설치비</td>
                      <td>20~22만</td>
                      <td>20~22만</td>
                      <td>20~22만</td>
                      <td>20~22만</td>
                      <td>20~22만</td>
                      <td>25만</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ━━━━ 용량 비교 ━━━━ */}
      <section className="gw-section" id="gw-capacity">
        <div className="gw-section-header">
          <div className="gw-section-icon">📊</div>
          <div>
            <div className="gw-section-title">가스온수기 용량비교기준</div>
          </div>
        </div>
        <div className="gw-card-grid">
          <div className="gw-card">
            <div className="gw-card-head gw-ch-amber">
              <span className="gw-card-head-icon">📊</span>
              <div className="gw-card-head-title">용량별 사용 기준</div>
            </div>
            <div className="gw-card-body">
              <div className="gw-table-wrap">
                <table className="gw-data-table">
                  <thead>
                    <tr><th>용량</th><th>사용 기준</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>8호기(1-2인)</td><td>수전1개/겨울에는 미온</td></tr>
                    <tr><td>10호기 10BF</td><td>수전1개/겨울에는 중온</td></tr>
                    <tr><td>14호기 14BF</td><td>수전1개/겨울에도 뜨끈</td></tr>
                    <tr><td>18호기 18BF</td><td>수전2개동시</td></tr>
                    <tr><td>24호기 24BF</td><td>수전2.5개 동시</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="gw-card">
            <div className="gw-card-head gw-ch-green">
              <span className="gw-card-head-icon">🔄</span>
              <div className="gw-card-head-title">가스온수기 ↔ 전기온수기 대응</div>
            </div>
            <div className="gw-card-body">
              <div className="gw-table-wrap">
                <table className="gw-data-table">
                  <thead>
                    <tr><th>가스온수기</th><th>대응 전기온수기</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>8호 (1-2인)</td><td className="hl">전기온수기 30L</td></tr>
                    <tr><td>10호 (1-2인)</td><td className="hl">전기온수기 50L</td></tr>
                    <tr><td>14~18호 (2-3인)</td><td className="hl">전기온수기 80~100L</td></tr>
                    <tr><td>24호~ (4-5인)</td><td className="hl">전기온수기 120L 이상</td></tr>
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

export default GasWaterPage