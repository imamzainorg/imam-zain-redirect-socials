const INTITUTION_SOCIALS = "https://imam-zain-institution.carrd.co/";
const MAGAZINE_SOCIALS = "https://imam-zain-institution.carrd.co/";

exports.handler = async (event, context) => {
    try {
        // Validate HTTP method
        if (event.httpMethod !== 'GET') {
            return { statusCode: 405, body: 'Method Not Allowed' };
        }

        // Check if request path is for /magazine
        if (event.path === '/magazine') {
            return {
                statusCode: 302,
                headers: {
                    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
                    'X-Content-Type-Options': 'nosniff',
                    'X-Frame-Options': 'DENY',
                    'X-XSS-Protection': '1; mode=block',
                    'Referrer-Policy': 'strict-origin-when-cross-origin',
                    Location: MAGAZINE_SOCIALS
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
                Location: INTITUTION_SOCIALS
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
