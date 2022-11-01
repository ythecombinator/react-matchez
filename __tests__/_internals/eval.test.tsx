import { Exact } from '../../src/components/Exact';
import { Otherwise } from '../../src/components/Otherwise';
import { When } from '../../src/components/When';
import { With } from '../../src/components/With';

import {
  evaluateWhenExpression,
  exactMatcher,
  isExact,
  isOtherwise,
  isWhen,
  isWith,
  whenMatcher,
  withMatcher,
} from '../../src/_internals/eval';

// ----------------------------------------------------------------------
//
// is.<pattern>
//
// ----------------------------------------------------------------------

describe('#isWhen', () => {
  describe('when the element type is When', () => {
    it('returns true', () => {
      const child = {
        element: { key: '0', props: {}, type: When },
        position: 0,
      };

      expect(isWhen(child)).toBe(true);
    });
  });

  describe('when the element type is not When', () => {
    it('returns false', () => {
      const child = {
        element: { key: '0', props: {}, type: With },
        position: 0,
      };

      expect(isWhen(child)).toBe(false);
    });
  });
});

describe('#isWith', () => {
  describe('when the element type is With', () => {
    it('returns true', () => {
      const child = {
        element: { key: '0', props: {}, type: With },
        position: 0,
      };

      expect(isWith(child)).toBe(true);
    });
  });

  describe('when the element type is not With', () => {
    it('returns false', () => {
      const child = {
        element: { key: '0', props: {}, type: Exact },
        position: 0,
      };

      expect(isWith(child)).toBe(false);
    });
  });
});

describe('#isExact', () => {
  describe('when the element type is Exact', () => {
    it('returns true', () => {
      const child = {
        element: { key: '0', props: {}, type: Exact },
        position: 0,
      };

      expect(isExact(child)).toBe(true);
    });
  });

  describe('when the element type is not Exact', () => {
    it('returns false', () => {
      const child = {
        element: { key: '0', props: {}, type: Otherwise },
        position: 0,
      };

      expect(isExact(child)).toBe(false);
    });
  });
});

describe('#isOtherwise', () => {
  describe('when the element type is Otherwise', () => {
    it('returns true', () => {
      const child = {
        element: { key: '0', props: {}, type: Otherwise },
        position: 0,
      };

      expect(isOtherwise(child)).toBe(true);
    });
  });

  describe('when the element type is not Otherwise', () => {
    it('returns false', () => {
      const child = {
        element: { key: '0', props: {}, type: When },
        position: 0,
      };

      expect(isOtherwise(child)).toBe(false);
    });
  });
});

// ----------------------------------------------------------------------
//
// match.<pattern>
//
// ----------------------------------------------------------------------

describe('#whenMatcher', () => {
  describe('when the matcher matches', () => {
    it('returns true', () => {
      const child = {
        element: {
          key: '0',
          props: { children: 'child', predicate: () => true },
          type: When,
        },
        position: 0,
      };

      expect(whenMatcher()(child)).toBe(true);
    });
  });

  describe('when the matcher returns false', () => {
    it('returns false', () => {
      const child = {
        element: {
          key: '0',
          props: { children: 'child', predicate: () => false },
          type: When,
        },
        position: 0,
      };

      expect(whenMatcher()(child)).toBe(false);
    });
  });

  it('passes the value to the predicate', () => {
    const predicate = jest.fn();
    const value = { foo: 'bar' };
    const child = {
      element: {
        key: '0',
        props: { children: 'child', predicate },
        type: When,
      },
      position: 0,
    };

    whenMatcher(value)(child);

    expect(predicate).toHaveBeenCalledWith(value);
  });
});

describe('#withMatcher', () => {
  describe('when the matcher matches', () => {
    it('returns true', () => {
      const value = { foo: 'bar', baz: 'qux' };
      const instance = {
        element: {
          key: '0',
          props: { children: 'child', foo: 'bar', baz: 'qux' },
          type: With,
        },
        pattern: { foo: 'bar' },
        position: 0,
      };

      expect(withMatcher(value)(instance)).toBe(true);
    });
  });

  describe('when the matcher does not match', () => {
    it('returns false', () => {
      const value = { foo: 'bar', baz: 'qux' };
      const instance = {
        element: {
          key: '0',
          props: { children: 'child', foo: 'bar', baz: 'qux' },
          type: With,
        },
        pattern: { foo: 'should not match' },
        position: 0,
      };

      expect(withMatcher(value)(instance)).toBe(false);
    });
  });
});

describe('#exactMatcher', () => {
  describe('when the matcher matches exactly', () => {
    it('returns true', () => {
      const value = { foo: 'bar', baz: 'qux' };
      const instance = {
        element: {
          key: '0',
          props: { children: 'child', foo: 'bar', baz: 'qux' },
          type: With,
        },
        pattern: { foo: 'bar', baz: 'qux' },
        position: 0,
      };

      expect(exactMatcher(value)(instance)).toBe(true);
    });
  });

  describe('when the matcher matches partially', () => {
    it('returns false', () => {
      const value = { foo: 'bar', baz: 'qux' };
      const instance = {
        element: {
          key: '0',
          props: { children: 'child', foo: 'bar', baz: 'qux' },
          type: With,
        },
        pattern: { foo: 'bar', baz: 'does not match' },
        position: 0,
      };

      expect(exactMatcher(value)(instance)).toBe(false);
    });
  });

  describe('when the matcher does not match', () => {
    it('returns false', () => {
      const value = { foo: 'bar', baz: 'qux' };
      const instance = {
        element: {
          key: '0',
          props: { children: 'child', foo: 'bar', baz: 'qux' },
          type: With,
        },
        pattern: { baz: 'does not match' },
        position: 0,
      };

      expect(exactMatcher(value)(instance)).toBe(false);
    });
  });
});

// ----------------------------------------------------------------------
//
// evaluate.<pattern>
//
// ----------------------------------------------------------------------

describe('#evaluateWhenExpression', () => {
  it('returns an array of meta objects', () => {
    const when1 = {
      element: {
        type: When,
        props: { children: 'One', predicate: () => true },
        key: '0',
      },
      position: 0,
    };
    const when2 = {
      element: {
        type: When,
        props: { children: 'Two', predicate: () => false },
        key: '1',
      },
      position: 1,
    };
    const result = evaluateWhenExpression([when1, when2]);

    expect(result).toContainEqual(when1);
  });

  describe('when there are no children', () => {
    it('returns an empty array', () => {
      const result = evaluateWhenExpression([]);

      expect(result).toEqual([]);
    });
  });
});

describe('#evaluateShapeExpression', () => {});

describe('#evaluateWithExpression', () => {});

describe('#evaluateExactExpression', () => {});

describe('#evaluateOtherwiseExpression', () => {});

// ----------------------------------------------------------------------
//
// Main parsing/conversion utilities
//
// ----------------------------------------------------------------------
