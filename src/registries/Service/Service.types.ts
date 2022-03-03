import type {
  RegistryItemData,
  RegistryItemImmutable,
  RegistryItemSerial,
} from '../../models';

export interface ServiceData extends RegistryItemData {
  id: string;
  scope: string;
  ttl: number;
  url: string;
}

export interface ServiceImmutable extends RegistryItemImmutable {
  cluster: string;
  id: string;
  name: string;
  scope: string;
  type: string;
  url: string;
}

export interface ServiceSerial extends RegistryItemSerial {
  id: string;
  scope: string;
  ttl: number;
  url: string;
}
