export interface CropBatch {
  id: string;
  cropName: string; // e.g., "Paddy/Rice" or "ধান/চাল"
  weight: number;
  weightUnit: string;
  date: string;
  location: string;
  storageType: string;
  status: 'active' | 'completed';
  icon?: string; // identifier for the icon to render
}

export interface DashboardDictionary {
  welcome: string;
  nav: {
    profile: string;
    logout: string;
  };
  stats: {
    total_batches: string;
    active_batches: string;
    food_saved: string;
    success_rate: string;
  };
  actions: {
    register: string;
    profile: string;
    csv: string;
    json: string;
  };
  sections: {
    my_batches: string;
  };
  status: {
    active: string;
    completed: string;
  };
}