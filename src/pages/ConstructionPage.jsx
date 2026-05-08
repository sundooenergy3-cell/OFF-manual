import './ConstructionPage.css'

function ConstructionPage() {
  return (
    <div className="cs-page">

      <div className="cs-page-hero">
        <div className="cs-page-hero-label">CONSTRUCTION</div>
        <h1 className="cs-page-hero-title">🏗️ 시공 전 주의사항</h1>
        <p className="cs-page-hero-sub">시공예약 후 문자발송 필수 안내</p>
      </div>

      <div className="cs-card-grid">

        {/* ── 시공 전 공지사항 ── */}
        <div className="cs-card">
          <div className="cs-card-head cs-ch-blue">
            <span className="cs-card-head-icon">📢</span>
            <div className="cs-card-head-title">시공 전 공지사항</div>
          </div>
          <div className="cs-card-body">
            <div className="cs-dual-notice">
              <div className="cs-big-notice cs-blue-panel">
                <div className="cs-big-notice-title">❗ 시공 전 꼭 읽어주세요!</div>
                본 시공은 고객님의 요청에 따라 진행되며,<br />
                <strong>설치 장소의 배수시설 상태는 고객님의 관리 대상</strong>입니다.<br /><br />
                배수시설 미비로 인한 누수 등 문제 발생 시, 당사는 책임을 지지 않음을 양해 부탁드립니다.
              </div>
              <div className="cs-big-notice cs-orange-panel">
                <div className="cs-big-notice-title">❗ 설치/시공 전 꼭 읽어주세요!</div>
                본 대리점은 <strong>설치, 시공 업무만 가능한 업체</strong>입니다.<br /><br />
                도시가스사업법 시행규칙 제20조의2에 의거하여<br />
                <strong>도시가스 증설, 변경, 인허가 등의 서류 관련 업무는 가까운 도시가스공사업체에 문의</strong> 부탁드립니다.
              </div>
            </div>
            <ul className="cs-detail-list">
              <li>하단대로 차단기유무(없으면 설치 후 직접하라고 안내 필수)</li>
              <li>배수구확인, 안내사진전송 등</li>
              <li>원래 하단대로 루틴만 지켜주세요</li>
              <li>사진은 주면 좋고 아니어도 어쩔 수 없습니다</li>
            </ul>
          </div>
        </div>

        {/* ── 카드결제 안내 ── */}
        <div className="cs-card">
          <div className="cs-card-head cs-ch-purple">
            <span className="cs-card-head-icon">💳</span>
            <div className="cs-card-head-title">카드결제 안내</div>
          </div>
          <div className="cs-card-body">
            <div className="cs-notice warn">
              <span className="cs-notice-icon">💳</span>
              <div className="cs-notice-body">
                <b>카드결제 (영수증에 내역 메모 후 회계 전달)</b>
                전화승인 : 카드사에 승인번호 받고 단말기 6-2-1 / 이지카드 문자발송 카드사진, 소유주 이름, 연락처<br />
                (예외) 국민, 비씨, 신한 단말기에서 바로 가능 — <strong>신용</strong> 누르고 바로 진행
              </div>
            </div>
            <div className="cs-notice info">
              <span className="cs-notice-icon">⚙️</span>
              <div className="cs-notice-body">
                <b>특정시설 가스 작업 시 1종면허 필요</b>
                동일 모델, 용량시 교체작업만 가능 (제품사진, 명판 받고 확인 후 진행)<br />
                별도 가스신고서류비용 5~60만원
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ConstructionPage