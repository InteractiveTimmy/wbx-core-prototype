/**
 * WebexCore primary package model. This model reflects the entry point for this package.
 *
 * @beta
 */
abstract class WebexCore<Serial> {
  /**
   * Construct a new WebexCore instance.
   *
   * @param serial - Serialized WebexCore instance.
   */
  public constructor(serial?: Serial) {
    if (serial) {
      this.deserialize(serial);
    }
  }

  public abstract deserialize(serial: Serial): this;

  public abstract destroy(): void

  public abstract serialize(): Serial;
}

export default WebexCore;
