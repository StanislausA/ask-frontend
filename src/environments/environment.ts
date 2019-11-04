// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const baseUri = 'http://ec2-54-80-244-190.compute-1.amazonaws.com';
const port = '1337';

export const environment = {
  production: false,
  environmentName: 'Default Environment',
  tagsUri: `${baseUri}:${port}/tags`,
  questionsUri: `${baseUri}:${port}/questions`,
  // createQuestionUri: `${baseUri}:${port}/questions/create`,
  responsesUri: `${baseUri}:${port}/responses`,
  userUri: `${baseUri}:${port}/users`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
