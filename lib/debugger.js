'use babel';

import {CompositeDisposable} from 'atom';

export default {
  subscriptions: null,

  activate() {
    this.subscriptions = new CompositeDisposable();
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  consumeProvider(provider) {
    console.log(provider);
  },
};
