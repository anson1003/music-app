package com.song.ms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.song.ms.model.Language;
import com.song.ms.repository.LanguageRepository;

@Service
public class LanguageServiceImpl implements LanguageService {

	 @Autowired
	 private LanguageRepository languageRepository;

	    @Override
	    public List<Language> getAllLanguages() {
	        return languageRepository.findAll();
	    }

	    @Override
	    public Language getLanguageById(long id) {
	        return languageRepository.findById(id).orElse(null);
	    }

	    @Override
	    public void saveLanguage(Language language) {
	        languageRepository.save(language);
	    }

	    @Override
	    public void deleteLanguageById(long id) {
	        languageRepository.deleteById(id);
	    }

}
