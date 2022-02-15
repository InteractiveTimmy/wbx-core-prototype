import Registry from '../../models/Registry';

import Services from './ServicesRegistry';

describe('Services', () => {
  describe('constructor()', () => {
    it('should extend the Registry class', () => {
      expect.assertions(1);

      const services = new Services();

      expect(services instanceof Registry).toBe(true);
    });
  });
});
