import "./BookingPage.scss";
import headshot from "../../assets/icons/headshot.svg";

const BookingPage = () => {
  return (
    <section className="booking">
      <div className="booking__details">
        <h1 className="booking__header">Appointment Booking</h1>
        <div className="booking__container">
          <img className="booking__headshot" src={headshot} alt="Headshot" />
          <h2 className="booking__advisor">Jone Smith</h2>
        </div>
        <p className="booking__intro">
          As a Scotiabank financial advisor, I believe it's important to invest
          my time to understand what you're working toward before you invest
          your money. It's also important to understand the level of risk you're
          comfortable accepting when investing so we can balance it with the
          steps necessary to reach your long-term goals. Whether you're planning
          for retirement, saving for college for children or grandchildren, or
          just trying to protect the financial future of the ones you care for
          the most, we can work together to develop specific strategies to help
          you achieve your goals. We can also monitor your progress...
        </p>
      </div>

      <div className="booking__chatbot">
        <h1 className="booking__chat-header">Chat with advisors</h1>
      </div>
    </section>
  );
};

export default BookingPage;
