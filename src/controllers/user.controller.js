let _userService = null;

class UserController {
  constructor({ UserService }) {
    _userService = UserService;
  }

  async get(req, res) {
    const { id } = req;
    const user = await _userService.get(id);
    return await res.status(200).send(user);
  }

  async getAll(req,res){
    const { offset,limit } = req.query;
    const users = await _userService.getAllUsers(offset,limit);
    return await res.status(200).send(users);
  }

  async create(req, res) {
    const userCreated = await _userService.create(req.body);
    return res.status(userCreated.status).send(userCreated);
  }

  async update(req, res) {
    const { id } = req;
    const entity = req.body;
    const entityUpdated = await _userService.updateUser(id, entity);
    res.status(entityUpdated.status).send(entityUpdated);
  }

  async updateAvatar(req, res) {
    const { files,id } = req;
    const avatar = files ? files.file : null;
    const entityUpdated = await _userService.updateAvatar(id,avatar);
    return res.status(entityUpdated.status).send(entityUpdated);
  }

  async updatePassword(req, res) {
    const { id } = req;
    const { newPassword } = req.body;
    const entityUpdated = await _userService.updatePassword(id, newPassword);
    res.status(entityUpdated.status).send(entityUpdated);
  }
}

module.exports = UserController;
