create table user_pmi(
    
    IDUSER       INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    PRNOMBRE     VARCHAR(10) NOT NULL DEFAULT '',
    SGNOMBRE     VARCHAR(10) NOT NULL DEFAULT '',
    PRAPELLIDO   VARCHAR(10) NOT NULL DEFAULT '',
    SGAPELLIDO   VARCHAR(10) NOT NULL DEFAULT '',
    NMB_COMPLET  VARCHAR(40) NOT NULL DEFAULT '',
    FECH_CR_USER TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CORREO       VARCHAR(20) NOT NULL DEFAULT '',
    USER_PMI     VARCHAR(10) NOT NULL DEFAULT '',
    PASS_PMI     VARCHAR(10) NOT NULL DEFAULT ''
    
    )