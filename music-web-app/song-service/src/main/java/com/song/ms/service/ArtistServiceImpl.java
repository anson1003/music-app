package com.song.ms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.song.ms.model.Artist;
import com.song.ms.repository.ArtistRepository;

@Service
public class ArtistServiceImpl implements ArtistService {
	
	@Autowired
	private ArtistRepository artistRepository;

	@Override
	public List<Artist> getAllArtists() {

		return artistRepository.findAll();
	}

	@Override
	public Artist getArtistById(long id) {
		
		return artistRepository.findById(id).orElse(null);
	}

	@Override
	public void saveArtist(Artist artist) {
		artistRepository.save(artist);
		
	}

	@Override
	public void deleteArtistById(long id) {
		artistRepository.deleteById(id);
		
	}

}
