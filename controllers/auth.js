const auth = () => {

  // login function example
  const login = async (req, res) => {
    try {
      const reqObject = req.body // receive body 

      // check user or check authen from database something
      const data = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            loginDateTime: Date.now(),
            request: {
              ...reqObject
            }
          })
        })
      })

      //return response success to requester
      return res.status(200).send({
        status: 200,
        result: {
          ...data
        }
      })
    } catch (error) {
      //return response error to requester
      return res.status(500).send({
        status: 500,
        error
      })
    }
  }

  return {
    login
  }
}

module.exports = auth