const varParams = {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },

  body:
    "grant_type=client_credentials&client_id=" +
    import.meta.env.VITE_CLIENT_ID +
    "&client_secret=" +
    import.meta.env.VITE_SECRET,
};

export const getToken = async () => {
  const response = await fetch(
    "https://accounts.spotify.com/api/token",
    varParams
  );
  const data = await response.json();
  window.localStorage.setItem("token", data.access_token);
};

export const fetchData = async (artist, track) => {
  const token = window.localStorage.getItem("token");
  const searchParams = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  const searchQuery = track ? `track:${track}%20artist:${artist}` : artist;
  console.log(searchQuery);

  const [trackPromise, artistPromise] =
    track !== null
      ? [fetchTrackData(searchQuery, searchParams), Promise.resolve({})]
      : [fetchSongData(searchQuery, searchParams), Promise.resolve({})];

  const [trackData, artistData] = await Promise.all([
    trackPromise,
    artistPromise,
  ]);
  console.log(trackData, { ...artistData });

  return {
    ...trackData,
    ...artistData,
  };
};

const fetchTrackData = async (searchQuery, searchParams) => {
  const url = `https://api.spotify.com/v1/search?q=${searchQuery}&type=track&limit=1`;

  const response = await fetch(url, searchParams);

  const data = await response.json();

  return {
    preview: data.tracks.items[0].preview_url,
  };
};

const fetchSongData = async (searchQuery, searchParams) => {
  const url = `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist&limit=1`;

  const response = await fetch(url, searchParams);

  const data = await response.json();

  return {
    image: data.artists.items[0].images[1],
    artist: data.artists.items[0].name,
  };
};
