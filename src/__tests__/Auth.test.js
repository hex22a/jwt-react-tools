/* eslint-disable max-len */
/**
 * Crafted by x22a on 02.04.17.
 */
import Auth from '../Auth';
import { expect } from 'chai';

describe('Auth', () => {
  it('Saves token to local storage', () => {
    const authToken = 'foo';
    const refreshToken = 'bar';
    Auth.authenticateUser(authToken, refreshToken);
    expect(Auth.getToken()).to.equal(authToken);
  });

  it('Deletes token from local storage', () => {
    const authToken = 'foo';
    const refreshToken = 'bar';
    Auth.authenticateUser(authToken, refreshToken);
    Auth.deauthenticateUser();
    expect(Auth.getToken()).to.be.an('undefined');
  });

  it('Checks auth flag', () => {
    const authToken = 'foo';
    const refreshToken = 'bar';
    Auth.authenticateUser(authToken, refreshToken);
    expect(Auth.isUserAuthenticated()).to.equal(true);
  });

  it('Saves refresh token', () => {
    const authToken = 'foo';
    const refreshToken = 'bar';
    Auth.authenticateUser(authToken, refreshToken);
    expect(Auth.getRefreshToken()).to.equal(refreshToken);
  });

  it('Returns null payload if token not set', () => {
    Auth.deauthenticateUser();
    expect(Auth.getPayload()).to.be.a('null');
  });

  it('Returns object payload', () => {
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';
    const refreshToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';
    Auth.authenticateUser(authToken, refreshToken);
    expect(Auth.getPayload()).to.be.an('object');
  });
});
