import { LRUCache } from "lru-cache";

// Configuração do rate limiter
const rateLimitOptions = {
  max: 100, // Máximo de requisições permitidas por IP
  ttl: 1000 * 60 * 60, // Tempo de vida (1 hora)
};

const rateLimitCache = new LRUCache(rateLimitOptions);

export function rateLimiter(req, res) {

    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const remaining = rateLimitCache.get(ip) || rateLimitOptions.max;
    
    if (remaining <= 0) {
        res.status(429).json({ error: "Too many requests. Please try again later." });
        return false; // Interrompe a execução
    }

    rateLimitCache.set(ip, remaining - 1, rateLimitOptions.ttl);
    res.setHeader("X-RateLimit-Remaining", remaining - 1);
    return true; // Permite a execução

}