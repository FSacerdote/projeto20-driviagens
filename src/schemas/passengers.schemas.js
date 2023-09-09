import joi from "joi"

export const passengerSchema = joi.object({
  firstName: joi.string().min(2).max(100).required().messages({
    "string.base": "first name é do tipo texto",
    "string.min": "first name deve ter pelo menos 2 caracteres",
    "string.max": "first name deve ter no máximo 100 caracteres",
    "any.required": "O campo first name é obrigatório"
  }),
  lastName: joi.string().min(2).max(100).required().messages({
    "string.base": "last name é do tipo texto",
    "string.min": "last name deve ter pelo menos 2 caracteres",
    "string.max": "last name deve ter no máximo 100 caracteres",
    "any.required": "O campo last name é obrigatório"
  }),
})