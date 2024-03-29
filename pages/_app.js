import '@/styles/globals.css'

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig, useConnect } from 'wagmi';
import {filecoinHyperspace, polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import StateContextProvider from './context';
import { Navbar } from '@/components';

const sphinx = {
  id: 8082,
  name: 'Shardeum Sphinx 1.X',
  network: 'Shardeum Sphinx 1.X',
  iconUrl: 'https://shardeum.org/blog/wp-content/uploads/2022/05/Shardeum-Logo-Icon-Light-Square-1024x853.png',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'SHM testnet',
    symbol: 'SHM',
  },
  rpcUrls: {
    default: {
      http: ['https://sphinx.shardeum.org/'],
    },
  },
  blockExplorers: {
    default: { name: 'Shardeum Explorer', url: 'https://explorer-sphinx.shardeum.org/' },
    etherscan: { name: 'Shardeum Explorer', url: 'https://explorer-sphinx.shardeum.org/' },
  },
  testnet: true,
};


const { chains, provider } = configureChains(
  [polygonMumbai, filecoinHyperspace, sphinx],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})





export default function App({ Component, pageProps }) {


  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider theme={darkTheme()} chains={chains}>
        <StateContextProvider>
          <div className='home-bg font-semibold'>
            <div className="container  mx-auto py-3">
              <Navbar />
            </div>
            <Component {...pageProps} />
          </div>
        </StateContextProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
