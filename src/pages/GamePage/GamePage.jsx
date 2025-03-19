import { useState } from "react";
import GameCardComponent from "../../components/GameCard/GameCardComponent";
import GameStartModal from "../../components/GameStartModal/GameStartModal";

function GamePage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      {isModalOpen && <GameStartModal onClose={() => setIsModalOpen(false)} />}
      <GameCardComponent onHelpClick={() => setIsModalOpen(true)} />
    </>
  );
}

export default GamePage;
