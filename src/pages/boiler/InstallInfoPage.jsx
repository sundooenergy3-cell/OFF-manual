import { useState, useMemo, useEffect } from 'react'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore'
import { db } from '../../firebase'
import './InstallInfoPage.css'
import imgTempController from '../../assets/temp-controller.png'

const emptyForm = {
  region: '',
  dong: '',
  apt: '',
  feature: '',
  normal: '',
  condensing: '',
  note: ''
}

const boilerOptions = [
  { label: '선택 안함', value: '' },
  { label: 'O', value: 'O' },
  { label: 'X', value: 'X' },
  { label: '가능', value: '가능' },
  { label: '확인필요', value: '확인필요' },
  { label: '설치기록O', value: '설치기록O' },
  { label: 'FE', value: 'FE' },
  { label: '2호라인', value: '2호라인' },
  { label: '2,5호라인', value: '2,5호라인' },
  { label: '25평', value: '25평' },
]

function Badge({ value }) {
  if (!value || value === '-') return <span className="badge badge-empty">-</span>
  if (value === 'O') return <span className="badge badge-ok">O</span>
  if (value === 'X') return <span className="badge badge-no">X</span>
  if (value === '가능') return <span className="badge badge-possible">가능</span>
  if (value === '확인필요') return <span className="badge badge-check">확인필요</span>
  return <span className="badge badge-text">{value}</span>
}

function InstallInfoPage() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('전체')
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [showAdminForm, setShowAdminForm] = useState(false)

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'installInfos'))

      const list = querySnapshot.docs
        .map(docItem => ({
          id: docItem.id,
          ...docItem.data()
        }))
        .sort((a, b) => {
          const aTime = a.createdAt?.seconds || 0
          const bTime = b.createdAt?.seconds || 0
          return aTime - bTime
        })

      setData(list)
    } catch (error) {
      console.error('설치 정보 불러오기 실패:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const regions = useMemo(() => {
    return ['전체', ...new Set(data.map(d => d.region).filter(Boolean)), '📷 사진']
  }, [data])

  const filtered = useMemo(() => {
    return data.filter(row => {
      const matchRegion = selectedRegion === '전체' || row.region === selectedRegion
      const q = search.toLowerCase()

      const matchSearch =
        !q ||
        [
          row.region,
          row.dong,
          row.apt,
          row.feature,
          row.normal,
          row.condensing,
          row.note
        ].some(v => (v || '').toLowerCase().includes(q))

      return matchRegion && matchSearch
    })
  }, [data, search, selectedRegion])

  const handleChange = e => {
    const { name, value } = e.target

    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!form.region.trim() || !form.dong.trim() || !form.apt.trim()) {
      alert('지역, 동, 아파트명은 필수입니다.')
      return
    }

    try {
      if (editingId) {
        await updateDoc(doc(db, 'installInfos', editingId), {
          ...form,
          updatedAt: new Date()
        })

        alert('수정 완료')
      } else {
        await addDoc(collection(db, 'installInfos'), {
          ...form,
          createdAt: new Date()
        })

        alert('추가 완료')
      }

      setForm(emptyForm)
      setEditingId(null)
      setShowAdminForm(false)
      fetchData()
    } catch (error) {
      console.error('저장 실패:', error)
      alert('저장 실패')
    }
  }

  const handleEdit = row => {
    setEditingId(row.id)
    setShowAdminForm(true)

    setForm({
      region: row.region || '',
      dong: row.dong || '',
      apt: row.apt || '',
      feature: row.feature || '',
      normal: row.normal || '',
      condensing: row.condensing || '',
      note: row.note || ''
    })

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = async id => {
    const ok = window.confirm('정말 삭제할까요?')
    if (!ok) return

    try {
      await deleteDoc(doc(db, 'installInfos', id))
      alert('삭제 완료')
      fetchData()
    } catch (error) {
      console.error('삭제 실패:', error)
      alert('삭제 실패')
    }
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setForm(emptyForm)
    setShowAdminForm(false)
  }

  const handleOpenAddForm = () => {
    setEditingId(null)
    setForm(emptyForm)
    setShowAdminForm(prev => !prev)
  }

  return (
    <div className="install-page">
      <div className="page-hero">
        <div className="page-hero-label">INSTALL INFO</div>
        <h1 className="page-hero-title">📋 설치 정보 및 기타사항</h1>
        <p className="page-hero-sub">
          방화문 옆 드레인 호스 타공 문의시 무료타공 안내 / 문 열고 쓰라고 하면 거부감 / 타공시 무료 또는 1만원 정도청구
        </p>
      </div>

      <div className="admin-toolbar">
        <div>
          <div className="admin-toolbar-title">설치 정보 관리</div>
          <div className="admin-toolbar-sub">
            웹에서 바로 추가, 수정, 삭제할 수 있습니다.
          </div>
        </div>

        <button type="button" className="admin-open-btn" onClick={handleOpenAddForm}>
          {showAdminForm ? '입력창 닫기' : '+ 설치정보 추가'}
        </button>
      </div>

      {showAdminForm && (
        <form className="admin-card" onSubmit={handleSubmit}>
          <div className="admin-card-header">
            <div>
              <h2>{editingId ? '설치 정보 수정' : '새 설치 정보 추가'}</h2>
              <p>
                지역, 동, 아파트명은 필수 입력입니다. 일반/콘덴싱은 선택값으로 넣으면 됩니다.
              </p>
            </div>

            {editingId && (
              <span className="edit-mode-badge">
                수정 중
              </span>
            )}
          </div>

          <div className="admin-section">
            <div className="admin-section-title">기본 정보</div>

            <div className="admin-grid admin-grid-3">
              <label className="admin-field">
                <span>지역 *</span>
                <input
                  name="region"
                  value={form.region}
                  onChange={handleChange}
                  placeholder="예: 서구"
                />
              </label>

              <label className="admin-field">
                <span>동 *</span>
                <input
                  name="dong"
                  value={form.dong}
                  onChange={handleChange}
                  placeholder="예: 가정동"
                />
              </label>

              <label className="admin-field">
                <span>아파트명 *</span>
                <input
                  name="apt"
                  value={form.apt}
                  onChange={handleChange}
                  placeholder="예: 가정동 341-13 하나1차"
                />
              </label>
            </div>
          </div>

          <div className="admin-section">
            <div className="admin-section-title">설치 가능 여부</div>

            <div className="admin-grid admin-grid-2">
              <label className="admin-field">
                <span>일반</span>
                <select
                  name="normal"
                  value={form.normal}
                  onChange={handleChange}
                >
                  {boilerOptions.map(option => (
                    <option key={option.label} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="admin-field">
                <span>콘덴싱</span>
                <select
                  name="condensing"
                  value={form.condensing}
                  onChange={handleChange}
                >
                  {boilerOptions.map(option => (
                    <option key={option.label} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="admin-section">
            <div className="admin-section-title">상세 내용</div>

            <div className="admin-grid admin-grid-1">
              <label className="admin-field">
                <span>특징</span>
                <textarea
                  name="feature"
                  value={form.feature}
                  onChange={handleChange}
                  placeholder="예: FF보일러/전용보일러실, 방화문, 각방허니웰..."
                  rows={3}
                />
              </label>

              <label className="admin-field">
                <span>비고 / 기타사항</span>
                <textarea
                  name="note"
                  value={form.note}
                  onChange={handleChange}
                  placeholder="예: 연도 확인, 타공 필요, 통신변환기 필요..."
                  rows={4}
                />
              </label>
            </div>
          </div>

          <div className="admin-actions">
            <button type="submit" className="admin-save-btn">
              {editingId ? '수정 저장' : '추가 저장'}
            </button>

            <button type="button" className="admin-cancel-btn" onClick={handleCancelEdit}>
              취소
            </button>
          </div>
        </form>
      )}

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
            <button
              className="search-clear"
              onClick={() => setSearch('')}
              type="button"
            >
              ✕
            </button>
          )}
        </div>

        <div className="region-pills">
          {regions.map(r => (
            <button
              key={r}
              type="button"
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
          <div className="result-count">
            총 <strong>{filtered.length}</strong>개 항목
          </div>

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
                  <th>관리</th>
                </tr>
              </thead>

              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="no-result">
                      검색 결과가 없습니다.
                    </td>
                  </tr>
                ) : (
                  filtered.map((row, i) => (
                    <tr key={row.id} className={i % 2 === 0 ? '' : 'even'}>
                      <td className="td-region">{row.region || '-'}</td>
                      <td className="td-dong">{row.dong || '-'}</td>
                      <td className="td-apt">{row.apt || '-'}</td>
                      <td className="td-feature">{row.feature || '-'}</td>
                      <td className="td-center"><Badge value={row.normal} /></td>
                      <td className="td-center"><Badge value={row.condensing} /></td>
                      <td className="td-note">{row.note || '-'}</td>
                      <td className="td-manage">
                        <button type="button" className="row-edit-btn" onClick={() => handleEdit(row)}>
                          수정
                        </button>
                        <button type="button" className="row-delete-btn" onClick={() => handleDelete(row.id)}>
                          삭제
                        </button>
                      </td>
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