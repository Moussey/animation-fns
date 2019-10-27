import { Transformer } from '../converter';
import { Time } from '.';
import { Hook } from './hook';

describe('Hook', () => {
  let hookCount: number;
  let converter: Transformer<Time>;
  const hookAt = 1;

  beforeEach(() => {
    hookCount = 0;
    converter = Hook(hookAt, () => hookCount++);
  });

  describe('Before the hook value has been reached', () => {
    beforeEach(() => {
      converter.convert({ time: hookAt - 1 });
    });

    it('Hook has not been called', () => {
      expect(hookCount).toBe(0);
    });

    describe('When the hook value is reached', () => {
      beforeEach(() => {
        converter.convert({ time: hookAt });
      });

      it('Hook is called', () => {
        expect(hookCount).toBe(1);
      });

      describe('Subsequent values after the hook value', () => {
        beforeEach(() => {
          converter.convert({ time: hookAt + 1 });
        });

        it('Do not call the hook', () => {
          expect(hookCount).toBe(1);
        });
      });
    });

    describe('When the hook value is exceeded', () => {
      beforeEach(() => {
        converter.convert({ time: hookAt + 1 });
      });

      it('Hook is called', () => {
        expect(hookCount).toBe(1);
      });

      describe('Subsequent values after the hook value', () => {
        beforeEach(() => {
          converter.convert({ time: hookAt + 2 });
        });

        it('Do not call the hook', () => {
          expect(hookCount).toBe(1);
        });
      });
    });
  });
});
