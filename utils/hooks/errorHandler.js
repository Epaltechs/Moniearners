export const responseErrorHandler = (error) => {
    console.log(error)
    if(error?.response?.status === 422){
        const errorArrays = error?.response?.data?.errors 
        if (errorArrays.length > 0) {


          let errorKeys = errorArrays.map(item => Object.keys(item)[0] + ": " + Object.values(item)[0] )
          let fields = ""
          errorKeys.map(item=> fields = fields + `${fields === "" ? '' : `,` }`+ item)
          console.log(errorArrays)
          console.log(fields)
          return fields
        }
      }

      const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

    return resMessage
}