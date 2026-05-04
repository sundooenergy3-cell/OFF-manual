import './GasRangePage.css'
import imgOvenIntegrated from '../assets/oven-integrated.png'
import imgOvenSeparate1 from '../assets/oven-separate1.png'
import imgOvenSeparate2 from '../assets/oven-separate2.jpg'
import imgTagang1 from '../assets/tagang-sample1.png'
import imgTagang2 from '../assets/tagang-sample2.png'
import imgInduction1 from '../assets/induction1.png'
import imgInduction2 from '../assets/induction2.png'
import imgInduction3 from '../assets/induction3.png'

function GasRangePage() {
  return (
    <div className="gasrange-page">

      {/* ── 페이지 헤더 ── */}
      <div className="gr-page-hero">
        <div className="gr-page-hero-label">GAS RANGE</div>
        <h1 className="gr-page-hero-title">🍳 가스레인지</h1>
        <p className="gr-page-hero-sub">모델별 단가 · 빌트인 · 스탠드 · 상담시 참고사항</p>
      </div>

      {/* ── 서브탭 ── */}
      <div className="gr-sub-tabs">
        {[
          { id: 'consulting', label: '💬 상담시 안내' },
          { id: 'notes', label: '📋 참고사항' },
          { id: 'gasrange-model', label: '🍳 가스레인지 모델' },
          { id: 'elec-range', label: '⚡ 전기레인지' },
          { id: 'stand-case', label: '📦 스탠드 케이스' },
        ].map(tab => (
          <button
            key={tab.id}
            className="gr-sub-tab"
            onClick={() => {
              const el = document.getElementById(tab.id)
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ━━━━ 상담시 안내 ━━━━ */}
      <section className="gr-section" id="consulting">
        <div className="gr-section-header">
          <div className="gr-section-icon">💬</div>
          <div>
            <div className="gr-section-title">상담시 안내</div>
          </div>
        </div>
        <div className="gr-card-grid">

          <div className="gr-card full">
            <div className="gr-card-head gr-ch-green">
              <span className="gr-card-head-icon">✅</span>
              <div className="gr-card-head-title">상담시 필수 확인사항</div>
            </div>
            <div className="gr-card-body">
              <div className="gr-check-list">
                <div className="gr-check-item">
                  <span className="gr-check-num">1</span>
                  <span className="gr-check-text">지역 (거리가 멀다면 확인 후 거리비용 추가 - 거리비용 언급X)</span>
                </div>
                <div className="gr-check-item">
                  <span className="gr-check-num">2</span>
                  <span className="gr-check-text"><strong>빌트인(매립형)</strong> / <strong>스탠드형</strong>(싱크대 위에 올려놓고 쓰는) / 하부 오븐이나 그릴있는 가스레인지인지 확인</span>
                </div>
                <div className="gr-check-item">
                  <span className="gr-check-num">3</span>
                  <span className="gr-check-text">
                    빌트인 (대부분 몇구인지 알려줌)<br /><br />
                    - 타공사이즈 측정 요청 및 사진 받아보기<br />
                    &nbsp;&nbsp;(문자로 남겨주시면 확인 후 맞는 모델 안내 드리기)<br />
                    &nbsp;&nbsp;(타공 사이즈 모른다고 할 시, 사진 받아보거나 외관사이즈 측정 요청)<br /><br />
                    - 오븐 분리형 : 오븐은 원래 사용을 안한다고 하면 오븐은 그대로 그 자리에 두고 가스레인지부분만 교체가능합니다.<br />
                    &nbsp;&nbsp;오븐은 원래 사용이 안됩니다. (빌트인과 분리시키위해 오븐 연결된 배선 자름) 추후 복구도 안됨<br />
                    &nbsp;&nbsp;오븐 철거 원할시 +2만원 / 수납장은 소비자가 알아서. 오븐 있던 자리 뻥 뚫림<br /><br />
                    - 오븐 일체형 : 통 오븐으로 교체 혹은 수납장이나 싱크대 설치 후 빌트인이나 스탠드로 가능
                  </span>
                </div>
                <div className="gr-img-row">
                  <div className="gr-img-item">
                    <img src={imgOvenIntegrated} alt="일체형" className="gr-inline-img" />
                    <p className="gr-img-caption">일체형 - 점화손잡이 같이 붙음</p>
                  </div>
                  <div className="gr-img-item">
                    <img src={imgOvenSeparate1} alt="분리형1" className="gr-inline-img" />
                    <p className="gr-img-caption">분리형 - 점화손잡이 각각 나눠짐</p>
                  </div>
                  <div className="gr-img-item">
                    <img src={imgOvenSeparate2} alt="분리형2" className="gr-inline-img" />
                    <p className="gr-img-caption">하부 그릴 : RBR-45D로 교체 가능 (560×460)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="gr-card full">
            <div className="gr-card-head gr-ch-red">
              <span className="gr-card-head-icon">⚠️</span>
              <div className="gr-card-head-title">추가비용 안내</div>
            </div>
            <div className="gr-card-body">
              <div className="gr-notice info" style={{marginBottom:'10px'}}>
                <div className="gr-notice-body">안내 : 휴대폰으로 설치가능한 모델을 가격과 함께 보내드리겠습니다</div>
              </div>
              <ul className="gr-detail-list">
                <li>배터리 타입 / 콘센트 타입(콘센트 1M) (점화 방식 - 배터리는 나중에 교체 진행 해야함)</li>
                <li>
                  <div>
                    <div>타공 필요시 +4만원(돌, 대리석 타공 불가) / 뚫려있는 사이즈가 큰 경우 거치대 사용</div>
                    <div className="gr-img-row" style={{marginTop:'10px'}}>
                      <div className="gr-img-item">
                        <img src={imgTagang1} alt="타공샘플1" className="gr-inline-img" />
                      </div>
                      <div className="gr-img-item">
                        <img src={imgTagang2} alt="타공샘플2" className="gr-inline-img" />
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <div>인덕션 → 빌트인 - 가스관 구멍 확인 필요함 (타공 필요시 +1만원) / 퓨즈코크+호스 3만원</div>
                    <div className="gr-text-red">*** 560×480에서 710×480으로 타공 어려운 경우가 많음. 참고</div>
                    <div>*** 전체 타공 필요시 +8만원 (재질에 따라 타공 안될 수 있음 / 대리석, 돌 X)</div>
                    <div className="gr-img-row" style={{marginTop:'10px'}}>
                      <div className="gr-img-item">
                        <img src={imgInduction1} alt="인덕션1" className="gr-inline-img" />
                      </div>
                      <div className="gr-img-item">
                        <img src={imgInduction2} alt="인덕션2" className="gr-inline-img" />
                      </div>
                      <div className="gr-img-item">
                        <img src={imgInduction3} alt="인덕션3" className="gr-inline-img" />
                      </div>
                    </div>
                  </div>
                </li>
                <li>스탠드형 : 가로 세로 사이즈 공간에 들어가는지 확인</li>
                <li>린나이 구매시 설치만(인천,김포) <strong>88,000원</strong> (타사제품 설치불가)</li>
                <li>오븐철거 추가비용 3만</li>
                <li>기존 오브레인지 경우 빌트인 가스레인지 교체시 오븐 사용불가(복구불가)</li>
                <li>싱크대 타공 4만 (천연대리석, 돌 타공 불가) 호스타공 3만</li>
                <li>건전지 → 콘센트 교체 2만 추가</li>
                <li>빌트인 콘센트 길이 1M</li>
                <li>가스줄 2만 / 밸브(퓨즈콕) 2만</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ━━━━ 참고사항 ━━━━ */}
      <section className="gr-section" id="notes">
        <div className="gr-section-header">
          <div className="gr-section-icon">📋</div>
          <div>
            <div className="gr-section-title">참고사항</div>
          </div>
        </div>
        <div className="gr-card-grid">
          <div className="gr-card full">
            <div className="gr-card-head gr-ch-blue">
              <span className="gr-card-head-icon">📌</span>
              <div className="gr-card-head-title">일반 참고사항</div>
            </div>
            <div className="gr-card-body">
              <ul className="gr-detail-list">
                <li>B/I 포함 린나이 새제품 구매후 제품 AS기사님 제품불량 판단시 교환 및 설치(무상가능)</li>
                <li>인덕션 : 자기장으로 조리 열전도 좋음, 만져도 됨, 전용 용기만 사용 가능</li>
                <li>라디언트 : 만지면 뜨거움, 용기상관X</li>
                <li>RBR-41 / RBR-51 / RBR-42D 등 사용중이면 <strong>RBR-45D로 교체</strong></li>
                <li>가스밸브자동타이머(가시안 타임콕크) 설치 : 빌트인 교체시 10만 / 타이머 설치만 15만</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ 가스레인지 모델 ━━━━ */}
      <section className="gr-section" id="gasrange-model">
        <div className="gr-section-header">
          <div className="gr-section-icon">🍳</div>
          <div>
            <div className="gr-section-title">가스레인지 모델별 단가</div>
          </div>
        </div>
        <div className="gr-card-grid">

          <div className="gr-card full">
            <div className="gr-card-head gr-ch-slate">
              <span className="gr-card-head-icon">🖥️</span>
              <div className="gr-card-head-title">스탠드</div>
            </div>
            <div className="gr-card-body">
              <div className="gr-table-wrap">
                <table className="gr-data-table">
                  <thead>
                    <tr>
                      <th>모델명</th><th>타공</th><th>제품만</th><th>설치포함</th>
                      <th>제품외관사이즈(mm)</th><th>색상</th><th>상판</th>
                      <th>버너구성</th><th>전원</th><th>비고</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="hl">RT-1080IJ</td>
                      <td rowSpan={4}>스탠드</td>
                      <td className="hl">160,000</td><td className="hl">248,000</td>
                      <td>590*409*164</td><td>새틴티타늄</td><td>세라스코팅</td>
                      <td rowSpan={3}>2구</td><td rowSpan={3}>대2</td><td>건전지</td>
                    </tr>
                    <tr>
                      <td className="hl">RT-1070J</td>
                      <td className="hl">150,000</td><td className="hl">238,000</td>
                      <td>590*409*164</td><td>새틴티타늄</td><td>세라스코팅</td><td>건전지</td>
                    </tr>
                    <tr>
                      <td className="hl">RT-1620I</td>
                      <td className="hl">195,000</td><td className="hl">283,000</td>
                      <td>596*525*165</td><td>매트그레이</td><td>세라스코팅</td><td>건전지</td>
                    </tr>
                    <tr>
                      <td className="hl">RT-6520I</td>
                      <td className="hl">282,000</td><td className="hl">370,000</td>
                      <td>596*525*165</td><td>매트블랙</td><td>세라스코팅</td>
                      <td>3구</td><td>대2/소1</td><td>건전지</td><td>26.3 +5천</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="gr-card full">
            <div className="gr-card-head gr-ch-blue">
              <span className="gr-card-head-icon">🏠</span>
              <div className="gr-card-head-title">빌트인 (원룸, 오피스텔)</div>
            </div>
            <div className="gr-card-body">
              <div className="gr-table-wrap">
                <table className="gr-data-table">
                  <thead>
                    <tr>
                      <th>모델명</th><th>타공</th><th>제품만</th><th>설치포함</th>
                      <th>제품외관사이즈(mm)</th><th>색상</th><th>상판</th>
                      <th>버너구성</th><th>전원</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="hl">RBR-S2001D</td>
                      <td rowSpan={2}>285*480</td>
                      <td className="hl">190,000</td><td className="hl">278,000</td>
                      <td rowSpan={2}>315*505*56</td>
                      <td rowSpan={2}>실버</td><td rowSpan={2}>스텐</td><td rowSpan={2}>2구</td>
                      <td>건전지</td>
                    </tr>
                    <tr>
                      <td className="hl">RBR-S2000</td>
                      <td className="hl">210,000</td><td className="hl">298,000</td>
                      <td>콘센트</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="gr-card full">
            <div className="gr-card-head gr-ch-teal">
              <span className="gr-card-head-icon">📐</span>
              <div className="gr-card-head-title">빌트인 (560*430)</div>
            </div>
            <div className="gr-card-body">
              <div className="gr-table-wrap">
                <table className="gr-data-table">
                  <thead>
                    <tr>
                      <th>모델명</th><th>타공</th><th>제품만</th><th>설치포함</th>
                      <th>제품외관사이즈(mm)</th><th>색상</th><th>상판</th>
                      <th>버너구성</th><th>전원</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="hl">RBR-NS206JAC</td>
                      <td rowSpan={7}>560*430</td>
                      <td className="hl">220,000</td><td className="hl">308,000</td>
                      <td>594*459*48/40</td><td>실버</td><td>스텐</td>
                      <td rowSpan={2}>2구</td><td>콘센트</td>
                    </tr>
                    <tr>
                      <td className="hl">RBR-P2501D</td>
                      <td className="hl">262,000</td><td className="hl">350,000</td>
                      <td>595*460*57.5/35</td><td>블랙펄</td><td>펄크리스탈</td><td>건전지</td>
                    </tr>
                    <tr>
                      <td className="hl">RBR-NS300DJ</td>
                      <td className="hl">220,000</td><td className="hl">308,000</td>
                      <td>594*459*30/60</td><td>실버</td><td>스텐</td>
                      <td rowSpan={5}>3구</td><td>건전지</td>
                    </tr>
                    <tr>
                      <td className="hl">RBR-NS306JAC</td>
                      <td className="hl">240,000</td><td className="hl">328,000</td>
                      <td>594*459*48/40</td><td>실버</td><td>스텐</td><td>콘센트</td>
                    </tr>
                    <tr>
                      <td className="hl">RBR-P3501D</td>
                      <td className="hl">282,000</td><td className="hl">370,000</td>
                      <td rowSpan={3}>595*460*57/35</td>
                      <td rowSpan={2}>블랙펄</td><td rowSpan={2}>펄크리스탈</td><td>건전지</td>
                    </tr>
                    <tr>
                      <td className="hl">RBR-P3500</td>
                      <td className="hl">302,000</td><td className="hl">390,000</td>
                      <td>콘센트</td>
                    </tr>
                    <tr>
                      <td className="hl">RBR-P3531BD</td>
                      <td className="hl">282,000</td><td className="hl">370,000</td>
                      <td>카라멜브라운</td><td></td><td>건전지</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="gr-card full">
            <div className="gr-card-head gr-ch-green">
              <span className="gr-card-head-icon">📐</span>
              <div className="gr-card-head-title">빌트인 (560*480)</div>
            </div>
            <div className="gr-card-body">
              <div className="gr-table-wrap">
                <table className="gr-data-table">
                  <thead>
                    <tr>
                      <th>모델명</th><th>타공</th><th>제품만</th><th>설치포함</th>
                      <th>제품외관사이즈(mm)</th><th>색상</th><th>상판</th>
                      <th>버너구성</th><th>전원</th><th>비고</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="hl">RBR-S4000</td>
                      <td rowSpan={9}>560*480</td>
                      <td className="hl">312,000</td><td className="hl">400,000</td>
                      <td rowSpan={3}>590*505*30/62</td>
                      <td rowSpan={3}>실버</td><td rowSpan={3}>스텐</td><td rowSpan={3}>4구</td>
                      <td>콘센트</td><td></td>
                    </tr>
                    <tr>
                      <td className="hl">RBR-S3001D</td>
                      <td className="hl">262,000</td><td className="hl">350,000</td>
                      <td>건전지</td><td></td>
                    </tr>
                    <tr>
                      <td className="hl">RBR-S3000</td>
                      <td className="hl">282,000</td><td className="hl">370,000</td>
                      <td>콘센트</td><td>26.3 +5천</td>
                    </tr>
                    <tr>
                      <td className="hl">RBR-PF3001D</td>
                      <td className="hl">352,000</td><td className="hl">440,000</td>
                      <td rowSpan={6}>595*510*35/54</td>
                      <td>블랙펄</td><td rowSpan={4}>펄크리스탈</td>
                      <td rowSpan={6}>3구</td><td>건전지</td><td></td>
                    </tr>
                    <tr>
                      <td className="hl">RBR-PF3000</td>
                      <td className="hl">372,000</td><td className="hl">460,000</td>
                      <td>블랙펄</td><td>콘센트</td><td></td>
                    </tr>
                    <tr>
                      <td className="hl">RBR-PF3031BD</td>
                      <td className="hl">352,000</td><td className="hl">440,000</td>
                      <td>카라멜브라운</td><td>건전지</td><td></td>
                    </tr>
                    <tr>
                      <td className="hl">RBR-PF3041PD</td>
                      <td className="hl">352,000</td><td className="hl">440,000</td>
                      <td>피치핑크</td><td>건전지</td><td></td>
                    </tr>
                    <tr>
                      <td className="hl">RBR-PF3601LD</td>
                      <td className="hl">382,000</td><td className="hl">470,000</td>
                      <td rowSpan={2}>리플렛</td><td rowSpan={2}>리플렛</td>
                      <td>건전지</td><td></td>
                    </tr>
                    <tr>
                      <td className="hl">RBR-PF3600L</td>
                      <td className="hl">402,000</td><td className="hl">490,000</td>
                      <td>콘센트</td><td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="gr-card full">
            <div className="gr-card-head gr-ch-amber">
              <span className="gr-card-head-icon">📦</span>
              <div className="gr-card-head-title">규격 외 상품</div>
            </div>
            <div className="gr-card-body">
              <div className="gr-table-wrap">
                <table className="gr-data-table">
                  <thead>
                    <tr>
                      <th>모델명</th><th>타공</th><th>제품만</th><th>설치포함</th>
                      <th>제품외관사이즈(mm)</th><th>색상</th><th>상판</th>
                      <th>버너구성</th><th>전원</th><th>비고</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="hl">RBR-45D</td>
                      <td>560*460</td>
                      <td className="hl">632,000</td><td className="hl">720,000</td>
                      <td>610*530*284/220</td><td>펄화이트</td><td>펄크리스탈</td>
                      <td>3구/그릴</td><td>건전지</td><td>현찰 67만(현금영수증 가능)</td>
                    </tr>
                    <tr>
                      <td className="hl">RBR-P4400</td>
                      <td>710*480</td>
                      <td className="hl">582,000</td><td className="hl">680,000</td>
                      <td>750*505*63/30</td><td>블랙펄</td><td>펄크리스탈</td>
                      <td>4구</td><td>콘센트</td><td>현찰 65만(현금영수증 가능)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ━━━━ 전기레인지 ━━━━ */}
      <section className="gr-section" id="elec-range">
        <div className="gr-section-header">
          <div className="gr-section-icon">⚡</div>
          <div>
            <div className="gr-section-title">전기레인지</div>
          </div>
        </div>
        <div className="gr-card-grid">
          <div className="gr-card full">
            <div className="gr-card-head gr-ch-indigo">
              <span className="gr-card-head-icon">⚡</span>
              <div className="gr-card-head-title">전기레인지 모델별 단가</div>
            </div>
            <div className="gr-card-body">
              <div className="gr-table-wrap">
                <table className="gr-data-table">
                  <thead>
                    <tr>
                      <th>모델명</th><th>타공</th><th>제품만</th><th>설치포함</th>
                      <th>제품외관사이즈(mm)</th><th>색상</th><th>상판</th>
                      <th>버너구성</th><th>비고</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="hl">RIH-17YS</td><td>-</td>
                      <td className="hl">83,000</td><td>-</td>
                      <td>280*360*44.5</td><td>인덕션</td><td>세라믹글라스</td><td>1구</td><td></td>
                    </tr>
                    <tr>
                      <td className="hl">RIH-200N</td><td>249*475</td>
                      <td className="hl">212,000</td><td className="hl">300,000</td>
                      <td>300*510*56</td><td>인덕션</td><td>유로케라</td>
                      <td rowSpan={2}>2구</td><td>대/중</td>
                    </tr>
                    <tr>
                      <td className="hl">RBE-23H</td><td>265*440</td>
                      <td className="hl">122,000</td><td className="hl">210,000</td>
                      <td>279*453</td><td>라디언트</td><td>세라믹글라스</td><td>대/소</td>
                    </tr>
                    <tr>
                      <td className="hl">RH-B33A</td><td>560*480</td>
                      <td className="hl">302,000</td><td className="hl">390,000</td>
                      <td>591*506*50</td><td>라디언트</td><td>유로케라</td>
                      <td rowSpan={8}>3구</td><td>듀얼대/중/소</td>
                    </tr>
                    <tr>
                      <td className="hl">RBE-IRM300AB</td><td>560*430/480</td>
                      <td className="hl">502,000</td><td className="hl">590,000</td>
                      <td>591*506*48</td><td>하이브리드</td><td>쇼트세란</td>
                      <td>라디언트1/인덕션2 / 20.09.01</td>
                    </tr>
                    <tr>
                      <td className="hl">RBE-IR322AN</td><td>560*430/480</td>
                      <td className="hl">392,000</td><td className="hl">480,000</td>
                      <td>591*506*51</td><td>하이브리드</td><td>유로케라</td>
                      <td>라디언트1/인덕션2 / 22.02.15</td>
                    </tr>
                    <tr>
                      <td className="hl">RIH-CM300AB</td><td>560*430/480</td>
                      <td className="hl">612,000</td><td className="hl">700,000</td>
                      <td>591*506*48</td><td>인덕션</td><td>쇼트세란</td>
                      <td>듀오대2/특대1</td>
                    </tr>
                    <tr>
                      <td className="hl">IHB31M</td><td>560*480</td>
                      <td className="hl">402,000</td><td className="hl">490,000</td>
                      <td>595*525*60</td><td>인덕션</td><td>쇼트세란</td>
                      <td>대1/중1/소1</td>
                    </tr>
                    <tr>
                      <td className="hl">RIH-BF300AD</td><td>560*430/480</td>
                      <td className="hl">402,000</td><td className="hl">490,000</td>
                      <td>591*506*49</td><td>인덕션</td><td>유로케라</td>
                      <td>대3 / 25.02.03</td>
                    </tr>
                    <tr>
                      <td className="hl">RIH-ST310M</td><td>560*480</td>
                      <td className="hl">492,000</td><td className="hl">580,000</td>
                      <td>591*506*49</td><td>인덕션</td><td>쇼트세란</td>
                      <td>대1/중1/소1 / 25.08.20</td>
                    </tr>
                    <tr>
                      <td className="hl">RIH-ST620MW</td><td>560*480</td>
                      <td className="hl">562,000</td><td className="hl">650,000</td>
                      <td>591*506*49</td><td>인덕션</td><td>유로케라</td>
                      <td>대1/중1/소1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ 스탠드 케이스 ━━━━ */}
      <section className="gr-section" id="stand-case">
        <div className="gr-section-header">
          <div className="gr-section-icon">📦</div>
          <div>
            <div className="gr-section-title">스탠드 케이스</div>
          </div>
        </div>
        <div className="gr-card-grid">
          <div className="gr-card full">
            <div className="gr-card-head gr-ch-slate">
              <span className="gr-card-head-icon">📦</span>
              <div className="gr-card-head-title">스탠드 케이스 모델별 단가</div>
            </div>
            <div className="gr-card-body">
              <div className="gr-table-wrap">
                <table className="gr-data-table">
                  <thead>
                    <tr>
                      <th>모델명</th><th>타공</th><th>가격</th>
                      <th>색상</th><th>높이</th><th>크기</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="hl">FS-L5500WH</td>
                      <td rowSpan={3}>560*430</td><td rowSpan={3} className="hl">8만5천</td>
                      <td>화이트</td><td>낮은</td><td>5cm</td>
                    </tr>
                    <tr>
                      <td className="hl">FS-H5500WH</td>
                      <td>화이트</td><td>높은</td><td>15cm</td>
                    </tr>
                    <tr>
                      <td className="hl">H5510SI</td>
                      <td>실버</td><td>높은</td><td>15cm</td>
                    </tr>
                    <tr>
                      <td className="hl">ES-L6001T(가스)</td>
                      <td rowSpan={4}>560*480</td><td rowSpan={4} className="hl">10만</td>
                      <td rowSpan={4}>실버</td><td>낮은</td><td>8cm</td>
                    </tr>
                    <tr>
                      <td className="hl">ES-H6001T(가스)</td>
                      <td>높은</td><td>15cm</td>
                    </tr>
                    <tr>
                      <td className="hl">ES-L6002T(전기)</td>
                      <td>낮은</td><td>8cm</td>
                    </tr>
                    <tr>
                      <td className="hl">ES-H6002T(전기)</td>
                      <td>높은</td><td>15cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="gr-notice info" style={{marginTop:'10px'}}>
                <span className="gr-notice-icon">ℹ️</span>
                <div className="gr-notice-body">ES-L6001T(가스), ES-H6001T(가스) — 모서리가 둥글음 / ES-L6002T(전기), ES-H6002T(전기) — 모서리가 각짐</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gr-card full">
            <div className="gr-card-head gr-ch-amber">
              <span className="gr-card-head-icon">📏</span>
              <div className="gr-card-head-title">보조거치대</div>
            </div>
            <div className="gr-card-body">
              <div className="gr-table-wrap">
                <table className="gr-data-table">
                  <thead>
                    <tr><th>구분</th><th>사이즈</th><th>가격</th><th>용도</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>기본</td>
                      <td>595*495 [565*435]</td>
                      <td className="hl">6만5천</td>
                      <td>기본 - 480에서 430으로 줄일때 사용</td>
                    </tr>
                    <tr>
                      <td>중</td>
                      <td>680*520 [565*485]</td>
                      <td className="hl">10만</td>
                      <td>중 - 보통 LG 4구 600이상 빌트인 교체시 사용</td>
                    </tr>
                    <tr>
                      <td>대</td>
                      <td>730*515 [565*485]</td>
                      <td className="hl">12만</td>
                      <td>대 - 4구 P4400 사이즈에서 3구 480으로 줄일때 사용(일산위시티)</td>
                    </tr>
                    <tr>
                      <td>특대</td>
                      <td>760*560 [565*485]</td>
                      <td className="hl">13만</td>
                      <td>특대 - 파주통양엔파트 / 청라통양엔파트 SK매직 와이드4구형에서 3구 줄일때 사용</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

    </div>
  )
}

export default GasRangePage