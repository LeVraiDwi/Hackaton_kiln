const token = process.env.KILN_TESTNET_API_KEY;

export default async function fetchApi(url, method = 'GET', body = null, headers = {}) {
    const defaultHeaders = {
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` ,
        ...headers
    };

    const options = {
        method,
        headers: defaultHeaders,
        ...(body ? { body: JSON.stringify(body) } : {})
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    options.signal = controller.signal;

    try {
        const response = await fetch(url, options);
        clearTimeout(timeoutId);

        if (!response.ok) {
            let errorMessage = `Erreur ${response.status}: ${response.statusText}`;
            try {
                const errorData = await response.json();
                errorMessage = errorData.message || errorMessage;
            } catch (error) {
                console.error(error);
            }
            throw new Error(errorMessage);
        }

        return await response.json();
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error('La requête a expiré après 10 secondes.');
        }
        throw new Error(`Erreur réseau ou autre: ${error.message}`);
    }
}
