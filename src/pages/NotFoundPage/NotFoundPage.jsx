import "./NotFoundPage.scss";
import notFoundImage from "../../assets/images/404.svg";

function NotFoundPage() {
  return (
    <section className="notfound">
      <img
        src={notFoundImage}
        alt="Not found image"
        className="notfound__img"
      />
      <div className="notfound__wrapper">
        <h1 className="notfound__title"> 404 Not Found</h1>
        <p className="notfound__disc">
          The requested URL was not found on this server.
        </p>
      </div>
    </section>
  );
}

export default NotFoundPage;
