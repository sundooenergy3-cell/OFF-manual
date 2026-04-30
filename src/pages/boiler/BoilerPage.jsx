import './BoilerPage.css'
import imgBoiler from '../../assets/boiler-condensing.png'
import imgDistributor from '../../assets/distributor.png'
import imgEachRoom from '../../assets/each-room-parts.png'
import imgch from '../../assets/ch.png'

const tabs = [
  { id: 'boiler-info', label: '🔥 보일러' },
  { id: 'distributor', label: '🔩 분배기' },
  { id: 'each-room',   label: '🏠 각방' },
]

function BoilerPage() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="boiler-page">

      {/* ── 페이지 헤더 ── */}
      <div className="page-hero">
        <div className="page-hero-label">BOILER</div>
        <h1 className="page-hero-title">🔥 보일러</h1>
        <p className="page-hero-sub">견적 필수 확인 · 모델별 단가 · 추가비용 · 분배기 · 각방</p>
      </div>

      {/* ── 서브탭 ── */}
      <div className="sub-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className="sub-tab"
            onClick={() => scrollTo(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ━━━━ 보일러 ━━━━ */}
      <section className="section" id="boiler-info">
        <div className="section-header">
          <div className="section-icon">📋</div>
          <div>
            <div className="section-title">견적(상담) 시 꼭 필수 확인</div>
          </div>
        </div>
        <div className="card-grid">
          <div className="card full">
            <div className="card-head ch-amber">
              <span className="card-head-icon">✅</span>
              <div className="card-head-title">3가지 필수 확인 항목</div>
            </div>
            <div className="card-body">
              <div className="check-list">
                <div className="check-item">
                  <span className="check-num">1</span>
                  <span className="check-text">지역</span>
                </div>
                <div className="check-item">
                  <span className="check-num">2</span>
                  <span className="check-text"> APT/ 주택/ 빌라</span>
                </div>
                <div className="check-item">
                  <span className="check-num">3</span>
                  <span className="check-text">평수</span>
                </div>
                <div className="check-item">
                  <span className="check-num">4</span>
                  <span className="check-text">
                    보일러 근처 배수구의 유무 <span className="tag green">유 - 콘덴싱</span> <span className="tag gray">무 - 일반</span>
                  </span>
                </div>
                <div className="check-item">
                  <span className="check-num">5</span>
                  <span className="check-text">온도 조절기는 거실에 1대 인지 아니면 각방마다 온도조절기가 있는지?</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card full">
            <div className="card-head ch-blue">
              <span className="card-head-icon">📌</span>
              <div className="card-head-title">참고사항 (단독주택, 옛날 아파트 등)</div>
            </div>
            <div className="card-body">
              <ul className="detail-list">
                <li>연통이 바로 빠져 나가는 구조 = <strong>FF(KF)</strong> / 연통이 벽으로 들어가는 구조 = <strong>FE(KE)</strong></li>
                <li>연통이 1미터 이상 길게 빠져 나가는 구조 = <strong>추가금 발생 가능성</strong></li>
                <li>보일러 위치와 난방층이 같은 층인지 — 같은 층 = <strong>KF</strong> / 다른 층 = <strong>MF</strong></li>
              </ul>
            </div>
          </div>

          {/* 콘덴싱보일러 이미지 */}
          {/* <div className="card full">
            <div className="card-head ch-slate">
              <span className="card-head-icon">📷</span>
              <div className="card-head-title">콘덴싱보일러 바닥면 / 본체 구조</div>
            </div>
            <div className="card-body">
              <img src={imgBoiler} alt="콘덴싱보일러 구조" className="section-img" />
            </div>
          </div> */}
        </div>
      </section>

      {/* ── 모델별 단가표 ── */}
      <section className="section">
        <div className="section-header">
          <div className="section-icon">💰</div>
          <div>
            <div className="section-title">모델별 단가표</div>
            <div className="section-sub">4/9 기준 재고</div>
          </div>
        </div>
        <div className="card-grid">

          <div className="card">
            <div className="card-head ch-green">
              <span className="card-head-icon">🌿</span>
              <div>
                <div className="card-head-title">친환경 (콘덴싱)</div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-wrap">
                <table className="data-table">
                  <thead>
                    <tr><th>모델명</th><th>평형</th><th>정상가</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>RC620-15KF</td><td>20평 미만</td><td className="hl">890,000</td></tr>
                    <tr><td>RC620-18KF</td><td>20~25평</td><td className="hl">920,000</td></tr>
                    <tr><td>RC620-22KF</td><td>26~37평</td><td className="hl">940,000</td></tr>
                    <tr><td>RC620-27KF</td><td>38~47평</td><td className="hl">1,020,000</td></tr>
                    <tr><td>RC620-30KF</td><td>48~57평</td><td className="hl">1,060,000</td></tr>
                    <tr><td>RC620-33KF</td><td>58~65평</td><td className="hl">1,140,000</td></tr>
                    <tr><td>RC620-38KF</td><td>65평~75평</td><td className="hl">1,190,000</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="notice info" style={{marginTop: '10px'}}>
                <span className="notice-icon">ℹ️</span>
                <div className="notice-body">울트라파인 +20만 / 콘덴싱 MF +10만</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-head ch-amber">
              <span className="card-head-icon">🔥</span>
              <div>
                <div className="card-head-title">일반 (친환경 2종)</div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-wrap">
                <table className="data-table">
                  <thead>
                    <tr><th>모델명</th><th>정상가</th><th>MF(상향식)</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>R331S-13KF</td><td className="hl">660,000</td><td>-</td></tr>
                    <tr><td>R331S-16KF</td><td className="hl">690,000</td><td className="hl">790,000</td></tr>
                    <tr><td>R331S-20KF</td><td className="hl">740,000</td><td className="hl">840,000</td></tr>
                    <tr><td>R331S-25KF</td><td className="hl">810,000</td><td className="hl">910,000</td></tr>
                    <tr><td>R331-30KF</td><td className="hl">980,000</td><td className="hl">1,080,000</td></tr>
                    <tr><td>R331-36KF</td><td className="hl">1,030,000</td><td className="hl">1,130,000</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-head ch-slate">
              <span className="card-head-icon">🏢</span>
              <div>
                <div className="card-head-title">공동배기구 (FE)</div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-wrap">
                <table className="data-table">
                  <thead>
                    <tr><th>모델명</th><th>정상가</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>R331-13KE</td><td className="hl">710,000</td></tr>
                    <tr><td>R331-16KE</td><td className="hl">740,000</td></tr>
                    <tr><td>R331-20KE</td><td className="hl">790,000</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-head ch-red">
              <span className="card-head-icon">⚠️</span>
              <div>
                <div className="card-head-title">RC410 (친환경) 서울설치 X</div>
                {/* <div className="card-head-sub">교체만 가능 — 620 가격에서 7~10만원 할인 / 4/9 기준 재고</div> */}
              </div>
            </div>
            <div className="card-body">
              <div className="table-wrap">
                <table className="data-table">
                  <thead>
                    <tr><th>모델명</th><th>가격</th><th>재고수량</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>RC410-18KF</td><td>-</td><td>E</td></tr>
                    <tr><td>RC410-22KF</td><td className="hl">-</td><td className="hl">R</td></tr>
                    <tr><td>RC410-27KF</td><td className="hl">-</td><td className="hl">P</td></tr>
                    <tr><td>RC410-27MF</td><td className="hl">-</td><td className="hl">Check</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="notice info" style={{marginTop: '10px'}}>
                <span className="notice-icon">ℹ️</span>
                <div className="notice-body"> ERP에서 재고 파악 후 안내</div>
              </div>
              <div className="notice info" style={{marginTop: '10px'}}>
                <span className="notice-icon">ℹ️</span>
                <div className="notice-body">교체만 가능 — 620 가격에서 7~10만원 할인</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 안내 및 추가비용 ── */}
      <section className="section">
        <div className="section-header">
          <div className="section-icon">⚠️</div>
          <div>
            <div className="section-title">안내 및 추가비용 발생 현장</div>
          </div>
        </div>
        <div className="card-grid">
          <div className="card">
            <div className="card-head ch-blue">
              <span className="card-head-icon">📢</span>
              <div className="card-head-title">일반 안내</div>
            </div>
            <div className="card-body">
              <ul className="detail-list">
                <li>보일러 작업시간 : 1시간 30분 ~ 2시간 (유동적)</li>
                <li>2020.4.3부터 대기환경개선에 관한 특별법 시행에 따른 <strong>친환경 보일러 의무화</strong></li>
                <li>2020.08.05부터 <strong>CO경보기 설치 의무화</strong> (과태료 200만원)</li>
                <li>각방, 보일러 같이 시공할 경우 할인단가 (대략 온도조절기 대수 × 15만)</li>
                <li>분배기 사진 받아보고 정확한 금액 안내</li>
              </ul>
            </div>
          </div>

          <div className="card wide">
            <div className="card-head ch-red">
              <span className="card-head-icon">💸</span>
              <div className="card-head-title">추가비용 발생 현장</div>
            </div>
            <div className="card-body">
              <ul className="detail-list">
                <li><strong>연통 추가비용</strong> — 보일러 연통이 밖으로 나가지 않는 경우, 기본 연통 길이보다 긴 경우 : 기본 8만원 ~ 10만원</li>
                <li>타사 각방 온도조절기 사용중일 경우 <strong>통신변환기 5만원</strong> 추가 (타사보일러 이름 계약서에 써주기)</li>
                <li>배관청소만 의뢰 : 일반 <strong>15만</strong> / 상향식 <strong>20만</strong> / 보일러 설치시 인심 쓰는 서비스로~</li>
                <li>방화문 옆 드레인 호스 타공 문의시 <strong>무료타공</strong> 안내</li>
                <li>와이파이(룰론 스마트용 교체) <strong>15만원</strong></li>
                <li>후렉시볼(가스샘, 가스관교체) 기본 <strong>8만</strong></li>
              </ul>
            </div>
          </div>

          <div className="card full">
            <div className="card-head ch-amber">
              <span className="card-head-icon">📝</span>
              <div className="card-head-title">계약서 필수 기재사항</div>
            </div>
            <div className="card-body">
              <div className="check-list">
                <div className="check-item">
                  <span className="check-num">1</span>
                  <span className="check-text">★ 전화번호, 주소, 동 호수 ★ 잘 적어주기</span>
                </div>
                <div className="check-item">
                  <span className="check-num">2</span>
                  <span className="check-text">일반보일러 / 콘덴싱보일러, LNG(도시가스) / LPG, 하향식 / 상향식(FF) (MF = 복층, 주택)</span>
                </div>
                <div className="check-item">
                  <span className="check-num">3</span>
                  <span className="check-text">거리가 있거나, 단독주택 등 특이한 구조일 경우 <strong>사진 꼭 미리 받아보기</strong> → 배수구, 연통, 설치위치 등</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ 분배기 ━━━━ */}
      <section className="section" id="distributor">
        <div className="section-header">
          <div className="section-icon">🔩</div>
          <div>
            <div className="section-title">분배기</div>
            <div className="section-sub">분배기 1구 추가 시 5만원</div>
          </div>
        </div>
        <div className="card-grid">

          {/* 분배기 이미지 */}
          <div className="card img-card">
            <div className="card-head ch-slate">
              <span className="card-head-icon">📷</span>
              <div className="card-head-title">분배기 사진</div>
            </div>
            <div className="card-body">
              <img src={imgDistributor} alt="분배기" className="section-img large" />
            </div>
          </div>

          <div className="card">
            <div className="card-head ch-amber">
              <span className="card-head-icon">📊</span>
              <div className="card-head-title">구수별 단가</div>
            </div>
            <div className="card-body">
              <div className="table-wrap">
                <table className="data-table">
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
              <div className="notice warn" style={{marginTop:'10px'}}>
                <span className="notice-icon">⚠️</span>
                <div className="notice-body">분배기 1구 추가 시 <strong>5만원</strong> / 설치비용 200,000원</div>
              </div>
              <div className="card-img">
                <img src={imgch} alt="분배기" className="section-img large" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ━━━━ 각방 ━━━━ */}
      <section className="section" id="each-room">
        <div className="section-header">
          <div className="section-icon">🏠</div>
          <div>
            <div className="section-title">각방</div>
            <div className="section-sub">설치비 포함 견적</div>
          </div>
        </div>
        <div className="card-grid">

          <div className="card full">
            <div className="card-head ch-green">
              <span className="card-head-icon">📊</span>
              <div className="card-head-title">분배기 구수별 각방 설치 견적</div>
            </div>
            <div className="card-body">
              <div className="table-wrap">
                <table className="data-table">
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
              <div className="notice info" style={{marginTop:'10px'}}>
                <span className="notice-icon">ℹ️</span>
                <div className="notice-body">
                  5, 6구 : 구당 × 15만원 / 7~9구 : 구당 × 13만원 / 10구~ : 구당 × 12만원
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-head ch-purple">
              <span className="card-head-icon">⚙️</span>
              <div className="card-head-title">각방제어 / 메인조절 교체</div>
            </div>
            <div className="card-body">
              <ul className="detail-list">
                <li>각방제어 4구 (교체만가능 새로설치x) : <strong>65만원</strong></li>
                <li>메인조절 → 각방제어기 : <strong>100~120만원</strong></li>
                <li>평수 확인 / 각방 온도조절기 + 분배기가 2개 이상이면 추가 +5만 / 작업시간 2시간 내외</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-head ch-slate">
              <span className="card-head-icon">🔧</span>
              <div className="card-head-title">부품 단가(참고용)</div>
            </div>
            <div className="card-body">
              <div className="table-wrap">
                <table className="data-table">
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

          {/* 각방 부품 이미지 */}
          <div className="card full">
            <div className="card-head ch-slate">
              <span className="card-head-icon">📷</span>
              <div className="card-head-title">각방 부품 사진</div>
            </div>
            <div className="card-body">
              <img src={imgEachRoom} alt="각방 부품" className="section-img large" />
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default BoilerPage