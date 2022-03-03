import { RegistryItem } from '../../models';

import type { ServiceData, ServiceImmutable, ServiceSerial } from './Service.types';

class Service extends RegistryItem<ServiceData, ServiceImmutable, ServiceSerial> {
  public get cluster(): string {
    return this.data.id.split(':')[2];
  }

  public get id(): string {
    return this.data.id;
  }

  public get name(): string {
    return this.data.id.split(':')[3];
  }

  public get scope(): string {
    return this.data.scope;
  }

  public get ttl(): number {
    return this.data.ttl;
  }

  public get type(): string {
    return this.data.id.split(':')[1];
  }

  public get url(): string {
    return this.data.url;
  }

  public deserialize(serial: ServiceSerial): this {
    this.data = { ...serial };

    return this;
  }

  public immute(): ServiceImmutable {
    return {
      cluster: this.cluster,
      id: this.id,
      name: this.name,
      scope: this.scope,
      ttl: this.ttl,
      type: this.type,
      url: this.url,
    };
  }

  public serialize(): ServiceSerial {
    return {
      id: this.id,
      scope: this.scope,
      ttl: this.ttl,
      url: this.url,
    };
  }
}

export default Service;
