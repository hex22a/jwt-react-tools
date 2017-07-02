export const defaultTokenKey = 'jwt';

class Auth {
  /**
   * Get a token value.
   * @param key {string} key in Local Storage where token is placed
   */
  static getToken(key = defaultTokenKey) {
    if (typeof window === 'undefined') return null;
    if (!localStorage) return null;
    return localStorage.getItem(key);
  }

  /**
   * Get token payload
   * @param token {string} Defaults to token from Local Storage
   * @returns {object} payload
   */
  static getPayload(token = this.getToken(defaultTokenKey)) {
    if (!token) return null;
    let payload = token.split('.')[1];
    payload = JSON.parse(Buffer(payload, 'base64').toString('ascii'));
    return payload;
  }
}

export default Auth;
