import joi from 'joi';
import JoiDate from '@joi/date';

const JoiExtended = joi.extend(JoiDate);

export const flightSchema = joi.object({
  origin: joi.number().integer().required(),
  destination: joi.number().integer().required(),
  date: JoiExtended.date().format("DD-MM-YYYY").greater('now').required()
})