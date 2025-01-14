import "./BookingConfirmationPage.scss";
import headshot from "../../assets/icons/headshot.svg";

const BookingConfirmationPage = () => {
  return (
    <section className="bookingConfirmation">
      <div className="bookingConfirmation__details">
        <h1 className="bookingConfirmation__header">Booking Confirmation</h1>
        <h2 className="bookingConfirmation__advisor">Jone Smith</h2>
        <h3 className="bookingConfirmation__header-small">Advisor Meeting</h3>
        <div class="divider"></div>

        <h3 className="bookingConfirmation__date">Jone Smith</h3>
        <h3 className="bookingConfirmation__time">14:30 - 15:00 | Tuesday, April 23, 2025</h3>
        <h3 className="bookingConfirmation__location">Eastern Time - Toronto</h3>
        <h3 className="bookingConfirmation__zoom">https://zoom.us/j/9647919185</h3>
        <div class="divider"></div>

        <h1 className="bookingConfirmation__confirm">You are scheduled</h1>
        <p className="bookingConfirmation__confirm-message">A calendar invitation has been sent to your email address.</p>


        
        
      </div>
    </section>
  );
};

export default BookingConfirmationPage;