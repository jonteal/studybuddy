import Subjects from "../../components/Subjects/Subjects";
import IndexCards from "../../components/IndexCards/IndexCards";
import AddSubjectModal from "../../components/modals/AddSubjectModal/AddSubjectModal";
import AddIndexCardModal from "../../components/modals/AddIndexCardModal/AddIndexCardModal";

import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="d-flex gap-3 mb-4">
        <AddSubjectModal />
        <AddIndexCardModal />
      </div>
      <Subjects />
      <hr />
      <IndexCards />
    </div>
  );
};

export default Home;
