import { useState } from 'react'
import './OtherBrandPage.css'

function OtherBrandPage() {
  const [search, setSearch] = useState('')

  const show = (keywords) => {
    if (!search) return true
    return keywords.some(k => k.toLowerCase().includes(search.toLowerCase()))
  }

  return (
    <div className="ob-page">

      <div className="ob-page-hero">
        <div className="ob-page-hero-label">OTHER BRAND</div>
        <h1 className="ob-page-hero-title">🔄 타사 제품 정보</h1>
        <p className="ob-page-hero-sub">제조사별 모델명 · 화구 · 외관 · 타공 · 교체가능모델 · 비고</p>
      </div>

      <div className="ob-search-bar">
        <span className="ob-search-icon">🔍</span>
        <input
          type="text"
          className="ob-search-input"
          placeholder="모델명, 타공, 비고 검색..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {search && (
          <button className="ob-search-clear" onClick={() => setSearch('')}>✕</button>
        )}
      </div>

      <div className="ob-notice">
        <span className="ob-notice-icon">⚠️</span>
        <div>*마전지구 대주파크빌 가스호스 싱크대바닥 (오븐하단) 부터 올라옴 / 바닥부분에 가스호스 올라오는 추가 타공 해야함 또는 가스호스 짧아서 1-2만원 추가될 수 있음</div>
      </div>

      {/* ━━━━ 린나이 ━━━━ */}
      {show(['린나이','RBR-S3201D','RBR-41JW','RBR-51JW','RBR-42D','RBR-3DW','RBR-201','RBR-411','RBR-307CD','RBR-401','RBR-306D','RBR-501','RBR-A30CD','ST-WELL','560*430','560*460','560*480','430인착시','480인착시']) && (
      <section className="ob-section">
        <div className="ob-section-header">
          <div className="ob-section-icon">🍳</div>
          <div className="ob-section-title">린나이</div>
        </div>
        <div className="ob-table-wrap">
          <table className="ob-table">
            <thead>
              <tr>
                <th>모델명</th><th>화구</th><th>외관(mm)</th>
                <th>타공(mm)</th><th>교체가능모델</th><th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>RBR-S3201D</td><td>3구</td><td>590*45.5</td><td className="hl">560*430</td><td>560*430</td><td></td></tr>
              <tr><td>RBR-41JW, 41JB</td><td>3구</td><td></td><td className="hl">560*460</td><td>560*480</td><td>430인착시 쫄대/ 480인착시 타공</td></tr>
              <tr><td>RBR-51JW, 52J</td><td>3구</td><td></td><td className="hl">560*460</td><td>560*480</td><td></td></tr>
              <tr><td>RBR-42D, RBR-45D</td><td>3구</td><td></td><td className="hl">560*460</td><td></td><td>거치대+430사이즈/타공시 480사이즈</td></tr>
              <tr><td>RBR-3DW, 3DB</td><td>3구</td><td></td><td className="hl">560*460</td><td></td><td></td></tr>
              <tr><td>RBR-201</td><td>2구</td><td>315*505*29</td><td></td><td></td><td></td></tr>
              <tr><td>RBR-411</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>RBR-307CD</td><td>3구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>RBR-401/302S</td><td>4구/3구</td><td>590*500</td><td className="hl">560*480</td><td>560*480</td><td></td></tr>
              <tr><td>RBR-306D</td><td>3구</td><td></td><td className="hl">560*430</td><td></td><td></td></tr>
              <tr><td>RBR-501</td><td>4구</td><td></td><td className="hl">560*480</td><td>560*480</td><td></td></tr>
              <tr><td>RBR-A30CD</td><td>3구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>ST-WELL</td><td>3구</td><td></td><td className="hl">560*480</td><td>560*480</td><td></td></tr>
            </tbody>
          </table>
        </div>
      </section>
      )}

      {/* ━━━━ 히츠 ━━━━ */}
      {show(['히츠','HOR-5500P','GC-3604EDS','HGR-4051AC','HGR-30425','GC-3603SD','GC-3606EDSH','HGR-4100G','타공필요','검암','아니킨빌','생선그릴']) && (
      <section className="ob-section">
        <div className="ob-section-header">
          <div className="ob-section-icon">🍳</div>
          <div className="ob-section-title">히츠</div>
        </div>
        <div className="ob-table-wrap">
          <table className="ob-table">
            <thead>
              <tr>
                <th>모델명</th><th>화구</th><th>외관(mm)</th>
                <th>타공(mm)</th><th>교체가능모델</th><th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>HOR-5500P</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>GC-3604EDS</td><td>3구</td><td></td><td className="red">타공필요</td><td>560*430</td><td></td></tr>
              <tr><td>HGR-4051AC</td><td>4구</td><td></td><td className="hl">560*480</td><td>560*480</td><td></td></tr>
              <tr><td>HGR-30425</td><td>3구</td><td>550*410</td><td></td><td></td><td></td></tr>
              <tr><td>GC-3603SD</td><td>3구</td><td></td><td className="red">560*410 타공필요</td><td>560*430</td><td>검암 아니킨빌</td></tr>
              <tr><td>GC-3606EDSH</td><td>3구</td><td></td><td className="hl">560*430</td><td></td><td></td></tr>
              <tr><td>HGR-4100G</td><td>4구</td><td>생선그릴레인지</td><td className="hl">560*480</td><td></td><td></td></tr>
            </tbody>
          </table>
        </div>
      </section>
      )}

      {/* ━━━━ 엘지전자 ━━━━ */}
      {show(['엘지','LG','HK632AAN','HK632A','HK742A','TG-B650SN','TG-B650S','TG-B734GN','TG-B612SN','G-B152S','HBH6341CN','HBH6432BN','TG-B740GN','HB6315AN','G-951S','TGR-B610S','HB7441BN','HB7441AN','HB7430GP','HK641AAN','G-953S','G-B552S','왕길동','청라','송도','용인수지','서초구','연수구','한강밤섬','위시티','640*480','560*480','LG DIOS']) && (
      <section className="ob-section">
        <div className="ob-section-header">
          <div className="ob-section-icon">🍳</div>
          <div className="ob-section-title">엘지전자</div>
        </div>
        <div className="ob-table-wrap">
          <table className="ob-table">
            <thead>
              <tr>
                <th>모델명</th><th>화구</th><th>외관(mm)</th>
                <th>타공(mm)</th><th>교체가능모델</th><th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>HK632AAN</td><td>3구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>HK632A HK742A</td><td>3구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>TG-B650SN</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td>왕길동 대림아파트</td></tr>
              <tr><td>TG-B650S</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td>청라 동문코어모닝힐 분리형오븐</td></tr>
              <tr><td>TG-B734GN</td><td>4구</td><td></td><td className="hl">560*480 / 640*480</td><td>560*480</td><td>680*520 보조거치대지참(10만) / 송도자이하버뷰1단지-560*480 2단지 640*480</td></tr>
              <tr><td>TG-B612SN</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td>상판 들어내야 알 수 있음</td></tr>
              <tr><td>G-B152S(오브레인지)</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td>용인수지 성복자이1차 680*520 보조거치대 / 성복자이2차 560*480 (지참하기)</td></tr>
              <tr><td>HBH6341CN / HBH6432BN</td><td>3구</td><td>LG DIOS</td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td className="highlight-row">TG-B740GN</td><td>4구</td><td>LG DIOS</td><td className="red">640*480</td><td>보조거치대+480사이즈</td><td>서울 서초구 명달로109 도무스빌 / 연수구 송도 웰카운티 / 한강밤섬자이 / 일산위시티자이 / 위시티일산자이2단지-인조대리석 상판 (추가타공가능)</td></tr>
              <tr><td>HB6315AN</td><td>3구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>G-951S(오브레인지)</td><td>3구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>TGR-B610S</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>HB7441BN</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td>청라제일풍경채</td></tr>
              <tr><td>HB7441AN</td><td>4구</td><td></td><td className="hl">640*480</td><td></td><td></td></tr>
              <tr><td>HB7430GP</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>HK641AAN</td><td>4구</td><td></td><td className="hl">560*480</td><td>560*480</td><td></td></tr>
              <tr><td>G-953S</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>G-B552S</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
            </tbody>
          </table>
        </div>
      </section>
      )}
{/* ━━━━ 삼성전자 ━━━━ */}
      {show(['삼성','HBGR-G475C','SBO-5121N','SBO-3021N','SBO-S5101','HBO-ME601','SBO-6000N','HBGR-401SN','SBO-M6001','SBR-D200N','SBR-D400','원당동문','정릉풍림','청라SK','덕양구','길은뉴타운','560*480','285*480','710*480']) && (
      <section className="ob-section">
        <div className="ob-section-header">
          <div className="ob-section-icon">🍳</div>
          <div className="ob-section-title">삼성전자</div>
        </div>
        <div className="ob-table-wrap">
          <table className="ob-table">
            <thead>
              <tr>
                <th>모델명</th><th>화구</th><th>외관(mm)</th>
                <th>타공(mm)</th><th>교체가능모델</th><th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="highlight-row">HBGR-G475C</td><td>4구</td><td>750*505</td><td className="hl">710*480</td><td>RBR-P4400</td><td>장기동우남퍼스트빌 / 걸포동오스타파라곤 / 구래동 한가람마을우미린-천연대리석(타공불가) / 일산서구일신동 유진스빌A / 일산서구 덕이동 아이파크 왕길동 드림파크어울림1단지 / 수원영통 망포 그대가프리미어 / 청라역슬루티워</td></tr>
              <tr><td>SBO-5121N</td><td>4구</td><td>기존린나이제품</td><td className="hl">560*480</td><td></td><td>원당동문굿모닝힐 / 정릉풍림아이원</td></tr>
              <tr><td className="highlight-row">SBO-3021N</td><td></td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td className="highlight-row">SBO-S5101</td><td></td><td></td><td className="hl">560*480</td><td>오브레인지</td><td></td></tr>
              <tr><td>HBO-ME601</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>SBO-6000N</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td>청라SK퓨</td></tr>
              <tr><td>HBGR-401SN</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td>덕양구 래미안퓨레스트</td></tr>
              <tr><td>SBO-M6001</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>SBR-D200N</td><td>2구</td><td>기존린나이</td><td>285*480</td><td></td><td></td></tr>
              <tr><td>SBR-D400</td><td>4구</td><td></td><td className="hl">560*480</td><td>560*480</td><td>길은뉴타운</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      )}

      {/* ━━━━ 밀레 ━━━━ */}
      {show(['밀레','Miele','CS 1012G','CS 1011G','KM 6347','KM 414','KM 2052G','KM 2014G','KM 390G','KM 2257','272*500','750*490','560*500','860*480','850*480','894*514']) && (
      <section className="ob-section">
        <div className="ob-section-header">
          <div className="ob-section-icon">🍳</div>
          <div className="ob-section-title">밀레/Miele</div>
        </div>
        <div className="ob-table-wrap">
          <table className="ob-table">
            <thead>
              <tr>
                <th>모델명</th><th>화구</th><th>외관(mm)</th>
                <th>타공(mm)</th><th>교체가능모델</th><th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>CS 1012G</td><td>2구</td><td>288*520</td><td className="hl">272*500</td><td></td><td></td></tr>
              <tr><td>CS 1011G</td><td>1구</td><td>288*520</td><td className="hl">272*500</td><td></td><td></td></tr>
              <tr><td>KM 6347 (인덕션)</td><td>4구</td><td>764*504</td><td className="hl">750*490</td><td></td><td></td></tr>
              <tr><td>KM 414</td><td>4구</td><td>575*515</td><td className="hl">560*500</td><td></td><td></td></tr>
              <tr><td>KM 2052G</td><td>5구</td><td>900*515</td><td className="hl">860*480-490</td><td></td><td></td></tr>
              <tr><td>KM 2014G</td><td>4구</td><td>650*515</td><td className="hl">560*490-490</td><td></td><td></td></tr>
              <tr><td>KM 390G</td><td>5구</td><td>885*515*90</td><td className="hl">850*480</td><td></td><td></td></tr>
              <tr><td>KM 2257-1G</td><td>5구</td><td>892*512</td><td className="hl">894*514</td><td></td><td></td></tr>
            </tbody>
          </table>
        </div>
      </section>
      )}

      {/* ━━━━ 동양매직/SK레벤 ━━━━ */}
      {show(['동양매직','SK레벤','GRA','GOR','와이드4구','파주','청라동양','730*480','728*492','715*480','560*430','560*480','730*500','728*495','556*422','560*440','760*530']) && (
      <section className="ob-section">
        <div className="ob-section-header">
          <div className="ob-section-icon">🍳</div>
          <div className="ob-section-title">동양매직 / SK레벤</div>
        </div>
        <div className="ob-table-wrap">
          <table className="ob-table">
            <thead>
              <tr>
                <th>모델명</th><th>화구</th><th>외관(mm)</th>
                <th>타공(mm)</th><th>교체가능모델</th><th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>와이드4구형</td><td>4구</td><td>700이상</td><td className="hl">735*490</td><td>RBR-P4400</td><td>제작보조거치대(12만)760*530[565*485]</td></tr>
              <tr><td>GRA-4024B2</td><td>4구</td><td></td><td className="hl">730*480</td><td>RBR-P4400</td><td>제작보조거치대(12만)760*530[565*485] 파주 와동동 동양엔파트 / 청라 동양엔파트</td></tr>
              <tr><td>GRA-40B702</td><td>4구오븐</td><td>분해</td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>GRA-B4013</td><td>4구</td><td></td><td className="hl">728*492</td><td>RBR-P4400</td><td>제작보조거치대(12만)760*530[565*485]</td></tr>
              <tr><td>GRA-40B14</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>GRA-40B1</td><td>4구오븐</td><td>분해</td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>GRA-4014B</td><td>와이드4구</td><td></td><td className="hl">715*480</td><td>RBR-P4400</td><td></td></tr>
              <tr><td>GRA-B300/301</td><td>3구</td><td></td><td className="hl">560*430</td><td></td><td></td></tr>
              <tr><td>GRA-B3218D</td><td>3구</td><td></td><td className="hl">560*430</td><td></td><td></td></tr>
              <tr><td>GRA-41B1</td><td>4구오븐</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>GRA-41B7</td><td>4구오븐</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>GRA-40B7/8</td><td>4구오븐</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>GRA-S40B16</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>GRA-41B300</td><td>4구그릴</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>GRA-B420/421J</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td className="red-row">GRA-S30BE6/7</td><td>3구</td><td></td><td className="red">560*440</td><td></td><td></td></tr>
              <tr><td>GRA-30B2</td><td></td><td></td><td className="red">556*422 타공필요</td><td></td><td></td></tr>
              <tr><td>GRA-4054B</td><td>와이드4구</td><td></td><td className="hl">730*500</td><td>RBR-P4400</td><td>제작보조거치대(12만)760*530[565*485]</td></tr>
              <tr><td>GRA-30B1</td><td>3구</td><td></td><td className="hl">560*430</td><td></td><td></td></tr>
              <tr><td>GRA-B324/325</td><td>3구</td><td></td><td className="hl">560*530</td><td></td><td></td></tr>
              <tr><td>GRA-B426/427</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>GRA-B430K</td><td>4구</td><td>750*520</td><td className="hl">728*495</td><td>RBR-P4400</td><td>제작보조거치대(12만)760*530[565*485]</td></tr>
              <tr><td>GOR-5T11E</td><td>4구오븐</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
            </tbody>
          </table>
        </div>
      </section>
      )}

      {/* ━━━━ 파세코 ━━━━ */}
      {show(['파세코','PGC','PGB','MGC','554*430','560*447','당하동','중앙e클레스']) && (
      <section className="ob-section">
        <div className="ob-section-header">
          <div className="ob-section-icon">🍳</div>
          <div className="ob-section-title">파세코</div>
        </div>
        <div className="ob-table-wrap">
          <table className="ob-table">
            <thead>
              <tr>
                <th>모델명</th><th>화구</th><th>외관(mm)</th>
                <th>타공(mm)</th><th>교체가능모델</th><th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>PGC-6033B</td><td></td><td></td><td className="hl">560*430</td><td></td><td></td></tr>
              <tr><td>PGC-6033M</td><td></td><td></td><td className="hl">560*430</td><td></td><td></td></tr>
              <tr><td>PGC-6034M</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>MGC-B40</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>PGC-B360R</td><td>3구</td><td>580*460</td><td className="hl">554*430</td><td></td><td></td></tr>
              <tr><td>PGB-B363FHB</td><td>3구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>PGC-NC360BB</td><td>3구</td><td>560*447</td><td className="hl">560*447</td><td></td><td>보조거치대(기본)+430/타공+ 당하동 중앙e클레스</td></tr>
              <tr><td>PGC-B363RH</td><td></td><td>타공필요</td><td className="hl">554*430</td><td></td><td></td></tr>
            </tbody>
          </table>
        </div>
      </section>
      )}

      {/* ━━━━ 한샘 ━━━━ */}
      {show(['한샘','CTB','CTM','SG-B53A','554*430','560*460','550*430','타공필요','560*430','560*480']) && (
      <section className="ob-section">
        <div className="ob-section-header">
          <div className="ob-section-icon">🍳</div>
          <div className="ob-section-title">한샘</div>
        </div>
        <div className="ob-table-wrap">
          <table className="ob-table">
            <thead>
              <tr>
                <th>모델명</th><th>화구</th><th>외관(mm)</th>
                <th>타공(mm)</th><th>교체가능모델</th><th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>CTB-MS360</td><td></td><td></td><td className="hl">560*430</td><td></td><td></td></tr>
              <tr><td>CTM-MS361</td><td></td><td></td><td className="hl">550*430</td><td></td><td></td></tr>
              <tr><td>CTB-6023(하부GOB-604)</td><td>3구오븐</td><td></td><td className="hl">560*430</td><td></td><td></td></tr>
              <tr><td>CTB-MS363H</td><td>3구</td><td>타공필요</td><td className="hl">554*430</td><td></td><td></td></tr>
              <tr><td>CTB-B363HS</td><td>3구</td><td>타공필요</td><td className="hl">554*430</td><td></td><td></td></tr>
              <tr><td>CTB-6015</td><td>4구</td><td>타공필요</td><td></td><td></td><td></td></tr>
              <tr><td>CTB-6034</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>CTB-6014</td><td>3구</td><td>타공필요</td><td className="hl">560*460</td><td>560*480</td><td>또는 보조거치대 사용하여 560*430도 가능/또는 45D가능하다고할 - 가로타공사이즈 안 맞으면 타공진행해야함</td></tr>
              <tr><td>CTB-B360</td><td>3구</td><td>타공필요</td><td className="hl">554*430</td><td></td><td></td></tr>
              <tr><td>SG-B53A</td><td>3구</td><td></td><td className="hl">560*430</td><td></td><td></td></tr>
              <tr><td>CTB-IK361</td><td>3구</td><td>타공필요</td><td className="hl">554*430</td><td></td><td></td></tr>
            </tbody>
          </table>
        </div>
      </section>
      )}

      {/* ━━━━ 지엔스 ━━━━ */}
      {show(['지엔스','ER15353RK','FE401XU1','타공필요','타공없음','560*480','560*430']) && (
      <section className="ob-section">
        <div className="ob-section-header">
          <div className="ob-section-icon">🍳</div>
          <div className="ob-section-title">지엔스</div>
        </div>
        <div className="ob-table-wrap">
          <table className="ob-table">
            <thead>
              <tr>
                <th>모델명</th><th>화구</th>
                <th>타공(mm)</th><th>교체가능모델</th><th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr><td></td><td>4구</td><td className="red">타공필요</td><td>560*480</td><td></td></tr>
              <tr><td>ER15353RK</td><td>4구</td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td>FE401XU1</td><td>4구</td><td className="red">타공없음</td><td>560*480</td><td></td></tr>
            </tbody>
          </table>
        </div>
      </section>
      )}

      {/* ━━━━ 쿠센스 ━━━━ */}
      {show(['쿠센스','NGC-303ND','NGC-S201S','NGC-S313S','NGC-E311S','NGC-GL301','265*440','555*465','세로로 긴 2구']) && (
      <section className="ob-section">
        <div className="ob-section-header">
          <div className="ob-section-icon">🍳</div>
          <div className="ob-section-title">쿠센스</div>
        </div>
        <div className="ob-table-wrap">
          <table className="ob-table">
            <thead>
              <tr>
                <th>모델명</th><th>화구</th><th>외관(mm)</th>
                <th>타공(mm)</th><th>교체가능모델</th><th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>NGC-303ND</td><td>3구</td><td></td><td className="red">타공필요</td><td>560*430</td><td></td></tr>
              <tr><td>NGC-S201S</td><td>2구</td><td>290*480</td><td className="hl">265*440</td><td></td><td>세로로 긴 2구 빌트인</td></tr>
              <tr><td className="highlight-row">NGC-S313S</td><td>3구</td><td>550*440</td><td className="red">타공필요</td><td>560*430</td><td></td></tr>
              <tr><td>NGC-E311S</td><td>3구</td><td>550*440</td><td className="red">공필요/기본거치대경우도있음</td><td>560*430</td><td></td></tr>
              <tr><td className="highlight-row">NGC-GL301</td><td>3구</td><td></td><td className="hl">555*465 타공필</td><td>560*480</td><td></td></tr>
            </tbody>
          </table>
        </div>
      </section>
      )}

      {/* ━━━━ 쿠스한트 ━━━━ */}
      {show(['쿠스한트','HCT-S460','KCT-TG75','KCT-TW75','KGO-GB75','HCT-S360','KCT-T360','710*480','558*422','타공한적있음']) && (
      <section className="ob-section">
        <div className="ob-section-header">
          <div className="ob-section-icon">🍳</div>
          <div className="ob-section-title">쿠스한트</div>
        </div>
        <div className="ob-table-wrap">
          <table className="ob-table">
            <thead>
              <tr>
                <th>모델명</th><th>화구</th><th>외관(mm)</th>
                <th>타공(mm)</th><th>교체가능모델</th><th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>HCT-S460</td><td>4구</td><td></td><td className="hl">560*480</td><td>RBR-P4400</td><td></td></tr>
              <tr><td>KCT-TG75</td><td>4구</td><td></td><td className="hl">710*480</td><td>RBR-P4400</td><td></td></tr>
              <tr><td>KCT-TW75</td><td>4구</td><td></td><td className="hl">710*480</td><td>RBR-P4400</td><td>특대 거치대사용-560*480</td></tr>
              <tr><td>KGO-GB75</td><td>4구</td><td></td><td className="hl">710*480</td><td>RBR-P4400</td><td></td></tr>
              <tr><td>HCT-S360</td><td>3구</td><td>560*430</td><td></td><td></td><td>타공한적있음</td></tr>
              <tr><td>KCT-T360</td><td>3구</td><td></td><td className="red">558*422 타공필</td><td></td><td></td></tr>
            </tbody>
          </table>
        </div>
      </section>
      )}

      {/* ━━━━ 엔텍 ━━━━ */}
      {show(['엔텍','NTEC','NGC-L401','NGC-S330C','NGC-303DC','NGC-8400','NGC-S313S','555*465','550*430','554*430','560*480','560*430']) && (
      <section className="ob-section">
        <div className="ob-section-header">
          <div className="ob-section-icon">🍳</div>
          <div className="ob-section-title">엔텍(NTEC)</div>
        </div>
        <div className="ob-table-wrap">
          <table className="ob-table">
            <thead>
              <tr>
                <th>모델명</th><th>화구</th><th>외관(mm)</th>
                <th>타공(mm)</th><th>교체가능모델</th><th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>NGC-L401</td><td>4구</td><td></td><td className="red">555*465 타공필요</td><td>560*480</td><td></td></tr>
              <tr><td>NGC-S330C</td><td>3구</td><td></td><td className="red">550*430 타공필요</td><td>560*430</td><td>상판에따라 560*480 가능</td></tr>
              <tr><td>NGC-303DC</td><td>3구</td><td>575*475</td><td className="red">타공필요</td><td>560*430</td><td></td></tr>
              <tr><td>NGC-8400</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
              <tr><td className="highlight-row">NGC-S313S</td><td>3구</td><td></td><td className="red">554*430 타공필</td><td></td><td></td></tr>
            </tbody>
          </table>
        </div>
      </section>
      )}

      {/* ━━━━ 한팩스 ━━━━ */}
      {show(['한팩스','HCT-S230','CTB-H6034A','타공필요','RBR-S2000','RBR-S2001D','560*480']) && (
      <section className="ob-section">
        <div className="ob-section-header">
          <div className="ob-section-icon">🍳</div>
          <div className="ob-section-title">한팩스</div>
        </div>
        <div className="ob-table-wrap">
          <table className="ob-table">
            <thead>
              <tr>
                <th>모델명</th><th>화구</th><th>외관(mm)</th>
                <th>타공(mm)</th><th>교체가능모델</th><th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>HCT-S230</td><td>2구</td><td>28*51</td><td className="red">타공필요</td><td>RBR-S2000/S2001D</td><td></td></tr>
              <tr><td>CTB-H6034A</td><td>4구</td><td></td><td className="hl">560*480</td><td></td><td></td></tr>
            </tbody>
          </table>
        </div>
      </section>
      )}

      {/* ━━━━ 타사 제품 교체 안내 ━━━━ */}
      {show(['타사제품교체안내','TGR-B721W','TG-B740GN','송도자이하버뷰','HBGR-G475C','NGC-GL301','SK매직','SWR-400G','SWR-401','SWR-302S','SWR-300G','SWR-A30CD','SWR-301','SWR-231','SWR-201','SBO-5121','SBO-3021N','SBO-S5101','RBR-203C','RBR-41JW','RBR-51JW','RBR-42D','RBR-3DW','RTR-E321WG','Haatz','HGR-4032S','G-B551S','NGC-S303S','RBR-45D','RBR-P4400','보조거치대','김포시','풍무동','센트럴푸르지오']) && (
      <section className="ob-section">
        <div className="ob-section-header">
          <div className="ob-section-icon">🔄</div>
          <div className="ob-section-title">타사 제품 교체 안내</div>
        </div>

        <div className="ob-notice" style={{marginBottom:'16px'}}>
          <span className="ob-notice-icon">📍</span>
          <div>경기도 김포시 풍무동 센트럴 푸르지오아파트 560*480</div>
        </div>

        <div className="ob-table-wrap">
          <table className="ob-table">
            <thead>
              <tr>
                <th>제조사</th><th>제품명/모델명</th>
                <th>상판규격</th><th>본체규격</th>
                <th>현 교체가능 모델</th><th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr><td rowSpan={3}>LG4구</td><td>TGR-B721W(4구/그릴)</td><td>590*505*260</td><td>596*538*218</td><td className="hl">RBR-45D</td><td></td></tr>
              <tr><td className="highlight-row">TG-B740GN</td><td>640*480</td><td></td><td>보조거치대 대(100,000)사용하여 렌지560*480으로 해결</td><td></td></tr>
              <tr><td>송도자이하버뷰</td><td>640*480</td><td></td><td>타공불가(천연대리석) 보조거치대 사용 후 3구 설치안내</td><td></td></tr>
              <tr><td>삼성4구</td><td className="highlight-row">HBGR-G475C</td><td>710*480</td><td></td><td className="hl">RBR-P4400 사용(원600,000)</td><td></td></tr>
              <tr><td>타사</td><td>NGC-GL301</td><td>555*465</td><td></td><td>보조거치대(65,000) + 렌지560*430으로 해결</td><td></td></tr>
              <tr><td rowSpan={10}>SK매직</td><td></td><td>728*495</td><td>750*520</td><td className="hl">RBR-P4400 사용(원600,000)</td><td></td></tr>
              <tr><td>SWR-400G/401G/RBR-408C</td><td>710*480</td><td></td><td className="hl">RBR-P4400 사용(원600,000)</td><td></td></tr>
              <tr><td>SWR-401/402S/409S</td><td className="hl">560*480</td><td></td><td></td><td></td></tr>
              <tr><td>SWR-302S</td><td className="hl">560*480</td><td></td><td></td><td></td></tr>
              <tr><td>SWR-300G/301G/302GD/311CD/312C</td><td className="hl">560*480</td><td></td><td></td><td></td></tr>
              <tr><td>SWR-A30CD/A33CD/A31CDT</td><td className="hl">560*480</td><td></td><td></td><td></td></tr>
              <tr><td className="highlight-row">SWR-301/305/306D/313S/314SD</td><td className="hl">560*430</td><td></td><td></td><td></td></tr>
              <tr><td>SWR-231(2구) 가로형</td><td>560*375</td><td></td><td></td><td></td></tr>
              <tr><td>SWR-201</td><td>285*480</td><td></td><td></td><td></td></tr>
              <tr><td>SBO-5121</td><td className="hl">560*480</td><td></td><td></td><td></td></tr>
              <tr><td rowSpan={8}>린나이 단종모델</td><td>RBR-203C/204CD/201W/205S</td><td>2구 세로형</td><td></td><td></td><td></td></tr>
              <tr><td>(단종모델)린나이 RBR-41JW/41JB</td><td>3구 1그릴</td><td></td><td className="hl">RBR-45D 단일제품으로 시공 570,000원 (560*460)/</td><td></td></tr>
              <tr><td>(단종모델)린나이 RBR-51JW/52J</td><td>3구 1그릴</td><td></td><td></td><td></td></tr>
              <tr><td>(단종모델)린나이 RBR-42D</td><td>3구 1그릴</td><td></td><td></td><td></td></tr>
              <tr><td>(단종모델)린나이 RBR-3DW/3DB</td><td>560*460</td><td></td><td>보조거치대(일반)\65,000 추가하여 560*430으로 시공</td><td></td></tr>
              <tr><td>(단종모델)린나이 RTR-E321WG</td><td>3구 1그릴</td><td>596*532*239</td><td></td><td></td></tr>
              <tr><td className="highlight-row">SBO-3021N</td><td className="hl">560*480</td><td></td><td></td><td></td></tr>
              <tr><td className="highlight-row">SBO-S5101</td><td className="hl">560*480</td><td>오브레인지</td><td></td><td></td></tr>
              <tr><td rowSpan={2}>Haatz</td><td>HGR-4032S</td><td>597*510</td><td></td><td>560*480 교체가능 / 타공X</td><td></td></tr>
              <tr><td>G-B551S</td><td>560*480</td><td></td><td></td><td></td></tr>
              <tr><td>엔텍(NTEC)</td><td>NGC-S303S</td><td>560*430</td><td></td><td>560*430 3구</td><td></td></tr>
            </tbody>
          </table>
        </div>
      </section>
      )}

    </div>
  )
}

export default OtherBrandPage