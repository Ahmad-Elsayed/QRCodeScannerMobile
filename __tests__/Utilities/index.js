import { isURL } from 'src/utilities';

describe('utils', () => {
  it('should return not valid url for not valid text', () => {
    const isValidURL = isURL('Not valid');
    expect(isValidURL).toBeFalsy();
  });
  it('should return not valid url for non-text inputs', () => {
    const isValidURL = isURL({});
    expect(isValidURL).toBeFalsy();
  });
  it('should return valid url for URLS', () => {
    const isValidURL = isURL('https://www.facebook.com/');
    expect(isValidURL).toBeTruthy();
  });
});
