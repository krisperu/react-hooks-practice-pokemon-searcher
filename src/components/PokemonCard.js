import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, sprites}) {
  const [showFront, setShowFront] = useState(true)

  function handleImgClick() {
    setShowFront(!showFront)
  }

  return (
    <Card>
      <div>
        <div className="image" onClick={handleImgClick}>
          <img src={showFront ? sprites.front : sprites.back} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
