function Superheroes(props) {
  return (
    <div className="heros-block">
      <img src={props.image} alt={props.name} />
      <p>
        <span className="boldText">Имя:</span> {props.name}
      </p>
      <p>
        <span className="boldText">Вселенная:</span> {props.universe}
      </p>
      <p>
        <span className="boldText">Альтер эго:</span> {props.alterego}
      </p>
      <p>
        <span className="boldText">Род деятельности:</span> {props.job}
      </p>
      <p>
        <span className="boldText">Друзья:</span> {props.friends}
      </p>
      <p>
        <span className="boldText">Суперсилы:</span> {props.powers}
      </p>
      <p>
        <span className="boldText">Подробнее:</span> {props.details}
      </p>
    </div>
  );
}

export default Superheroes;
