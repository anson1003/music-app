package com.song.ms.service;

import java.util.List;

import com.song.ms.model.Artist;


public interface ArtistService {
	
	List<Artist> getAllArtists();
	
	Artist getArtistById(long id);
	
	void saveArtist(Artist artist);
	
	void deleteArtistById(long id);
	

}
