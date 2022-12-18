import "./CardList.style.css";
import CardComponent from "../Card/Card.component";

const CardListComponent = (props) => {
  const { monsters } = props;
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <CardComponent key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardListComponent;
