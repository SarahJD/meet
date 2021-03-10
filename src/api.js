const checkToken = async (accessToken) => {
  const result = await fetch (
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .catch((error) => error.json());

    return result.error ? false : true;
};

const getAccessToken = async () => {
  const accessToken = await localStorage.getItem('access_token');
  const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || !tokenCheck) {
    await localStorage.removeItem('access_token');
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get('code');
    if (!code) {
      const results = await axios.get('YOUR API getAuth ENDPOINT HERE');
      const { authUrl } = results.data;
      return (window.location.href = authUrl)
    }
    return code && getToken(code);
  }
  return accessToken;
};


export default checkToken;