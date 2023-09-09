import { errors } from "../errors/errors.js"

export default function validateSchema (schema) {
  return (req,res,next)=>{
      const schemaValidation = schema.validate(req.body, {abortEarly: false})
      if(schemaValidation.error){
          let errorMessage = ""
          schemaValidation.error.details.forEach((detail) => errorMessage += detail.message + " ")
          throw errors.format(errorMessage)
      }
      next()
  }
}