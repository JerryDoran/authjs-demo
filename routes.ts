/**
 * An array of routes that are accessible to the public
 * The routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ['/', '/auth/new-verification'];

/**
 * An array of routes that are accessible to the public
 * The routes require authentication and will redirect logged in users
 * to /settings
 * @type {string[]}
 */
export const authRoutes = ['/auth/login', '/auth/register', '/auth/error'];

/**
 * The prefix for api authentication routes
 * Routes that start with this prefix are used for api authentication
 * purposes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * The default redirect path after logging in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/settings';
