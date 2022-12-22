// CustomMatcherの定義
expect.extend({
  toBeTypeOrNull(received, classTypeOrNull): jest.CustomMatcherResult {
    try {
      expect(received).toEqual(expect.any(classTypeOrNull));
      return {
        message: () => 'Ok',
        pass: true,
      };
    } catch (error) {
      return received === null
        ? {
          message: () => 'Ok',
          pass: true,
        }
        : {
          message: () => `expected ${received} to be ${classTypeOrNull} type or null`,
          pass: false,
        };
    }
  },
});
