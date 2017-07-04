-- Connexion BD
\connect portail;
-- data programmes
INSERT INTO programmes (code, titre, total_credit)
VALUES (7316, 'Baccalaureat en Informatique et Genie Logiciel', 90);
INSERT INTO programmes (code, titre, total_credit)
VALUES (7624, 'Baccalaureat en Communication (relations humaines)', 90);
INSERT INTO programmes (code, titre, total_credit)
VALUES (6526, 'Baccalaureat en Systèmes Informatiques et Électroniques', 90);
INSERT INTO programmes (code, titre, total_credit)
VALUES (3281, 'Maitrise en Informatique', 45);
-- data trimestres
INSERT INTO trimestres (saison, annee) VALUES (1, 2015);
INSERT INTO trimestres (saison, annee) VALUES (2, 2015);
INSERT INTO trimestres (saison, annee) VALUES (3, 2015);
INSERT INTO trimestres (saison, annee) VALUES (1, 2016);
INSERT INTO trimestres (saison, annee) VALUES (2, 2016);
INSERT INTO trimestres (saison, annee) VALUES (3, 2016);
INSERT INTO trimestres (saison, annee) VALUES (1, 2017);
INSERT INTO trimestres (saison, annee) VALUES (2, 2017);
INSERT INTO trimestres (saison, annee) VALUES (3, 2017);
INSERT INTO trimestres (saison, annee) VALUES (1, 2018);
INSERT INTO trimestres (saison, annee) VALUES (2, 2018);
INSERT INTO trimestres (saison, annee) VALUES (3, 2018);
-- data cours
INSERT INTO cours (programme_id, titre, sigle, credit, prerequis)
VALUES (1, 'Projet d''analyse et de modélisation', 'INM5151', 3, 'INF1120');
INSERT INTO cours (programme_id, titre, sigle, credit, prerequis)
VALUES (1, 'Informatique et société', 'INM6000', 3, '');
INSERT INTO cours (programme_id, titre, sigle, credit, prerequis)
VALUES (1, 'Paradigmes des échanges internet', 'INF4375', 3, 'INF3180, INF2120');
INSERT INTO cours (programme_id, titre, sigle, credit, prerequis)
VALUES (1, 'Génie logiciel: conception', 'INF5153', 3, '');
INSERT INTO cours (programme_id, titre, sigle, credit, prerequis)
VALUES (1, 'Programmation I', 'INF1120', 3, '');
INSERT INTO cours (programme_id, titre, sigle, credit, prerequis)
VALUES (1, 'Programmation II', 'INF2120', 3, 'INF1120');
INSERT INTO cours (programme_id, titre, sigle, credit, prerequis)
VALUES (2, 'Communication et groupes restreints', 'COM1090', 6, '');
INSERT INTO cours (programme_id, titre, sigle, credit, prerequis)
VALUES (2, 'Approches de la communication interpersonnelle', 'COM1151', 3, 'COM3104');
INSERT INTO cours (programme_id, titre, sigle, credit, prerequis)
VALUES (2, 'Techniques d''entretien en psychosociologie', 'COM1433', 3, 'COM3104');
INSERT INTO cours (programme_id, titre, sigle, credit, prerequis)
VALUES (2, 'Communication et relations interethniques', 'COM2185', 2, '');
INSERT INTO cours (programme_id, titre, sigle, credit, prerequis)
VALUES (2, 'Communication organisationnelle', 'COM3104', 3, '');
INSERT INTO cours (programme_id, titre, sigle, credit, prerequis)
VALUES (3, 'Programmation I', 'INF1120', 3, '');
INSERT INTO cours (programme_id, titre, sigle, credit, prerequis)
VALUES (3, 'Programmation II', 'INF2120', 3, 'INF1120');
INSERT INTO cours (programme_id, titre, sigle, credit, prerequis)
VALUES (3, 'Circuits logiques', 'MIC1065', 3, '');
INSERT INTO cours (programme_id, titre, sigle, credit, prerequis)
VALUES (3, 'Analyse de circuits', 'MIC2111', 2, 'MIC1065');
INSERT INTO cours (programme_id, titre, sigle, credit, prerequis)
VALUES (3, 'Systèmes embarqués', 'MIC5111', 3, 'MIC1065, MIC5111');
INSERT INTO cours (programme_id, titre, sigle, credit, prerequis)
VALUES (4, 'Bioinformatique des structures', 'BIF7101', 3, '');
INSERT INTO cours (programme_id, titre, sigle, credit, prerequis)
VALUES (4, 'Programmation parallèle haute performance', 'INF7345', 3, 'INF4375');
INSERT INTO cours (programme_id, titre, sigle, credit, prerequis)
VALUES (4, 'Performance et simulation des réseaux', 'INF7345', 3, 'INF4375');
INSERT INTO cours (programme_id, titre, sigle, credit, prerequis)
VALUES (4, 'Apprentissage automatique', 'INF7370', 3, 'INF2120');
-- data groupe_cours
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (1, 1, 30, 1, 'Professeur Professorson', true);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (1, 2, 20, 2, 'Jacques Berger', true);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (1, 3, 40, 3, 'Professeur Professorson', true);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (2, 1, 10, 1, 'Jacques Berger', false);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (2, 2, 20, 2, 'Professeur Professorson', false);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (2, 3, 50, 2, 'Jacques Berger', true);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (3, 1, 20, 1, 'Professeur Professorson', true);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (3, 2, 20, 2, 'Jacques Berger', true);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (4, 3, 40, 3, 'Professeur Professorson', false);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (5, 1, 30, 3, 'Jacques Berger', true);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (5, 2, 20, 1, 'Professeur Professorson', true);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (6, 3, 10, 3, 'Jacques Berger', true);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (6, 3, 30, 2, 'Professeur Professorson', true);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (6, 2, 20, 1, 'Jacques Berger', true);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (7, 3, 40, 3, 'Richard Martineau', false);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (7, 1, 30, 2, 'Professeur Professorson', false);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (7, 2, 20, 1, 'Richard Martineau', false);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (8, 3, 40, 3, 'Professeur Professorson', false);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (9, 1, 50, 1, 'Richard Martineau', false);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (10, 2, 50, 2, 'Professeur Professorson', false);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (10, 3, 40, 3, 'Richard Martineau', false);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (11, 1, 20, 1, 'Professeur Professorson', false);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (11, 2, 20, 2, 'Richard Martineau', false);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (12, 3, 40, 3, 'Professeur Professorson', true);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (13, 1, 30, 1, 'Richard Martineau', true);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (13, 2, 20, 2, 'Professeur Professorson', true);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (14, 3, 40, 3, 'Tony Stark', true);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (15, 2, 50, 1, 'Bruce Wayne', true);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (15, 2, 10, 2, 'Tony Stark', true);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (16, 3, 40, 3, 'Tony Stark', true);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (16, 1, 10, 1, 'Bruce Wayne', true);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (16, 2, 20, 2, 'Tony Stark', true);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (17, 3, 30, 3, 'Bruce Banner', true);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (17, 1, 30, 2, 'Bruce Banner', true);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (17, 2, 20, 1, 'Bruce Banner', true);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (18, 3, 40, 3, 'Lois Lane', false);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (19, 2, 50, 1, 'Oliver Queen', false);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (19, 3, 40, 3, 'Lois Lane', false);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (20, 1, 10, 1, 'Lois Lane', false);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (20, 2, 20, 2, 'Clark Kent', false);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (20, 3, 10, 3, 'Peter Parker', false);
INSERT INTO groupe_cours (cours_id, trimestres_id, numero_groupe, periode_journee, professeur, atelier)
VALUES (20, 1, 40, 3, 'Barry Allen', false);
-- data etudiants
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 1, 'Arnaud', 'Dupre', 'DUPA10029407', 75);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 1, 'Francois', 'Chamberland', 'CHAF27067709', 70);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 2, 'Julien', 'Labrosse', 'LABJ24049500', 87);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 2, 'Sohpia', 'Tran', 'TRAS26589201', 64);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 3, 'Guillaume', 'Boucaud', 'BOUG23018404', 68);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 3, 'Arnaud', 'Dupre', 'DUPA10029407', 75);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
ALUES (1, 4, 'Francois', 'Chamberland', 'CHAF27067709', 70);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 4, 'Julien', 'Labrosse', 'LABJ24049500', 87);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 5, 'Sohpia', 'Tran', 'TRAS26589201', 64);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 5, 'Guillaume', 'Boucaud', 'BOUG23018404', 68);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 6, 'Arnaud', 'Dupre', 'DUPA10029407', 75);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 6, 'Francois', 'Chamberland', 'CHAF27067709', 70);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 7, 'Julien', 'Labrosse', 'LABJ24049500', 87);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 7, 'Sohpia', 'Tran', 'TRAS26589201', 64);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 8, 'Guillaume', 'Boucaud', 'BOUG23018404', 68);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 8, 'Francois', 'Chamberland', 'CHAF27067709', 70);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 9, 'Arnaud', 'Dupre', 'DUPA10029407', 75);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 9, 'Francois', 'Chamberland', 'CHAF27067709', 70);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 10, 'Julien', 'Labrosse', 'LABJ24049500', 87);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 10, 'Sohpia', 'Tran', 'TRAS26589201', 64);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 11 'Guillaume', 'Boucaud', 'BOUG23018404', 68);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 12, 'Arnaud', 'Dupre', 'DUPA10029407', 75);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 12, 'Francois', 'Chamberland', 'CHAF27067709', 70);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 13, 'Julien', 'Labrosse', 'LABJ24049500', 87);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 13, 'Sohpia', 'Tran', 'TRAS26589201', 64);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 14, 'Guillaume', 'Boucaud', 'BOUG23018404', 68);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (1, 14, 'Arnaud', 'Dupre', 'DUPA10029407', 75);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (2, 15, 'Yann', 'Savard', 'SAVY06079403', 32);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (2, 15, 'Olivier', 'Morin', 'MORO18059505', 27);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (2, 16, 'Jean-Francois', 'Penven', 'PENJ24129302', 12);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (2, 16, 'Yann', 'Savard', 'SAVY06079403', 32);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (2, 17, 'Olivier', 'Morin', 'MORO18059505', 27);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (2, 17, 'Jean-Francois', 'Penven', 'PENJ24129302', 12);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (2, 18, 'Yann', 'Savard', 'SAVY06079403', 32);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (2, 18, 'Olivier', 'Morin', 'MORO18059505', 27);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (2, 19, 'Jean-Francois', 'Penven', 'PENJ24129302', 12);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (2, 19, 'Yann', 'Savard', 'SAVY06079403', 32);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (2, 20, 'Olivier', 'Morin', 'MORO18059505', 27);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (2, 20, 'Jean-Francois', 'Penven', 'PENJ24129302', 12);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (2, 21, 'Yann', 'Savard', 'SAVY06079403', 32);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (2, 21, 'Olivier', 'Morin', 'MORO18059505', 27);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (2, 22, 'Jean-Francois', 'Penven', 'PENJ24129302', 12);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (2, 22, 'Yann', 'Savard', 'SAVY06079403', 32);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (2, 23, 'Olivier', 'Morin', 'MORO18059505', 27);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (2, 23, 'Jean-Francois', 'Penven', 'PENJ24129302', 12);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (3, 24, 'Roxanne', 'Lebel-Racicot', 'LEBR30049300', 87);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (3, 24, 'Frederic', 'Monet', 'MONF12079408', 32);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (3, 25, 'Samuel', 'Coallier', 'COAS18069409', 56);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (3, 25, 'Myriam', 'Boucher', 'BOUM23069507', 41);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (3, 26, 'Roxanne', 'Lebel-Racicot', 'LEBR30049300', 87);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (3, 26, 'Frederic', 'Monet', 'MONF12079408', 32);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (3, 27, 'Samuel', 'Coallier', 'COAS18069409', 56);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (3, 27, 'Myriam', 'Boucher', 'BOUM23069507', 41);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (3, 28, 'Roxanne', 'Lebel-Racicot', 'LEBR30049300', 87);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (3, 28, 'Frederic', 'Monet', 'MONF12079408', 32);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (3, 29, 'Samuel', 'Coallier', 'COAS18069409', 56);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (3, 29, 'Myriam', 'Boucher', 'BOUM23069507', 41);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (3, 30, 'Roxanne', 'Lebel-Racicot', 'LEBR30049300', 87);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (3, 30, 'Frederic', 'Monet', 'MONF12079408', 32);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (3, 31, 'Samuel', 'Coallier', 'COAS18069409', 56);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (3, 31 'Myriam', 'Boucher', 'BOUM23069507', 41);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (3, 32, 'Roxanne', 'Lebel-Racicot', 'LEBR30049300', 87);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (3, 32, 'Frederic', 'Monet', 'MONF12079408', 32);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (4, 33, 'Carole-Ann', 'Hebert', 'HEBC19109403', 40);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (4, 33, 'Philippe', 'Saint-Georges', 'SAIP29029501', 9);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (4, 34, 'Carole-Ann', 'Hebert', 'HEBC19109403', 40);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (4, 34, 'Philippe', 'Saint-Georges', 'SAIP29029501', 9);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (4, 35, 'Carole-Ann', 'Hebert', 'HEBC19109403', 40);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (4, 35, 'Philippe', 'Saint-Georges', 'SAIP29029501', 9);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (4, 36, 'Carole-Ann', 'Hebert', 'HEBC19109403', 40);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (4, 36, 'Philippe', 'Saint-Georges', 'SAIP29029501', 9);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (4, 37, 'Carole-Ann', 'Hebert', 'HEBC19109403', 40);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (4, 37, 'Philippe', 'Saint-Georges', 'SAIP29029501', 9);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (4, 38, 'Carole-Ann', 'Hebert', 'HEBC19109403', 40);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (4, 38, 'Philippe', 'Saint-Georges', 'SAIP29029501', 9);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (4, 39, 'Carole-Ann', 'Hebert', 'HEBC19109403', 40);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (4, 39, 'Philippe', 'Saint-Georges', 'SAIP29029501', 9);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (4, 40, 'Carole-Ann', 'Hebert', 'HEBC19109403', 40);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (4, 40, 'Philippe', 'Saint-Georges', 'SAIP29029501', 9);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (4, 41, 'Carole-Ann', 'Hebert', 'HEBC19109403', 40);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (4, 41, 'Philippe', 'Saint-Georges', 'SAIP29029501', 9);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (4, 42, 'Carole-Ann', 'Hebert', 'HEBC19109403', 40);
INSERT INTO etudiants (programme_id, groupe_cours_id, prenom, nom, code_permanent, credit_cumulees)
VALUES (4, 42, 'Philippe', 'Saint-Georges', 'SAIP29029501', 9);
-- data frais
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (1, 305.67, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (1, 46.70, 'Laboratoire');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (2, 402.23, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (2, 27.25, 'Laboratoire');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (3, 239.13, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (3, 76.80, 'Laboratoire');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (4, 700.40, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (4, 50.89, 'Laboratoire');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (5, 451.76, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (5, 46.89, 'Laboratoire');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (6, 115.90, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (6, 57.32, 'Laboratoire');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (7, 505.77, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (7, 49.90, 'Laboratoire');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (8, 409.25, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (8, 90.10, 'Laboratoire');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (9, 705.97, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (9, 41.80, 'Laboratoire');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (10, 432.41, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (10, 41.16, 'Laboratoire');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (11, 653.17, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (11, 73.53, 'Laboratoire');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (12, 514.82, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (12, 14.77, 'Laboratoire');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (13, 105.15, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (13, 17.94, 'Laboratoire');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (14, 816.62, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (14, 82.41, 'Laboratoire');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (15, 917.32, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (16, 628.24, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (17, 838.68, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (18, 569.22, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (19, 821.82, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (20, 150.91, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (21, 821.02, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (22, 152.25, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (23, 173.52, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (24, 184.53, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (24, 72.09, 'Laboratoire');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (25, 165.24, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (25, 42.42, 'Laboratoire');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (26, 616.62, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (26, 84.27, 'Laboratoire');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (27, 327.13, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (27, 53.25, 'Laboratoire');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (27, 72.14, 'Materiel');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (28, 528.17, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (28, 93.26, 'Laboratoire');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (28, 72.19, 'Materiel');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (29, 739.20, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (29, 27.28, 'Laboratoire');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (29, 72.13, 'Materiel');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (30, 520.18, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (30, 48.82, 'Laboratoire');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (30, 72.18, 'Materiel');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (31, 251.19, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (31, 28.28, 'Laboratoire');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (31, 72.59, 'Materiel');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (32, 162.19, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (32, 39.63, 'Laboratoire');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (32, 72.59, 'Materiel');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (33, 613.45, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (34, 164.33, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (35, 525.81, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (36, 156.99, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (37, 147.24, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (38, 167.72, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (39, 418.81, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (40, 319.28, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (41, 360.24, 'Enseignement');
INSERT INTO frais (groupe_cours_id, montant, description)
VALUES (42, 382.95, 'Enseignement');
-- data resultats
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 1, 1, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 1, 1, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 1, 1, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 2, 1, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 2, 1, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 2, 1, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 3, 1, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 3, 1, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 3, 1, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 4, 1, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 4, 1, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 4, 1, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 5, 1, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 5, 1, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 5, 1, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 6, 1, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 6, 1, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 6, 1, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 7, 2, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 7, 2, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 7, 2, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 8, 2, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 8, 2, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 8, 2, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 9, 2, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 9, 2, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 9, 2, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 10, 2, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 10, 2, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 10, 2, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 11, 2, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 11, 2, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 11, 2, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 12, 3, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 12, 3, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 12, 3, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 13, 3, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 13, 3, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 13, 3, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 14, 3, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 14, 3, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 14, 3, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 15, 4, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 15, 4, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 15, 4, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 16, 4, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 16, 4, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 16, 4, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 17, 4, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 19, 4, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 19, 4, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 20, 4, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 20, 4, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 20, 4, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 21, 4, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 21, 4, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 21, 4, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 22, 4, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 22, 4, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 22, 4, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 23, 4, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 23, 4, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 23, 4, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
ALUES ( 24, 5, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 24, 5, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 24, 5, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 25, 5, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 25, 5, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 25, 5, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 26, 5, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 26, 5, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 26, 5, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 27, 5, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 27, 5, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 27, 5, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 28, 5, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 28, 5, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 28, 5, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 29, 5, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 29, 5, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 29, 5, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 30, 5, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 30, 5, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 30, 5, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 31, 5, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 31, 5, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 31, 5, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 32, 5, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 32, 5, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 32, 5, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 33, 6, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 33, 6, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 33, 6, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 34, 6, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 34, 6, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 34, 6, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 35, 6, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 35, 6, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 35, 6, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 36, 6, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 36, 6, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 36, 6, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 37, 6, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 37, 6, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 37, 6, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 38, 6, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 38, 6, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 38, 6, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 39, 6, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 39, 6, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 39, 6, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 40, 6, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 40, 6, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 40, 6, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 41, 6, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 41, 6, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 41, 6, 78, 20, 'Travail Pratique');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 42, 6, 97, 40, 'Intra');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 42, 6, 58, 40, 'Final');
INSERT INTO resultats (groupe_cours_id, etudiants_id, note, ponderation, evaluation)
VALUES ( 42, 6, 78, 20, 'Travail Pratique');
