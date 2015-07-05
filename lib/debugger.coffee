{CompositeDisposable} = require 'atom'

module.exports = Debugger =
  subscriptions: null

  activate: ->
    @subscriptions = new CompositeDisposable

  deactivate: ->
    @subscriptions.dispose()

  consumeProvider: (provider) ->
    console.log(provider)
