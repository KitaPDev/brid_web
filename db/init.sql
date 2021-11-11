CREATE TABLE module (
    id SERIAL NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE content_module (
    id SERIAL NOT NULL,
    module_id INT,
    display_order INT NOT NULL,
    media_path TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (module_id) REFERENCES module (id)
        ON DELETE SET null 
);

CREATE TABLE industry (
    id SERIAL NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE content_industry (
    id SERIAL NOT NULL,
    industry_id INT,
    display_order INT NOT NULL,
    media_path TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (industry_id) REFERENCES industry (id)
        ON DELETE SET null 
);

CREATE TABLE news (
    id SERIAL NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE content_news (
    id SERIAL NOT NULL,
    news_id INT,
    display_order INT NOT NULL,
    media_path TEXT,
    youtube_embed_id TEXT,
    ts_published TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (news_id) REFERENCES news (id)
        ON DELETE SET null 
);

CREATE TABLE career (
	id SERIAL NOT NULL,
	min_year_exp NUMERIC(3,1),
	PRIMARY KEY (id)
);

CREATE TABLE contact (
	id SERIAL NOT NULL,
	first_name TEXT,
	last_name TEXT,
	organization_name TEXT,
	email TEXT,
	phone_number TEXT,
	message TEXT,
	ts_created TIMESTAMP,
	PRIMARY KEY (id)
);

CREATE TABLE language (
	id SERIAL NOT NULL,
	native_name TEXT,
	english_name TEXT,
	iso_two_letter TEXT,
	PRIMARY KEY (id),
	UNIQUE (native_name),
	UNIQUE (english_name),
	UNIQUE (iso_two_letter)
);

CREATE TABLE i18n_module (
	module_id INT NOT NULL,
	language_id INT NOT NULL,
	label TEXT NOT NULL,
	PRIMARY KEY (module_id, language_id),
	UNIQUE (label),
    FOREIGN KEY (module_id) REFERENCES module (id)
        ON DELETE SET null,
    FOREIGN KEY (language_id) REFERENCES language (id)
        ON DELETE SET null	
);

CREATE TABLE i18n_content_module (
	content_module_id INT NOT NULL,
	language_id INT NOT NULL,
	label TEXT NOT NULL,
	PRIMARY KEY (content_module_id, language_id),
	UNIQUE (label),
    FOREIGN KEY (content_module_id) REFERENCES content_module (id)
        ON DELETE SET null,
    FOREIGN KEY (language_id) REFERENCES language (id)
        ON DELETE SET null 
);

CREATE TABLE i18n_industry (
	industry_id INT NOT NULL,
	language_id INT NOT NULL,
	label TEXT NOT NULL,
	PRIMARY KEY (industry_id, language_id),
	UNIQUE (label),
	FOREIGN KEY (industry_id) REFERENCES industry (id)
		ON DELETE SET null,
    FOREIGN KEY (language_id) REFERENCES language (id)
        ON DELETE SET null
);

CREATE TABLE i18n_content_industry (
	content_industry_id INT NOT NULL,
	language_id INT NOT NULL,
	label TEXT NOT NULL,
	PRIMARY KEY (content_industry_id, language_id),
	UNIQUE (label),
    FOREIGN KEY (content_industry_id) REFERENCES content_industry (id)
        ON DELETE SET null,
    FOREIGN KEY (language_id) REFERENCES language (id)
        ON DELETE SET null
);

CREATE TABLE i18n_news (
	news_id INT NOT NULL,
	language_id INT NOT NULL,
	label TEXT NOT NULL,
	PRIMARY KEY (news_id, language_id),
	UNIQUE (label),
    FOREIGN KEY (news_id) REFERENCES news (id)
        ON DELETE SET null,
    FOREIGN KEY (language_id) REFERENCES language (id)
        ON DELETE SET null 
);

CREATE TABLE i18n_content_news (
	content_news_id INT NOT NULL,
	language_id INT NOT NULL,
	label TEXT NOT NULL,
	PRIMARY KEY (content_news_id, language_id),
	UNIQUE (label),
    FOREIGN KEY (content_news_id) REFERENCES content_news (id)
        ON DELETE SET null,
    FOREIGN KEY (language_id) REFERENCES language (id)
        ON DELETE SET null 
);

CREATE TABLE i18n_career (
	career_id INT NOT NULL,
	language_id INT NOT NULL,
	title TEXT NOT NULL,
	description TEXT,
	required_skills TEXT,
	preferred_skills TEXT,
	PRIMARY KEY (career_id, language_id),
	UNIQUE (title),
    FOREIGN KEY (career_id) REFERENCES career (id)
        ON DELETE SET null,
    FOREIGN KEY (language_id) REFERENCES language (id)
        ON DELETE SET null 
);