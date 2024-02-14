
export const handle_error = (res,error) => {
    if(error.name === 'CONFLICT') {
      return res.status(409).send({
        success: false,
        message: error.message,
      })
    }
  }