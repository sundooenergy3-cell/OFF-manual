import './ConsultPage.css'

function ConsultPage() {
  return (
    <div className="con-page">

      <div className="con-page-hero">
        <div className="con-page-hero-label">CONSULT MANUAL</div>
        <h1 className="con-page-hero-title">📞 상담 메뉴얼</h1>
        <p className="con-page-hero-sub">보일러 · 가스레인지 · 전기온수기 상담 응대 가이드</p>
      </div>

      {/* 서브탭 */}
      <div className="con-sub-tabs">
        {[
          { id: 'con-boiler', label: '🔥 보일러 상담' },
          { id: 'con-gasrange', label: '🍳 가스레인지 상담' },
          { id: 'con-elecwater', label: '⚡ 전기온수기 상담' },
        ].map(tab => (
          <button
            key={tab.id}
            className="con-sub-tab"
            onClick={() => {
              const el = document.getElementById(tab.id)
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ━━━━ 보일러 ━━━━ */}
      <section className="con-section" id="con-boiler">
        <div className="con-section-header">
          <div className="con-section-icon">🔥</div>
          <div>
            <div className="con-section-title">보일러 상담 메뉴얼</div>
            <div className="con-section-sub">보일러 교체권유나 교체희망의사의 전화가 걸려왔을때</div>
          </div>
        </div>
        <div className="con-card-grid">

          <div className="con-card full">
            <div className="con-card-head con-ch-red">
              <span className="con-card-head-icon">📞</span>
              <div className="con-card-head-title">응대 순서</div>
            </div>
            <div className="con-card-body">
              <div className="con-step-list">
                <div className="con-step">
                  <div className="con-step-badge">응대1</div>
                  <div className="con-step-text">거주지역이 어디실까요? 구나 동정도만 가볍게 안내부탁드립니다</div>
                </div>
                <div className="con-step">
                  <div className="con-step-badge">응대2</div>
                  <div className="con-step-text">주거형태가 어떻게되시나요? 아파트 or 빌라 or 주택 중에 말씀해주세요</div>
                </div>
              </div>
            </div>
          </div>

          <div className="con-card full">
            <div className="con-card-head con-ch-blue">
              <span className="con-card-head-icon">💬</span>
              <div className="con-card-head-title">고객 답변별 질문 순서</div>
            </div>
            <div className="con-card-body">
              <div className="con-notice info" style={{marginBottom:'14px'}}>
                <span className="con-notice-icon">ℹ️</span>
                <div className="con-notice-body">고객 답변에 따라 아래 순서대로 추가 질문을 진행해주세요</div>
              </div>
              <div className="con-answer-flow-grid">

                <div className="con-flow-card">
                  <div className="con-flow-card-title">🏢 아파트</div>
                  <div className="con-flow-steps">
                    <span className="con-flow-badge">ㄱ</span>
                    <span className="con-flow-arr">→</span>
                    <span className="con-flow-badge">ㄹ</span>
                    <span className="con-flow-arr">→</span>
                    <span className="con-flow-badge">ㅁ</span>
                    <span className="con-flow-arr">→</span>
                    <span className="con-flow-badge">ㅂ</span>
                  </div>
                </div>

                <div className="con-flow-card">
                  <div className="con-flow-card-title">🏠 빌라</div>
                  <div className="con-flow-steps">
                    <span className="con-flow-badge">ㄱ</span>
                    <span className="con-flow-arr">→</span>
                    <span className="con-flow-badge">ㄴ</span>
                    <span className="con-flow-arr">→</span>
                    <span className="con-flow-badge">ㄹ</span>
                    <span className="con-flow-arr">→</span>
                    <span className="con-flow-badge">ㅂ</span>
                  </div>
                </div>

                <div className="con-flow-card">
                  <div className="con-flow-card-title">🏡 주택</div>
                  <div className="con-flow-steps">
                    <span className="con-flow-badge">ㄱ</span>
                    <span className="con-flow-arr">→</span>
                    <span className="con-flow-badge">ㄷ</span>
                    <span className="con-flow-arr">→</span>
                    <span className="con-flow-badge">ㅂ</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="con-card full">
            <div className="con-card-head con-ch-amber">
              <span className="con-card-head-icon">❓</span>
              <div className="con-card-head-title">추가 확인 질문 목록</div>
            </div>
            <div className="con-card-body">
              <ul className="con-detail-list">
                <li><span className="con-q-badge">ㄱ</span> 평수가 몇평인가요?</li>
                <li><span className="con-q-badge">ㄴ</span> 단층인가요? 복층구조인가요?</li>
                <li><span className="con-q-badge">ㄷ</span> 보일러실이 지하에 있나요?</li>
                <li><span className="con-q-badge">ㄹ</span> 온도조절기는 거실에 1개인가요? 아니면 방방마다 따로 온도조절기가 있나요?</li>
                <li><span className="con-q-badge">ㅁ</span> 문은 철제로 만들어져서 보일러만 들어있는 보일러실이 따로 있나요?</li>
                <li><span className="con-q-badge">ㅂ</span> 바닥에 물청소를 했을경우 물이 잘빠지는 구조인가요?</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ━━━━ 가스레인지 ━━━━ */}
      <section className="con-section" id="con-gasrange">
        <div className="con-section-header">
          <div className="con-section-icon">🍳</div>
          <div>
            <div className="con-section-title">가스레인지 상담 메뉴얼</div>
            <div className="con-section-sub">"가스레인지를 교체하려고 합니다" 의 고객문의</div>
          </div>
        </div>
        <div className="con-card-grid">

          <div className="con-card full">
            <div className="con-card-head con-ch-orange">
              <span className="con-card-head-icon">📞</span>
              <div className="con-card-head-title">응대 순서</div>
            </div>
            <div className="con-card-body">
              <div className="con-step-list">
                <div className="con-step">
                  <div className="con-step-badge">응대1</div>
                  <div className="con-step-text">거주지역이 어디실까요? 구나 동정도만 가볍게 안내부탁드립니다</div>
                </div>
                <div className="con-step">
                  <div className="con-step-badge">응대2</div>
                  <div className="con-step-text">가스레인지의 종류가 매립형[상판에 구멍을 뚫어서 평평하게 사용하는]인가요? 상판보다는 한뼘정도 낮은 다이위에 그냥 올려놓고, 살짝 움직이기도 하는 스탠드형인가요?</div>
                </div>
              </div>
            </div>
          </div>

          <div className="con-card full">
            <div className="con-card-head con-ch-teal">
              <span className="con-card-head-icon">💬</span>
              <div className="con-card-head-title">고객 답변별 안내</div>
            </div>
            <div className="con-card-body">
              <div className="con-answer-flow-grid">
                <div className="con-flow-card">
                  <div className="con-flow-card-title">1. 매립형/붙박이/빌트인입니다</div>
                  <div className="con-flow-steps">
                    <span className="con-flow-badge con-flow-num">1</span>
                    <span className="con-flow-arr">→</span>
                    <span className="con-flow-badge con-flow-num">2</span>
                    <span className="con-flow-arr">→</span>
                    <span className="con-flow-badge con-flow-num">3</span>
                  </div>
                </div>
                <div className="con-flow-card">
                  <div className="con-flow-card-title">2. 그냥 옛날식으로 다리받침이 있는 스탠드입니다</div>
                  <div className="con-flow-sub">사진전송 받을수 있으면 좋지만 설명으로 대체가능</div>
                </div>
              </div>
            </div>
          </div>

          <div className="con-card full">
            <div className="con-card-head con-ch-amber">
              <span className="con-card-head-icon">❓</span>
              <div className="con-card-head-title">빌트인 추가 확인 질문</div>
            </div>
            <div className="con-card-body">
              <ul className="con-detail-list">
                <li><span className="con-q-num">1</span> 가로세로 사이즈 or 사진이 있나요?</li>
                <li><span className="con-q-num">2</span> 하부에 오븐이 있나요? 만약있다면 사용이 불가합니다</li>
                <li><span className="con-q-num">3</span> 빌트인가스렌지 바닥 아래에 전기콘센트가 있나요? 건전지타입이 기본입니다만~</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ━━━━ 전기온수기 ━━━━ */}
      <section className="con-section" id="con-elecwater">
        <div className="con-section-header">
          <div className="con-section-icon">⚡</div>
          <div>
            <div className="con-section-title">전기온수기 상담 메뉴얼</div>
          </div>
        </div>
        <div className="con-card-grid">

          <div className="con-card full">
            <div className="con-card-head con-ch-indigo">
              <span className="con-card-head-icon">🔄</span>
              <div className="con-card-head-title">"전기온수기를 교체하려합니다"</div>
            </div>
            <div className="con-card-body">
              <div className="con-step-list">
                <div className="con-step">
                  <div className="con-step-badge">응대1</div>
                  <div className="con-step-text">거주지역이 어디실까요? 구나 동정도만 가볍게 안내부탁드립니다</div>
                </div>
                <div className="con-step">
                  <div className="con-step-badge">응대2</div>
                  <div className="con-step-text">기존사용중인 제품의 모델명이나 크기를 알려주세요 — 사진을 받을수있으면 진행</div>
                </div>
              </div>
            </div>
          </div>

          <div className="con-card full">
            <div className="con-card-head con-ch-blue">
              <span className="con-card-head-icon">🆕</span>
              <div className="con-card-head-title">"전기온수기를 신규로 사용하고싶습니다"</div>
            </div>
            <div className="con-card-body">
              <div className="con-step-list">
                <div className="con-step">
                  <div className="con-step-badge">응대1</div>
                  <div className="con-step-text">거주지역이 어디실까요? 구나 동정도만 가볍게 안내부탁드립니다</div>
                </div>
                <div className="con-step">
                  <div className="con-step-badge">응대2</div>
                  <div className="con-step-text">벽걸이를 생각하시나요? 바닥형을 생각하시나요?</div>
                </div>
              </div>
              <div className="con-answer-flow-grid" style={{marginTop:'14px'}}>
                <div className="con-flow-card">
                  <div className="con-flow-card-title">🔲 벽걸이</div>
                  <div className="con-flow-steps">
                    <span className="con-flow-badge con-flow-num">1</span>
                    <span className="con-flow-arr">→</span>
                    <span className="con-flow-badge con-flow-num">2</span>
                    <span className="con-flow-arr">→</span>
                    <span className="con-flow-badge con-flow-num">3</span>
                    <span className="con-flow-arr">→</span>
                    <span className="con-flow-badge con-flow-num">5</span>
                  </div>
                </div>
                <div className="con-flow-card">
                  <div className="con-flow-card-title">🪣 바닥형</div>
                  <div className="con-flow-steps">
                    <span className="con-flow-badge con-flow-num">2</span>
                    <span className="con-flow-arr">→</span>
                    <span className="con-flow-badge con-flow-num">3</span>
                    <span className="con-flow-arr">→</span>
                    <span className="con-flow-badge con-flow-num">4</span>
                    <span className="con-flow-arr">→</span>
                    <span className="con-flow-badge con-flow-num">5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="con-card full">
            <div className="con-card-head con-ch-green">
              <span className="con-card-head-icon">❓</span>
              <div className="con-card-head-title">신규 추가 확인 질문</div>
            </div>
            <div className="con-card-body">
              <ul className="con-detail-list">
                <li><span className="con-q-num">1</span> 벽이 튼튼한 콘크리트용벽에만 설치가능합니다 맞으신가요?</li>
                <li><span className="con-q-num">2</span> 설치공간 1미터이내에 단독사용가능한 전기콘센트가 있나요?</li>
                <li><span className="con-q-num">3</span> 냉.온수배관은 설치공간에 있으신가요?</li>
                <li><span className="con-q-num">4</span> 제품사이즈가 설치공간에 약간 여유롭게 들어가는가요?</li>
                <li><span className="con-q-num">5</span> 누수발생시 배수구는 고객님께서 마련하셔야함을 알려드립니다</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default ConsultPage