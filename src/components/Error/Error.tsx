import "./Error.css";

const Error = ({ error }: { error: string | boolean }) => {
  return (
    <>
      {error && (
        <div className="container error">
          <h1>ERROR!</h1>
          <h1> Problems loading the data!</h1>
          <article>{error}</article>
          <p>
            If the problem persists, try to refresh the page or wait a few
            minutes and try again.
          </p>
        </div>
      )}
    </>
  );
};

export default Error;
