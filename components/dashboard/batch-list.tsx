import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Box, Calendar, MapPin, Warehouse } from 'lucide-react';
import { DashboardDictionary, CropBatch } from '@/types/dashboard';

interface BatchListProps {
  dict: DashboardDictionary;
  batches: CropBatch[]; // We pass data in to keep component pure
}

export function BatchList({ dict, batches }: BatchListProps) {
  return (
    <Card className="mt-8 border-none shadow-sm bg-white">
      <CardHeader className="px-6 pt-6 pb-2">
        <CardTitle className="text-green-800 text-lg font-medium">
          {dict.sections.my_batches}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 md:p-6 space-y-4">
        {batches.map((batch) => (
          <div
            key={batch.id}
            className="group border rounded-lg p-4 hover:border-green-300 hover:shadow-sm transition-all bg-white"
          >
            {/* Top Row: Icon, Title, Badge */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-green-50 flex items-center justify-center border border-green-100">
                  <Box className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{batch.cropName}</h4>
                  <p className="text-sm text-gray-500">
                    {batch.weight} {batch.weightUnit}
                  </p>
                </div>
              </div>
              <Badge 
                variant={batch.status === 'active' ? 'default' : 'secondary'}
                className={batch.status === 'active' ? 'bg-green-700 hover:bg-green-800' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
              >
                {batch.status === 'active' ? dict.status.active : dict.status.completed}
              </Badge>
            </div>

            {/* Bottom Row: Meta Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-600 border-t pt-3 mt-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span>{batch.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span>{batch.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Warehouse className="h-4 w-4 text-gray-400" />
                <span>{batch.storageType}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}