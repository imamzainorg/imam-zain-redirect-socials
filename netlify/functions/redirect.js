const INTITUTION_SOCIALS = "https://imamzain.org/links";
const MAGAZINE_SOCIALS = "https://imam-zain-institution-magazine.carrd.co/";

const NEW_MERGED = "https://imamzainorg.carrd.co/"

exports.handler = async (event, context) => {
    try {
        // Validate HTTP method
        if (event.httpMethod !== 'GET') {
            return { statusCode: 405, body: 'Method Not Allowed' };
        }

        console.log(event.path);
        // Check if request path is for /magazine
        if (event.path === '/.netlify/functions/redirect/magazine') {
            return {
                statusCode: 302,
                headers: {
                    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
                    'X-Content-Type-Options': 'nosniff',
                    'X-Frame-Options': 'DENY',
                    'X-XSS-Protection': '1; mode=block',
                    'Referrer-Policy': 'strict-origin-when-cross-origin',
                    // Location: MAGAZINE_SOCIALS
                    Location: NEW_MERGED
                }
            };
        }

        // Return the redirection response with security headers
        return {
            statusCode: 302,
            headers: {
                'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY',
                'X-XSS-Protection': '1; mode=block',
                'Referrer-Policy': 'strict-origin-when-cross-origin',
                // Location: INTITUTION_SOCIALS
                Location: NEW_MERGED
            }
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: 'Internal Server Error'
        };
    }
};
