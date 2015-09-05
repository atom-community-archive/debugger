'use babel';

import Debugger from '../lib/debugger';

describe('Debugger', () => {
  let debuggerMain;

  beforeEach(() => {
    waitsForPromise(() => {
      return atom.packages.activatePackage('debugger').then((pack) => {
        debuggerMain = pack.mainModule;
      });
    });
  });

  describe('when the debugger package is activated', () => {
    it('activates successfully', () => {
      expect(debuggerMain).toBeDefined();
    });
  });
});
