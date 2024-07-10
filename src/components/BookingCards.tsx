import '../assets/css/style.css';
import bookings from '../assets/data/bookings.json';

export function BookingCards() {
  return (
    <ul className="bookings__list">
      {bookings.map((booking) => (
        <li 
          data-test-id="booking" 
          className="booking"
          key={booking.id}
        >
          <h3 data-test-id="booking-title" className="booking__title">{booking.trip.title}</h3>
          <span data-test-id="booking-guests" className="booking__guests">
            {booking.guests} guests
          </span>
          <span data-test-id="booking-date" className="booking__date">
            {new Date(booking.date).toLocaleDateString()}
          </span>
          <span data-test-id="booking-total" className="booking__total">
            ${booking.totalPrice}
          </span>
          <button
            data-test-id="booking-cancel"
            className="booking__cancel"
            title="Cancel booking"
          >
            <span className="visually-hidden">Cancel booking</span>
            ×
          </button>
        </li>
      ))}
    </ul>
  )
}