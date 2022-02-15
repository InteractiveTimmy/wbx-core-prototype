import Registry from '../../models/Registry';

import type { ServicesRegistryItem } from './ServicesRegistry.types';

/**
 * Services Registry used to manage the data store for all instance-related services.
 *
 * @remarks
 * This Class is used for all network requests within the `@webex/core` package.
 *
 * @public
 */
class ServicesRegistry extends Registry<ServicesRegistryItem> {}

export default ServicesRegistry;
