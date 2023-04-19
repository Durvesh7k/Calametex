import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='min-h-screen max-w-screen'>


      <div className='px-4 container mt-12 flex flex-col items-center justify-center h-full mx-auto'>
        <Image src="/assets/home.png" alt="home img" width={400} height={400} />
        <h1 className="text-center font-extrabold text-4xl text-black">Unite to alleviate, join Clamatex today.</h1>
        <div className="flex items-center mt-8">
          <Link href="/Dashboard" class="px-4 mx-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md">
            Donate Now
          </Link>

          <Link href="/CreateCampaign" class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-md">
            Create Campaign  
          </Link>
        </div>
      </div>
    </div>
  );
};
