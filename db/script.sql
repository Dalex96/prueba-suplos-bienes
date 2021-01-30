-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         5.7.24 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para intelcost_bienes
CREATE DATABASE IF NOT EXISTS `intelcost_bienes` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `intelcost_bienes`;

-- Volcando estructura para tabla intelcost_bienes.bienes
CREATE TABLE IF NOT EXISTS `bienes` (
  `Id` int(11) NOT NULL DEFAULT '0',
  `Ciudad` char(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `Telefono` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `Codigo_Postal` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `Tipo` char(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `Direccion` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `Precio` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='tabla de bienes registrados\r\n';

-- La exportación de datos fue deseleccionada.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
