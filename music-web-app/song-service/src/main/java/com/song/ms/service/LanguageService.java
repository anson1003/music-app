package com.song.ms.service;

import java.util.List;

import com.song.ms.model.Language;

public interface LanguageService {
	
	 List<Language> getAllLanguages();

	    Language getLanguageById(long id);

	    void saveLanguage(Language language);

	    void deleteLanguageById(long id);

}
