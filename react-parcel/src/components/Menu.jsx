const Menu = ({ data }) => {
  const { name,price } = data;
  return (
    <div>
      <p>{name}- Rs{price}</p>
    </div>
  );
};

export default Menu;
