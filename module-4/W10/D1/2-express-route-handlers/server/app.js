// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId,
} = require("./data");

const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log("Request Body:", req.body);
  next();
});

app.get("/artists", (req, res) => {
  const artists = getAllArtists();

  // res.status(200);

  res.json(artists).status(200);
});

// phase 2
app.post("/artists", (req, res) => {
  // console.log(req.body);

  const artist = req.body;

  const newArtist = addArtist(artist);

  res.status(201);

  res.json(newArtist);
});

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log("Server is listening on port", port));
} else {
  module.exports = app;
}
