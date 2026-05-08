import './InstallCostPage.css'

function InstallCostPage() {
  return (
    <div className="ic-page">

      <div className="ic-page-hero">
        <div className="ic-page-hero-label">INSTALL COST</div>
        <h1 className="ic-page-hero-title">💰 설치비용 안내</h1>
        <p className="ic-page-hero-sub">거리별 추가비용 · 성수기/비수기 기준</p>
      </div>

      <section className="ic-section">
        <div className="ic-section-header">
          <div className="ic-section-icon">🗺️</div>
          <div>
            <div className="ic-section-title">거리별 추가비용 안내</div>
          </div>
        </div>
        <div className="ic-card-grid">

          <div className="ic-card full">
            <div className="ic-card-head ic-ch-amber">
              <span className="ic-card-head-icon">🗺️</span>
              <div>
                <div className="ic-card-head-title">거리별 추가 비용</div>
                <div className="ic-card-head-sub">중고 제품은 무조건 택배 · 방문 절대 사절</div>
              </div>
            </div>
            <div className="ic-card-body">

              <div className="ic-notice success">
                <span className="ic-notice-icon">✅</span>
                <div className="ic-notice-body">B/I 포함 린나이 새제품 구매 후 제품 AS 기사님 제품 불량 판단 시 교환 및 설치(무상 가능)</div>
              </div>
              <div className="ic-notice info" style={{marginBottom:'16px'}}>
                <span className="ic-notice-icon">📍</span>
                <div className="ic-notice-body">3단계 지역은 당일 설치 불가. 대형 제품 or 마진 제품 위주로 설치 가능</div>
              </div>

              <div className="ic-table-wrap">
                <table className="ic-data-table">
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>0단계</th>
                      <th>1단계</th>
                      <th>1.5단계</th>
                      <th>2단계</th>
                      <th>3단계</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="ic-label">지역</td>
                      <td>
                        <div className="ic-tag-wrap">
                          <span className="ic-tag">인천</span>
                          <span className="ic-tag">김포</span>
                          <span className="ic-tag">부천</span>
                        </div>
                      </td>
                      <td>
                        <div className="ic-tag-wrap">
                          <span className="ic-tag">일산</span>
                          <span className="ic-tag">파주</span>
                          <span className="ic-tag">시흥</span>
                          <span className="ic-tag">안산</span>
                          <span className="ic-tag">군포</span>
                          <span className="ic-tag">고양</span>
                          <span className="ic-tag">영종</span>
                          <span className="ic-tag">강화</span>
                        </div>
                      </td>
                      <td>
                        <div className="ic-tag-wrap">
                          <span className="ic-tag">서울</span>
                          <span className="ic-tag">수원</span>
                          <span className="ic-tag">화성</span>
                          <span className="ic-tag">용인</span>
                          <span className="ic-tag">안양</span>
                          <span className="ic-tag">과천</span>
                          <span className="ic-tag">하남</span>
                          <span className="ic-tag">광명</span>
                          <span className="ic-tag">의왕</span>
                          <span className="ic-tag">구리</span>
                          <span className="ic-tag">성남</span>
                          <span className="ic-tag">의정부</span>
                          <span className="ic-tag">남양주</span>
                          <span className="ic-tag">강화외곽</span>
                        </div>
                      </td>
                      <td>
                        <div className="ic-tag-wrap">
                          <span className="ic-tag">용인-처인구</span>
                          <span className="ic-tag">외곽</span>
                          <span className="ic-tag">동두천</span>
                          <span className="ic-tag">양주</span>
                        </div>
                      </td>
                      <td>
                        <div className="ic-tag-wrap">
                          <span className="ic-tag">이천</span>
                          <span className="ic-tag">여주</span>
                          <span className="ic-tag">평택</span>
                          <span className="ic-tag">포천</span>
                          <span className="ic-tag">양평</span>
                          <span className="ic-tag">안성</span>
                          <span className="ic-tag">연천</span>
                          <span className="ic-tag">오산</span>
                          <span className="ic-tag">광주</span>
                          <span className="ic-tag">가평시</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="ic-label">기본(오프라인)</td>
                      <td className="free">-</td>
                      <td className="free">-</td>
                      <td className="paid">27,500</td>
                      <td className="paid">33,000</td>
                      <td className="paid">44,000</td>
                    </tr>
                    <tr>
                      <td className="ic-label">온라인(성수기)</td>
                      <td className="free">0</td>
                      <td className="free">0</td>
                      <td className="free">0</td>
                      <td className="paid">10,000</td>
                      <td className="paid">20,000</td>
                    </tr>
                    <tr>
                      <td className="ic-label">온라인(비수기)</td>
                      <td className="free">0</td>
                      <td className="paid">22,000</td>
                      <td className="paid">28,000</td>
                      <td className="paid">33,000</td>
                      <td className="paid">44,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="ic-helper">*온라인 주문건 2단계부터 추가요금 적용 / 설치비용 부가세 별도</p>

            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default InstallCostPage