import './DryerPage.css'
import imgDryer from '../assets/dryer.jpg'

function DryerPage() {
  return (
    <div className="dr-page">

      {/* ── 페이지 헤더 ── */}
      <div className="dr-page-hero">
        <div className="dr-page-hero-label">GAS DRYER</div>
        <h1 className="dr-page-hero-title">👕 건조기</h1>
        <p className="dr-page-hero-sub">모델 정보 · 설치비용 · 추가부품 · 건조량 기준</p>
      </div>

      {/* ── 서브탭 ── */}
      <div className="dr-sub-tabs">
        {[
          { id: 'dr-model', label: '📋 모델 정보' },
          { id: 'dr-install', label: '💰 설치비용' },
          { id: 'dr-parts', label: '🔧 추가 부품' },
          { id: 'dr-capacity', label: '📊 건조량 기준' },
        ].map(tab => (
          <button
            key={tab.id}
            className="dr-sub-tab"
            onClick={() => {
              const el = document.getElementById(tab.id)
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ━━━━ 모델 정보 ━━━━ */}
      <section className="dr-section" id="dr-model">
        <div className="dr-section-header">
          <div className="dr-section-icon">📋</div>
          <div>
            <div className="dr-section-title">모델 정보</div>
          </div>
        </div>
        <div className="dr-card-grid">

          <div className="dr-card">
            <div className="dr-card-head dr-ch-slate">
              <span className="dr-card-head-icon">📷</span>
              <div className="dr-card-head-title">RDT-62-RK-W</div>
            </div>
            <div className="dr-card-body">
              <img src={imgDryer} alt="건조기" className="dr-product-img" />
            </div>
          </div>

          <div className="dr-card">
            <div className="dr-card-head dr-ch-blue">
              <span className="dr-card-head-icon">📋</span>
              <div className="dr-card-head-title">제품 스펙</div>
            </div>
            <div className="dr-card-body">
              <div className="dr-table-wrap">
                <table className="dr-data-table">
                  <tbody>
                    <tr><td className="dr-label">금액</td><td className="hl">980,000원</td></tr>
                    <tr><td className="dr-label">용량</td><td className="hl">7kg / 108L</td></tr>
                    <tr><td className="dr-label">제품크기</td><td>650 x 561 x 684 (WxDxH)</td></tr>
                    <tr><td className="dr-label">연료</td><td>LNG / LPG</td></tr>
                    <tr><td className="dr-label">가스소비량</td><td>4,000kcal/h</td></tr>
                    <tr><td className="dr-label">인터넷가 설치별도</td><td>-</td></tr>
                    <tr><td className="dr-label">지지대별도</td><td>-</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="dr-notice warn" style={{marginTop:'12px'}}>
                <span className="dr-notice-icon">⚠️</span>
                <div className="dr-notice-body">
                  <b>RD-61S(구형) 차이점</b>
                  디자인 - 외관이 작아지고 깊숙함<br />
                  용량 차이 - 6kg → 7kg / 98L → 108L<br />
                  스펙 상으로 구형이 조금 더 우월 하지만 단종되어 구할수 없음
                </div>
              </div>
            </div>
          </div>

          <div className="dr-card">
            <div className="dr-card-head dr-ch-amber">
              <span className="dr-card-head-icon">📏</span>
              <div className="dr-card-head-title">높은거치대 (RD-HS20) 규격</div>
            </div>
            <div className="dr-card-body">
              <ul className="dr-detail-list">
                <li>H : 960 / 1,010 / 1,060 / 1,110 / 1,160 / 1,210 / 1,260 / 1,310 / 1,360 / 1,410 / 1,460 / 1,510mm (12단계 조절)</li>
                <li>W : 630 / 680 / 730mm (3단계)</li>
                <li>D : 500mm</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ━━━━ 설치비용 ━━━━ */}
      <section className="dr-section" id="dr-install">
        <div className="dr-section-header">
          <div className="dr-section-icon">💰</div>
          <div>
            <div className="dr-section-title">설치비용</div>
          </div>
        </div>
        <div className="dr-card-grid">

          <div className="dr-card">
            <div className="dr-card-head dr-ch-green">
              <span className="dr-card-head-icon">💰</span>
              <div className="dr-card-head-title">기본 설치비</div>
            </div>
            <div className="dr-card-body">
              <div className="dr-table-wrap">
                <table className="dr-data-table">
                  <thead>
                    <tr><th>구분</th><th>비용</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>건조기 설치만(이사)</td><td className="hl">18만원</td></tr>
                    <tr><td>온라인 구매 13만</td><td className="hl">(선입금 후 진행)</td></tr>
                    <tr><td>높은설치대(RD-HS20)</td><td className="hl">18만원</td></tr>
                    <tr><td>낮은설치대(RD-LS20)</td><td className="hl">10만원</td></tr>
                    <tr><td>비수기할인 95만</td><td className="hl">서구지역현금 90만 [23.03 인상]</td></tr>
                    <tr><td>여러대 할경우 대당</td><td className="hl">88만원</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="dr-notice info" style={{marginTop:'10px'}}>
                <span className="dr-notice-icon">ℹ️</span>
                <div className="dr-notice-body">보일러에서 따오는 경우도 비용 포함 / 이사 다음날 시공 권장(당일설치X)</div>
              </div>
            </div>
          </div>

          <div className="dr-card">
            <div className="dr-card-head dr-ch-red">
              <span className="dr-card-head-icon">✅</span>
              <div className="dr-card-head-title">설치 전 확인사항</div>
            </div>
            <div className="dr-card-body">
              <ul className="dr-detail-list">
                <li>설치 시 확인 : 가스계량기, 전기콘센트, 배습관 연결(창문)</li>
                <li>보조사시 8만 + 배습관 연장시@</li>
                <li>철거 문의시 : 관할 도시가스 측에 가스막음 처리 요청 - 가스비용 정산 - 건조기는 폐가전으로 폐기</li>
                <li>LNG or LPG 확인</li>
                <li>기존 제품 수거</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ━━━━ 추가 부품 ━━━━ */}
      <section className="dr-section" id="dr-parts">
        <div className="dr-section-header">
          <div className="dr-section-icon">🔧</div>
          <div>
            <div className="dr-section-title">추가 부품 (부가세 별도)</div>
          </div>
        </div>
        <div className="dr-card-grid">
          <div className="dr-card full">
            <div className="dr-card-head dr-ch-slate">
              <span className="dr-card-head-icon">🔧</span>
              <div className="dr-card-head-title">추가 부품 단가</div>
            </div>
            <div className="dr-card-body">
              <div className="dr-table-wrap">
                <table className="dr-data-table">
                  <thead>
                    <tr><th>부품명</th><th>가격</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>높은설치대</td><td className="hl">180,000원</td></tr>
                    <tr><td>낮은설치대</td><td className="hl">100,000원</td></tr>
                    <tr><td>가스퓨즈콕</td><td className="hl">20,000원</td></tr>
                    <tr><td>가스호스3미터이내</td><td className="hl">15,000원</td></tr>
                    <tr><td>배습관 스텐고정가이드</td><td className="hl">10,000원</td></tr>
                    <tr><td>갤러리</td><td className="hl">10,000원</td></tr>
                    <tr><td>보조사시1.2미터+갤러리</td><td className="hl">80,000원</td></tr>
                    <tr><td>보조사시2.3미터+갤러리</td><td className="hl">130,000원</td></tr>
                    <tr><td>배습관1.5미터</td><td className="hl">20,000원</td></tr>
                    <tr><td>배습관3미터</td><td className="hl">30,000원</td></tr>
                    <tr><td>벽타공</td><td className="hl">2.5~5만원</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="dr-notice warn" style={{marginTop:'10px'}}>
                <span className="dr-notice-icon">⚠️</span>
                <div className="dr-notice-body">타공 크기/벽 두께에 따라 금액이 변동 될 수 있습니다.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ 건조량 기준 ━━━━ */}
      <section className="dr-section" id="dr-capacity">
        <div className="dr-section-header">
          <div className="dr-section-icon">📊</div>
          <div>
            <div className="dr-section-title">건조량과 건조시간의 기준</div>
          </div>
        </div>
        <div className="dr-card-grid">
          <div className="dr-card full">
            <div className="dr-card-head dr-ch-teal">
              <span className="dr-card-head-icon">📊</span>
              <div className="dr-card-head-title">의류 종류별 건조량 기준</div>
            </div>
            <div className="dr-card-body">
              <div className="dr-table-wrap">
                <table className="dr-data-table">
                  <thead>
                    <tr>
                      <th>의류의 종류</th>
                      <th>1매 무게(사이즈)</th>
                      <th>1회 건조량</th>
                      <th>건조시간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>커터 셔츠(혼방)</td><td>약 200g</td><td>약 30매</td><td>약 55분</td></tr>
                    <tr><td>작업복 상, 하(혼방)</td><td>약 800g</td><td>약 7벌</td><td>약 60분</td></tr>
                    <tr><td>잠옷 상, 하(혼방)</td><td>약 500g</td><td>약 12벌</td><td>약 60분</td></tr>
                    <tr><td>수건 (면)</td><td>약 80g</td><td>약 50매</td><td>약 70분</td></tr>
                    <tr><td>시트 (면 100%)</td><td>이불(싱글 사이즈) 150 X 210cm</td><td>4매</td><td>약 60분</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="dr-notice info" style={{marginTop:'10px'}}>
                <span className="dr-notice-icon">ℹ️</span>
                <div className="dr-notice-body">
                  위의 표는 온도 20℃, 전자동 세탁기에서 5분간 탈수한 의류를 건조 시켰을 때의 기준입니다.<br /><br />
                  <b>다음의 경우는 건조시간이 길어집니다:</b><br />
                  • 급수가 충분하지 않을 때<br />
                  • 주변의 온도가 낮을 때<br />
                  • 실외부관기 필터에 먼지가 쌓여 있을 때<br />
                  • 실내의 환기가 불충분 할 때
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default DryerPage