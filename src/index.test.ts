import { example, func } from './index';

describe('example test', () => {
  it('should work', () => {
    expect.assertions(1);

    expect(func(example)).toBe(example);
  });
});
