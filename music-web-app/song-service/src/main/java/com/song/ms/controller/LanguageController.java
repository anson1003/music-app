package com.song.ms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.song.ms.model.Language;
import com.song.ms.service.LanguageService;


@RestController
@RequestMapping("/api/language")
public class LanguageController {
@Autowired
	    private LanguageService languageService;


	    @GetMapping
	    public ResponseEntity<List<Language>> getAllLanguages() {
	        List<Language> languages = languageService.getAllLanguages();
	        return new ResponseEntity<>(languages, HttpStatus.OK);
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Language> getLanguageById(@PathVariable long id) {
	        Language language = languageService.getLanguageById(id);
	        if (language != null) {
	            return new ResponseEntity<>(language, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }

	    @PostMapping
	    public ResponseEntity<Language> saveLanguage(@RequestBody Language language) {
	        languageService.saveLanguage(language);
	        return new ResponseEntity<>(language,HttpStatus.CREATED);
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteLanguageById(@PathVariable long id) {
	        languageService.deleteLanguageById(id);
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }
	}

