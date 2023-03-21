import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <div className='h-screen bg-black'>
      <h1 className='text-xl text-white px-3 py-3 font-bold'>Home</h1>
      <div className='px-4'>
        <ConnectButton />
      </div>
    </div>
  );
};
