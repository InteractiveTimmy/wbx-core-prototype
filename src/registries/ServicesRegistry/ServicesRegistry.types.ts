/**
 * Service Object containing details about a specific service.
 */
export interface ServicesRegistryItem extends Record<string, string> {
  cluster: string;
  id: string;
  name: string;
  type: 'CALLING' | 'EXTERNAL' | 'IDENTITY' | 'INTERNAL' | 'MEETING' | 'TEAM' | 'WCC';
  url: string;
}

export type ServicesRegistrySerial = Array<ServicesRegistryItem>;
