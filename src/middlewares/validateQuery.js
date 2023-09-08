export default function validateQuery (schema) {
  return (req,res,next)=>{
      const schemaValidation = schema.validate(req.query, {abortEarly: false})
      if(schemaValidation.error){
          const errors = schemaValidation.error.details.map((detail)=> detail.message)
          return res.status(422).send(errors)
      }
      next()
  }
}