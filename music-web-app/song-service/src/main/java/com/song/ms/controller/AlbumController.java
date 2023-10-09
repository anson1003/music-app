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

import com.song.ms.model.Album;
import com.song.ms.model.Song;
import com.song.ms.repository.SongRepository;
import com.song.ms.service.AlbumService;

@RestController
@RequestMapping("/api/albums")
public class AlbumController {
	
	@Autowired
	private AlbumService albumService;
	
	@Autowired
	private SongRepository songRepository;

	    @GetMapping
	    public ResponseEntity<List<Album>> getAllAlbums() {
	        List<Album> albums = albumService.getAllAlbums();
	        return new ResponseEntity<>(albums, HttpStatus.OK);
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Album> getAlbumById(@PathVariable long id) {
	        Album album = albumService.getAlbumById(id);
	        if (album != null) {
	            return new ResponseEntity<>(album, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }

	    @PostMapping
	    public ResponseEntity<Album> saveAlbum(@RequestBody Album album) {
	        albumService.saveAlbum(album);
	        return new ResponseEntity<>(album,HttpStatus.CREATED);
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteAlbumById(@PathVariable long id) {
	        albumService.deleteAlbumById(id);
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }
	    
	    @GetMapping("/{albumId}/songs")
	    public ResponseEntity<List<Song>> getSongsByAlbum(@PathVariable long albumId) {
	        List<Song> songs = songRepository.findByAlbumAlbumId(albumId);
	        return new ResponseEntity<>(songs, HttpStatus.OK);
	    }
	    
}
