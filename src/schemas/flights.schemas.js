import joi from 'joi';
import JoiDate from '@joi/date';

const JoiExtended = joi.extend(JoiDate);

export const flightSchema = joi.object({
  origin: joi.number().integer().required().messages({
    "number.base": `"Origin" é um campo do tipo numerico`,
    "number.integer": `"Origin" deve ser um numero inteiro`,
    "any.required": `O campo "Origin" deve ser preenchido`
  }),
  destination: joi.number().integer().required().messages({
    "number.base": `"Destination" é um campo do tipo numerico`,
    "number.integer": `"Destination" deve ser um numero inteiro`,
    "any.required": `O campo "Destination" deve ser preenchido`
  }),
  date: JoiExtended.date().format("DD-MM-YYYY").greater('now').required().messages({
    "date.base": `"Date" deve ser uma data`,
    "date.format": `A data deve estar no formato DD-MM-AAAA`,
    "any.required": `O campo "Date" deve ser preenchido`,
    "date.greater": `A data do vôo deve ser maior que a data atual`
  })
})

export const querySchema = joi.object({
  "smaller-date": JoiExtended.date().format("DD-MM-YYYY").messages({
    "date.base": `"smaller-date" deve ser uma data`,
    "date.format": `A data inicial deve estar no formato DD-MM-AAAA`
  }),
  "bigger-date": JoiExtended.date().format("DD-MM-YYYY").messages({
    "date.base": `"bigger-date" deve ser uma data`,
    "date.format": `A data final deve estar no formato DD-MM-AAAA`
  }),
  origin: joi.any(),
  destination: joi.any()
})