import RegistryItem, { RegistryItemData, RegistryItemImmutable, RegistryItemSerial } from '../RegistryItem';

class Registry<
  ItemData extends RegistryItemData = RegistryItemData,
  ItemImmutable extends RegistryItemImmutable = RegistryItemImmutable,
  ItemSerial extends RegistryItemSerial = RegistryItemSerial
> {
  protected data: Array<RegistryItem<ItemData, ItemImmutable, ItemSerial>>;

  protected Item: new (itemSerial: ItemSerial) => RegistryItem<ItemData, ItemImmutable, ItemSerial>;

  public readonly name: string;

  constructor(
    item: new (itemSerial: ItemSerial) => RegistryItem<ItemData, ItemImmutable, ItemSerial>,
    name: string,
    serial?: Array<ItemSerial>,
  ) {
    this.Item = item;
    this.name = name;

    this.initialize();

    if (serial) {
      this.deserialize(serial);
    }
  }

  protected getItem(query: Partial<ItemImmutable>): RegistryItem<
    ItemData, ItemImmutable, ItemSerial
  > {
    return this.data.find(
      (item): boolean => Object.keys(query).every(
        (key): boolean => query[key] === item.immute()[key],
      ),
    );
  }

  protected listItems(query: Partial<ItemImmutable>): Array<RegistryItem<
    ItemData, ItemImmutable, ItemSerial
  >> {
    return this.data.filter(
      (item): boolean => Object.keys(query).every(
        (key): boolean => query[key] === item.immute()[key],
      ),
    );
  }

  protected initialize(): this {
    this.data = [];

    return this;
  }

  public deserialize(serial: Array<ItemSerial>): this {
    if (!Array.isArray(this.data) || this.data.length > 0) {
      return this;
    }

    this.data = serial.map((itemSerial: ItemSerial) => new this.Item(itemSerial));

    return this;
  }

  public destroy(): void {
    this.data.length = 0;
  }

  public get(query: Partial<ItemImmutable>): ItemImmutable {
    return this.getItem(query).immute();
  }

  public list(query: Partial<ItemImmutable>): Array<ItemImmutable> {
    return this.listItems(query).map(
      (item): ItemImmutable => item.immute(),
    );
  }

  public load(itemSerials: Array<ItemSerial>): Array<ItemImmutable> {
    return itemSerials.map(
      (itemSerial): ItemImmutable => this.mount(itemSerial),
    );
  }

  public mount(itemSerial: ItemSerial): ItemImmutable {
    const storedItem = this.getItem(itemSerial as Partial<ItemImmutable>);

    if (storedItem) {
      return storedItem.immute();
    }

    const newItem = new this.Item({ ...itemSerial });

    this.data.push(newItem);

    return newItem.immute();
  }

  public serialize(): Array<ItemSerial> {
    return this.data.map(
      (item): ItemSerial => item.serialize(),
    );
  }

  public unload(queries: Array<Partial<ItemImmutable>>): Array<ItemSerial> {
    return queries.map(
      (query): ItemSerial => this.unmount(query),
    );
  }

  public unmount(query: Partial<ItemImmutable>): ItemSerial {
    const storedItem = this.getItem(query);

    if (!storedItem) {
      return undefined;
    }

    this.data.splice(this.data.indexOf(storedItem), 1);

    return storedItem.serialize();
  }

  public update(query: Partial<ItemImmutable>, serial: ItemSerial): ItemImmutable {
    const storedItem = this.getItem(query);

    if (!storedItem) {
      return undefined;
    }

    storedItem.deserialize(serial);

    return storedItem.immute();
  }
}

export default Registry;
