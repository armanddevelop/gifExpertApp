import { useFetchGift } from "../Hooks/useFetchGif";
import { GiftGridItem } from ".";
import PropTypes from "prop-types";
export const GiftGrid = ({ category }) => {
  const { data: images, loading } = useFetchGift(category);
  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && (
        <p className="animate__animated animate__flash">Cargando.....</p>
      )}
      <div className="card-grid">
        {images.map((image) => (
          <GiftGridItem key={image.id} img={image} />
        ))}
      </div>
    </>
  );
};
GiftGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
