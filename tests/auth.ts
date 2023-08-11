import Auth from '../src/auth';

import dotenv from 'dotenv';
dotenv.config();

(async function start() {
    const email = process.env.OPENAI_EMAIL;
    const password = process.env.OPENAI_PASSWORD;
    const httpProxy = process.env.http_proxy || process.env.HTTP_PROXY;
    console.log(email, password , httpProxy );
    const openai = new Auth(email, password);
    console.log(await openai.getAccessToken());
    console.log(await openai.getPuid());
})();
