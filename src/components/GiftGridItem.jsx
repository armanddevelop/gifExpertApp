export const GiftGridItem = ({ img }) => {
  const { title, url, username } = img;
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={username} />
      <p>{title === "" ? "no title" : title}</p>
    </div>
  );
};
