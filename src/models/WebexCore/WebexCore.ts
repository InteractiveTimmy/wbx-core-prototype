/**
 * WebexCore primary package model. This model reflects the entry point for this package.
 *
 * @beta
 */
class WebexCore {
  /**
   * HTTP request tooling.
   */
  public http: unknown;

  /**
   * Logging tooling.
   */
  public logger: unknown;

  /**
   * Serializable registry managers.
   */
  public registry: Record<string, unknown>;

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
  public deserialize(serial: unknown): this {
    this.registry = { serial };
    return this;
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
  public serialize(): unknown {
    return this.registry.serial;
  }
}

export default WebexCore;
