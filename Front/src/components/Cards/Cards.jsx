import Card from "../Card/Card.jsx";

function Cards({ characters, onClose }) {
  return (
    <div>
      {characters.map(({ id, name, species, gender, image }, index) => (
        <Card
          key={index}
          name={name}
          species={species}
          gender={gender}
          image={image}
          id={id}
          onClose={() => onClose(id)}
        />
      ))}
    </div>
  );
}

export default Cards;
