class Auth {

  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(authToken, refreshToken) {
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('refreshToken', refreshToken);
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   */
  static isUserAuthenticated() {
    return localStorage.getItem('authToken') !== null;
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
  }

  /**
   * Get a token value.
   *
   */
  static getToken() {
    return localStorage.getItem('authToken');
  }

  /**
   * Get a token value.
   *
   */
  static getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }

  /**
   * Get token payload
   * @param token
   * @returns {object} payload
   */
  static getPayload(token = this.getToken()) {
    if (!token) return null;
    let payload = token.split('.')[1];
    payload = JSON.parse(Buffer(payload, 'base64').toString('ascii'));
    return payload;
  }
}

export default Auth;
