import joi from "joi"

export const citySchema = joi.object({
  name: joi.string().min(2).max(50).required().messages({
    "string.base": `"Name" é um campo de texto`,
    "string.min": `"Name" deve ter ao menos 2 caracteres`,
    "string.max": `"Name" deve ter no máximo 50 caracteres`,
    "any.required": `O campo "Name" é obrigatório`,
  }),
})