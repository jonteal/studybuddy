import Subjects from "../../components/Subjects/Subjects";
import AddSubjectModal from "../../components/modals/AddSubjectModal/AddSubjectModal";
import AddIndexCardModal from "../../components/modals/AddIndexCardModal/AddIndexCardModal";
import Filter from "../../components/Filter/Filter";

import "./home.css";

const Home = () => {
  
  return (
    <div>
      <div className="controls-container">
        <div className="d-flex gap-3 mb-4">
          <AddSubjectModal />
          <AddIndexCardModal />
        </div>
        <Filter />
      </div>
      <Subjects />
    </div>
  );
};

export default Home;
