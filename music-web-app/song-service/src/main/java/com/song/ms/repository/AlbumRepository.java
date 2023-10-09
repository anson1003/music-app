package com.song.ms.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.song.ms.model.Album;

public interface AlbumRepository extends JpaRepository<Album, Long> {
	
	//Viewing Albums by Genre
//	List<Album> findByGenreGenreId(long genreId);

}
