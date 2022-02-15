import { RegistryFixture as Registry } from './Registry.fixtures';

describe('Registry', () => {
  const serial = [
    { id: 'id-a', value: 'some-value-a' },
    { id: 'id-b', value: 'some-value-b' },
    { id: 'id-c', value: 'some-value-c' },
  ];

  describe('#name', () => {
    it('should return the name of this Registry', () => {
      expect.assertions(1);

      const registry = new Registry();

      expect(registry.name).toBe(registry.constructor.name);
    });
  });

  describe('constructor()', () => {
    it('should create an empty Registry', () => {
      expect.assertions(1);

      const registry = new Registry();

      expect(registry.serialize()).toMatchObject([]);
    });

    it('should deserialize a provided serial into the Registry', () => {
      expect.assertions(3);

      const registry = new Registry(serial);

      expect(registry.get({ ...serial[0] })).toMatchObject(serial[0]);
      expect(registry.get({ ...serial[1] })).toMatchObject(serial[1]);
      expect(registry.get({ ...serial[2] })).toMatchObject(serial[2]);
    });
  });

  describe('create()', () => {
    it('should return the Registry', () => {
      expect.assertions(1);

      const registry = new Registry();

      expect(registry.create({ ...[...serial].pop() })).toBe(registry);
    });

    it('should create an entry based on the provided registry', () => {
      expect.assertions(1);

      const registry = new Registry();

      registry.create([...serial].pop());

      expect(registry.get({ ...[...serial].pop() })).toMatchObject([...serial].pop());
    });
  });

  describe('destroy()', () => {
    it('should destory all retrievable data', () => {
      expect.assertions(3);

      const registry = new Registry(serial);

      registry.destroy();

      expect(registry.get({ ...serial[0] })).toBeUndefined();
      expect(registry.get({ ...serial[1] })).toBeUndefined();
      expect(registry.get({ ...serial[2] })).toBeUndefined();
    });
  });

  describe('remove()', () => {
    it('should return the Registry instance', () => {
      expect.assertions(1);

      const registry = new Registry(serial);

      expect(registry.remove({ ...[...serial].pop() })).toBe(registry);
    });

    it('should remove a Registry item based on the provided query', () => {
      expect.assertions(1);

      const registry = new Registry(serial);

      registry.remove({ ...[...serial].pop() });

      expect(registry.get({ ...[...serial].pop() })).toBeUndefined();
    });
  });

  describe('serialize()', () => {
    it('should return the Registry instance as an immutable serial', () => {
      expect.assertions(2);

      const registry = new Registry(serial);

      const serialized = registry.serialize();

      expect(serialized).toMatchObject(serial);
      expect(serialized).not.toBe(serial);
    });

    it('should generate a serial from mounted data', () => {
      expect.assertions(3);

      const registry = new Registry(serial);

      const serialized = registry.serialize();

      expect(registry.get(serial[0])).toMatchObject(serialized[0]);
      expect(registry.get(serial[1])).toMatchObject(serialized[1]);
      expect(registry.get(serial[2])).toMatchObject(serialized[2]);
    });
  });

  describe('update()', () => {
    it('should return the Registry instance', () => {
      expect.assertions(1);

      const registry = new Registry(serial);

      const { id } = registry.get({ ...[...serial].pop() });

      const updatedService = { id: 'id-d', value: 'some-value-d' };

      expect(registry.update({ id }, updatedService)).toBe(registry);
    });

    it('should update an existing registry entry', () => {
      expect.assertions(4);

      const registry = new Registry(serial);

      const { id, value } = registry.get({ ...[...serial].pop() });

      const updatedService = { id: 'id-d', value: 'some-value-d' };

      registry.update({ id }, updatedService);

      expect(registry.get({ id })).toBeUndefined();
      expect(registry.get({ value })).toBeUndefined();

      expect(registry.get({ id: updatedService.id })).toMatchObject(updatedService);
      expect(registry.get({ value: updatedService.value })).toMatchObject(updatedService);
    });
  });
});
