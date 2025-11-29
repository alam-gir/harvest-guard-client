import { Sprout, User, LogOut } from 'lucide-react';
import Link from 'next/link';
import { LanguageToggle } from '../common/language-toggle';
import { Locale } from '@/i18n-config';
import { Dictionary } from '@/get-dictionary';

interface DashboardHeaderProps {
  dict: Dictionary;
  lang: Locale;
}

export function DashboardHeader({ dict, lang }: DashboardHeaderProps) {
  return (
    <header className="bg-green-800 text-white shadow-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Sprout className="h-6 w-6" />
          <span className="text-xl font-bold tracking-tight">HarvestGuard</span>
        </div>

        {/* Right Nav */}
        <nav className="flex items-center gap-4 text-sm font-medium">
            {/* Simple Lang Toggle Placeholder - Logic to switch path goes here */}
            <LanguageToggle
                currentLang={lang}
                labelBn={dict.nav.lang_bn}
                labelEn={dict.nav.lang_en}
            />

           <div className="hidden md:flex items-center gap-4">
             <Link href={`/${lang}/profile`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
               <User className="h-4 w-4" />
               {dict.dashboard.nav.profile}
             </Link>
             <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
               <LogOut className="h-4 w-4" />
               {dict.dashboard.nav.logout}
             </button>
           </div>
           
           {/* Mobile Menu Icon would go here for smaller screens */}
        </nav>
      </div>
    </header>
  );
}