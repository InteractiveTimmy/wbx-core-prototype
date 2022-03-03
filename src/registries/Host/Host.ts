import { RegistryItem } from '../../models';

import { HostData, HostImmutable, HostSerial } from './Host.types';

class Host extends RegistryItem<HostData, HostImmutable, HostSerial> {
  public get cluster(): string {
    return this.data.id.split(':')[2];
  }

  public get host(): string {
    return this.data.host;
  }

  public get id(): string {
    return this.data.id;
  }

  public get name(): string {
    return this.data.id.split(':')[3];
  }

  public get priority(): number {
    return this.data.priority;
  }

  public get ttl(): number {
    return this.data.ttl;
  }

  public get type(): string {
    return this.data.id.split(':')[1];
  }

  public deserialize(serial: HostSerial): this {
    this.data = { ...serial };

    return this;
  }

  public immute(): HostImmutable {
    return {
      cluster: this.cluster,
      host: this.host,
      id: this.id,
      name: this.name,
      priority: this.priority,
      ttl: this.ttl,
      type: this.type,
    };
  }

  public serialize(): HostSerial {
    return {
      host: this.data.host,
      id: this.data.id,
      priority: this.data.priority,
      ttl: this.data.ttl,
    };
  }
}

export default Host;
