const axios = require('axios');



async function getAnswers(gameId) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://quizizz.com/_api/gameMain/v2/game/${gameId}/questions`,
        headers: { 
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0', 
          'Accept': 'application/json, text/plain, */*', 
          'Accept-Language': 'en-US,en;q=0.5', 
          'Accept-Encoding': 'gzip, deflate, br, zstd', 
          'x-q-traceid': 'Root=1-67141138-4298e50ce699e8684c7d11d7;Parent=437b2f832163d2c4;Sampled=1', 
          'X-Amzn-Trace-Id': 'Root=1-67141138-4298e50ce699e8684c7d11d7;Parent=437b2f832163d2c4;Sampled=1', 
          'x-q-request-context-path': 'ReportPagePlayersView', 
          'sentry-trace': '731703630baf40e4a74cb1d35e787a53-a3ce12d8352d7d22-0', 
          'baggage': 'sentry-environment=production,sentry-release=45e1504fc2e271848fa245cc7de28c74f00ae3cb,sentry-public_key=f4055af1be6347b5a3b645683a6b50ff,sentry-trace_id=731703630baf40e4a74cb1d35e787a53,sentry-sample_rate=0.05,sentry-transaction=admin-reports-gameid-selectedTabId,sentry-sampled=false', 
          'DNT': '1', 
          'Sec-GPC': '1', 
          'Connection': 'keep-alive', 
          'Referer': 'https://quizizz.com/admin/reports/67140b92a1ba191e272e9e06/questions', 
          'Cookie': 'quizizz_uid=85a26e01-7e2e-4ec7-b123-58813dcb2d09; QUIZIZZ_EXP_SLOT=19; QUIZIZZ_EXP_NAME=main_main; QUIZIZZ_EXP_LEVEL=live; QUIZIZZ_EXP_VERSION=v2; locale=en; _sid=vJKz9p_Yw1mi4IHimFxJ9e0SrgDi1MJ4FMlsfXlHS7xf_8vjNo4lBxOMR1oQx9C_Vo6-mSBeXLkrOvb5ktNGJ9gum5atVFw.C1XOrXMfkXH5IMQk-Et3pg.1JQviUDF1cE_ckZY; ab.storage.userId.fda15891-26c0-43f0-aa55-6f8d885d4a4c=g^%^3A6527e0374ac38eea64bf7c00^%^7Ce^%^3Aundefined^%^7Cc^%^3A1729110699404^%^7Cl^%^3A1729366880912; ab.storage.sessionId.fda15891-26c0-43f0-aa55-6f8d885d4a4c=g^%^3A6b324c13-6ebc-7d14-1941-d7e2341c5fdf^%^7Ce^%^3A1729375574027^%^7Cc^%^3A1729366880912^%^7Cl^%^3A1729368374027; ab.storage.deviceId.fda15891-26c0-43f0-aa55-6f8d885d4a4c=g^%^3A0c544e8a-2f7e-878b-dd11-d3bb7035f8f0^%^7Ce^%^3Aundefined^%^7Cc^%^3A1729110699404^%^7Cl^%^3A1729366880912; _csrf=VANwz_a9qbBvbmwb3VxHWp95; x-csrf-token=3MVqKGh9-zqRqSJuN0yNviFQpQBMpWscKH7k; nps_in_progress=2024-10-19T20:04:08.202Z; suid=101cdfd3-499f-4626-94fc-a177efb447bc', 
          'Sec-Fetch-Dest': 'empty', 
          'Sec-Fetch-Mode': 'cors', 
          'Sec-Fetch-Site': 'same-origin', 
          'If-None-Match': 'W/ba7c-hhHpaTkExxfWVi5nHeRiNInKgZE', 
          'TE': 'trailers'
        }
      };
      
      try {
        const response = await axios.request(config);
        const a = response.data;
        const answers = a.data.questions
        return answers
      } catch (error) {
        console.error(error)
      }
      
}


module.exports = { getAnswers }