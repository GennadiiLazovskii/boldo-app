import './App.css'
import Bottom from './components/bottom/bottom'
import ConnectCustomers from './components/connectCustomers/connectCustomers'
import EnterpriseTemplate from './components/enterpriseTemplate/enterpriseTemplate'
import InfographicScrean from './components/infographicScrean/infographicScrean'
import MainScrean from './components/mainScrean/mainScrean'

function App() {

  return (
    <>
      <MainScrean/>
      <InfographicScrean/>
      <ConnectCustomers/>
      <EnterpriseTemplate/>
      <Bottom/>
    </>
  )
}

export default App
