package com.song.ms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.song.ms.model.Genre;
import com.song.ms.service.GenreService;

@RestController
@RequestMapping("/api/genre")
public class GenreController {
	
	@Autowired
	 private GenreService genreService;
	
//	@Autowired
//	private AlbumRepository albumRepository;
	 

	    @GetMapping
	    public ResponseEntity<List<Genre>> getAllGenres() {
	        List<Genre> genres = genreService.getAllGenres();
	        return new ResponseEntity<>(genres, HttpStatus.OK);
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Genre> getGenreById(@PathVariable long id) {
	        Genre genre = genreService.getGenreById(id);
	        if (genre != null) {
	            return new ResponseEntity<>(genre, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }

	    @PostMapping
	    public ResponseEntity<Genre> saveGenre(@RequestBody Genre genre) {
	        genreService.saveGenre(genre);
	        return new ResponseEntity<>(genre,HttpStatus.CREATED);
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteGenreById(@PathVariable long id) {
	        genreService.deleteGenreById(id);
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }
	    
	    
//	    @GetMapping("/{genreId}/albums")
//	    public ResponseEntity<List<Album>> getAlbumsByGenre(@PathVariable long genreId) {
//	        List<Album> albums = albumRepository.findByGenreGenreId(genreId);
//	        return new ResponseEntity<>(albums, HttpStatus.OK);
//	    }


}
