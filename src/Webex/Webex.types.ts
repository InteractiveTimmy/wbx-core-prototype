import type { RegistryItemSerial } from '../models';

export type WebexRegistriesSerial = Record<string, Array<RegistryItemSerial>>;

export interface WebexSerial {
  registries: WebexRegistriesSerial;
}
