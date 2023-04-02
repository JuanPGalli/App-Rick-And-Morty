import Card from "./Card";

function Cards({ characters }) {
  return (
    <div>
      {characters.map((e) => (
        <Card
          key={e.id}
          name={e.name}
          status={e.status}
          species={e.species}
          gender={e.gender}
          origin={e.origin.name}
          image={e.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        />
      ))}
    </div>
  );
}

export default Cards;
