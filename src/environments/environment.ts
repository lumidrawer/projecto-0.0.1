// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'dev',
  firebase: {
    config : {
      apiKey: "AIzaSyCHp5qL8z5NRhRuG5_TJFO--_869KckFKw",
      authDomain: "edificacion-app.firebaseapp.com",
      projectId: "edificacion-app",
      storageBucket: "edificacion-app.appspot.com",
      messagingSenderId: "161060410200",
      appId: "1:161060410200:web:29086d09bb2f80ec3e0b2d"
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
