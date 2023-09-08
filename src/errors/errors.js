function format (message){
  return {
    type: "formatError",
    message
  }
}

function conflict (resource = "Item"){
  return {
    type: "conflict",
    message: `${resource} já existe!`
  }
}

function notFound (resource = "Iten"){
  return{
    type: "notFound",
    message: `${resource} não foi encontrado!`
  }
}

function badRequest (){
  return{
    type: "badRequest",
    message: "SmallerDate deve ser menor que BiggerDate"
  }
}

export const errors = {
  format, conflict, notFound, badRequest
}