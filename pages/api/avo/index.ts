import { IncomingMessage, ServerResponse } from 'http'
import DB from '@database'
import enablePublicAccess from '@cors'

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
  try {
   
    await enablePublicAccess(req, res)

    const db = new DB()
    const allEntries = await db.getAll()
    const length = allEntries.length

    // next ofrece ghelpers como lo hace express
    // https://nextjs.org/docs/api-routes/response-helpers
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.end(JSON.stringify({ length, data: allEntries }))
  } catch (e) {
    console.error(e)
    res.statusCode = 500
    res.end(
      JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
    )
  }
}

export default allAvos
