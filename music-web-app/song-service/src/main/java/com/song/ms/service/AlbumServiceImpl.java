package com.song.ms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.song.ms.model.Album;
import com.song.ms.repository.AlbumRepository;

@Service
public class AlbumServiceImpl implements AlbumService{

	@Autowired
	private AlbumRepository albumRepository;

    @Override
    public List<Album> getAllAlbums() {
        return albumRepository.findAll();
    }

    @Override
    public Album getAlbumById(long id) {
        return albumRepository.findById(id).orElse(null);
    }

    @Override
    public void saveAlbum(Album album) {
        albumRepository.save(album);
    }

    @Override
    public void deleteAlbumById(long id) {
        albumRepository.deleteById(id);
    }
}
