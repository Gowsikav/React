const Menu = ({ data }) => {
  const { name } = data;
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default Menu;
