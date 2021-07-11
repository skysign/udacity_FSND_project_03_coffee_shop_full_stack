/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:9031', // the running FLASK api server url
  auth0: {
    url: 'udacity-fsnd-project-03.us', // the auth0 domain prefix
    audience: 'image', // the audience set for the auth0 app
    clientId: 'R8OQ01Ay3QILtdkCuAUxyyYzRfGWUpcy', // the client id generated for the auth0 app
    callbackURL: 'http://13.124.122.34:9030', // the base url of the running ionic application. 
  }
};
