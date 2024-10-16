```
CREATE TABLE mydb.BooksDetails (
	bookId INT PRIMARY KEY AUTO_INCREMENT,
	bookTitle VARCHAR(200) NOT NULL,
	author VARCHAR(200) NOT NULL,
	description VARCHAR(500) NOT NULL,
	publicationDate DATE NOT NULL,
	bookCover LONGBLOB,
	overallRating DECIMAL(3, 2) NOT NULL
)

INSERT INTO mydb.BooksDetails (bookTitle, author, description, publicationDate, bookCover, overallRating) VALUES
('Atomic Habits',	'James Clear',	'James Clear distils the most fundamental information about habit formation, so you can accomplish more by focusing on less.',	'2018-10-16',	'jlkdsjaoijdaojdaojoi2jh029j',	5)

```

------------------------------------------------------------

```
CREATE TABLE mydb.BookReview (
	reviewId INT PRIMARY KEY AUTO_INCREMENT, -- Add a primary key for the reviews
	bookId INT NOT NULL,
	reviewedBy VARCHAR(200) NOT NULL,
	rating INT NOT NULL, -- Individual rating for the review
	reviewText VARCHAR(500) NOT NULL,
	reviewDate DATE NOT NULL,
	FOREIGN KEY (bookId) REFERENCES mydb.BooksDetails(bookId) -- Foreign key constraint


INSERT INTO mydb.BookReview (bookId, reviewedBy, rating, reviewText, reviewDate) VALUES
(1, 'Sagar', 5, 'This remarkable.', '2018-10-16')

```
------------------------------------------------------------
- Calculating Overall Rating
- To maintain the overallRating in BooksDetails, you can use an AFTER INSERT and AFTER UPDATE trigger or periodically calculate it in your application logic. Here’s a simple example of how you might calculate the overall rating using SQL:
```
UPDATE mydb.BooksDetails b
SET overallRating = (
    SELECT AVG(rating)
    FROM mydb.BookReview
    WHERE bookId = b.bookId
)
WHERE bookId = <your_book_id>;
```

------------------------------------------------------------
```
CREATE TABLE mydb.UserDetails (
	userId INT PRIMARY KEY AUTO_INCREMENT, -- Add a primary key for the user
	firstName VARCHAR(50) NOT NULL,
	lastName VARCHAR(50) NOT NULL,
	userName VARCHAR(50) NOT NULL,
	password VARCHAR(255) NOT NULL,  -- Password field with NOT NULL constraint
    email VARCHAR(100) NOT NULL UNIQUE
)

INSERT into mydb.UserDetails (firstName, lastName, userName, password, email) 
VALUES ('Dev', 'SQL', 'SQLd', 'SQL123', 'sql@books.com')

SELECT * FROM mydb.UserDetails
```