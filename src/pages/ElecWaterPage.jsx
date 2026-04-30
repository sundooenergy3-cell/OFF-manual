import './ElecWaterPage.css'

function ElecWaterPage() {
  return (
    <div className="ew-page">

      {/* ── 페이지 헤더 ── */}
      <div className="ew-page-hero">
        <div className="ew-page-hero-label">ELECTRIC WATER HEATER</div>
        <h1 className="ew-page-hero-title">⚡ 전기온수기</h1>
        <p className="ew-page-hero-sub">모델별 단가 · 시공비 · 용량 선택 가이드 · 참고사항</p>
      </div>

      {/* ── 서브탭 ── */}
      <div className="ew-sub-tabs">
        {[
          { id: 'ew-notes', label: '📌 참고사항' },
          { id: 'ew-model', label: '📋 모델별 단가' },
          { id: 'ew-install', label: '💰 시공비' },
          { id: 'ew-usage', label: '💧 분당 온수 사용량' },
        ].map(tab => (
          <button
            key={tab.id}
            className="ew-sub-tab"
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
      <section className="ew-section" id="ew-notes">
        <div className="ew-section-header">
          <div className="ew-section-icon">📌</div>
          <div>
            <div className="ew-section-title">참고사항</div>
          </div>
        </div>
        <div className="ew-card-grid">

          <div className="ew-card full">
            <div className="ew-card-head ew-ch-red">
              <span className="ew-card-head-icon">⚠️</span>
              <div className="ew-card-head-title">일반 참고사항</div>
            </div>
            <div className="ew-card-body">
              <ul className="ew-detail-list">
                <li>제품 무게가 상당하기 때문에 도와주실 분 필요</li>
                <li>200리터 이상 대형 온수기에는 이경 서비스니플(20A*15A/스텐레듀사2개) 사용해야 함(+8천원)</li>
                <li>300리터부터는 폐제품 수거 어려운 안내. 제품 내놓는 거까지 가능. <strong>50L부터 가정용 싱크대 안들어감</strong></li>
                <li>가스 → 전기로 변경 시 기존 온수기 철거X 새로 설치(가스증설문제)</li>
                <li><strong style={{color:'#2455a4'}}>계약서 작성 후 공지사항 메세지 전송</strong></li>
              </ul>
            </div>
          </div>

          <div className="ew-card">
            <div className="ew-card-head ew-ch-green">
              <span className="ew-card-head-icon">🆕</span>
              <div className="ew-card-head-title">신규 설치</div>
            </div>
            <div className="ew-card-body">
              <ul className="ew-detail-list">
                <li>신규 시 100리터 이하 5만원 추가(감압변,설치부속) / 200리터 이상 5만8천원 추가(EH는 6만3천원)</li>
                <li>소중형 : 파랑색 / 대형 : 파랑&빨강색</li>
                <li>시공 공간 확인(급수·온수 배관, 콘센트, 수도와 설치공간이 멀어 주름관 추가로 필요한지)</li>
                <li>벽체 보강 시 4~6만 안내 / 누전차단 포함X 별도설치 / 벽타공 기본 5만</li>
              </ul>
            </div>
          </div>

          <div className="ew-card">
            <div className="ew-card-head ew-ch-amber">
              <span className="ew-card-head-icon">🔄</span>
              <div className="ew-card-head-title">교체 설치</div>
            </div>
            <div className="ew-card-body">
              <ul className="ew-detail-list">
                <li>감압변 교체시 3만3천원 추가(시공,구매만 할 경우)</li>
                <li>기존 설치되어 있는 사진 받아 추가금 여부 확인 / 주변 집 확인. 이동하다 파손 책임없음 안내</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ━━━━ 모델별 단가 ━━━━ */}
      <section className="ew-section" id="ew-model">
        <div className="ew-section-header">
          <div className="ew-section-icon">📋</div>
          <div>
            <div className="ew-section-title">모델별 단가</div>
            <div className="ew-section-sub">EJ,EH=법랑 / SA, SM=스텐 / 카드 결제금액 기준 / 세금계산서 발행시 별도</div>
          </div>
        </div>
        <div className="ew-card">
          <div className="ew-card-head ew-ch-indigo">
            <span className="ew-card-head-icon">⚡</span>
            <div className="ew-card-head-title">전기온수기 (대리점구매) — 가*세*높</div>
          </div>
          <div className="ew-card-body">
            <div className="ew-table-wrap">
              <table className="ew-data-table">
                <thead>
                  <tr>
                    <th>용량</th>
                    <th>모델명</th>
                    <th>사이즈</th>
                    <th>설치타입</th>
                    <th>제품값 (만원)</th>
                    <th>설치포함 (만원)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>15L</td><td>EJ15W/U</td><td>360*360*327</td><td>벽걸이W/상향식U</td><td className="hl">16</td><td className="hl">31</td></tr>
                  <tr><td>30L</td><td>EJ30W/U</td><td>360*360*327</td><td>벽걸이W/상향식U</td><td className="hl">18</td><td className="hl">33</td></tr>
                  <tr><td rowSpan={4}>50L</td><td>EJ50U 바닥형</td><td>470*590</td><td>상향식U</td><td className="hl">24</td><td className="hl">39</td></tr>
                  <tr><td>EJ50W 세로형</td><td>390*721</td><td>벽걸이W</td><td className="hl">22</td><td className="hl">36</td></tr>
                  <tr><td>SA50W 원통형</td><td>500*530</td><td>벽걸이W</td><td className="hl">27</td><td className="hl">41</td></tr>
                  <tr><td>SM50H 가로형</td><td>760*405</td><td>벽걸이W</td><td className="hl">23</td><td className="hl">36</td></tr>
                  <tr><td>100L</td><td>SA100W/S</td><td>460*840</td><td>벽걸이W/스탠드S</td><td className="hl">42</td><td className="hl">58</td></tr>
                  <tr><td>200L</td><td>SA200S</td><td>560*1245</td><td>스탠드S</td><td className="hl">77</td><td className="hl">93</td></tr>
                  <tr><td>300L</td><td>SA300S</td><td>560*1745</td><td>스탠드S</td><td className="hl">92</td><td className="hl">111</td></tr>
                  <tr><td>400L</td><td>EH400S</td><td>635*1735</td><td>스탠드S</td><td className="hl">88</td><td className="hl">125</td></tr>
                  <tr><td>500L</td><td>EH500S</td><td>685*1822</td><td>스탠드S</td><td className="hl">120</td><td className="hl">167</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ 시공비 ━━━━ */}
      <section className="ew-section" id="ew-install">
        <div className="ew-section-header">
          <div className="ew-section-icon">💰</div>
          <div>
            <div className="ew-section-title">시공비</div>
          </div>
        </div>
        <div className="ew-card-grid">

          {/* 비성수기 */}
          <div className="ew-card">
            <div className="ew-card-head ew-ch-slate">
              <span className="ew-card-head-icon">❄️</span>
              <div>
                <div className="ew-card-head-title">비성수기 — 온라인 설치의뢰 설치비 / 거리비용 별도</div>
              </div>
            </div>
            <div className="ew-card-body">
              <div className="ew-table-wrap">
                <table className="ew-data-table">
                  <thead>
                    <tr><th>용량</th><th>기변 (감압변별도)</th><th>신규 (감압변포함)</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>15리터</td><td className="hl">110,000</td><td className="hl">160,000</td></tr>
                    <tr><td>30리터</td><td className="hl">110,000</td><td className="hl">160,000</td></tr>
                    <tr><td>50리터</td><td className="hl">120,000</td><td className="hl">170,000</td></tr>
                    <tr><td>80리터</td><td className="hl">150,000</td><td className="hl">200,000</td></tr>
                    <tr><td>100리터</td><td className="hl">180,000</td><td className="hl">230,000</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 성수기 */}
          <div className="ew-card">
            <div className="ew-card-head ew-ch-amber">
              <span className="ew-card-head-icon">☀️</span>
              <div>
                <div className="ew-card-head-title">성수기 — 온라인 설치의뢰 설치비</div>
                <div className="ew-card-head-sub">* 200리터~ 설치비용 설명 시 품목별로 추가비용 안내</div>
              </div>
            </div>
            <div className="ew-card-body">
              <div className="ew-table-wrap">
                <table className="ew-data-table">
                  <thead>
                    <tr><th>용량</th><th>기변 (감압변별도)</th><th>신규 (감압변포함)</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>~50리터</td><td className="hl">144,000</td><td className="hl">194,000</td></tr>
                    <tr><td>80리터</td><td className="hl">190,000</td><td className="hl">240,000</td></tr>
                    <tr><td>100리터</td><td className="hl">220,000</td><td className="hl">270,000</td></tr>
                    <tr><td>200리터(폐가전 수거O)</td><td className="hl">275,000</td><td className="hl">333,000</td></tr>
                    <tr><td>300리터(폐가전 수거X)</td><td className="hl">275,000</td><td className="hl">333,000</td></tr>
                    <tr><td>EH 400리터(폐가전 수거X)</td><td className="hl">330,000</td><td className="hl">393,000</td></tr>
                    <tr><td>EH 500리터(폐가전 수거X)</td><td className="hl">440,000</td><td className="hl">503,000</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ━━━━ 분당 온수 사용량 ━━━━ */}
      <section className="ew-section" id="ew-usage">
        <div className="ew-section-header">
          <div className="ew-section-icon">💧</div>
          <div>
            <div className="ew-section-title">분당 온수 사용량</div>
          </div>
        </div>
        <div className="ew-card-grid">
          <div className="ew-card full">
            <div className="ew-card-head ew-ch-teal">
              <span className="ew-card-head-icon">💧</span>
              <div className="ew-card-head-title">용량별 온수 사용량 (온수저장량 60℃)</div>
            </div>
            <div className="ew-card-body">
              <div className="ew-table-wrap">
                <table className="ew-data-table">
                  <thead>
                    <tr>
                      <th>용량</th>
                      <th>혼합수 사용량 (40℃기준)</th>
                      <th>분당 사용량</th>
                      <th>연속사용 가능시간</th>
                      <th>재사용 가능시간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>15L</td><td>약 25~30L</td><td>4~6L</td><td>약 4~6분</td><td>약 20~30분</td></tr>
                    <tr><td>30L</td><td>약 50~60L</td><td>5~7L</td><td>약 8~12분</td><td>약 30~40분</td></tr>
                    <tr><td>50L</td><td>약 80~100L</td><td>6~8L</td><td>약 12~15분</td><td>약 40~50분</td></tr>
                    <tr><td>100L</td><td>약 160~180L</td><td>6~8L</td><td>약 20~25분</td><td>약 60~70분</td></tr>
                    <tr><td>200L</td><td>약 320~360L</td><td>6~10L</td><td>약 35~50분</td><td>약 90~120분</td></tr>
                    <tr><td>300L</td><td>약 480~540L</td><td>8~12L</td><td>약 45~60분 이상</td><td>약 120~150분</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="ew-card full">
            <div className="ew-card-head ew-ch-blue">
              <span className="ew-card-head-icon">👥</span>
              <div className="ew-card-head-title">사용 인원별 권장 용량</div>
            </div>
            <div className="ew-card-body">
              <div className="ew-table-wrap">
                <table className="ew-data-table">
                  <thead>
                    <tr><th>사용 인원</th><th>권장 용량</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>2명 동시에 샤워</td><td className="hl">80L 이상</td></tr>
                    <tr><td>3명 동시에 샤워</td><td className="hl">100L 이상 (가능하면 120L 이상 추천)</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="ew-notice info" style={{marginTop:'10px'}}>
                <span className="ew-notice-icon">ℹ️</span>
                <div className="ew-notice-body">통 1인 샤워 시 약 30~50L의 온수가 필요 / 최대한 오프라인가와 맞출 것</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ElecWaterPage