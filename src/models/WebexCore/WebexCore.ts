import { ServicesRegistry } from '../../registries';

import { WebexCoreRegistries, WebexCoreSerial } from './WebexCore.types';

/**
 * WebexCore primary package model. This model reflects the entry point for this package.
 *
 * @beta
 */
class WebexCore {
  /**
   * HTTP request tooling.
   */
  public request: unknown;

  /**
   * Logging tooling.
   */
  public logger: unknown;

  /**
   * Serializable registry data sets.
   */
  public registries: WebexCoreRegistries;

  /**
   * Web Socket tooling.
   */
  public socket: unknown;

  /**
   * Construct a new WebexCore instance.
   *
   * @param serial - Serialized WebexCore instance.
   */
  public constructor(serial?: unknown) {
    this.registries = {};

    if (serial) {
      this.deserialize(serial);
    }
  }

  /**
   * Deserialize a provided serial into this WebexCore instance.
   *
   * @param serial - Serial to use when mapping this WebexCore instance.
   * @returns - This WebexCore instance.
   */
  public deserialize(serial: WebexCoreSerial): this {
    this.registries.services = new ServicesRegistry(serial?.registries?.services);

    return this;
  }

  public destroy(): void {
    this.registries?.services?.destroy();
  }

  /**
   * Initialize this WebexCore instance.
   *
   * @returns - This WebexCore instance.
   */
  public initialize(): Promise<this> {
    return Promise.resolve(this);
  }

  /**
   * Serialize this WebexCore instance.
   *
   * @returns - Serial of this WebexCore instance.
   */
  public serialize(): WebexCoreSerial {
    return {
      registries: {
        services: this.registries.services.serialize(),
      },
    };
  }
}

export default WebexCore;
