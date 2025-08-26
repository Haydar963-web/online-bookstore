import "./book.css";
import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import Rating from "../../components/bookSlider/Rating";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cartContext";

const Book = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { addToCart } = useContext(CartContext);

  const { id } = useParams();
  const book = books.find((b) => b.id === +id);

  const [qty, setQty] = useState(1);

  return (
    <div className="book">
      <div className="book-content">
        <img
          src={`/books/${book.image}`}
          alt={book.title}
          className="book-content-img"
        />
        <div className="book-content-info">
          <h2 className="book-title">{book.title}</h2>
          <div className="book-author">
            by <span>{book.author}</span> (Author)
          </div>
          <Rating rating={book.rating} reviews={book.reviews} />
          <div className="book-add-to-cart">
            <input
              min="1"
              max="99999"
              type="number"
              className="book-add-to-cart-input"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
            <button
              onClick={() => addToCart({ ...book, quantity: qty })}
              className="book-add-to-cart-btn"
            >
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <p className="book-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In rem et autem
        assumenda vitae nobis deleniti magnam, magni error fugit eum quisquam ea
        consequuntur fuga est? Error provident laudantium cumque. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Ex iste aut vel est libero
        eligendi rem laborum esse officiis cum, quam magnam dolor dolores error.
        Quia alias exercitationem inventore vitae?
      </p>
      <div className="book-icons">
        <div className="book-icon">
          <small>Print Length</small>
          <i className="bi bi-file-earmark-break"></i>
          <b>{book.printLength} Pages</b>
        </div>
        <div className="book-icon">
          <small>Language</small>
          <i className="bi bi-globe"></i>
          <b>{book.language}</b>
        </div>
        <div className="book-icon">
          <small>Publication Date</small>
          <i className="bi bi-calendar3"></i>
          <b>{book.PublicationDate} Pages</b>
        </div>
      </div>
    </div>
  );
};

export default Book;
