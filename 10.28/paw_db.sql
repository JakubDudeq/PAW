-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Lis 03, 2024 at 11:15 PM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `paw_db`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `messages`
--

CREATE TABLE `messages` (
  `ID` int(11) NOT NULL,
  `Message` varchar(20) NOT NULL,
  `Name` varchar(8) NOT NULL,
  `Surname` varchar(8) NOT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`ID`, `Message`, `Name`, `Surname`, `email`) VALUES
(1, 'Hello, how are you?', 'Alice', 'Smith', 'asmit636@example.com'),
(2, 'Good morning!', 'Bob', 'Johnson', 'bjohn213@example.com'),
(3, 'Have a great day!', 'Charlie', 'Williams', 'cwill857@example.com'),
(4, 'See you tomorrow.', 'David', 'Brown', 'dbrow847@example.com'),
(5, 'Let’s meet at noon.', 'Eve', 'Jones', 'ejone667@example.com'),
(6, 'Thank you for your h', 'Frank', 'Garcia', 'fgarc693@example.com'),
(7, 'Happy birthday!', 'Grace', 'Martinez', 'gmart464@example.com'),
(8, 'Congratulations on y', 'Hannah', 'Rodrigue', 'hrodr143@example.com'),
(9, 'Looking forward to o', 'Isaac', 'Lopez', 'ilope123@example.com'),
(10, 'Please call me when ', 'Jack', 'Lee', 'jlee987@example.com'),
(11, '21323112321312312313', 'Mirosłąw', '12321312', 'dsads@ds.sd'),
(12, 'On jest mega xd', 'Słaby', 'Bro', 'LL@pp.ww');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
