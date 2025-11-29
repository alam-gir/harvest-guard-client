import { Card, CardContent } from '@/components/ui/card';
import { Package, TrendingUp, ShieldCheck, Award } from 'lucide-react';
import { DashboardDictionary } from '@/types/dashboard';

interface StatsGridProps {
  dict: DashboardDictionary;
}

export function StatsGrid({ dict }: StatsGridProps) {
  // Hardcoded stats for demo, in real app pass these as props
  const stats = [
    {
      label: dict.stats.total_batches,
      value: "3",
      icon: Package,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      label: dict.stats.active_batches,
      value: "1",
      icon: TrendingUp,
      color: "text-emerald-600",
      bg: "bg-emerald-100",
    },
    {
      label: dict.stats.food_saved,
      value: "7500",
      icon: ShieldCheck,
      color: "text-teal-600",
      bg: "bg-teal-100",
    },
    {
      label: dict.stats.success_rate,
      value: "100%",
      icon: Award,
      color: "text-yellow-600",
      bg: "bg-yellow-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      {stats.map((stat, index) => (
        <Card key={index} className="border-none shadow-sm">
          <CardContent className="p-6 flex flex-col gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.bg}`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}