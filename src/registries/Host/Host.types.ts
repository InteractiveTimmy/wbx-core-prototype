import { RegistryItemData, RegistryItemImmutable, RegistryItemSerial } from '../../models';

export interface HostData extends RegistryItemData {
  host: string;
  id: string;
  priority: number;
  ttl: number;
}

export interface HostSerial extends RegistryItemSerial {
  host: string;
  id: string;
  priority: number;
  ttl: number;
}

export interface HostImmutable extends RegistryItemImmutable {
  cluster: string;
  host: string;
  id: string;
  name: string;
  priority: number;
  ttl: number;
  type: string;
}
