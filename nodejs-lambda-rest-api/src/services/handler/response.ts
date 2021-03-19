export function processAsyncResponse(res, err) {
    let response;
    if (err) {
        response = processError(err);
    } else {
        response = processResult(res);
    }
    return response;
}


export function processError(err) {
    console.log(err);
    const statusCode = err.statusCode || err.status || 500;
    const headers = {
        'Content-Type': 'application/problem+json',
    };
    const body = {
        error: {
            detail: err.message,
            status: statusCode,
        }
    };
    return {
        headers,
        statusCode,
        body: JSON.stringify(body),
    };
}


export function processResult(res) {
    const statusCode = 200;
    const headers = {
        'Content-Type': 'application/json',
    };
    const body = {
        data: res,
    };
    return {
        headers,
        statusCode,
        body: JSON.stringify(body),
    };
}
