import { lazy, Suspense } from "react";

import { Error, GifWrapper, Input, Spinner } from "components";

import useGifs from "hooks/useGifs";
import "styles/styles.css";

const Gifs = lazy(() => import("components/Gifs/Gifs"));

function Landing() {
  const {
    handleSearch,
    searchText,
    gifs,
    cols,
    handleColsChange,
    loader,
    error,
  } = useGifs();

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div data-testid="main" className="container">
      <h1 className="logo">Giphy App</h1>

      <div className="header-wrapper">
        <Input
          type="text"
          value={searchText}
          size="lg"
          handleChange={handleSearch}
          placeholder="Search gifs..."
        />

        <div className="filter-wrapper">
          <div className="filter-row">
            <p> Filter: &nbsp;</p>
            <div className="filter">
              <Input
                type="number"
                value={cols}
                size="md"
                handleChange={handleColsChange}
                handleKeyDown={(e) => e.preventDefault()}
                min={3}
                max={10}
              />
              &nbsp; per row
            </div>
          </div>
        </div>
      </div>

      <GifWrapper cols={cols}>
        <Suspense fallback={<Spinner />}>
          <Gifs data={gifs} />
        </Suspense>
      </GifWrapper>
      <Spinner reff={loader} />
    </div>
  );
}

export default Landing;
