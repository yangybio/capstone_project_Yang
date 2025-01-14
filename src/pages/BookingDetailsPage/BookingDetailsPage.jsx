import "./BookingDetailsPage.scss";
import headshot from "../../assets/icons/headshot.svg";

const BookingDetailsPage = () => {
  return (
    <section className="bookingDetails">
      <div className="bookingDetails__details">
        <h1 className="bookingDetails__header">Booking Details</h1>
        <div className="bookingDetails__container">
          <img className="bookingDetails__headshot" src={headshot} alt="Headshot" />
          <h2 className="bookingDetails__advisor">Jone Smith</h2>
        </div>

        <h3 className="bookingDetails__header-small">Advisor Meeting</h3>
        <h3 className="bookingDetails__date">30 min</h3>
        <h3 className="bookingDetails__time">Tuesday, April 23, 2025</h3>
        <h3 className="bookingDetails__location">Eastern Time - Toronto</h3>
      </div>
    </section>
  );
};

export default BookingDetailsPage;
