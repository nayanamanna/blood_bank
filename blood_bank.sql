-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2024 at 12:14 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blood_bank`
--

-- --------------------------------------------------------

--
-- Table structure for table `md_bank`
--

CREATE TABLE `md_bank` (
  `bank_id` int(11) NOT NULL,
  `bank_name` varchar(150) NOT NULL,
  `bank_address` text NOT NULL,
  `bank_mobile` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `md_blood`
--

CREATE TABLE `md_blood` (
  `blood_id` int(11) NOT NULL,
  `blood_group` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `md_user`
--

CREATE TABLE `md_user` (
  `user_id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `mobile_no` int(11) NOT NULL,
  `password` varchar(150) NOT NULL,
  `address` text NOT NULL,
  `user_flag` enum('A','U','B') NOT NULL COMMENT '''A'' admin ,''U'' user,''B'' bank',
  `active_status` enum('A','D') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `td_blood_info`
--

CREATE TABLE `td_blood_info` (
  `blood_info` int(11) NOT NULL,
  `bank_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `blood_id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `exp_date` date DEFAULT NULL,
  `create_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `md_bank`
--
ALTER TABLE `md_bank`
  ADD PRIMARY KEY (`bank_id`);

--
-- Indexes for table `md_blood`
--
ALTER TABLE `md_blood`
  ADD PRIMARY KEY (`blood_id`);

--
-- Indexes for table `md_user`
--
ALTER TABLE `md_user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `td_blood_info`
--
ALTER TABLE `td_blood_info`
  ADD PRIMARY KEY (`blood_info`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `md_bank`
--
ALTER TABLE `md_bank`
  MODIFY `bank_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `md_blood`
--
ALTER TABLE `md_blood`
  MODIFY `blood_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `md_user`
--
ALTER TABLE `md_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `td_blood_info`
--
ALTER TABLE `td_blood_info`
  MODIFY `blood_info` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
