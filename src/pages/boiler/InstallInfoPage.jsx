import { useState, useMemo } from 'react'
import './InstallInfoPage.css'
import imgTempController from '../../assets/temp-controller.png'


const data = [
  { region: '서구', dong: '가정동', apt: '가정동 341-13 하나1차 11동 203호', feature: 'FF보일러/전용보일러실', normal: '', condensing: '설치기록O', note: ''},
  { region: '서구', dong: '가정동', apt: '가정동 341-14 하나2차 202동 303호', feature: 'FE.공동배기구', normal: '', condensing: '설치기록O', note: '203동-FF보일러 설치기록O'},
  { region: '서구', dong: '가정동', apt: '가정동 341-15 하나3차 101동 512호', feature: 'FF보일러/전용보일러실', normal: '', condensing: '설치기록O', note: 'FE, FF, 콘덴싱 모두 설치기록O'},
  { region: '서구', dong: '가정동', apt: '가정3동 546 한신빌리지 3동 305호', feature: 'FF보일러/전용보일러실', normal: 'O', condensing: 'O', note: '콘덴싱보일러 설치시 타공 해야함'},
  { region: '서구', dong: '가정동', apt: '가정동 한신그랜드힐빌리지 21동 307호', feature: 'FF보일러/전용보일러실', normal: 'O', condensing: '', note: '연도길어서 확인'},
  { region: '서구', dong: '가좌동', apt: '가좌두산위브', feature: '각방허니웰, 통합통변(5만)', normal: 'X', condensing: 'O', note: '연도확인 / 통합통변 사용함'},
  { region: '서구', dong: '가좌동', apt: '범양아파트', feature: '방화문', normal: 'O', condensing: '가능', note: ''},
  { region: '서구', dong: '가좌동', apt: '진주아파트', feature: '특수연도2000-2100', normal: '', condensing: '', note: ''},
  { region: '서구', dong: '가좌동', apt: '한신휴', feature: '', normal: 'O', condensing: '', note: ''},
  { region: '서구', dong: '가좌동', apt: '현대아파트', feature: '방화문', normal: 'O', condensing: '가능', note: ''},
  { region: '서구', dong: '공촌동', apt: '경남아파트', feature: '방화문', normal: 'O', condensing: 'X', note: '연도500지참'},
  { region: '서구', dong: '공촌동', apt: '광명18차', feature: '방화문', normal: 'O', condensing: 'X', note: '연도500지참'},
  { region: '서구', dong: '금곡동', apt: '금곡하나타운', feature: '방화문', normal: 'O', condensing: 'X', note: ''},
  { region: '서구', dong: '금곡동', apt: '검단우방아이유쉘1차', feature: '귀뚜라미 각방(5만/통변2407)', normal: '', condensing: '', note: ''},
  { region: '서구', dong: '경서동', apt: '가이아샹베르2차', feature: '린나이', normal: '', condensing: 'O', note: ''},
  { region: '서구', dong: '당하동', apt: '검단SK뷰', feature: '각방허니웰, 귀뚜라미통변(5만)', normal: '', condensing: '', note: 'RC600모델만 / 연도800 (기본연도)'},
  { region: '서구', dong: '당하동', apt: '검단힐스테이트4차', feature: '각방O, 대성통변(5만)', normal: '', condensing: 'O', note: '대부분 RC600-30KF / 연도800'},
  { region: '서구', dong: '당하동', apt: '검단힐스테이트5차', feature: '각방O, 경동통변(5만)', normal: '', condensing: 'O', note: ''},
  { region: '서구', dong: '당하동', apt: '검단힐스테이트6차', feature: '각방O, 귀뚜라미통변(5만)', normal: '', condensing: '', note: 'RC600모델만 / 연도1200'},
  { region: '서구', dong: '당하동', apt: '당하탑스빌(당탑)', feature: '방화문', normal: 'O', condensing: '가능', note: '*차량진입불가 세대 비밀번호 물어보기'},
  { region: '서구', dong: '당하동', apt: '중앙 E-클래스 13차', feature: '경동잭 필요', normal: 'X', condensing: 'O', note: '경동 접점 / 경동보일러, 경동각방 / 구동기갯수 적음 보일러 함께 교체시 저렴하게 각방교체권유해도 좋을듯'},
  { region: '서구', dong: '당하동', apt: '태평아파트', feature: '방화문', normal: 'O', condensing: '가능', note: ''},
  { region: '서구', dong: '당하동', apt: '풍림3차 200동 (동수확인) -마전동', feature: '보일러 위 상부장 확인 필요', normal: 'O', condensing: 'O', note: '일반 : 상부장 있을 경우, 연도구배불량으로 가능 / 콘덴싱[연도1200] : 상부장 철거비 7만원 / 일반, 콘덴싱 고객선택 가능'},
  { region: '서구', dong: '당하동', apt: '풍림2차 100동 (동수확인)-마전동', feature: '보일러 위 상부장 확인 필요', normal: 'O', condensing: 'O', note: '일반 : 상부장 있을 경우, 연도구배불량으로 가능 / 콘덴싱 : 상부장 철거비 7만원 / 일반, 콘덴싱 고객선택 가능'},
  { region: '서구', dong: '당하동', apt: '풍림1차 400동 (동수확인)-당하동', feature: '', normal: 'X', condensing: 'O', note: ''},
  { region: '서구', dong: '당하동', apt: '당하 kcc스위첸', feature: '', normal: '', condensing: 'O', note: '연도 1000'},
  { region: '서구', dong: '마전동', apt: '검단아이파크2차', feature: '각방허니웰, 경동통변(5만)', normal: '', condensing: '', note: 'RC600모델만'},
  { region: '서구', dong: '마전동', apt: '검단힐스테이트1차', feature: '각방X', normal: '', condensing: 'O', note: ''},
  { region: '서구', dong: '마전동', apt: '검단힐스테이트2차', feature: '각방허니웰, 보일러린나이', normal: '', condensing: 'O', note: '통신변환기 필요X'},
  { region: '서구', dong: '마전동', apt: '동남아파트', feature: '방화문', normal: 'O', condensing: '가능', note: ''},
  { region: '서구', dong: '마전동', apt: '동아아파트', feature: '방화문', normal: 'O', condensing: '가능', note: ''},
  { region: '서구', dong: '마전동', apt: '마전영진아파트', feature: '방화문', normal: 'O', condensing: '가능', note: ''},
  { region: '서구', dong: '마전동', apt: '미래지향', feature: '각방(에이스솔루션), 보일러 린나이', normal: 'X', condensing: 'O', note: ''},
  { region: '서구', dong: '마전동', apt: '서해아파트', feature: '방화문', normal: 'O', condensing: '가능', note: ''},
  { region: '서구', dong: '마전동', apt: '영남탑스빌(마탑)', feature: '방화문', normal: 'O', condensing: '가능', note: '32평형만-콘덴싱불가(배수구X) or 34평형-콘덴싱불가(원하시면 깡통)'},
  { region: '서구', dong: '마전동', apt: '하나아파트', feature: '방화문', normal: 'O', condensing: '가능', note: ''},
  { region: '서구', dong: '마전동', apt: '검단우방아이유쉘아파트', feature: '각방. 귀뚜라미통변(5만),구동기5개', normal: 'O', condensing: '', note: ''},
  { region: '서구', dong: '마전동', apt: '마전지구 검단초 근방 아파트 전체', feature: '', normal: '', condensing: 'O', note: ''},
  { region: '서구', dong: '마전동', apt: '대원레스피아', feature: '', normal: 'X', condensing: 'O', note: '배수구있음'},
  { region: '서구', dong: '마전동', apt: '모카빌', feature: '', normal: 'X', condensing: 'O', note: '귀뚜라미 콘덴싱2만 달려있음 / 외부연통창문 문열때 주의 (바로외부벽) 분리연도1500.500중간연도'},
  { region: '서구', dong: '마전동', apt: '양우내안애 퍼스트힐', feature: '각방, 경동(통변)', normal: '', condensing: 'O', note: ''},
  { region: '서구', dong: '마전동', apt: '리더스빌(오피스텔)', feature: '', normal: 'O', condensing: '확인필요', note: '배수구 확인해야함( 집마다 다름 )'},
  { region: '서구', dong: '마전동', apt: '현대아파트', feature: '귀뚜라미 꽃그림', normal: '', condensing: 'O', note: '배관청소 필수 [배관찌꺼기막힘]'},
  { region: '서구', dong: '불로동', apt: '금호어울림', feature: '', normal: 'X', condensing: 'O', note: ''},
  { region: '서구', dong: '불로동', apt: '길훈아파트', feature: '', normal: 'O', condensing: '가능', note: '벽타공, 호스길이 (+5만원) But 호스가 길어져 겨울에 얼 수 있음 고지 아니면 일반 설치해야함'},
  { region: '서구', dong: '불로동', apt: '동성아파트', feature: '', normal: 'O', condensing: '', note: ''},
  { region: '서구', dong: '불로동', apt: '백두아파트', feature: '복도식연도', normal: 'O', condensing: 'X', note: '외부에 보일러실있음'},
  { region: '서구', dong: '불로동', apt: '불로E편한세상(대림)', feature: '각방, 보일러 귀뚜라미, 배수구O', normal: '', condensing: 'O', note: ''},
  { region: '서구', dong: '불로동', apt: '삼보해피하임', feature: '', normal: 'X', condensing: 'O', note: ''},
  { region: '서구', dong: '불로동', apt: '불로한일타운', feature: '', normal: '', condensing: '', note: '코텍온도조절기각방, 통변X,접점방식, 경동온도조절기 1개 배관밑 숨어있음'},
  { region: '서구', dong: '불로동', apt: '신명아파트(구형)', feature: '', normal: 'O', condensing: '', note: ''},
  { region: '서구', dong: '불로동', apt: '월드아파트', feature: '', normal: 'O', condensing: '', note: ''},
  { region: '서구', dong: '석남동', apt: '동남아파트', feature: '', normal: 'O', condensing: '가능', note: '연도700~800'},
  { region: '서구', dong: '석남동', apt: '석남금호어울림', feature: '', normal: '', condensing: 'O', note: '4호라인-풍압대 / 린나이보일러 / 각방은 전체교체만 가능'},
  { region: '서구', dong: '석남동', apt: '우림필유', feature: '꼭 배수구 확인 필요', normal: 'O', condensing: 'O', note: '콘덴싱 : 배수구 있는지 확인해야 함(집마다 구조 다름)'},
  { region: '서구', dong: '신현동', apt: '원흥아파트', feature: '무조건FE보일러', normal: '', condensing: '', note: '용량 동일한 제품만 설치가능'},
  { region: '서구', dong: '신현동', apt: '효성아파트', feature: '무조건FE보일러', normal: '', condensing: '', note: '용량 동일한 제품만 설치가능'},
  { region: '서구', dong: '심곡동', apt: '광명17차', feature: '방화문', normal: 'O', condensing: '가능', note: ''},
  { region: '서구', dong: '심곡동', apt: '광명18차', feature: '방화문', normal: 'O', condensing: '가능', note: '연도500지참'},
  { region: '서구', dong: '심곡동', apt: '극동 늘푸른아파트', feature: '', normal: '', condensing: 'O', note: '배수구 X'},
  { region: '서구', dong: '심곡동', apt: '삼성아파트', feature: '방화문', normal: 'O', condensing: '가능', note: ''},
  { region: '서구', dong: '연희동', apt: '태영아파트', feature: '방화문', normal: 'O', condensing: '', note: '연장관700지참'},
  { region: '서구', dong: '오류동', apt: '검단오류풍림아이원', feature: '각방허니웰, 귀뚜라미통변(5만)', normal: '', condensing: 'O', note: ''},
  { region: '서구', dong: '오류동', apt: '검단힐스테이트3차1단지, 2단지', feature: '각방O, 경동보일러확인', normal: '', condensing: 'O', note: '통신변환기 필요X / A접점 2-5번 ON (각방호환가능) / RC400가능'},
  { region: '서구', dong: '왕길동', apt: '검단대림이편한세상', feature: '각방함께교체', normal: '', condensing: 'O', note: '각방, 보일러 귀뚜라미 / 각방 고장시 단종으로 수리불가/ 각방 교체비용 65만'},
  { region: '서구', dong: '왕길동', apt: '검단자이1단지, 2단지 (오류지구)', feature: '각방O, 대성통변(5만)', normal: '', condensing: '', note: 'RC620모델만 / 연도1000 지참'},
  { region: '서구', dong: '왕길동', apt: '드림파크어울림1단지', feature: '각방O, 롯데통변(5만)', normal: '', condensing: 'O', note: 'RC620모델만 / 연도1000 지참'},
  { region: '서구', dong: '왕길동', apt: '왕길동남', normal: '', condensing: 'O', note: ''},
  { region: '서구', dong: '왕길동', apt: '원흥아파트', feature: '방화문', normal: 'O', condensing: 'X', note: ''},
  { region: '서구', dong: '왕길동', apt: '유승아파트', feature: '배수구 없음', normal: 'O', condensing: 'X', note: ''},
  { region: '서구', dong: '왕길동', apt: '전체 신규아파트 (오류지구 포함)', normal: '', condensing: 'O', note: ''},
  { region: '미추홀구', dong: '관교동', apt: '성지아파트', feature: '', normal: '', condensing: '', note: '관교동 성지 풍림 쌍용-중앙난방에서 개별로 바뀐곳 / 분리연도800 지참 / 일반 콘덴싱 동시지참 / 연도 구배불분명'},
  { region: '미추홀구', dong: '학익동', apt: '신동아2차', feature: '', normal: 'O', condensing: '', note: '7동 2,3,7,8호 복도로 연도나감 (제작연도 3500)'},
  { region: '미추홀구', dong: '도화동', apt: '나산아파트', feature: '무조건FE보일러', normal: '', condensing: '', note: ''},
  { region: '미추홀구', dong: '도화동', apt: '동아아파트', feature: '무조건FE보일러', normal: '', condensing: '', note: ''},
  { region: '미추홀구', dong: '주안동', apt: '신비마을', feature: '무조건FE보일러', normal: '', condensing: '', note: ''},
  { region: '미추홀구', dong: '주안동', apt: '주안태화아파트', feature: '무조건FE보일러', normal: '', condensing: '', note: ''},
  { region: '동구', dong: '송림동', apt: '누리아파트', feature: '콘덴싱FE', normal: '', condensing: 'FE', note: 'FE방식인데 콘덴싱'},
  { region: '동구', dong: '송림동', apt: '삼익아파트', feature: '연도구배안나옴', normal: 'O', condensing: 'X', note: '2100연도 1800연도 지참'},
  { region: '동구', dong: '송림동', apt: '동산휴먼시아1단지', feature: '총 3개동 (101,102,103동)', normal: '2호라인', condensing: 'O', note: '2호, 4호라인 일반+연도1500'},
  { region: '동구', dong: '송림동', apt: '동산휴먼시아2단지', feature: '', normal: '2,5호라인', condensing: 'O', note: ''},
  { region: '동구', dong: '송림동', apt: '송림휴먼시아1단지', feature: '', normal: '25평', condensing: 'O', note: '25평형 (102동2호, 110동3호, 111동3호)-배수구X, 일반보일러 80% / 온도조절기 안방, 거실2개 (둘 중 하나만 조절가능)'},
  { region: '동구', dong: '송현동', apt: '삼두1차', feature: 'R112-16KF/배수구있음', normal: 'X', condensing: 'O', note: ''},
  { region: '부평구', dong: '구산동', apt: '부평GS자이', feature: '각방허니웰, 보일러귀뚜라미', normal: 'X', condensing: 'O', note: 'A접점방식 / 통신변환기 필요X'},
  { region: '부평구', dong: '삼산동', apt: '엠코타운', feature: '대단지', normal: '', condensing: '', note: '기존 린나이보일러+각방제어 / B접점(기본)이긴한데 늦게 반응 - 3분50초이후에 밸브열림 (원당대림잭 지참)'},
  { region: '계양구', dong: '작전동', apt: '삼천리', feature: '배수구없음', normal: 'O', condensing: '', note: '작업전 연도 사진 받기 / 연장연도 5만원 추가'},
  { region: '남동구', dong: '간석동', apt: '간석래미안자이', feature: '각방허니웰, 보일러린나이', normal: '', condensing: '', note: '코어작업 3만원추가 / 연도1500 지참'},
  { region: '강화군', dong: '강화읍', apt: '현대아파트', feature: '전용보일러실', normal: 'O', condensing: '', note: '슬라이스연도 800'},
  { region: '김포', dong: '고촌읍', apt: '고촌힐스테이트1차, 2차', feature: '각방O, 보일러대성', normal: 'X', condensing: 'O', note: '34평과 39평은 하니웰각방이고 통신변환기사용필요[대성] / 49평,59평,60평은 샘시스템각방 A접점'},
  { region: '김포', dong: '고촌읍', apt: '길훈2차', feature: '연도길이확인', normal: '', condensing: 'O', note: ''},
  { region: '김포', dong: '북변동', apt: '북변대우A', feature: '', normal: 'O', condensing: 'X', note: '105동만 복도식 연도10만 추가'},
  { region: '김포', dong: '북변동', apt: '풍년마을대림아파트', feature: '연도길이확인', normal: 'O', condensing: '', note: '연도길이확인 후 5-8만원 추가 / 2,3,4동 모든집 연도길다 연도추가금 15만원/301동 1호라인 기본연도'},
  { region: '김포', dong: '북변동', apt: '산호아파트', feature: '연도길이확인', normal: 'O', condensing: 'X', note: '연도 길이 확인 후 5만원 추가 / *연도 기울기 문제로 일반보일러만 가능 / 콘덴싱=타공추가7만+연도5만 총 12만원 추가'},
  { region: '김포', dong: '양촌읍', apt: '자연앤데시앙', feature: '각방허니웰, 귀뚜라미통변(5만)', normal: 'O', condensing: 'X', note: 'RC600모델만 / 연도800'},
  { region: '김포', dong: '운양동', apt: '라피아노(타운하우스)', feature: '귀뚜라미보일러, 각방확인(복층)', normal: 'X', condensing: 'O', note: '각방 교체시 디스크밸브(12XL) 써비스니플 추가작업 / 구당 20만 안내 (제어기 2개-분배기 복층확인)'},
  { region: '김포', dong: '풍무동', apt: '풍무푸르지오', feature: '각방한성시스템, 귀뚜라미통변(5만)', normal: 'X', condensing: 'O', note: '한성시스템 각방, 귀뚜라미보일러'},
  { region: '김포', dong: '풍무동', apt: '유현마을 신동아', feature: '대성보일러,룸콘1개', normal: 'O', condensing: 'O', note: '배수길이 3~5M 콘덴싱 설치한 경우도 있음(동파, 누수주의 안내)'},
  { region: '서울', dong: '서대문구', apt: '남가좌동 래미안2차', feature: '', normal: '', condensing: '', note: '연도1000'},
  { region: '서울', dong: '노원구', apt: '희성오피앙', feature: '', normal: '', condensing: 'O', note: '설치전에 미리실외기 철거요청 안내 / 콘덴싱 분리형 연도지참'},
  { region: '인천', dong: '당하동', apt: '더캐슬', feature: '분배기 전체공사 금액 50만원부터~', normal: '', condensing: '', note: ''},
]

const regions = ['전체', ...new Set(data.map(d => d.region)), '📷 사진']

function Badge({ value }) {
  if (!value) return <span className="badge badge-empty">-</span>
  if (value === 'O') return <span className="badge badge-ok">O</span>
  if (value === 'X') return <span className="badge badge-no">X</span>
  if (value === '가능') return <span className="badge badge-possible">가능</span>
  if (value === '확인필요') return <span className="badge badge-check">확인필요</span>
  return <span className="badge badge-text">{value}</span>
}

function InstallInfoPage() {
  const [search, setSearch] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('전체')

  const filtered = useMemo(() => {
    return data.filter(row => {
      const matchRegion = selectedRegion === '전체' || row.region === selectedRegion
      const q = search.toLowerCase()
      const matchSearch = !q || [row.region, row.dong, row.apt, row.feature, row.note]
        .some(v => (v || '').toLowerCase().includes(q))
      return matchRegion && matchSearch
    })
  }, [search, selectedRegion])

 return (
    <div className="install-page">
      <div className="page-hero">
        <div className="page-hero-label">INSTALL INFO</div>
        <h1 className="page-hero-title">📋 설치 정보 및 기타사항</h1>
        <p className="page-hero-sub">방화문 옆 드레인 호스 타공 문의시 무료타공 안내 / 문 열고 쓰라고 하면 거부감 / 타공시 무료 또는 1만원 정도청구</p>
      </div>

      {/* 검색 & 필터 */}
      <div className="filter-bar">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="아파트명, 동, 특징, 비고 검색..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="search-input"
          />
          {search && (
            <button className="search-clear" onClick={() => setSearch('')}>✕</button>
          )}
        </div>
        <div className="region-pills">
          {regions.map(r => (
            <button
              key={r}
              className={`region-pill ${selectedRegion === r ? 'active' : ''}`}
              onClick={() => setSelectedRegion(r)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {selectedRegion === '📷 사진' ? (
        <div className="photo-section">
          <img src={imgTempController} alt="온도조절기 비교표" className="photo-img" />
        </div>
      ) : (
        <>
          {/* 결과 수 */}
          <div className="result-count">
            총 <strong>{filtered.length}</strong>개 항목
          </div>

          {/* 테이블 */}
          <div className="table-wrap">
            <table className="install-table">
              <thead>
                <tr>
                  <th>지역</th>
                  <th>동</th>
                  <th>아파트명</th>
                  <th>특징</th>
                  <th>일반</th>
                  <th>콘덴싱</th>
                  <th>비고 / 기타사항</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="no-result">검색 결과가 없습니다.</td>
                  </tr>
                ) : (
                  filtered.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'even'}>
                      <td className="td-region">{row.region}</td>
                      <td className="td-dong">{row.dong}</td>
                      <td className="td-apt">{row.apt}</td>
                      <td className="td-feature">{row.feature || '-'}</td>
                      <td className="td-center"><Badge value={row.normal} /></td>
                      <td className="td-center"><Badge value={row.condensing} /></td>
                      <td className="td-note">{row.note || '-'}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  )
}

export default InstallInfoPage