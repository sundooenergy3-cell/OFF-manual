import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import MainPage from './pages/MainPage'
import BoilerPage from './pages/boiler/BoilerPage'
import DistributorPage from './pages/boiler/DistributorPage'
import EachRoomPage from './pages/boiler/EachRoomPage'
import InstallInfoPage from './pages/boiler/InstallInfoPage'
import GasRangePage from './pages/GasRangePage'
import OtherBrandPage from './pages/OtherBrandPage'
import ElecWaterPage from './pages/ElecWaterPage'
import GasWaterPage from './pages/GasWaterPage'
import DryerPage from './pages/DryerPage'
import HoodPage from './pages/HoodPage'
import CommercialPage from './pages/CommercialPage'
import SashPage from './pages/SashPage'
import InstallCostPage from './pages/InstallCostPage'
import ConstructionPage from './pages/ConstructionPage'
import TradePage from './pages/TradePage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="boiler" element={<BoilerPage />} />
          <Route path="distributor" element={<DistributorPage />} />
          <Route path="each-room" element={<EachRoomPage />} />
          <Route path="install-info" element={<InstallInfoPage />} />
          <Route path="gas-range" element={<GasRangePage />} />
          <Route path="other-brand" element={<OtherBrandPage />} />
          <Route path="elec-water" element={<ElecWaterPage />} />
          <Route path="gas-water" element={<GasWaterPage />} />
          <Route path="dryer" element={<DryerPage />} />
          <Route path="hood" element={<HoodPage />} />
          <Route path="commercial" element={<CommercialPage />} />
          <Route path="sash" element={<SashPage />} />
          <Route path="install-cost" element={<InstallCostPage />} />
          <Route path="construction" element={<ConstructionPage />} />
          <Route path="trade" element={<TradePage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App