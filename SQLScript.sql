-- À faire dans le compte admin / sys 
CREATE USER RESTTP3 IDENTIFIED BY oracle DEFAULT TABLESPACE
users QUOTA UNLIMITED ON users;
GRANT CREATE SESSION, CREATE TABLE, CREATE PROCEDURE,
CREATE VIEW, CREATE SEQUENCE, CREATE TRIGGER,
COMMENT ANY TABLE TO RESTTP3;
grant dba to resttp3;

-- À faire dans compte RESTTP3
BEGIN
 ORDS.enable_schema(
 p_enabled => TRUE,
 p_schema => 'RESTTP3',
 p_url_mapping_type => 'BASE_PATH',
 p_url_mapping_pattern => 'tp3', --premiere partie url pour interroger les données
 p_auto_rest_auth => FALSE
 );
 COMMIT;
END;
/
-- Table de test :
CREATE TABLE EMP (
 EMPNO NUMBER(4,0), 
 ENAME VARCHAR2(10 BYTE), 
 JOB VARCHAR2(9 BYTE), 
 MGR NUMBER(4,0), 
 HIREDATE DATE, 
 SAL NUMBER(7,2), 
 COMM NUMBER(7,2), 
 DEPTNO NUMBER(2,0), 
 CONSTRAINT PK_EMP PRIMARY KEY (EMPNO)
 );
 ALTER SESSION SET NLS_LANGUAGE = 'ENGLISH';
 
 insert into EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values 
(7369,'SMITH','CLERK',7902,to_date('17-DEC-80','DD-MON-RR'),800,null,20);

BEGIN
 ORDS.enable_object (
 p_enabled => TRUE,
 p_schema => 'RESTTP3',
 p_object => 'EMP',
 p_object_type => 'TABLE',
 p_object_alias => 'employees' --seconde partie du URL
 );
 
 COMMIT;
END;
/
-- Creations tables:

CREATE TABLE cartegraphique (
    cartegraphique_id          NUMBER NOT NULL,
    cartegraphique_nom         VARCHAR2(100) NOT NULL,
    cartegraphique_description VARCHAR2(2000),
    cartegraphique_prix        NUMBER NOT NULL,
    cartegraphique_vram        NUMBER NOT NULL
);

ALTER TABLE cartegraphique ADD CONSTRAINT cartegraphique_pk PRIMARY KEY ( cartegraphique_id );

CREATE TABLE cartemere (
    cartemere_id          NUMBER NOT NULL,
    cartemere_nom         VARCHAR2(100) NOT NULL,
    cartemere_description VARCHAR2(2000),
    cartemere_maxram      NUMBER NOT NULL,
    cartemere_prix        NUMBER NOT NULL
);

ALTER TABLE cartemere ADD CONSTRAINT cartemere_pk PRIMARY KEY ( cartemere_id );

CREATE TABLE ordinateur (
    ordinateur_id                    NUMBER NOT NULL,
    ordinateur_nom                   VARCHAR2(100) NOT NULL,
    ordinateur_description           VARCHAR2(2000),
    ordinateur_prix                  NUMBER NOT NULL,
    cartemere_cartemere_id           NUMBER NOT NULL, 
--  ERROR: Column name length exceeds maximum allowed length(30) 
    cg_cartegraphique_id NUMBER NOT NULL,
    stockage_stockage_id             NUMBER NOT NULL,
    ram_ram_id                       NUMBER NOT NULL,
    processeur_processeur_id         NUMBER NOT NULL
);

ALTER TABLE ordinateur ADD CONSTRAINT ordinateur_pk PRIMARY KEY ( ordinateur_id );

CREATE TABLE processeur (
    processeur_id            NUMBER NOT NULL,
    processeur_nombrecoeurs  NUMBER NOT NULL,
    processeur_nombrethreads NUMBER NOT NULL,
    processeur_prix          NUMBER NOT NULL,
    processeur_description   VARCHAR2(2000),
    processeur_nom           VARCHAR2(100) NOT NULL
);

ALTER TABLE processeur ADD CONSTRAINT processeur_pk PRIMARY KEY ( processeur_id );

CREATE TABLE ram (
    ram_id          NUMBER NOT NULL,
    ram_nom         VARCHAR2(100) NOT NULL,
    ram_description VARCHAR2(2000),
    ram_prix        NUMBER NOT NULL,
    ram_puissance   NUMBER NOT NULL,
    ram_nombregb    NUMBER NOT NULL,
    ram_type        VARCHAR2(10) NOT NULL
);

ALTER TABLE ram ADD CONSTRAINT ram_pk PRIMARY KEY ( ram_id );

CREATE TABLE stockage (
    stockage_id          NUMBER NOT NULL,
    stockage_nom         VARCHAR2(100) NOT NULL,
    sotckage_description VARCHAR2(2000),
    stockage_prix        NUMBER NOT NULL,
    stockage_type        VARCHAR2(10) NOT NULL,
    stockage_vitesse     NUMBER NOT NULL
);

ALTER TABLE stockage ADD CONSTRAINT stockage_pk PRIMARY KEY ( stockage_id );

ALTER TABLE ordinateur
    ADD CONSTRAINT ordinateur_cartegraphique_fk FOREIGN KEY ( cg_cartegraphique_id )
        REFERENCES cartegraphique ( cartegraphique_id );

ALTER TABLE ordinateur
    ADD CONSTRAINT ordinateur_cartemere_fk FOREIGN KEY ( cartemere_cartemere_id )
        REFERENCES cartemere ( cartemere_id );

ALTER TABLE ordinateur
    ADD CONSTRAINT ordinateur_processeur_fk FOREIGN KEY ( processeur_processeur_id )
        REFERENCES processeur ( processeur_id );

ALTER TABLE ordinateur
    ADD CONSTRAINT ordinateur_ram_fk FOREIGN KEY ( ram_ram_id )
        REFERENCES ram ( ram_id );

ALTER TABLE ordinateur
    ADD CONSTRAINT ordinateur_stockage_fk FOREIGN KEY ( stockage_stockage_id )
        REFERENCES stockage ( stockage_id );

-- Ajouts de données :

-- Inserting data into cartegraphique table
INSERT INTO cartegraphique (cartegraphique_id, cartegraphique_nom, cartegraphique_description, cartegraphique_prix, cartegraphique_vram)
VALUES (1, 'NVIDIA GeForce RTX 3090', 'High-end gaming graphics card', 1499, 24),
       (2, 'AMD Radeon RX 6800 XT', 'High performance graphics card', 649, 16),
       (3, 'NVIDIA GeForce RTX 3080', 'Gaming graphics card', 699, 10),
       (4, 'AMD Radeon RX 6700 XT', 'Mid-range graphics card', 479, 12);

-- Inserting data into cartemere table
INSERT INTO cartemere (cartemere_id, cartemere_nom, cartemere_description, cartemere_maxram, cartemere_prix)
VALUES (1, 'ASUS ROG Strix Z490-E', 'Gaming motherboard', 128, 299),
       (2, 'MSI MPG B550 GAMING EDGE', 'Motherboard for AMD processors', 128, 179),
       (3, 'Gigabyte Z590 AORUS ELITE', 'High-end motherboard', 128, 249),
       (4, 'ASRock B450M PRO4', 'Budget motherboard', 64, 89);

-- Inserting data into processeur table
INSERT INTO processeur (processeur_id, processeur_nombrecoeurs, processeur_nombrethreads, processeur_prix, processeur_description, processeur_nom)
VALUES (1, '8', '16', 399, 'High-end processor', 'Intel Core i7-10700K'),
       (2, '12', '24', 799, 'High-end AMD processor', 'AMD Ryzen 9 5900X'),
       (3, '6', '12', 249, 'Mid-range processor', 'Intel Core i5-10600K'),
       (4, '8', '16', 499, 'High performance AMD processor', 'AMD Ryzen 7 5800X');

-- Inserting data into ram table
INSERT INTO ram (ram_id, ram_nom, ram_description, ram_prix, ram_puissance, ram_nombregb, ram_type)
VALUES (1, 'Corsair Vengeance LPX', 'High performance RAM', 89, 3200, 16, 'DDR4'),
       (2, 'G.SKILL Trident Z RGB', 'Gaming RAM with RGB lighting', 129, 3600, 32, 'DDR4'),
       (3, 'Kingston HyperX Fury', 'Reliable gaming RAM', 79, 3000, 16, 'DDR4'),
       (4, 'Crucial Ballistix', 'Budget gaming RAM', 59, 2666, 8, 'DDR4');

-- Inserting data into stockage table
INSERT INTO stockage (stockage_id, stockage_nom, sotckage_description, stockage_prix, stockage_type, stockage_vitesse)
VALUES (1, 'Samsung 970 EVO Plus', 'Fast NVMe SSD', 149, 'NVMe', 3500),
       (2, 'Western Digital Blue', 'Reliable SATA SSD', 89, 'SATA', 560),
       (3, 'Seagate Barracuda', 'High capacity HDD', 59, 'HDD', 7200),
       (4, 'Kingston A2000', 'Budget NVMe SSD', 99, 'NVMe', 2000);

-- Inserting data into ordinateur table
INSERT INTO ordinateur (ordinateur_id, ordinateur_nom, ordinateur_description, ordinateur_prix, cartemere_cartemere_id, cg_cartegraphique_id, stockage_stockage_id, ram_ram_id, processeur_processeur_id)
VALUES (1, 'Gaming Beast', 'High-end gaming PC', 2500, 1, 1, 1, 2, 2),
       (2, 'Budget Gamer', 'Affordable gaming PC', 800, 4, 4, 3, 4, 3),
       (3, 'Content Creator', 'PC for content creation', 1800, 2, 2, 1, 2, 1),
       (4, 'Office Workhorse', 'Reliable office PC', 1000, 3, 3, 2, 1, 4);

-- Ouverture des tables à RESTTP:

BEGIN
 ORDS.enable_object (
 p_enabled => TRUE,
 p_schema => 'RESTTP3',
 p_object => 'CARTEGRAPHIQUE',
 p_object_type => 'TABLE',
 p_object_alias => 'cartegraphique'
 );
 
 COMMIT;
END;
/

BEGIN
 ORDS.enable_object (
 p_enabled => TRUE,
 p_schema => 'RESTTP3',
 p_object => 'CARTEMERE',
 p_object_type => 'TABLE',
 p_object_alias => 'cartemere'
 );
 
 COMMIT;
END;
/

BEGIN
 ORDS.enable_object (
 p_enabled => TRUE,
 p_schema => 'RESTTP3',
 p_object => 'ORDINATEUR',
 p_object_type => 'TABLE',
 p_object_alias => 'ordinateur'
 );
 
 COMMIT;
END;
/

BEGIN
 ORDS.enable_object (
 p_enabled => TRUE,
 p_schema => 'RESTTP3',
 p_object => 'PROCESSEUR',
 p_object_type => 'TABLE',
 p_object_alias => 'processeur'
 );
 
 COMMIT;
END;
/

BEGIN
 ORDS.enable_object (
 p_enabled => TRUE,
 p_schema => 'RESTTP3',
 p_object => 'RAM',
 p_object_type => 'TABLE',
 p_object_alias => 'ram'
 );
 
 COMMIT;
END;
/

BEGIN
 ORDS.enable_object (
 p_enabled => TRUE,
 p_schema => 'RESTTP3',
 p_object => 'STOCKAGE',
 p_object_type => 'TABLE',
 p_object_alias => 'stockage'
 );
 
 COMMIT;
END;
/
