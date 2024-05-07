export const fetchData = async (artist, track) => {
  const token = window.localStorage.getItem("token");
  const searchParams = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  const searchQuery = track
    ? `track:${encodeURIComponent(track)}`
    : encodeURIComponent(artist);

  const [trackPromise, artistPromise] = track
    ? [fetchTrackData(searchQuery, searchParams), Promise.resolve({})]
    : [fetchSongData(searchQuery, searchParams), Promise.resolve({})];

  const [trackData, artistData] = await Promise.all([
    trackPromise,
    artistPromise,
  ]);

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
    artist: data.tracks.items[0].artists[0].name,
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
