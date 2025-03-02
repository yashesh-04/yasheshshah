import React from "react";

const CodeDisplay = () => {
  const codeSnippet = `
  [
  {
    "id": 1,
    "title": "The Great Gatsby",
    "price": "$10.99",
    "description": "A novel by F. Scott Fitzgerald about the American Dream.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 2,
    "title": "1984",
    "price": "$8.99",
    "description": "A dystopian novel by George Orwell about surveillance and totalitarianism.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 3,
    "title": "To Kill a Mockingbird",
    "price": "$9.99",
    "description": "A novel by Harper Lee about racial injustice in the Deep South.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 4,
    "title": "Moby Dick",
    "price": "$12.50",
    "description": "A novel by Herman Melville about a man's obsession with a great white whale.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 5,
    "title": "Pride and Prejudice",
    "price": "$7.99",
    "description": "A romantic novel by Jane Austen about manners and marriage.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 6,
    "title": "The Catcher in the Rye",
    "price": "$11.50",
    "description": "A novel by J.D. Salinger about teenage angst and rebellion.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 7,
    "title": "War and Peace",
    "price": "$15.99",
    "description": "A historical novel by Leo Tolstoy about Napoleon's invasion of Russia.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 8,
    "title": "Crime and Punishment",
    "price": "$13.99",
    "description": "A psychological novel by Fyodor Dostoevsky about guilt and redemption.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 9,
    "title": "The Hobbit",
    "price": "$9.99",
    "description": "A fantasy novel by J.R.R. Tolkien about the adventure of Bilbo Baggins.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 10,
    "title": "Harry Potter and the Sorcerer's Stone",
    "price": "$14.99",
    "description": "The first book in J.K. Rowling's Harry Potter series.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 11,
    "title": "The Lord of the Rings",
    "price": "$19.99",
    "description": "A high-fantasy novel by J.R.R. Tolkien, following the quest to destroy the One Ring.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 12,
    "title": "The Alchemist",
    "price": "$9.49",
    "description": "A novel by Paulo Coelho about following one's dreams and destiny.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 13,
    "title": "The Da Vinci Code",
    "price": "$11.99",
    "description": "A mystery thriller by Dan Brown that explores secret religious history.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 14,
    "title": "Brave New World",
    "price": "$10.49",
    "description": "A dystopian novel by Aldous Huxley envisioning a future of technological control.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 15,
    "title": "The Book Thief",
    "price": "$12.99",
    "description": "A historical novel by Markus Zusak, narrated by Death during WWII.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 16,
    "title": "Wuthering Heights",
    "price": "$8.99",
    "description": "A novel by Emily Brontë about love, revenge, and social class.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 17,
    "title": "Fahrenheit 451",
    "price": "$9.79",
    "description": "A dystopian novel by Ray Bradbury about a future society that burns books.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 18,
    "title": "Jane Eyre",
    "price": "$10.25",
    "description": "A novel by Charlotte Brontë following the journey of a strong-willed orphan.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 19,
    "title": "Animal Farm",
    "price": "$7.99",
    "description": "A political allegory by George Orwell using farm animals to depict totalitarianism.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 20,
    "title": "Dracula",
    "price": "$11.75",
    "description": "A gothic horror novel by Bram Stoker about the legendary vampire Count Dracula.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 21,
    "title": "Les Misérables",
    "price": "$14.99",
    "description": "A novel by Victor Hugo exploring themes of justice, love, and redemption.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 22,
    "title": "The Odyssey",
    "price": "$13.49",
    "description": "An epic poem by Homer chronicling the journey of Odysseus.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 23,
    "title": "The Count of Monte Cristo",
    "price": "$15.99",
    "description": "A novel by Alexandre Dumas about revenge and justice.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 24,
    "title": "Frankenstein",
    "price": "$10.25",
    "description": "A gothic horror novel by Mary Shelley exploring the dangers of ambition.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 25,
    "title": "A Tale of Two Cities",
    "price": "$9.99",
    "description": "A novel by Charles Dickens set during the French Revolution.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 26,
    "title": "Don Quixote",
    "price": "$16.50",
    "description": "A novel by Miguel de Cervantes about a knight's misadventures.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 27,
    "title": "The Picture of Dorian Gray",
    "price": "$8.99",
    "description": "A novel by Oscar Wilde exploring vanity and moral corruption.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 28,
    "title": "Ulysses",
    "price": "$18.75",
    "description": "A modernist novel by James Joyce following a single day in Dublin.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 29,
    "title": "The Grapes of Wrath",
    "price": "$12.99",
    "description": "A novel by John Steinbeck depicting the struggles of a poor family during the Great Depression.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 30,
    "title": "The Brothers Karamazov",
    "price": "$14.75",
    "description": "A philosophical novel by Fyodor Dostoevsky exploring faith, doubt, and morality.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 31,
    "title": "Brave New World",
    "price": "$11.49",
    "description": "A dystopian novel by Aldous Huxley about a future world of genetic engineering and conformity.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 32,
    "title": "The Divine Comedy",
    "price": "$17.99",
    "description": "An epic poem by Dante Alighieri describing the journey through Hell, Purgatory, and Paradise.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 33,
    "title": "Dracula",
    "price": "$9.99",
    "description": "A gothic horror novel by Bram Stoker introducing the character of Count Dracula.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 34,
    "title": "Anna Karenina",
    "price": "$14.25",
    "description": "A novel by Leo Tolstoy about love, betrayal, and Russian society.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 35,
    "title": "The Sun Also Rises",
    "price": "$10.99",
    "description": "A novel by Ernest Hemingway about the Lost Generation after World War I.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 36,
    "title": "Slaughterhouse-Five",
    "price": "$12.50",
    "description": "A novel by Kurt Vonnegut blending satire, war, and science fiction.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 37,
    "title": "The Old Man and the Sea",
    "price": "$8.49",
    "description": "A short novel by Ernest Hemingway about an aging fisherman's struggle.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 38,
    "title": "One Hundred Years of Solitude",
    "price": "$13.75",
    "description": "A novel by Gabriel García Márquez about the multi-generational story of the Buendía family.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 39,
    "title": "The Stranger",
    "price": "$9.99",
    "description": "A novel by Albert Camus about existentialism and absurdity.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 40,
    "title": "Catch-22",
    "price": "$14.99",
    "description": "A satirical war novel by Joseph Heller about the absurdities of bureaucracy.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 41,
    "title": "The Metamorphosis",
    "price": "$7.99",
    "description": "A novella by Franz Kafka about a man who wakes up transformed into a giant insect.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 42,
    "title": "The Road",
    "price": "$12.99",
    "description": "A novel by Cormac McCarthy depicting a post-apocalyptic journey of a father and son.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 43,
    "title": "Fahrenheit 451",
    "price": "$9.50",
    "description": "A dystopian novel by Ray Bradbury about a future where books are outlawed and burned.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 44,
    "title": "Frankenstein",
    "price": "$10.25",
    "description": "A novel by Mary Shelley about a scientist who creates a sentient being.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 45,
    "title": "Beloved",
    "price": "$11.75",
    "description": "A novel by Toni Morrison about the lingering effects of slavery on an African American woman.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 46,
    "title": "Middlesex",
    "price": "$14.99",
    "description": "A novel by Jeffrey Eugenides about gender identity and a Greek-American family saga.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 47,
    "title": "The Grapes of Wrath",
    "price": "$12.99",
    "description": "A novel by John Steinbeck about a family's struggles during the Great Depression.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 48,
    "title": "Dune",
    "price": "$15.99",
    "description": "A science fiction novel by Frank Herbert about politics, religion, and ecology on the desert planet Arrakis.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 49,
    "title": "The Picture of Dorian Gray",
    "price": "$8.49",
    "description": "A novel by Oscar Wilde about a man whose portrait ages while he remains youthful.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  },
  {
    "id": 50,
    "title": "The Alchemist",
    "price": "$9.99",
    "description": "A novel by Paulo Coelho about a shepherd's journey to discover his destiny.",
    "coverImage": "https://e7.pngegg.com/pngimages/214/391/png-clipart-book-cover-blue-books-s-blue-angle-thumbnail.png"
  }
]

  `;

  return (
    <pre>
      <code>{codeSnippet}</code>
    </pre>
  );
};

export default CodeDisplay;
