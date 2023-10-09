package com.song.ms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.song.ms.model.Artist;

public interface ArtistRepository extends JpaRepository<Artist,Long> {

}
