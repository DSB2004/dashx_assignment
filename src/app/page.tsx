
import SwapCard from "@/components/swap-card";


function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function Home() {
  await delay(3000);
  const data = {
    "from_network": "Polygon",
    "from_token": "WBTC",
    "from_amount": "100",
    "from_balance": "1.2414",
    "from_total": "10,400,500",
    "to_network": "Ethereum",
    "to_token": "ETH",
    "to_amount": "120",
    "to_balance": "1.4525",
    "to_total": "5,400,500",
  }

  return (
    <section className="h-screen flex justify-center items-center">
      <SwapCard data={data} />
    </section>
  );
}
