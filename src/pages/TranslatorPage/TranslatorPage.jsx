import { useState } from "react";
import WordCardComponent from "../../components/WordCard/WordCardComponent";
import SignInModal from "../../components/SignInModal/SignInModal";

function TranslatorPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <WordCardComponent onSignInClick={() => setIsModalOpen(true)} />
      {isModalOpen && <SignInModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

export default TranslatorPage;
