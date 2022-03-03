import { WebexCore, Registry } from '../models';

import { Host, Service } from '../registries';

import { WebexRegistriesSerial, WebexSerial } from './Webex.types';

class Webex extends WebexCore<WebexSerial> {
  public registries: Record<string, Registry>;

  public deserialize(serial: WebexSerial): this {
    this.registries = {};

    this.registries.hosts = new Registry(Host, serial?.registries?.hosts);
    this.registries.services = new Registry(Service, serial?.registries?.services);

    return this;
  }

  public destroy(): void {
    Object.values(this.registries).forEach(
      (registry): void => registry.destroy(),
    );
  }

  public serialize(): WebexSerial {
    const registries = Object.values(this.registries).reduce(
      (collection: WebexRegistriesSerial, registry: Registry): WebexRegistriesSerial => {
        const mutable = { ...collection };

        mutable[registry.name] = registry.serialize();

        return collection;
      }, {},
    );

    return {
      registries,
    };
  }
}

export default Webex;
