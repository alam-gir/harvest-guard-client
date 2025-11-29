import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { StatsGrid } from '@/components/dashboard/stats-grid';
import { ActionBar } from '@/components/dashboard/action-bar';
import { BatchList } from '@/components/dashboard/batch-list';
import { CropBatch } from '@/types/dashboard';

// Mock data generator - In real app, fetch from database/API
function getMockBatches(lang: Locale): CropBatch[] {
  const isBangla = lang === 'bd'; // assuming 'bd' is your code for Bangla
  return [
    {
      id: '1',
      cropName: isBangla ? 'ধান/চাল' : 'Paddy/Rice',
      weight: 2500,
      weightUnit: 'kg',
      date: isBangla ? '১৫/১১/২০২৪' : '11/15/2024',
      location: isBangla ? 'ঢাকা, ঢাকা' : 'Dhaka, Dhaka',
      storageType: isBangla ? 'পাটের বস্তার স্তূপ' : 'Jute Bag Stack',
      status: 'active',
    },
    {
      id: '2',
      cropName: isBangla ? 'গম' : 'Wheat',
      weight: 1800,
      weightUnit: 'kg',
      date: isBangla ? '১০/১১/২০২৪' : '11/10/2024',
      location: isBangla ? 'রাজশাহী, রাজশাহী' : 'Rajshahi, Rajshahi',
      storageType: isBangla ? 'সাইলো' : 'Silo',
      status: 'completed',
    },
    {
      id: '3',
      cropName: isBangla ? 'ভুট্টা' : 'Maize',
      weight: 3200,
      weightUnit: 'kg',
      date: isBangla ? '০৫/১১/২০২৪' : '11/05/2024',
      location: isBangla ? 'চট্টগ্রাম, চট্টগ্রাম' : 'Chittagong, Chittagong',
      storageType: isBangla ? 'গুদাম' : 'Warehouse',
      status: 'completed',
    }
  ];
}

export default async function DashboardPage(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);
  
  const batches = getMockBatches(lang);

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      <DashboardHeader dict={dict} lang={lang} />
      
      <main className="container mx-auto px-4 pt-8">
        <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-green-900">
               {dict.dashboard.welcome}, Demo Farmer!
            </h1>
        </div>

        <StatsGrid dict={dict.dashboard} />
        
        <ActionBar dict={dict.dashboard} />
        
        <BatchList dict={dict.dashboard} batches={batches} />
      </main>
    </div>
  );
}