/* eslint-disable max-len */
/**
 * Crafted by x22a on 02.04.17.
 */
import expectedAuth from '../Auth';
import { expect } from 'chai';

describe('Auth', () => {
  let mockLocalStorage = null;

  beforeEach(() => {
    mockLocalStorage = localStorage;
  });

  afterEach(() => {
    localStorage = mockLocalStorage;
    localStorage.clear();
  });

  it('Loads token from local storage by name', () => {
    // Arrange
    const expectedTokenKey = 'jwt';
    const expectedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0.Q6CM1qIz2WTgTlhMzpFL8jI8xbu9FFfj5DY_bGVY98Y';
    localStorage.setItem(expectedTokenKey, expectedToken);

    // Act
    const actualToken = expectedAuth.getToken(expectedTokenKey);

    // Assert
    expect(actualToken).to.be.equal(expectedToken);
  });

  it('Decodes token payload', () => {
    const expectedTokenKey = 'jwt';
    const expectedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0.Q6CM1qIz2WTgTlhMzpFL8jI8xbu9FFfj5DY_bGVY98Y';
    const expectedPayload = {
      "sub": "1234567890",
      "name": "John Doe",
    };

    localStorage.setItem(expectedTokenKey, expectedToken);

    // Act
    const actualPayload = expectedAuth.getPayload();

    // Assert
    expect(actualPayload).to.deep.equal(expectedPayload);
  });

  it('Returns undefined token when no token found in local storage', () => {
    // Act
    const actualToken= expectedAuth.getToken();

    // Assert
    expect(actualToken).to.be.undefined;
  });

  it('Returns null payload when no token found in local storage', () => {
    // Act
    const actualPayload = expectedAuth.getPayload();

    // Assert
    expect(actualPayload).to.be.null;
  });

  it('Returns null when unable to locate localStorage', () => {
    // Arrange
    localStorage = null;

    // Act
    const actualPayload = expectedAuth.getPayload();

    // Assert
    expect(actualPayload).to.be.null;
  });
});
