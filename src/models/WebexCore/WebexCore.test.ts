import WebexCore from './WebexCore';

describe('WebexCore', () => {
  describe('constructor()', () => {
    it('should construct a new WebexCore instance', () => {
      expect.assertions(1);

      const webexCore = new WebexCore();

      expect(webexCore instanceof WebexCore).toBe(true);
    });

    it('should attempt to deserialize a serial', () => {
      expect.assertions(1);

      const serial = { key: 'value' };

      const webexCore = new WebexCore(serial);

      expect(webexCore.registry.serial).toMatchObject(serial);
    });
  });

  describe('deserialize()', () => {
    it('should deserialize a provided serial into this object', () => {
      expect.assertions(1);

      const serial = { key: 'value' };

      const webexCore = new WebexCore();

      webexCore.deserialize(serial);

      expect(webexCore.registry.serial).toMatchObject(serial);
    });
  });

  describe('initialize()', () => {
    it('should resolve to a promise containing this object', async () => {
      expect.assertions(1);

      const webexCore = new WebexCore();

      const response = await webexCore.initialize();

      expect(response).toBe(webexCore);
    });
  });

  describe('serialize()', () => {
    it('should serialize this object', async () => {
      expect.assertions(1);

      const serial = { key: 'value' };

      const webexCore = new WebexCore(serial);

      const response = await webexCore.serialize();

      expect(response).toBe(serial);
    });
  });
});
