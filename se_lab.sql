-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 05, 2019 at 12:22 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.1.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `se_lab`
--

-- --------------------------------------------------------

--
-- Table structure for table `backupreports`
--

CREATE TABLE `backupreports` (
  `id` int(11) NOT NULL,
  `patientId` int(11) NOT NULL,
  `type` varchar(100) NOT NULL,
  `topic` varchar(50) NOT NULL,
  `content` varchar(100) NOT NULL,
  `result` varchar(100) NOT NULL,
  `doctorDetails` varchar(100) NOT NULL,
  `deletedDate` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `labassistant`
--

CREATE TABLE `labassistant` (
  `userId` int(11) NOT NULL,
  `labNumber` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `labreports`
--

CREATE TABLE `labreports` (
  `id` int(11) NOT NULL,
  `patientId` int(11) NOT NULL,
  `type` varchar(100) NOT NULL,
  `topic` varchar(50) NOT NULL,
  `content` varchar(100) NOT NULL,
  `result` varchar(100) NOT NULL,
  `doctorDetails` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `notificattions`
--

CREATE TABLE `notificattions` (
  `id` int(11) NOT NULL,
  `topic` varchar(100) NOT NULL,
  `content` varchar(100) NOT NULL,
  `date` varchar(50) NOT NULL,
  `ownerId` int(11) NOT NULL,
  `seen` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `patientId` int(11) NOT NULL,
  `birthday` varchar(100) NOT NULL,
  `lastVisit` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `phonenumbers`
--

CREATE TABLE `phonenumbers` (
  `userId` int(11) NOT NULL,
  `phoneNumber` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `buildingnName` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `firstName` varchar(100) DEFAULT NULL,
  `lastNmae` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `backupreports`
--
ALTER TABLE `backupreports`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patientId` (`patientId`);

--
-- Indexes for table `labassistant`
--
ALTER TABLE `labassistant`
  ADD PRIMARY KEY (`userId`);

--
-- Indexes for table `labreports`
--
ALTER TABLE `labreports`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patientId` (`patientId`);

--
-- Indexes for table `notificattions`
--
ALTER TABLE `notificattions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ownerId` (`ownerId`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`patientId`);

--
-- Indexes for table `phonenumbers`
--
ALTER TABLE `phonenumbers`
  ADD PRIMARY KEY (`userId`,`phoneNumber`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `backupreports`
--
ALTER TABLE `backupreports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `labassistant`
--
ALTER TABLE `labassistant`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `labreports`
--
ALTER TABLE `labreports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notificattions`
--
ALTER TABLE `notificattions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `backupreports`
--
ALTER TABLE `backupreports`
  ADD CONSTRAINT `backupreports_ibfk_1` FOREIGN KEY (`patientId`) REFERENCES `patients` (`patientId`);

--
-- Constraints for table `labassistant`
--
ALTER TABLE `labassistant`
  ADD CONSTRAINT `labassistant_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`);

--
-- Constraints for table `labreports`
--
ALTER TABLE `labreports`
  ADD CONSTRAINT `labreports_ibfk_1` FOREIGN KEY (`patientId`) REFERENCES `patients` (`patientId`);

--
-- Constraints for table `notificattions`
--
ALTER TABLE `notificattions`
  ADD CONSTRAINT `notificattions_ibfk_1` FOREIGN KEY (`ownerId`) REFERENCES `users` (`userId`);

--
-- Constraints for table `patients`
--
ALTER TABLE `patients`
  ADD CONSTRAINT `patients_ibfk_1` FOREIGN KEY (`patientId`) REFERENCES `users` (`userId`);

--
-- Constraints for table `phonenumbers`
--
ALTER TABLE `phonenumbers`
  ADD CONSTRAINT `phonenumbers_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
