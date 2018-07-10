'use strict';

const uuidv4 = require('uuid/v4'),
    prefix = /^\/getuid\//,
    macro = /\$UID/,
    dspCookie = 'dsp_uid',
    domain = '.example.com',
    cacheMaxAge = 60 * 60;  // in seconds, 1 hour = 60 min * 60 seconds


exports.handler = (event, context, responseCallback) => {
    const request = event.Records[0].cf.request,
        requestURI = request.uri;

    if (!(prefix.test(requestURI) && macro.test(requestURI))) {
        responseCallback(null, {
            status: '400',
            statusDescription: 'Invalid Request'
        });
    }

    let receivedDspUID = getUidValue(request.headers.cookie),
        dspUID = receivedDspUID || uuidv4(),
        redirectAddress = requestURI.replace(prefix, '').replace(macro, dspUID),
        cacheControl;

    if (!receivedDspUID) {
        // Do not cache the response when the browser doesn't have a cookie set
        // Caching the response in CDN would cause all new users to receive the same dspID
        cacheControl = [ {
            key: 'Cache-Control',
            value: 'no-cache'
        } ];
    } else {
        // Cache the response based on cookie
        cacheControl = [ {
            key: 'Cache-Control',
            value: 'max-age=' + cacheMaxAge
        } ];
    }
    context.callbackWaitsForEmptyEventLoop = false;
    responseCallback(null, {
        status: '301',
        headers: {
            location: [ {
                key: 'Location',
                value: redirectAddress
            } ],
            'set-cookie': [ {
                key: 'Set-Cookie',
                value: buildUidCookie(dspUID, 90)
            } ],
            'cache-control': cacheControl
        }
    });
};

function getUidValue(cookie) {
    if (cookie === undefined) {
        return null;
    }
    var dspUID = null;

    cookie = cookie[0].value;
    cookie && cookie.split(';').forEach(function(cookie) {
        let chunks = cookie.split('='),
            key = chunks.shift().trim();
        if (key === dspCookie) {
            dspUID = decodeURI(chunks.join('='));
        }
    });

    return dspUID;
}

function buildUidCookie(uid, ageDays) {
    var key = dspCookie,
        path = '/',
        maxAge = (ageDays || 1) * 24 * 60 * 60,
        expires = new Date(new Date().getTime() + parseInt(maxAge) * 1000),  // Milliseconds
        cookieParts = [
            key + '=' + encodeURIComponent(uid),
            'path=' + path,
            'domain=' + domain,
            'expires=' + expires.toUTCString(),
            'Secure'
        ]

    return cookieParts.join('; ');
}