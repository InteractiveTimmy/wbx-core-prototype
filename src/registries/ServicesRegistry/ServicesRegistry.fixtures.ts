import { ServicesRegistrySerial } from './ServicesRegistry.types';

const ServicesRegistrySerialFixture: ServicesRegistrySerial = [
  {
    cluster: 'example-cluster-a',
    id: 'example-id-a',
    name: 'example-a',
    type: 'TEAM',
    url: 'https://example-a.com/api/v1',
  },
  {
    cluster: 'example-cluster-b',
    id: 'example-id-b',
    name: 'example-b',
    type: 'CALLING',
    url: 'https://example-b.com/api/v1',
  },
  {
    cluster: 'example-cluster-c',
    id: 'example-id-c',
    name: 'example-c',
    type: 'IDENTITY',
    url: 'https://example-c.com/api/v1',
  },
];

export {
  ServicesRegistrySerialFixture,
};
