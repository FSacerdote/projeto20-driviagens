import Joi from "joi";

export const travelSchema = Joi.object({
  passengerId: Joi.number().integer().required().messages({
    "number.base": "O id do passageiro deve ser um número",
    "number.integer": "O id do passageiro deve ser um número inteiro",
    "any.required": "O campo de id do passageiro é obrigatório"
  }),
  flightId: Joi.number().integer().required().messages({
    "number.base": "O id do vôo deve ser um número",
    "number.integer": "O id do vôo deve ser um número inteiro",
    "any.required": "O campo de id do vôo é obrigatório"
  })
})