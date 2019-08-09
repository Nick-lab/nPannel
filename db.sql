-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 09, 2019 at 10:06 PM
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
-- Database: `npannel`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `first_name` varchar(32) NOT NULL,
  `last_name` varchar(32) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `first_name`, `last_name`, `email`, `password`) VALUES
(1, 'nick', '', 'nick@webfab.co', 'dc647eb65e6711e155375218212b3964');

-- --------------------------------------------------------

--
-- Table structure for table `client_domains`
--

CREATE TABLE `client_domains` (
  `id` int(11) NOT NULL,
  `client` int(11) NOT NULL,
  `domain` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `client_domains`
--

INSERT INTO `client_domains` (`id`, `client`, `domain`) VALUES
(1, 1, 'localhost');

-- --------------------------------------------------------

--
-- Table structure for table `client_settings`
--

CREATE TABLE `client_settings` (
  `client` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `client_settings`
--

INSERT INTO `client_settings` (`client`) VALUES
(1);

-- --------------------------------------------------------

--
-- Table structure for table `domain_meta`
--

CREATE TABLE `domain_meta` (
  `id` int(11) NOT NULL,
  `domain` int(11) NOT NULL,
  `type` varchar(32) NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `domain_pages`
--

CREATE TABLE `domain_pages` (
  `id` varchar(32) NOT NULL,
  `domain` int(11) NOT NULL,
  `parent` varchar(32) DEFAULT NULL,
  `type` varchar(32) NOT NULL DEFAULT 'default',
  `title` varchar(32) NOT NULL,
  `route` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `domain_pages`
--

INSERT INTO `domain_pages` (`id`, `domain`, `parent`, `type`, `title`, `route`) VALUES
('16ab6cc794a', 1, 'false', 'default', 'Home', '/home'),
('71yz6gg47', 1, 'false', 'default', 'Something', '/something'),
('mhtkomi25', 1, '16ab6cc794a', 'default', 'New', '/home/new');

-- --------------------------------------------------------

--
-- Table structure for table `domain_scripts`
--

CREATE TABLE `domain_scripts` (
  `id` int(11) NOT NULL,
  `domain` int(11) NOT NULL,
  `file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `domain_scripts`
--

INSERT INTO `domain_scripts` (`id`, `domain`, `file`) VALUES
(2, 1, 'https://code.jquery.com/jquery-3.4.1.min.js'),
(3, 1, 'js/nav_manager.js');

-- --------------------------------------------------------

--
-- Table structure for table `domain_styles`
--

CREATE TABLE `domain_styles` (
  `id` int(11) NOT NULL,
  `domain` int(11) NOT NULL,
  `file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `domain_styles`
--

INSERT INTO `domain_styles` (`id`, `domain`, `file`) VALUES
(2, 1, 'css/style.css'),
(3, 1, 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'),
(4, 1, 'css/bootstrap.min.css');

-- --------------------------------------------------------

--
-- Table structure for table `page_meta`
--

CREATE TABLE `page_meta` (
  `id` int(11) NOT NULL,
  `page` varchar(32) NOT NULL,
  `type` varchar(32) NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `page_scripts`
--

CREATE TABLE `page_scripts` (
  `id` int(11) NOT NULL,
  `page` varchar(32) NOT NULL,
  `file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `page_styles`
--

CREATE TABLE `page_styles` (
  `id` int(11) NOT NULL,
  `page` varchar(32) NOT NULL,
  `file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `url_forwards`
--

CREATE TABLE `url_forwards` (
  `id` int(11) NOT NULL,
  `domain` int(11) NOT NULL,
  `from_url` varchar(255) NOT NULL,
  `to_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `url_forwards`
--

INSERT INTO `url_forwards` (`id`, `domain`, `from_url`, `to_url`) VALUES
(1, 1, '', '/home');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `client_domains`
--
ALTER TABLE `client_domains`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `client_settings`
--
ALTER TABLE `client_settings`
  ADD PRIMARY KEY (`client`);

--
-- Indexes for table `domain_meta`
--
ALTER TABLE `domain_meta`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `domain_pages`
--
ALTER TABLE `domain_pages`
  ADD PRIMARY KEY (`id`,`domain`);

--
-- Indexes for table `domain_scripts`
--
ALTER TABLE `domain_scripts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `domain_styles`
--
ALTER TABLE `domain_styles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `page_meta`
--
ALTER TABLE `page_meta`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `page_scripts`
--
ALTER TABLE `page_scripts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `page_styles`
--
ALTER TABLE `page_styles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `url_forwards`
--
ALTER TABLE `url_forwards`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `client_domains`
--
ALTER TABLE `client_domains`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `domain_meta`
--
ALTER TABLE `domain_meta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `domain_scripts`
--
ALTER TABLE `domain_scripts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `domain_styles`
--
ALTER TABLE `domain_styles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `page_meta`
--
ALTER TABLE `page_meta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `page_scripts`
--
ALTER TABLE `page_scripts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `page_styles`
--
ALTER TABLE `page_styles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `url_forwards`
--
ALTER TABLE `url_forwards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
