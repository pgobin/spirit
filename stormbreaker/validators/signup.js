import joi from 'joi'

export default {
  body: {
    email: joi.string().email().required(),
    password: joi.string().regex(/^.{6,}$/).required(),
    name: joi.string().regex(/^.{3,50}$/).required()
  },
  headers: {
    'content-type': joi.string().valid('application/json').required()
  },
  options : {
    allowUnknownBody: false
  }
}
