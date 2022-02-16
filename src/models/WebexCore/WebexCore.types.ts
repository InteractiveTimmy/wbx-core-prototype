import { ServicesRegistry, ServicesRegistrySerial } from '../../registries';

import Registry from '../Registry';

/**
 * Interface that stores registries within a WebexCore instance.
 *
 * @beta
 */
export interface WebexCoreRegistries extends Record<string, Registry> {
  services?: ServicesRegistry
}

/**
 * Interface that stores a serialized WebexCore instance.
 *
 * @beta
 */
export interface WebexCoreSerial {
  registries?: {
    services?: ServicesRegistrySerial;
  };
}
