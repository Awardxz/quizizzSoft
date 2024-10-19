const axios = require('axios')


async function getHashCode(id) {
    let data = JSON.stringify({
      roomCode: `${id}`,
    });
  
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://game.quizizz.com/play-api/v5/checkRoom",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0",
        Accept: "application/json",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Content-Type": "application/json",
        Credentials: "include",
        "x-q-traceid":
          "Root=1-67102301-dc3fa75aa32c0b60f7ad856c;Parent=d97379857912a3a9;Sampled=1",
        "X-Amzn-Trace-Id":
          "Root=1-67102301-dc3fa75aa32c0b60f7ad856c;Parent=d97379857912a3a9;Sampled=1",
        "x-quizizz-uid": "8c054cd1-406a-4e7d-ab23-21e8d9ea51df",
        "x-csrf-token": "uwovIJgu-eGLKMGTccHbVzTD3iEIGWYDFnVc",
        "experiment-name": "main_main",
        Origin: "https://quizizz.com",
        DNT: "1",
        "Sec-GPC": "1",
        Connection: "keep-alive",
        Referer: "https://quizizz.com/",
        Cookie:
          "suid=e587ba69-4d22-4d89-bd59-01ed015588d7; _ga_NYFWYHHSPY=GS1.1.1729110783.1.0.1729110783.60.0.0; _ga=GA1.1.922355442.1729110783; _ga_N10L950FVL=GS1.1.1729110783.1.0.1729110783.0.0.0",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        TE: "trailers",
      },
      data: data,
    };
  
    try {
      const response = await axios.request(config);
      const a = response.data;
      const hash = a.room.hash;
      return hash;
    } catch (error) {
      console.error(error);
    }
  }
  
module.exports = { getHashCode }