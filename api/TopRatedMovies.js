import { rateLimiter } from "./rateLimiter.js";

const API_KEY = process.env.API_KEY
const ENV_URL = process.env.TOP_RATED_MOVIES_URL;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN

export default async function handler(req, res) {

    if (!rateLimiter(req, res)) return; // Bloqueia requisições excedentes

    // Get 'page' parameter from url
    const page = req.query.page;

    if (!page) {
        res.status(400).json({ error: "Parameter 'page' is mandatory." });
        return;
    }

    // Solve cors
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN)
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers','X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')

    // Execute api call
    try {

        const URL = `${ENV_URL}?api_key=${API_KEY}&page=${page}`
        console.log('URL: ', URL)

        const RESULT = await fetch(URL)
        const DATA = await RESULT.json()
        res.status(200).json(DATA)

    } catch (error) {

        res.status(400).json({error: "Error on req."})

    }
 
}


