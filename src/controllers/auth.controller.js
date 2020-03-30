let _authService = null;

class AuthController {
  constructor({ AuthService }) {
    _authService = AuthService;
  }

  async signIn(req, res) {
    const { body } = req;

    const createdUser = await _authService.signIn(body);

    return res.status(createdUser.status).send(createdUser);
  }

  async signUp(req, res) {
    const { body } = req;

    const loggedUser = await _authService.signUp(body);

    return res.status(loggedUser.status).send(loggedUser);
  }

  async recoveryPassword(req, res) {
    const { email } = req.params;

    const recoveryPassword = await _authService.recoveryPassword(email);

    return res.send(recoveryPassword);
  }

  async resetPassword() {}
}

module.exports = AuthController;