-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: learningmanagement
-- ------------------------------------------------------
-- Server version	5.7.21-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `batches`
--

DROP TABLE IF EXISTS `batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `batches` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `CourseId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `batches_ibfk_1` (`CourseId`),
  CONSTRAINT `batches_ibfk_1` FOREIGN KEY (`CourseId`) REFERENCES `courses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `batches`
--

LOCK TABLES `batches` WRITE;
/*!40000 ALTER TABLE `batches` DISABLE KEYS */;
INSERT INTO `batches` VALUES (1,'Science 2018','2018-05-14 10:11:17','2018-05-14 10:11:17',1),(2,'Science 2016','2018-05-14 10:11:17','2018-05-14 10:11:17',1),(3,'Arts 2016','2018-05-14 10:11:17','2018-05-14 10:11:17',2),(4,'new Btach','2018-05-15 12:21:32','2018-05-15 12:21:32',1),(5,'Song','2018-05-15 12:38:37','2018-05-15 12:38:37',3),(6,'abcd','2018-05-15 16:40:19','2018-05-15 16:40:19',1),(7,'dcsdv','2018-05-15 16:43:09','2018-05-15 16:43:09',1);
/*!40000 ALTER TABLE `batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `batchstudentmappers`
--

DROP TABLE IF EXISTS `batchstudentmappers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `batchstudentmappers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `StudentId` int(11) DEFAULT NULL,
  `BatchId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `StudentId` (`StudentId`),
  KEY `BatchId` (`BatchId`),
  CONSTRAINT `batchstudentmappers_ibfk_1` FOREIGN KEY (`StudentId`) REFERENCES `students` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `batchstudentmappers_ibfk_2` FOREIGN KEY (`BatchId`) REFERENCES `batches` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `batchstudentmappers`
--

LOCK TABLES `batchstudentmappers` WRITE;
/*!40000 ALTER TABLE `batchstudentmappers` DISABLE KEYS */;
INSERT INTO `batchstudentmappers` VALUES (1,'2018-05-14 11:22:27','2018-05-14 11:22:27',1,1),(2,'2018-05-14 11:22:27','2018-05-14 11:22:27',2,1),(3,'2018-05-15 13:10:49','2018-05-15 13:10:49',6,1);
/*!40000 ALTER TABLE `batchstudentmappers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'science','2018-05-14 10:11:17','2018-05-14 10:11:17'),(2,'arting','2018-05-14 10:11:46','2018-05-14 16:30:49'),(3,'music','2018-05-15 08:39:32','2018-05-15 08:39:32'),(5,'Dance','2018-05-15 10:23:13','2018-05-15 10:23:13');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lectures`
--

DROP TABLE IF EXISTS `lectures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lectures` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `BatchId` int(11) DEFAULT NULL,
  `TeacherId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `BatchId` (`BatchId`),
  KEY `TeacherId` (`TeacherId`),
  CONSTRAINT `lectures_ibfk_1` FOREIGN KEY (`BatchId`) REFERENCES `batches` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `lectures_ibfk_2` FOREIGN KEY (`TeacherId`) REFERENCES `teachers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lectures`
--

LOCK TABLES `lectures` WRITE;
/*!40000 ALTER TABLE `lectures` DISABLE KEYS */;
INSERT INTO `lectures` VALUES (2,'lecture 1','2018-05-14 10:49:17','2018-05-14 10:49:17',1,3),(3,'lecture','2018-05-14 10:49:17','2018-05-14 10:49:17',3,5),(4,'new lecture','2018-05-15 12:54:41','2018-05-15 12:54:41',1,6),(5,'Adding test lecture','2018-05-15 12:59:29','2018-05-15 12:59:29',1,7);
/*!40000 ALTER TABLE `lectures` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'goku','2018-05-14 10:49:17','2018-05-14 10:49:17'),(2,'rahul','2018-05-14 10:49:23','2018-05-14 10:49:23'),(3,'jhon','2018-05-14 10:49:33','2018-05-14 10:49:33'),(4,'aro','2018-05-14 10:49:43','2018-05-14 17:51:26'),(5,'asx','2018-05-15 09:52:47','2018-05-15 09:52:47'),(6,'Nishant','2018-05-15 10:24:06','2018-05-15 10:24:06');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subjects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `CourseId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `CourseId` (`CourseId`),
  CONSTRAINT `subjects_ibfk_1` FOREIGN KEY (`CourseId`) REFERENCES `courses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES (2,'bio','2018-05-14 11:07:33','2018-05-14 17:23:06',1),(3,'chemistry','2018-05-14 11:07:40','2018-05-14 11:07:40',1),(4,'Social Science','2018-05-14 12:13:22','2018-05-14 12:13:22',2),(8,'Rock Music','2018-05-15 10:09:50','2018-05-15 10:09:50',3),(9,'song','2018-05-15 10:25:10','2018-05-15 10:25:10',3),(10,'Song batch','2018-05-15 12:13:59','2018-05-15 12:13:59',3);
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `teachers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `SubjectId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `SubjectId` (`SubjectId`),
  CONSTRAINT `teachers_ibfk_1` FOREIGN KEY (`SubjectId`) REFERENCES `subjects` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES (3,'golu1ds','2018-05-14 11:22:27','2018-05-14 17:11:59',2),(4,'goku','2018-05-14 11:22:32','2018-05-14 11:22:32',3),(5,'vegita','2018-05-14 10:49:17','2018-05-14 10:49:17',4),(6,'Adding Teacher','2018-05-15 10:19:58','2018-05-15 10:19:58',8),(7,'Teacher hu me','2018-05-15 10:25:34','2018-05-15 10:25:34',9);
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-15 22:14:42
