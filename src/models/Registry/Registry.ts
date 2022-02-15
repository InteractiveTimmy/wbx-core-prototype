/**
 * The Registry model's abstract class.
 *
 * @remarks
 * This is the core shape of any object that is designed to manage data within `@webex/core`.
 *
 * @internal
 */
abstract class Registry<Item extends Record<string, unknown> = Record<string, unknown>> {
  /**
   * Nested data Object for storing all Item Objects within the scope of this Registry.
   */
  protected data: Array<Item>;

  /**
   * Construct a new Registry instance.
   *
   * @param serial - Serial to construct this Registry instance from.
   */
  constructor(serial?: Array<Item>) {
    this.initialize();

    if (serial) {
      this.deserialize(serial);
    }
  }

  /**
   * Name of this Registry.
   *
   * @returns - The name of this Registry.
   */
  public get name(): string {
    return this.constructor.name;
  }

  /**
   * Deserialize a Serial into this Registry instance.
   *
   * @param serial - Serial to mount to this Registry instance.
   * @returns - This Registry instance.
   * @internal
   */
  protected deserialize(serial: Array<Item>): this {
    if (!Array.isArray(this.data) || this.data.length > 0) {
      return this;
    }

    this.data = [...serial];

    return this;
  }

  /**
   * Initialize the data containers on this Registry instance.
   *
   * @returns - This Registry instance.
   * @internal
   */
  protected initialize(): this {
    this.data = [];

    return this;
  }

  /**
   * Mount an Item on this Registry instance.
   *
   * @param item - Item to mount to this Registry instance.
   * @returns - This Registry instance.
   */
  public create(item: Item): this {
    const storedItem = this.get(item as Partial<Item>);

    if (storedItem) {
      return this;
    }

    this.data.push({ ...item });

    return this;
  }

  /**
   * Destroy all stored data on this Registry instance.
   *
   * @remarks
   * Note that this does not fully destroy the Registry instance, but instead clears all data
   * references mounted to it.
   */
  public destroy(): void {
    this.data.length = 0;
  }

  /**
   * Get the first Item that matches the provided Query object stored in this Registry instance.
   *
   * @param query - Partial Item Object to query against the stored data.
   * @returns - The found Registry Item.
   */
  public get(query: Partial<Item>): Item {
    const item = this.data.find(
      (storedItem: Item): boolean => Object.entries(query).some(
        ([key, value]: [string, unknown]): boolean => storedItem[key] === value,
      ),
    );

    return item ? { ...item } : undefined;
  }

  /**
   * Remove the first Item that matches the provided Query object stored in this Registry instance.
   *
   * @param query - Partial Item Object to query against the stored data.
   * @returns - This Registry instance.
   */
  public remove(query: Partial<Item>): this {
    const item = this.data.find(
      (storedItem: Item): boolean => Object.entries(query).some(
        ([key, value]: [string, unknown]): boolean => storedItem[key] === value,
      ),
    );

    if (item) {
      this.data.splice(this.data.indexOf(item), 1);
    }

    return this;
  }

  /**
   * Serialize this Registry instance for transport to an external medium.
   *
   * @remarks
   * Serialized Registry instances are used for transport to different mediums.
   *
   * @returns - This Registry instance serialized.
   */
  public serialize(): Array<Item> {
    return [
      ...this.data.map((item: Item): Item => ({ ...item })),
    ];
  }

  /**
   * Update an existing Item within this Registry instance.
   *
   * @param query - Object to query against the stored data.
   * @param item - New Item to replace the found Item with.
   * @returns - This Registry instance.
   */
  public update(query: Partial<Item>, item: Item): this {
    const storedItem = this.get(query);

    if (!storedItem) {
      return this;
    }

    this.remove(query);

    this.create(item);

    return this;
  }
}

export default Registry;
