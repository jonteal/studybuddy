import Subjects from "../../components/Subjects/Subjects";
import IndexCards from "../../components/IndexCards/IndexCards";
import AddSubjectModal from "../../components/modals/AddSubjectModal/AddSubjectModal";
import AddIndexCardModal from "../../components/modals/AddIndexCardModal/AddIndexCardModal";

import "./home.css";
import Filter from "../../components/Filter/Filter";

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
      <hr />
      {/* <IndexCards /> */}
    </div>
  );
};

export default Home;
