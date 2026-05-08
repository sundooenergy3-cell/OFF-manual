import './TradePage.css'

function TradePage() {
  return (
    <div className="tr-page">

      <div className="tr-page-hero">
        <div className="tr-page-hero-label">TRADE</div>
        <h1 className="tr-page-hero-title">🏢 시공/매장용 안내</h1>
        <p className="tr-page-hero-sub">일반소비자 판매 · 거래처 판매 · 거래명세서 · 세금계산서</p>
      </div>

      <div className="tr-card-grid">

        {/* ── 일반소비자 제품 판매시 ── */}
        <div className="tr-card full">
          <div className="tr-card-head tr-ch-blue">
            <span className="tr-card-head-icon">🛒</span>
            <div className="tr-card-head-title">일반소비자 제품 판매시</div>
          </div>
          <div className="tr-card-body">
            <ul className="tr-detail-list">
              <li>판매입력 → 전표출력 → 보드판에 붙여놓기 → 제품발송후 → 전표 [김혜민] 올려놓기</li>
              <li>린나이 지사 직출 택배 오더 완료후 구매전표 입력후 → 전표[김혜민] 올려놓기</li>
              <li>판매, 구매 같이 진행될시 구매전표도 같이기재</li>
            </ul>
          </div>
        </div>

        {/* ── 거래처 제품 판매시 ── */}
        <div className="tr-card full">
          <div className="tr-card-head tr-ch-green">
            <span className="tr-card-head-icon">🏪</span>
            <div className="tr-card-head-title">거래처 제품 판매시</div>
          </div>
          <div className="tr-card-body">
            <ul className="tr-detail-list">
              <li>시흥엘피지[신천도], 시흥엘피지[대아동], 영흥에너지, 팔팔가스, 한양종합가스, 대원에너지 = <strong>FAX 발송</strong></li>
              <li>한성가스기구 = <strong>문자 P 발송</strong></li>
              <li>팔팔가스, 한성가스기구, 조은상사 <strong>세금계산서 바로 발행</strong></li>
            </ul>
          </div>
        </div>

        {/* ── 거래처별 안내 ── */}
        <div className="tr-card full">
          <div className="tr-card-head tr-ch-amber">
            <span className="tr-card-head-icon">📋</span>
            <div className="tr-card-head-title">거래처별 특이사항</div>
          </div>
          <div className="tr-card-body">
            <ul className="tr-detail-list">
              <li><strong>티월드</strong> 사무실내방 전기온수기 감압변(로얄) 카드결제 구매(TA15W, 감압변2만원) → 전표+카드결제 영수증 [김혜민] 전달해주기</li>
              <li><strong>영지가스</strong> 사무실내방 구매 추후 한번에결제 [계좌결제진행시] - 사업자지출증빙 진행</li>
              <li><strong>강원가스 서일산업(주)</strong> 사장님 전달(친구분) 사무실톡방 거래명세서 전달 / 대신택배</li>
              <li><strong>블루디자인(온수기)</strong> 선입금X 세금계산서 먼저 발행</li>
              <li><strong>(주)제이케이</strong> 보조사시 구매 거래명세서 문자전달 / 퀵착불 또는 내방해서 가져가심</li>
            </ul>
          </div>
        </div>

        {/* ── 거래처별 명세서/계산서 ── */}
        <div className="tr-card full">
          <div className="tr-card-head tr-ch-navy">
            <span className="tr-card-head-icon">📄</span>
            <div className="tr-card-head-title">거래처별 거래명세서 / 세금계산서 발행 방식</div>
          </div>
          <div className="tr-card-body">
            <div className="tr-table-wrap">
              <table className="tr-data-table">
                <thead>
                  <tr>
                    <th>거래처</th>
                    <th>거래명세서</th>
                    <th>세금계산서</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>시흥엘피지(신천/대아)</td><td className="hl">FAX</td><td></td></tr>
                  <tr><td>영흥에너지</td><td className="hl">FAX</td><td></td></tr>
                  <tr><td>한양종합가스</td><td className="hl">FAX</td><td></td></tr>
                  <tr><td>대원에너지</td><td className="hl">FAX</td><td></td></tr>
                  <tr><td>(주)지가스 강화지점</td><td className="hl">FAX</td><td>월말 일괄발행</td></tr>
                  <tr><td>팔팔가스</td><td className="hl">FAX</td><td className="hl-green">바로 발행</td></tr>
                  <tr><td>조은상사(춘천)</td><td className="hl">FAX</td><td className="hl-green">바로 발행</td></tr>
                  <tr><td>한성가스기구</td><td>문자</td><td className="red">X</td></tr>
                  <tr><td>(주)제이케이</td><td>문자</td><td className="hl-green">바로발행</td></tr>
                  <tr><td>대신가스기구</td><td></td><td className="hl-green">바로발행</td></tr>
                  <tr><td>박스패밀리</td><td></td><td>선연락후발행</td></tr>
                  <tr><td>강원가스 서일산업(주)</td><td className="red">X</td><td className="red">X</td></tr>
                  <tr><td>블루디자인</td><td></td><td>선발행</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ── 거래처/한성가스기구 단가표 ── */}
        <div className="tr-card full">
          <div className="tr-card-head tr-ch-teal">
            <span className="tr-card-head-icon">🔗</span>
            <div className="tr-card-head-title">거래처/한성가스기구 단가표</div>
          </div>
          <div className="tr-card-body">
            
             <a href="https://docs.google.com/spreadsheets/d/1pYaX_Q72--goKr9AFe7HSMNf5Y-47-wEuJ6jAGI1C4w/edit?gid=0#gid=0"
              target="_blank"
              rel="noreferrer"
              className="tr-link"
            >
              📊 한성가스기구 단가표 바로가기 →
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TradePage