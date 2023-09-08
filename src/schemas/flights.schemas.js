import joi from 'joi';
import JoiDate from '@joi/date';

const JoiExtended = joi.extend(JoiDate);

export const flightSchema = joi.object({
  origin: joi.number().integer().required(),
  destination: joi.number().integer().required(),
  date: JoiExtended.date().format("DD-MM-YYYY").greater('now').required()
})

export const querySchema = joi.object({
  "smaller-date": JoiExtended.date().format("DD-MM-YYYY"),
  "bigger-date": JoiExtended.date().format("DD-MM-YYYY"),
  origin: joi.any(),
  destination: joi.any()
})