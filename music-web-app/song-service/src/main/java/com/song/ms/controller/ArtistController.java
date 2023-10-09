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

import com.song.ms.model.Artist;
import com.song.ms.model.Song;
import com.song.ms.repository.SongRepository;
import com.song.ms.service.ArtistService;

@RestController
@RequestMapping("/api/artist")
public class ArtistController {
	
	@Autowired
	private ArtistService artistService;
	
	@Autowired
	private SongRepository songRepository;
	
	@GetMapping
	public ResponseEntity<List<Artist>> getAllArtists(){
		List<Artist> artists=artistService.getAllArtists();
		return new ResponseEntity<>(artists,HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Artist> getArtistById(@PathVariable long id){
		Artist artist=artistService.getArtistById(id);
		if(artist!=null) {
			return new ResponseEntity<>(artist,HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	 @PostMapping
	    public ResponseEntity<Artist> saveArtist(@RequestBody Artist artist) {
	        artistService.saveArtist(artist);
	        return new ResponseEntity<>(artist,HttpStatus.CREATED);
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteArtistById(@PathVariable long id) {
	        artistService.deleteArtistById(id);
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }
	    
	    
	    @GetMapping("/{artistId}/songs")
	    public ResponseEntity<List<Song>> getSongsByArtist(@PathVariable long artistId) {
	        List<Song> songs = songRepository.findByArtistsArtistId(artistId);
	        return new ResponseEntity<>(songs, HttpStatus.OK);
	    }
	

}
