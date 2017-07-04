-- Connexion BD
\connect portail;
-- Supprime les tables existantes
DROP TABLE IF EXISTS resultats;
DROP TABLE IF EXISTS frais;
DROP TABLE IF EXISTS etudiants;
DROP TABLE IF EXISTS groupe_cours;
DROP TABLE IF EXISTS cours;
DROP TABLE IF EXISTS trimestres;
DROP TABLE IF EXISTS programmes;

-- Creation des tables et dependances
CREATE TABLE programmes (
  id serial primary key,
  code int,
  titre text,
  total_credit int
);

CREATE TABLE trimestres (
  id serial primary key,
  saison int,
  annee int
);

CREATE TABLE cours (
  id serial primary key,
  programme_id int references programmes(id),
  titre text,
  sigle text,
  credit int,
  prerequis text
);

CREATE TABLE groupe_cours (
  id serial primary key,
  cours_id int references cours(id),
  trimestres_id int references trimestres(id),
  numero_groupe int,
  periode_journee int,
  professeur text,
  atelier boolean
);

CREATE TABLE etudiants (
  id serial primary key,
  programme_id int references programmes(id),
  groupe_cours_id int references groupe_cours(id),
  prenom text,
  nom text,
  code_permanent text,
  credit_cumulees int
);

CREATE TABLE frais (
  id serial primary key,
  groupe_cours_id int references groupe_cours(id),
  montant numeric,
  description text
);

CREATE TABLE resultats (
  id serial primary key,
  groupe_cours_id int references groupe_cours(id),
  etudiants_id int references etudiants(id),
  note int,
  ponderation int,
  evaluation text
);
