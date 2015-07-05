Debugger = require '../lib/debugger'

describe "Debugger", ->
  [debuggerMain] = []

  beforeEach ->
    waitsForPromise -> atom.packages.activatePackage('debugger').then((pack) -> debuggerMain = pack.mainModule)

  describe "when the debugger package is activated", ->
    it "activates successfully", ->
      expect(debuggerMain).toBeDefined()
