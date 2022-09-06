// reusable wrapper component

import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;

  // wrappED component will have both "card" class (giving it css styling common to "cards")  -- PLUS  whatever other class is passed to it as props by wrappING Card component (giving it unique css stylings)

  // ex. classes = 'card expenses'
  // ex. classes = 'card expense-item'

  return <div className={classes}>{props.children}</div>;
}

export default Card;
