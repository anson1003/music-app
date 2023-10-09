drop table if exists ARTISTS_TABLE CASCADE;
drop table if exists GENRES_TABLE CASCADE;

create table ARTISTS_TABLE (artist_id varchar(255) not null, artist_name varchar(255));
create table GENRES_TABLE (genre_id varchar(255) not null,genre_name varchar(255));

INSERT INTO ARTISTS_TABLE (artist_id, artist_name) VALUES
(1, 'John Doe'),
(2, 'Jane Smith'),
(3, 'Bob Johnson');


INSERT INTO GENRES_TABLE (genre_id,genre_name) VALUES
    (1, 'Pop'),
    (2, 'Rock'),
    (3, 'Hip-Hop/Rap'),
    (4, 'Electronic/Dance'),
    (5, 'R&B/Soul'),
    (6, 'Country'),
    (7, 'Jazz'),
    (8, 'Classical'),
    (9, 'Blues'),
    (10, 'Folk'),
    (11, 'Instrumental'),
    (12, 'Metal'),
    (13, 'Gospel'),
    (14, 'Funk'),
    (15, 'Punk');



