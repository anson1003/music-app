package com.song.ms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.song.ms.model.Genre;
import com.song.ms.repository.GenreRepository;

@Service
public class GenreServiceImpl implements GenreService {
	
	@Autowired
	private GenreRepository genreRepository;

	@Override
	public List<Genre> getAllGenres() {
		return genreRepository.findAll();
	}

	@Override
	public Genre getGenreById(long id) {
		return genreRepository.findById(id).orElse(null);
	}

	@Override
	public void saveGenre(Genre genre) {
		
		genreRepository.save(genre);
		
	}

	@Override
	public void deleteGenreById(long id) {
		genreRepository.deleteById(id);
		
	}

}
