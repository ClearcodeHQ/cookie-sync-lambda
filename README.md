# Lambda Edge Cookie Sync

A proof of concept of using AWS Lambda Edge for redirect logic of cookie syncing endpoint.
Created for a AWS blog post available here https://aws.amazon.com/blogs/networking-and-content-delivery/leveraging-lambda-at-edge-for-adtech-cookie-syncing-at-the-edge/

## Running locally

* Install Node.js 6
* Install dependencies `npm install .`

Test with different event contents

    ./node_modules/.bin/lambda-local -f index.js -e event.json
    ./node_modules/.bin/lambda-local -f index.js -e event_nocookie.json

## Running in AWS

Set up Lambda function and CloudFront following the instructions in the blog post.
Use the console snippets or your browser for tests.

Default response

    curl -v 'https://[DISTRIBUTION_ADDRESS]/pixel.gif';

Creating new cookie identifier when no cookie is present

    curl -v 'https://[DISTRIBUTION_ADDRESS]/getuid/https://id.dmp.com/dsp_uid/$UID';


Extending lifespan of existing cookie

    curl -v 'https://[DISTRIBUTION_ADDRESS]/getuid/https://id.dmp.com/dsp_uid/$UID' \
        -H 'Cookie: dsp_uid=93fcefd8-d5ea-40e8-9eb1-dca37e850cc5;';

Author: Z. Hartleb
