package com.song.ms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.song.ms.model.Song;
import com.song.ms.repository.SongRepository;

@Service
public class SongServiceImpl implements SongService {
	
	@Autowired
	private SongRepository songRepository;

	@Override
	public List<Song> getAllSongs() {
		return songRepository.findAll();
	}

	@Override
	public Song getSongById(long id) {
		return songRepository.findById(id).orElse(null);
	}

	@Override
	public void saveSong(Song song) {
		
		songRepository.save(song);
		
	}

	@Override
	public void deleteSongById(long id) {
		songRepository.deleteById(id);
		
	}

}
