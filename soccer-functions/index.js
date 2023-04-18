const functions = require('@google-cloud/functions-framework');
const axios = require('axios')

// TODO get from environment or db
const league = 'bl1'
const season = '2022'

functions.http('load-openliga-data', async (req, res) => {
  console.log('load team data called')
  const teamResponse = await axios.get(`https://www.openligadb.de/api/getavailableteams/${league}/${season}`)
  const teams = teamResponse.data
  for (const team of teams) {
    // TODO store the teams data in nosql database (firestore)
    console.log(team)
  }
  const matchResponse = await  axios.get(`https://www.openligadb.de/api/getmatchdata/${league}/${season}`)
  const matches = matchResponse.data
  let message = `Loaded matches ${matches.length} from OpenLigaDB`
  for (const match of matches) {
    console.log(matches)
  }
  res.send({status:'OK', message: message })
})