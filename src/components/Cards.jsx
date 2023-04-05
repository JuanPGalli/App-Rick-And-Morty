import Card from "./Card";

function Cards({ characters, onClose }) {
  return (
    <div>
      {characters.map(({ id, name, species, gender, image }) => (
        <Card
          key={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
          onClose={() => onClose(id)}
        />
      ))}
    </div>
  );
}

export default Cards;
