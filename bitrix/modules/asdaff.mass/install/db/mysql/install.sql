CREATE TABLE IF NOT EXISTS `b_wd_profiles` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(255) NOT NULL,
  `SORT` int(11) DEFAULT '100',
  `DESCRIPTION` text,
  `IBLOCK_ID` int(11) NOT NULL,
  `SECTIONS_ID` longtext,
  `WITH_SUBSECTIONS` char(1) DEFAULT NULL,
  `FILTER` longtext,
  `ACTION` varchar(255) NOT NULL,
  `PARAMS` longtext,
  `SEND_EMAIL` char(1) NOT NULL DEFAULT 'Y',
  `DATE_CREATED` datetime DEFAULT NULL,
  `DATE_SUCCESS` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
);