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
