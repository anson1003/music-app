package com.song.ms.service;

import java.util.List;

import com.song.ms.model.Genre;

public interface GenreService {

	List<Genre> getAllGenres();

	Genre getGenreById(long id);

	void saveGenre(Genre genre);

	void deleteGenreById(long id);

}
