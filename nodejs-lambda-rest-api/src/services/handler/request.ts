export function getBody(event) {
    return JSON.parse(event.body);
}


export function getQueryStringParams(event) {
    return event.queryStringParameters;
}
