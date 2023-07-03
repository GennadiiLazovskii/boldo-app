import Bottom from "../homePage/bottom/bottom";
import ConnectCustomers from "../homePage/connectCustomers/connectCustomers";
import EmailComponents from "../homePage/emailComponents/emailComponents";
import EnterpriseTemplate from "../homePage/enterpriseTemplate/enterpriseTemplate";
import InfographicScrean from "../homePage/infographicScrean/infographicScrean";
import MainScrean from "../homePage/mainScrean/mainScrean";
import PropositionProduct from "../homePage/propositionProduct/propositionProduct";
import StayOpen from "../homePage/stayOpen/stayOpen";

const HomePage = () => {
  return (
    <>
    <MainScrean/>
    <InfographicScrean/>
    <ConnectCustomers/>
    <EnterpriseTemplate/>
    <StayOpen/>
    <PropositionProduct/>
    <EmailComponents/>
    <Bottom/>
    </>
  )
}

export default HomePage;