const API_KEY = process.env.API_KEY
const ENV_URL = process.env.BY_ID_URL
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN

export default async function handler(req, res) {

    // Get 'page' parameter from url
    const id = req.query.id;

    if (!id) {
        res.status(400).json({ error: "Parameter 'id' is mandatory." });
        return;
    }

    // Solve cors
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN)
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers','X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')

    // Execute api call
    try {
        const URL = `${ENV_URL}/${id}?api_key=${API_KEY}`
        console.log('URL: ', URL)
        
        const RESULT = await fetch(URL)
        const DATA = await RESULT.json()
        return res.status(200).json(DATA)

    } catch (error) {
        return res.status(400).json({error: "Error on req."})
    }
 
}