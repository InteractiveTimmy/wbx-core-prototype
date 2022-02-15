import { ServicesRegistry, ServicesRegistrySerial } from '../../registries';

import Registry from '../Registry';

export interface WebexCoreRegistries extends Record<string, Registry> {
  services?: ServicesRegistry
}

export interface WebexCoreSerial {
  registries?: {
    services?: ServicesRegistrySerial;
  };
}
