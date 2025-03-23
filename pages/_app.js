import '@/styles/globals.css'

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig, useConnect } from 'wagmi';
import {sepolia } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import StateContextProvider from './context';
import { Navbar } from '@/components';



const { chains, provider } = configureChains(
  [sepolia],
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
