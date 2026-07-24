export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  videoId?: string;
  type: 'course' | 'video' | 'channel' | 'playlist';
  channelName?: string;
  badge?: string; // e.g., "أهمهم", "كورس أساسي", "مصدر إضافي"
  isHighlighted?: boolean;
}

export interface WeekData {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  objective: string;
  instructions: string[];
  resources: Resource[];
  keyTakeaways?: string[];
}

export interface UserProgress {
  completedResources: string[]; // Resource IDs
  completedWeeks: number[];
}
