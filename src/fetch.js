export default function Fetch(url='', data = {}, success, method = 'GET') {
  let req = null;
  if (method.toUpperCase() === 'POST') {
    req = fetch(url, {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then((response) => response.text());
  } else if (method.toUpperCase() === 'GET') {
    req = fetch(url + data).then((response) => response.text());
  }
  req.then((responseText) => {
    let data = JSON.parse(responseText);
    if (data.status) {
      success(data.data);
    } else if (data.versionType) {
      success(data);
    }
  }).catch((error) => {
    console.warn(error);
  });
};
