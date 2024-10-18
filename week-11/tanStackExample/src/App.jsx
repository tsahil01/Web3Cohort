import "./App.css";
import {QueryClient, QueryClientProvider, useQuery, useQueryClient, } from '@tanstack/react-query';
// const queryClient = new QueryClient();

import { mainnet, http } from "viem/chains";

const client = createPublicClient({ 
  chain: mainnet, 
  transport: http(), 
})

export default function App() {

  const [balance, setBalance] = useState(0);

  async function getBalance(){
    const { balance } = await client.account.getBalance("0x1234");
    console.log(balance);
    setBalance(balance);
    return balance;
  }

  getBalance()

  return (
    // <QueryClientProvider client={queryClient}>
    
    <h2>
      {balance}
    </h2>
    

    // </QueryClientProvider>
  );
}

