export const loginData = {
  validUser: {
    username: 'tomsmith',
    password: 'SuperSecretPassword!',
    expectedMessage: 'You logged into a secure area!'
  },
  invalidPassword: {
    username: 'tomsmith',
    password: 'WrongPassword!',
    expectedMessage: 'Your password is invalid!'
  },
  invalidUsername: {
    username: 'wronguser',
    password: 'SuperSecretPassword!',
    expectedMessage: 'Your username is invalid!'
  }
};