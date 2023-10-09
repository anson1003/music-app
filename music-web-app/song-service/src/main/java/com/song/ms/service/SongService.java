package com.song.ms.service;

import java.util.List;

import com.song.ms.model.Song;

public interface SongService {
	
	List<Song> getAllSongs();

    Song getSongById(long id);

    void saveSong(Song song);

    void deleteSongById(long id);

}
