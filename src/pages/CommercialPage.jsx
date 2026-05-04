import { useState } from 'react'
import './CommercialPage.css'

function CommercialPage() {
  const [search, setSearch] = useState('')

  const show = (keywords) => {
    if (!search) return true
    return keywords.some(k => k.toLowerCase().includes(search.toLowerCase()))
  }

  return (
    <div className="cm-page">

      <div className="cm-page-hero">
        <div className="cm-page-hero-label">COMMERCIAL</div>
        <h1 className="cm-page-hero-title">🏪 업소용</h1>
        <p className="cm-page-hero-sub">튀김기 · 정제기 · 취반기 · 식기세척기 · 국솥 · 그릴 · 야끼바 · 레인지</p>
      </div>

      <div className="cm-notice warn">
        <span className="cm-notice-icon">⚠️</span>
        <div>업소용 제품은 인천지사단가표, 매입가, 인터넷최저가 금액 비교하여 안내 (변동가능)</div>
      </div>

      {/* 검색 */}
      <div className="cm-search-bar">
        <span className="cm-search-icon">🔍</span>
        <input
          type="text"
          className="cm-search-input"
          placeholder="모델명, 용량, 규격 검색..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {search && (
          <button className="cm-search-clear" onClick={() => setSearch('')}>✕</button>
        )}
      </div>

      {/* ━━━━ 튀김기 ━━━━ */}
      {show(['튀김기','RFA-M20G','RFA-M30G','RFA-M40G','RFA-227EN','RFA-327EN','RFA-M20E','RFA-M30E','가스식','전기식','22L','31L','44L','29L','30L','배유통별매','차단기']) && (
      <section className="cm-section">
        <div className="cm-section-header">
          <div className="cm-section-icon">🍟</div>
          <div>
            <div className="cm-section-title">튀김기</div>
            <div className="cm-section-sub">*린나이 제품은 전부 지압 / 상담 : 가스종류 / 기기교체(설치O) or 신규(설치X) / 화물택배 가능</div>            
          </div>
        </div>

        {/* 가스식 */}
        {show(['튀김기','가스식','RFA-M20G','RFA-M30G','RFA-M40G','22L','31L','44L','450*600','600*600','900*600']) && (
        <div className="cm-card full" style={{marginBottom:'16px'}}>
          <div className="cm-card-head cm-ch-amber">
            <span className="cm-card-head-icon">🔥</span>
            <div className="cm-card-head-title">가스식</div>
          </div>
          <div className="cm-card-body">
            <div className="cm-table-wrap">
              <table className="cm-data-table">
                <thead>
                  <tr>
                    <th>모델명</th><th>용량</th><th>탱크</th><th>크기</th>
                    <th>소비전력</th><th>도시가스</th><th>호환가능 정제기</th>
                    <th>중량(kg)</th><th>현금/카드가</th><th>설치비</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="hl">RFA-M20G</td><td rowSpan={2}>1구</td>
                    <td>22L</td><td>450*600*1000 / 450*615*1000</td>
                    <td>17W</td><td>15,500kcal</td><td>30N 40N</td><td>36</td>
                    <td className="hl">117만</td><td rowSpan={3} className="hl">11만</td>
                  </tr>
                  <tr>
                    <td className="hl">RFA-M30G</td>
                    <td>31L</td><td>600*600*1000 / 600*615*1000</td>
                    <td>17W</td><td>17,200kcal</td><td>40N</td><td>44</td>
                    <td className="hl">135만</td>
                  </tr>
                  <tr>
                    <td className="hl">RFA-M40G</td><td>2구</td>
                    <td>44L</td><td>900*600*1000 / 900*615*1000</td>
                    <td>35W</td><td>30,100kcal</td><td>30N 40N</td><td>66</td>
                    <td className="hl">220만</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="cm-notice info" style={{marginTop:'10px'}}>
              <span className="cm-notice-icon">ℹ️</span>
              <div className="cm-notice-body">
                *기름만 다 빼놓으면 철거 가능<br />
                *부속품(가스/전기 공용) : 기름저거대, 기름저거망, 기름탱크망, 기름탱크덮개<br />
                *신형 배유필터 패유탱크X / 건지는 재(RFA-4M/핸드형 튀김망)없음 (별도구매 33,000원)<br />
                *배송, 납품은 가능 / *2-3대 주문시 세포함안내가능<br />
                *일반가스관일 경우 신형교제시 홀렉시불작업 해야할 추가5만
              </div>
            </div>
          </div>
        </div>
        )}

        {/* 전기식 */}
        {show(['튀김기','전기식','RFA-227EN','RFA-327EN','RFA-M20E','RFA-M30E','배유통별매','차단기','7kW','9kW']) && (
        <div className="cm-card full">
          <div className="cm-card-head cm-ch-indigo">
            <span className="cm-card-head-icon">⚡</span>
            <div className="cm-card-head-title">전기식</div>
          </div>
          <div className="cm-card-body">
            <div className="cm-table-wrap">
              <table className="cm-data-table">
                <thead>
                  <tr>
                    <th>모델명</th><th>용량</th><th>크기</th>
                    <th>소비전력</th><th>호환가능 정제기</th>
                    <th>중량(kg)</th><th>현금/카드가</th><th>설치비</th><th>비고</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="hl">RFA-227EN</td><td>1구</td><td>26L</td>
                    <td>7kW</td><td>30N 40N</td><td>26</td><td className="hl">98만</td>
                    <td rowSpan={4} className="hl">11만</td><td></td>
                  </tr>
                  <tr>
                    <td className="hl">RFA-327EN</td><td>1구</td><td>29L</td>
                    <td>배유통별매</td><td>40N</td><td>32</td><td className="hl">110만</td><td></td>
                  </tr>
                  <tr>
                    <td className="hl">RFA-M20E</td><td>1구(히터회전)</td><td>22L / 450*600*1000</td>
                    <td>9kW</td><td className="red">*차단기 있어야함</td><td>30N 40N</td><td>30</td>
                    <td className="hl">112만</td><td>청소하기 편리함</td>
                  </tr>
                  <tr>
                    <td className="hl">RFA-M30E</td><td>1구(히터회전)</td><td>30L / 600*600*1000</td>
                    <td>9kW</td><td className="red">*차단기 있어야함</td><td>40N</td><td>34</td>
                    <td className="hl">125만</td><td>청소하기 편리함</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="cm-notice warn" style={{marginTop:'10px'}}>
              <span className="cm-notice-icon">⚠️</span>
              <div className="cm-notice-body">온라인도 설치비 같음</div>
            </div>
          </div>
        </div>
        )}
      </section>
      )}

      {/* ━━━━ 정제기 ━━━━ */}
      {show(['정제기','ROR-30N','ROR-40N','302E','402E','22L','30L','31L','40L','250W','이아졸','227TE','327TE']) && (
      <section className="cm-section">
        <div className="cm-section-header">
          <div className="cm-section-icon">🔧</div>
          <div>
            <div className="cm-section-title">정제기</div>
            <div className="cm-section-sub">상담 : 기기교체(설치O) or 신규(설치X) / 콘센트종-설치잘게 없음 / 화물택배 가능(작품) / 기본정제필터 30EA</div>
          </div>
        </div>
        <div className="cm-card full">
          <div className="cm-card-head cm-ch-teal">
            <span className="cm-card-head-icon">🔧</span>
            <div className="cm-card-head-title">정제기 모델 (20.04 출시)</div>
          </div>
          <div className="cm-card-body">
            <div className="cm-table-wrap">
              <table className="cm-data-table">
                <thead>
                  <tr>
                    <th>모델명</th><th>용량</th><th>탱크</th><th>규격</th>
                    <th>소비전력</th><th>전원</th><th>이아졸 방지 탱크</th>
                    <th>중량(kg)</th><th>현금/카드가</th><th>호환가능모델</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="hl">ROR-30N (구 302E)</td><td>22L</td><td>30L</td>
                    <td>345x585x315</td><td>250W</td><td>AC220V/60Hz</td>
                    <td>이아졸 방지 탱크 커버포함</td><td>15(포장 20)</td>
                    <td className="hl">73만</td>
                    <td>227TE(N) 227E(N) 228G 428G</td>
                  </tr>
                  <tr>
                    <td className="hl">ROR-40N (구 402E)</td><td>31L</td><td>40L</td>
                    <td>345x690x315</td><td>250W</td><td>AC220V/60Hz</td>
                    <td>이아졸 방지 탱크 커버포함</td><td>17(포장 22)</td>
                    <td className="hl">83만</td>
                    <td>227TE(N) 327TE(N) 227E(N) 327E(N) 228G 328G 428G</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ━━━━ 취반기 ━━━━ */}
      {show(['취반기','RR-55G','RRA-101','RRA-151','소형','2단','3단','20-55인분','100인분','150인분','526','700','납품','스테인리스']) && (
      <section className="cm-section">
        <div className="cm-section-header">
          <div className="cm-section-icon">🍚</div>
          <div>
            <div className="cm-section-title">취반기</div>
          </div>
        </div>
        <div className="cm-card full">
          <div className="cm-card-head cm-ch-green">
            <span className="cm-card-head-icon">🍚</span>
            <div className="cm-card-head-title">취반기 모델별 단가</div>
          </div>
          <div className="cm-card-body">
            <div className="cm-table-wrap">
              <table className="cm-data-table">
                <thead>
                  <tr>
                    <th>구분</th><th>모델명</th><th>용량</th><th>내솥</th>
                    <th>크기</th><th>가스소비량(kW, P/N)</th>
                    <th>중량(kg)</th><th>현금/카드가</th><th>설치</th><th>비고</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>소형</td><td className="hl">RR-55G</td><td>20-55인분</td>
                    <td>알루미늄</td><td>526X481X434</td>
                    <td>9.8(0.7) / 9.8(8,400)</td><td>16</td>
                    <td className="hl">44만(상품만)/55만(설치포함)</td>
                    <td>*인력발솔기능없음</td><td></td>
                  </tr>
                  <tr>
                    <td>2단</td><td className="hl">RRA-101</td><td>100인분</td>
                    <td rowSpan={2}>*A 알루미늄 / S 스테인리스</td>
                    <td>700X727X886(1,036)</td>
                    <td>22.1(1.58) / 22.1(19,000)</td><td>85</td>
                    <td className="hl">A 198만 / S 208만</td>
                    <td>*기본 : 납품 및 안착 / 교체 설치 20만(사진 받아서 가스호스 봐야함 가스관 교체 시 +5만)</td><td></td>
                  </tr>
                  <tr>
                    <td>3단</td><td className="hl">RRA-151</td><td>150인분</td>
                    <td>700X727X1,247(1,397)</td>
                    <td>33.7(2.42) / 33.7(29,000)</td><td>129</td>
                    <td className="hl">A 275만 / S 295만</td>
                    <td>*호스일 경우 가스관 후렉쉬풀로 변경(5만) / 교체 설치 15만원 추가</td><td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ━━━━ 식기세척기 ━━━━ */}
      {show(['식기세척기','DRW-600G','DRW-600EN','DRW-610E','650X650','4코스','도매가','나우','세제','린스','RWW-12PD','RWW-12DR']) && (
      <section className="cm-section">
        <div className="cm-section-header">
          <div className="cm-section-icon">🍽️</div>
          <div>
            <div className="cm-section-title">식기세척기</div>
          </div>
        </div>
        <div className="cm-card full">
          <div className="cm-card-head cm-ch-blue">
            <span className="cm-card-head-icon">🍽️</span>
            <div className="cm-card-head-title">식기세척기 모델별 단가</div>
          </div>
          <div className="cm-card-body">
            <div className="cm-table-wrap">
              <table className="cm-data-table">
                <thead>
                  <tr>
                    <th>구분</th><th>모델명</th><th>온수기 연결</th><th>규격</th>
                    <th>소비전력(kW)</th><th>코스선택</th><th>코스시간</th>
                    <th>가스용량</th><th>가격(세포함)</th><th>비고</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>가스식</td><td className="hl">DRW-600G</td><td>불필요</td>
                    <td>문단힘 650X650X1,340 문열림 650X650X1,665</td>
                    <td>1.3</td><td rowSpan={3}>4코스</td>
                    <td rowSpan={3}>70s, 90s, 120s, 사용자모드</td>
                    <td>N 18,100</td>
                    <td className="hl">280만 (가스배관공사 별도)</td>
                    <td>*나우-소비자판매 설치비 포함 금액 250만원(도매가 220만원)</td>
                  </tr>
                  <tr>
                    <td rowSpan={2}>전기식</td><td className="hl">DRW-600EN</td><td>필요</td>
                    <td>문단힘 650X650X1,340 문열림 650X650X1,665</td>
                    <td>4.1</td><td>-</td>
                    <td className="hl">240만 (제품만)</td>
                    <td rowSpan={2}>세제 RWW-12PD / 린스 RWW-12DR / 5만(세별도) / 2022인상</td>
                  </tr>
                  <tr>
                    <td className="hl">DRW-610E</td><td>필요</td>
                    <td>문단힘 650X650X1,340 문열림 650X650X1,665</td>
                    <td>6.2</td><td>-</td>
                    <td className="hl">250만 (제품만)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ━━━━ 국솥 ━━━━ */}
      {show(['국솥','RSKN','RSK','스테인리스','주물','알루미늄','200인분','400인분','500인분','150인분','300인분','90L','150L','180L','55L','110L','인천가스','설비업체']) && (
      <section className="cm-section">
        <div className="cm-section-header">
          <div className="cm-section-icon">🍲</div>
          <div>
            <div className="cm-section-title">국솥</div>
          </div>
        </div>
        <div className="cm-card full">
          <div className="cm-card-head cm-ch-purple">
            <span className="cm-card-head-icon">🍲</span>
            <div className="cm-card-head-title">국솥 모델별 단가</div>
          </div>
          <div className="cm-card-body">
            <div className="cm-table-wrap">
              <table className="cm-data-table">
                <thead>
                  <tr>
                    <th>구분</th><th>모델명</th><th>식수인원</th><th>용량</th>
                    <th>규격</th><th>LPG (가스소비량)</th><th>LNG (가스소비량)</th>
                    <th>중량(kg)</th><th>현금/카드가</th><th>수거비용</th><th>설치비용</th><th>비고</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td rowSpan={3}>통 스테인리스</td><td className="hl">RSKN-201T</td><td>200인분</td><td>90L</td><td>1,392X1,000X930</td><td>34.9(2.5)</td><td>34.9(30,000)</td><td>136</td><td className="hl">365만</td><td rowSpan={12}>불가</td><td rowSpan={12}>불가</td><td rowSpan={5}>!! 불가!! 인천가스 설비업체 소개</td></tr>
                  <tr><td className="hl">RSKN-401T</td><td>400인분</td><td>150L</td><td>1,495X1,100X930</td><td>43.0(3.1)</td><td>43.0(37,000)</td><td>162</td><td className="hl">385만</td></tr>
                  <tr><td className="hl">RSKN-501T</td><td>500인분</td><td>180L</td><td>1,575X1,200X930</td><td>46.5(3.3)</td><td>46.5(40,000)</td><td>169</td><td className="hl">405만</td></tr>
                  <tr><td rowSpan={3}>스테인리스</td><td className="hl">RSKN-201S</td><td>200인분</td><td>90L</td><td>1,392X1,000X930</td><td>34.9(2.5)</td><td>34.9(30,000)</td><td>118</td><td className="hl">315만</td></tr>
                  <tr><td className="hl">RSKN-401S</td><td>400인분</td><td>150L</td><td>1,495X1,100X930</td><td>43.0(3.1)</td><td>43.0(37,000)</td><td>137</td><td className="hl">335만</td></tr>
                  <tr><td className="hl">RSKN-501S</td><td>500인분</td><td>180L</td><td>1,575X1,200X930</td><td>46.5(3.3)</td><td>46.5(40,000)</td><td>152</td><td className="hl">355만</td><td></td></tr>
                  <tr><td rowSpan={3}>주물</td><td className="hl">RSKN-201C</td><td>200인분</td><td>90L</td><td>1,392X1,000X930</td><td>34.9(2.5)</td><td>34.9(30,000)</td><td>153</td><td className="hl">330만</td><td rowSpan={6}></td></tr>
                  <tr><td className="hl">RSKN-401C</td><td>400인분</td><td>150L</td><td>1,495X1,100X930</td><td>43.0(3.1)</td><td>43.0(37,000)</td><td>175</td><td className="hl">350만</td></tr>
                  <tr><td className="hl">RSKN-501C</td><td>500인분</td><td>180L</td><td>1,575X1,200X930</td><td>46.5(3.3)</td><td>46.5(40,000)</td><td>189</td><td className="hl">370만</td></tr>
                  <tr><td rowSpan={2}>알루미늄</td><td className="hl">RSK-150A</td><td>150인분</td><td>55L</td><td>1,320X870X920</td><td>26.5(1.9)</td><td>29.7(25,500)</td><td>90</td><td className="hl">245만</td></tr>
                  <tr><td className="hl">RSK-300A</td><td>300인분</td><td>110L</td><td>1,320X870X935</td><td>36.2(2.6)</td><td>38.4(33,000)</td><td>92</td><td className="hl">260만</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ━━━━ 그릴 ━━━━ */}
      {show(['그릴','RSB-922N','RSB-923N','2버너','3버너','515X375','790X400','54만','66만']) && (
      <section className="cm-section">
        <div className="cm-section-header">
          <div className="cm-section-icon">🔥</div>
          <div>
            <div className="cm-section-title">그릴</div>
          </div>
        </div>
        <div className="cm-card full">
          <div className="cm-card-head cm-ch-red">
            <span className="cm-card-head-icon">🔥</span>
            <div className="cm-card-head-title">그릴 모델별 단가</div>
          </div>
          <div className="cm-card-body">
            <div className="cm-table-wrap">
              <table className="cm-data-table">
                <thead>
                  <tr>
                    <th>구분</th><th>모델명</th><th>버너수</th><th>규격</th>
                    <th>LPG (가스소비량)</th><th>LNG (가스소비량)</th>
                    <th>중량(kg)</th><th>현금/카드가</th><th>수거비용</th><th>설치비용</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan={2}>가스식</td>
                    <td className="hl">RSB-922N</td><td>2버너</td><td>515X375X460</td>
                    <td>7.0(0.5)</td><td>7.0(6,045)</td><td>14.9</td>
                    <td className="hl">54만(납품)</td><td className="hl">5</td><td className="hl">5</td>
                  </tr>
                  <tr>
                    <td className="hl">RSB-923N</td><td>3버너</td><td>790X400X600</td>
                    <td>7.1(0.5)</td><td>7.2(6,200)</td><td>26.9</td>
                    <td className="hl">66만(납품)</td><td className="hl">5</td><td className="hl">5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ━━━━ 야끼바 ━━━━ */}
      {show(['야끼바','RG-440F','RG-640F','RSB-923N','570*630','770*630','790*400','9.5','14.0','7.1','66(설치포함)']) && (
      <section className="cm-section">
        <div className="cm-section-header">
          <div className="cm-section-icon">🥩</div>
          <div>
            <div className="cm-section-title">야끼바</div>
          </div>
        </div>
        <div className="cm-card full">
          <div className="cm-card-head cm-ch-amber">
            <span className="cm-card-head-icon">🥩</span>
            <div className="cm-card-head-title">야끼바 모델별 단가</div>
          </div>
          <div className="cm-card-body">
            <div className="cm-table-wrap">
              <table className="cm-data-table">
                <thead>
                  <tr>
                    <th>구분</th><th>모델명</th><th>규격</th>
                    <th>LPG (가스소비량)</th><th>LNG (가스소비량)</th>
                    <th>중량(kg)</th><th>현금/카드가</th><th>수거비용</th><th>설치비용</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan={3}>가스식</td>
                    <td className="hl">RG-440F</td><td>570*630*275</td>
                    <td>9.5(0.7)</td><td>9.8(8,400)</td><td>18</td><td>-</td>
                    <td rowSpan={2} className="hl">5</td><td rowSpan={2} className="hl">5</td>
                  </tr>
                  <tr>
                    <td className="hl">RG-640F</td><td>770*630*275</td>
                    <td>14.0(1.0)</td><td>14.0(12,000)</td><td>23</td><td>-</td>
                  </tr>
                  <tr>
                    <td className="hl">RSB-923N</td><td>790*400*600</td>
                    <td>7.1(0.5)</td><td>7.2(6,200)</td><td>26.9</td>
                    <td className="hl">66(설치포함)</td><td>-</td><td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ━━━━ 1구 레인지 ━━━━ */}
      {show(['1구레인지','1구 레인지','HI-170P','324*327','3.8','5.4','63,000']) && (
      <section className="cm-section">
        <div className="cm-section-header">
          <div className="cm-section-icon">🍳</div>
          <div>
            <div className="cm-section-title">1구레인지</div>
          </div>
        </div>
        <div className="cm-card full">
          <div className="cm-card-head cm-ch-slate">
            <span className="cm-card-head-icon">🍳</span>
            <div className="cm-card-head-title">1구레인지 모델별 단가</div>
          </div>
          <div className="cm-card-body">
            <div className="cm-table-wrap">
              <table className="cm-data-table">
                <thead>
                  <tr>
                    <th>구분</th><th>모델명</th><th>버너수</th><th>규격</th>
                    <th>LPG (가스소비량)</th><th>LNG (가스소비량)</th>
                    <th>중량(kg)</th><th>현금/카드가</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>가스식</td>
                    <td className="hl">HI-170P</td><td>1구</td><td>324*327*109</td>
                    <td>3.8(0.27)</td><td>5.4(4,446)</td><td>2.2</td>
                    <td className="hl">63,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ━━━━ 2구/4구 레인지 ━━━━ */}
      {show(['2구','4구','레인지','RSB-260S','RSB-490S','600*400','865*455','11.86','16.9']) && (
      <section className="cm-section">
        <div className="cm-section-header">
          <div className="cm-section-icon">🍳</div>
          <div>
            <div className="cm-section-title">2구 / 4구 레인지</div>
          </div>
        </div>
        <div className="cm-card full">
          <div className="cm-card-head cm-ch-teal">
            <span className="cm-card-head-icon">🍳</span>
            <div className="cm-card-head-title">2구/4구 레인지 모델별 단가</div>
          </div>
          <div className="cm-card-body">
            <div className="cm-table-wrap">
              <table className="cm-data-table">
                <thead>
                  <tr>
                    <th>구분</th><th>모델명</th><th>버너수</th><th>규격</th>
                    <th>LPG (가스소비량)</th><th>LNG (가스소비량)</th>
                    <th>중량(kg)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan={2}>가스식</td>
                    <td className="hl">RSB-260S</td><td>2구</td><td>600*400*208</td>
                    <td>11.86(0.85)</td><td>11.86(10,200)</td><td>9.9</td>
                  </tr>
                  <tr>
                    <td className="hl">RSB-490S</td><td>4구</td><td>865*455*208</td>
                    <td>16.9(1.21)</td><td>16.9(14,500)</td><td>15.8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      )}

    </div>
  )
}

export default CommercialPage