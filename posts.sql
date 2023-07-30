-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 30, 2023 at 07:08 AM
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
-- Database: `posts`
--
CREATE DATABASE IF NOT EXISTS `posts` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `posts`;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `quantity` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `image`, `quantity`) VALUES
(1, 'Fishing hook set', 99, 'https://m.media-amazon.com/images/I/71WftgZp3xL._SL1500_.jpg', 1),
(2, 'Speed Champions Lamborghini Countach', 199, 'https://m.media-amazon.com/images/I/81josLY53WL._AC_SL1500_.jpg', 1),
(3, 'Company Indoor Gun Rack', 990, 'https://m.media-amazon.com/images/I/61fMHRQ5NmL._AC_SL1500_.jpg', 1),
(4, 'Katana Sword Customize T10 Steel Clay Tempering Samurai', 89, 'https://m.media-amazon.com/images/I/71i1U1w1uGL._AC_SL1500_.jpg', 1),
(5, 'Razer Viper Ultimate Hyperspeed Lightweight Wireless Gaming Mouse', 89, 'https://m.media-amazon.com/images/I/61M7B24YNEL._AC_SL1500_.jpg', 1),
(6, 'Mongoose Hardtail Mountain Bike, 29-Inch Wheels', 599, 'https://m.media-amazon.com/images/I/81eVzlMwsKS._AC_SL1500_.jpg', 1),
(7, 'Puig Naked New Generation Screen KTM 125/390 Duke', 106, 'https://m.media-amazon.com/images/I/81cdGJ-PdqL._AC_SL1500_.jpg', 1),
(8, 'camping Hammock Double & Single Portable Hammocks', 11, 'https://m.media-amazon.com/images/I/71kLhzAzSfL._AC_SL1500_.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'john', 'jojo@gmail.com', '$2a$10$ji4JA7lC.KvQ4hV3WOaoAuV5.O6Ui46x93rUQ68UGqqoFDy3bz1EK');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
