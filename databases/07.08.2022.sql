-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Czas generowania: 07 Sie 2022, 14:30
-- Wersja serwera: 8.0.13-4
-- Wersja PHP: 7.2.24-0ubuntu0.18.04.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `lePa70XFJ1`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `gerna_cars`
--

CREATE TABLE `gerna_cars` (
  `id` int(11) NOT NULL,
  `manufactuer` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `model` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `gerna_cars`
--

INSERT INTO `gerna_cars` (`id`, `manufactuer`, `model`, `price`) VALUES
(1, 'BMW', 'M2', 54500),
(2, 'Audi', 'A4', 49000),
(3, 'SEAT', 'Leon', 42500);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `gerna_employees`
--

CREATE TABLE `gerna_employees` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `age` int(255) NOT NULL,
  `position` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone_number` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `salary` int(11) NOT NULL,
  `department` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `gerna_employees`
--

INSERT INTO `gerna_employees` (`id`, `name`, `age`, `position`, `address`, `city`, `phone_number`, `email`, `salary`, `department`) VALUES
(1, 'Dawid Bączkiewicz', 19, 'Junior Sales Specialist', 'Kościuszki 17', 'Gliwice', 568458756, 'baczkiewicz.dawid22@gmail.com', 1400, 'katowice'),
(2, 'John Doe', 32, 'Senior Sales Specialist', 'Artyleryjna 16', 'Olsztyn', 568458756, 'john.doe@gmail.com', 2600, 'olsztyn'),
(3, 'Karol Jaki', 24, 'Junior Sales Specialist', 'Winnicka 24a', 'Katowice', 587985875, 'test@test.com', 1250, 'katowice'),
(5, 'Karol Testowy', 25, 'Junior Sales Specialist', 'Karnawałowa 43/A', 'Gdańsk', 478756354, 'test@test.com', 1500, '');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `gerna_sales`
--

CREATE TABLE `gerna_sales` (
  `id` int(11) NOT NULL,
  `model` int(255) NOT NULL,
  `saler` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `gerna_sales`
--

INSERT INTO `gerna_sales` (`id`, `model`, `saler`, `date`) VALUES
(9, 1, 1, '2022-08-05'),
(10, 1, 2, '2022-08-05'),
(11, 1, 1, '2022-08-05'),
(12, 2, 1, '2022-08-05'),
(13, 3, 1, '2022-08-05'),
(14, 3, 1, '2022-08-05'),
(15, 3, 1, '2022-08-05'),
(16, 3, 2, '2022-08-05'),
(17, 3, 2, '2022-08-05'),
(18, 2, 2, '2022-08-05'),
(19, 2, 2, '2022-08-05'),
(20, 1, 2, '2022-08-05'),
(21, 2, 1, '2022-06-16'),
(22, 1, 3, '2022-08-05'),
(23, 1, 4, '2022-08-05');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `user` varchar(30) NOT NULL,
  `description` varchar(150) NOT NULL,
  `image` varchar(300) NOT NULL,
  `likes` int(11) NOT NULL,
  `location` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Zrzut danych tabeli `posts`
--

INSERT INTO `posts` (`id`, `user`, `description`, `image`, `likes`, `location`) VALUES
(4, '4', 'adasd', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 3, 'paris'),
(5, '4', 'avc', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80\r\n', 2, 'paris'),
(6, '4', '', '', 0, 'paris');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `space_friends_list`
--

CREATE TABLE `space_friends_list` (
  `userid` int(255) NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `friendid` int(255) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `space_friends_list`
--

INSERT INTO `space_friends_list` (`userid`, `username`, `friendid`, `id`) VALUES
(1, 'Dawid B', 4, 16);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `space_messages`
--

CREATE TABLE `space_messages` (
  `id` int(11) NOT NULL,
  `message` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `author` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `space_messages`
--

INSERT INTO `space_messages` (`id`, `message`, `author`) VALUES
(1, 'First message', 1),
(2, 'Message from different account !', 5),
(3, 'Test again', 1),
(4, 'Message from phone', 1),
(5, 'Elo', 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `space_posts`
--

CREATE TABLE `space_posts` (
  `id` int(11) NOT NULL,
  `author` int(40) NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `img` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `space_posts`
--

INSERT INTO `space_posts` (`id`, `author`, `description`, `img`) VALUES
(12, 1, 'eloo', 'https://images.unsplash.com/photo-1654186881830-12cfc9bd1c71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'),
(13, 1, 'Test', 'https://images.unsplash.com/photo-1654371410048-11dd9517216e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'),
(34, 1, 'Testing adding new post from phone', 'https://images.unsplash.com/photo-1655365225178-b1b4c59cbdb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'),
(35, 1, 'Dawson szef', 'https://m.natemat.pl/984951e9ef0a15f83a5c273979c5f4de,1000,1000,1,0.jpg');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `space_posts_likes`
--

CREATE TABLE `space_posts_likes` (
  `id` int(11) NOT NULL,
  `postID` int(11) NOT NULL,
  `userID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `space_posts_likes`
--

INSERT INTO `space_posts_likes` (`id`, `postID`, `userID`) VALUES
(35, 13, 4),
(107, 12, 1),
(110, 13, 1),
(111, 34, 1),
(112, 35, 1),
(113, 35, 25);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `space_users`
--

CREATE TABLE `space_users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `picture` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `job` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `country` varchar(11) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `city` varchar(11) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `space_users`
--

INSERT INTO `space_users` (`id`, `username`, `password`, `email`, `picture`, `job`, `phone`, `country`, `city`) VALUES
(1, 'dawson', '$2b$10$uUIh/7mu8heX7VYdT1jv.e4qtZGShviaHM2BRQ7gdHjbzWwpKgpvi', 'hitlon22@onet.pl', 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'Front-end Developer', 697374165, 'Poland', 'Knurów'),
(4, 'Dawid B', '$2b$10$8yxeOVLHn3XOF7SHOYBPOuc/YZXGHKTd.DyWU9dyKqGQdHjZRIvta', 'hitlon22@gmail.com', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 'Front-end', 697374165, 'Poland', 'Knurów'),
(5, 'Dawid Bączkiewicz', '$2b$10$IfXiPW3IyVm/9yGSEs1eSuXTeMoZ78B6EMHTi8sdKthHN.9Hjrg1i', 'baczkiewicz.dawid22@gmail.com', 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80', 'null', 697374165, 'null', 'null'),
(25, 'testowe', '$2b$10$KYAeD/PUYb65Z3upLyuO9.5yd.dDwwhhA/ggnmKnsC..IF5ejlMLS', 'test@test.com', 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80', 'null', 697374165, 'Poland', 'Knurów'),
(26, 'qwert', '$2b$10$7h7k6Hg1xgPFQnLpcMELqeT109Co7/D2waHKUH13UO5deJpNHI42K', 'qwe@wqwe.fd', 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `email`, `name`, `password`, `description`) VALUES
(4, 'hitlon22@gmail.com', 'dawson', '$2b$10$.x8803.FIdY8HSEDUSYCfeLOVv5.oLPHQ4wV.csieVL2d6P8DvkvO', 'naura!'),
(6, 'karoltestowy33@gmail.com', 'Karol', '$2b$10$JwVf6VbcNV4Rs/kToP6v4ullNz7JguU3ruuRU7d7IuZmcNTD1vjBq', ''),
(7, 'test@test.com', 'Konto Testowe', '$2b$10$t1pVDGfsDmE4GnRE6.Z5gOQbcj.cpC3pInVK08dCTPNIZntEgQm3C', ''),
(8, 'maja@gmail.com', 'Maja', '$2b$10$BA3FWMgzPMAWMS/LeiXMWeGqHaBXRT89eWX9twQR20LJcee2xhMo6', ''),
(9, 'kinga@gmail.com', 'Kinga', '$2b$10$11eq./gOl9Jj6FXClKNfCOBQ54wd8TVg6Dpo.JJdAEpgJyR3EPEee', ''),
(10, 'mateusz@gmail.com', 'Mateusz', '$2b$10$Zzt6ootWaJh3pCdt9UOx6eegvzba3frPJgNDWlxg7ryay4yMXK/VC', '');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `velziana_reservations`
--

CREATE TABLE `velziana_reservations` (
  `id` int(11) NOT NULL,
  `date` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `time` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `selected_table` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `velziana_reservations`
--

INSERT INTO `velziana_reservations` (`id`, `date`, `time`, `selected_table`) VALUES
(6, '2022-07-22', '18:00 - 20:00', 2),
(14, '2022-07-22', '8:00 - 10:00', 2);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `gerna_cars`
--
ALTER TABLE `gerna_cars`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `gerna_employees`
--
ALTER TABLE `gerna_employees`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `gerna_sales`
--
ALTER TABLE `gerna_sales`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `space_friends_list`
--
ALTER TABLE `space_friends_list`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `space_messages`
--
ALTER TABLE `space_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `space_posts`
--
ALTER TABLE `space_posts`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `space_posts_likes`
--
ALTER TABLE `space_posts_likes`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `space_users`
--
ALTER TABLE `space_users`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `velziana_reservations`
--
ALTER TABLE `velziana_reservations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `gerna_cars`
--
ALTER TABLE `gerna_cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT dla tabeli `gerna_employees`
--
ALTER TABLE `gerna_employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT dla tabeli `gerna_sales`
--
ALTER TABLE `gerna_sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT dla tabeli `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT dla tabeli `space_friends_list`
--
ALTER TABLE `space_friends_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT dla tabeli `space_messages`
--
ALTER TABLE `space_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT dla tabeli `space_posts`
--
ALTER TABLE `space_posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT dla tabeli `space_posts_likes`
--
ALTER TABLE `space_posts_likes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- AUTO_INCREMENT dla tabeli `space_users`
--
ALTER TABLE `space_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT dla tabeli `velziana_reservations`
--
ALTER TABLE `velziana_reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
