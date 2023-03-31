import Link from 'next/link';
import Card from './components/Card';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className='min-h-screen max-w-screen bg-gray-100'>
    {/* Navbar */}
    <div className="container mx-auto py-3">
        <Navbar />
    </div>

    {/* List Grid */}
    <div className='px-4 container mx-auto'>

        <h2 className="text-xl font-bold mt-8 mb-4 text-center text-gray-900">All Campaigns (526)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <Link href='/testingpage'>TestOpen</Link>
    </div>
</div>
  );
};
