import { Button } from '@/components/ui/button';
import { Plus, User, Download } from 'lucide-react';
import { DashboardDictionary } from '@/types/dashboard';

interface ActionBarProps {
  dict: DashboardDictionary;
}

export function ActionBar({ dict }: ActionBarProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-8">
      {/* Primary Action - Grows on mobile, fixed width on desktop usually, but full width looks good here */}
      <Button className="bg-green-700 hover:bg-green-800 text-white md:flex-1 h-12 text-base">
        <Plus className="mr-2 h-5 w-5" />
        {dict.actions.register}
      </Button>

      {/* Secondary Actions Group */}
      <div className="flex flex-1 gap-4">
        <Button variant="outline" className="flex-1 h-12 bg-white">
          <User className="mr-2 h-4 w-4" />
          {dict.actions.profile}
        </Button>
      </div>

      <div className="flex flex-1 gap-4">
        <Button variant="outline" className="flex-1 h-12 bg-white">
            <Download className="mr-2 h-4 w-4" />
            {dict.actions.csv}
        </Button>
        <Button variant="outline" className="flex-1 h-12 bg-white">
            <Download className="mr-2 h-4 w-4" />
            {dict.actions.json}
        </Button>
      </div>
    </div>
  );
}