package com.song.ms.service;

import java.util.List;

import com.song.ms.model.Album;

public interface AlbumService {

	List<Album> getAllAlbums();

	Album getAlbumById(long id);

	void saveAlbum(Album album);

	void deleteAlbumById(long id);

}
