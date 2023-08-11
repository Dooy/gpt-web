import { fetch, setGlobalDispatcher, ProxyAgent } from 'undici';

const httpProxy = process.env.http_proxy || process.env.HTTP_PROXY;
console.log("httpProxy",httpProxy )
if (httpProxy) {
  console.log("httpProxy",httpProxy )
  setGlobalDispatcher(new ProxyAgent(httpProxy));
}

export default fetch;
