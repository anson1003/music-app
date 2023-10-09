package com.song.ms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.song.ms.model.Genre;

public interface GenreRepository extends JpaRepository<Genre,Long> {

}
