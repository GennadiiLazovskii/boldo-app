import './App.css'
import Bottom from './components/bottom/bottom'
import ConnectCustomers from './components/connectCustomers/connectCustomers'
import EmailComponents from './components/emailComponents/emailComponents'
import EnterpriseTemplate from './components/enterpriseTemplate/enterpriseTemplate'
import InfographicScrean from './components/infographicScrean/infographicScrean'
import MainScrean from './components/mainScrean/mainScrean'
import PropositionProduct from './components/propositionProduct/propositionProduct'

function App() {

  return (
    <>
      <MainScrean/>
      <InfographicScrean/>
      <ConnectCustomers/>
      <EnterpriseTemplate/>
      <PropositionProduct/>
      <EmailComponents/>
      <Bottom/>
    </>
  )
}

export default App
