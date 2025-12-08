import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#eff2f5] flex flex-col font-sans">
      <Header />
      <div className="flex flex-1 max-w-[1600px] mx-auto w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <Dashboard />
          <Footer />
        </div>
      </div>
    </div>
  );
}
