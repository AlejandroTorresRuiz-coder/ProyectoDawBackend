const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../utils");
const responseFunctions = require("../utils/responseHttp.utils");

const {
  CODE_BAD_REQUEST,
  CODE_UNAUTHORIZED
} = require("../constants/httpCodes");

module.exports = (req, res, next) => {
  console.log("req.user");
  console.log(req.user.user[0].id);
  //   const token = req.headers["authorization"];
  //   if (!token) {
  //     return res.send(responseFunctions.error(CODE_BAD_REQUEST, "El token debe ser enviado"));
  //   }

  //   jwt.verify(token, JWT_SECRET, function(err) {
  //     if (err) {
  //       return res.send(responseFunctions.error(CODE_UNAUTHORIZED, "El token no es válido"));
  //     }

  next();
  //   });
};