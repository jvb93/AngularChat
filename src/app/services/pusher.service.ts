import { Injectable } from '@angular/core';
    import * as Pusher from 'pusher-js';

    // this is here to discourage the instantiating of pusher any where its
    // needed, better to reference it from one place
    @Injectable()
    export class PusherService {
      private _pusher: any;

      constructor() {
        this._pusher = new Pusher('b9d47d0ea7c3e84ce454', {
          cluster: 'us2',
          encrypted: true
        });
      }
      // any time it is needed we simply call this method
      getPusher() {
        return this._pusher;
      }

    }