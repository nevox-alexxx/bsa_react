import { useState } from 'react';
import { useParams } from 'react-router-dom';
import trips from '../assets/data/trips.json';
import '../assets/css/style.css';

import { MainHeader } from '../components/MainHeader';
import { Modal } from '../components/Modal';

export function TripPage() {
  const { tripId } = useParams();
  const trip = trips.find(t => t.id === tripId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (!trip) {
    return <div>Trip not found</div>;
  }

  return (
    <>
      <MainHeader />
      <main className="trip-page">
        <h1 className="visually-hidden">Travel App</h1>
        <div className="trip">
          <img
            data-test-id="trip-details-image"
            src={trip.image}
            className="trip__img"
            alt={`${trip.title} photo`}
          />
          <div className="trip__content">
            <div className="trip-info">

              <h3 data-test-id="trip-details-title" className="trip-info__title">
                {trip.title}
              </h3>
              <div className="trip-info__content">
                <span
                  data-test-id="trip-details-duration"
                  className="trip-info__duration"
                >
                  <strong>{trip.duration}</strong> days
                </span>

                <span 
                  data-test-id="trip-details-level" 
                  className="trip-info__level">
                  {trip.level}
                </span>
              </div>
            </div>
            <div
              data-test-id="trip-details-description"
              className="trip__description"
            >
              {trip.description}
            </div>

            <div className="trip-price">
              <span>Price</span>
              <strong
                data-test-id="trip-details-price-value"
                className="trip-price__value"
              >
                ${trip.price}
              </strong>
            </div>

            <button
              data-test-id="trip-details-button"
              className="trip__button button"
              onClick={openModal}
            >
              Book a trip
            </button>
          </div>
        </div>
      </main>

      {isModalOpen && 
      <Modal 
        isOpen={isModalOpen} 
        trip={trip} 
        onClose={closeModal} 
      />}
    </>
  );
}