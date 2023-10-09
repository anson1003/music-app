package com.song.ms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.song.ms.model.Song;

public interface SongRepository extends JpaRepository<Song, Long> {
	
	//fetch songs by artist
	List<Song> findByArtistsArtistId(long artistId);
	
	//fetch songs by album
	List<Song> findByAlbumAlbumId(long albumId);

}
