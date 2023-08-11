import { fetch, setGlobalDispatcher, ProxyAgent } from 'undici';
import dotenv from 'dotenv';
dotenv.config();


async function fetchData(url: string) {
   const httpProxy = process.env.http_proxy || process.env.HTTP_PROXY;
    console.log("httpProxy",httpProxy )
    if (httpProxy) {
    console.log("httpProxy",httpProxy )
    setGlobalDispatcher(new ProxyAgent(httpProxy));
    }

  // 设置带凭据的代理
//   const proxyWithCredentials = 'http://user:passwd@127.0.0.1:9008'; // 替换为实际的代理地址
//   const agent = new ProxyAgent(proxyWithCredentials);
//   setGlobalDispatcher(agent);

  // 发起请求
  const ab = await fetch(url);

  // 处理响应
   
  const data = ab.body;
  return data;
   
}

console.log( fetchData('http://myip.ipip.net'))