import Container from "../../components/container/Container";
import CoinTable from "./components/CoinTable";

const Dashboard = () => {
  return (
    <Container addClass="bg-[#272e40] py-[10vh]">
      <h1 className="m-[30px] text-center text-4xl font-semibold">Cryptocurrencies</h1>
      <CoinTable />
    </Container>
  )
}

export default Dashboard