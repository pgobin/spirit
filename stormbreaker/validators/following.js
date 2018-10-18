import joi from 'joi'

export default {
  body: {
    id: joi.string().required(),
    unfollow: joi.bool()
  },
  headers: {
    'content-type': joi.string().valid('application/json').required()
  },
  options : {
    allowUnknownBody: false
  }
}
