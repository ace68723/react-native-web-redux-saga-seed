export const getWhslSku = async () => {
  try {
    const url = `https://google.ca`
    let options = {
        method: 'GET',
        headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
    }
    const response = await fetch(url, options)
    return response.json()
  } catch (e) {
    console.log(e)
  }
}
