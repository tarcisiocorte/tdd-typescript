import { UserController } from './User'


describe('User Controller', () => {
  test('Should return 400 if no Name is provided', async () => {
    const systemUnderTest = new UserController();
    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = systemUnderTest.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
