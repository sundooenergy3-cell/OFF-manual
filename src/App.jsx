import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import MainPage from './pages/MainPage'
import BoilerPage from './pages/boiler/BoilerPage'
import InstallInfoPage from './pages/boiler/InstallInfoPage'
import GasRangePage from './pages/GasRangePage'
import OtherBrandPage from './pages/OtherBrandPage'
import ElecWaterPage from './pages/ElecWaterPage'
import GasWaterPage from './pages/GasWaterPage'
import DryerPage from './pages/DryerPage'
import HoodPage from './pages/HoodPage'
import CommercialPage from './pages/CommercialPage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="boiler" element={<BoilerPage />} />
          <Route path="install-info" element={<InstallInfoPage />} />
          <Route path="gas-range" element={<GasRangePage />} />
          <Route path="other-brand" element={<OtherBrandPage />} />
          <Route path="elec-water" element={<ElecWaterPage />} />
          <Route path="gas-water" element={<GasWaterPage />} />
          <Route path="dryer" element={<DryerPage />} />
          <Route path="hood" element={<HoodPage />} />
          <Route path="commercial" element={<CommercialPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App