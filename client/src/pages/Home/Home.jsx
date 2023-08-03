import Subjects from "../../components/Subjects/Subjects";
import AddSubjectModal from "../../components/modals/AddSubjectModal/AddSubjectModal";
import AddIndexCardModal from "../../components/modals/AddIndexCardModal/AddIndexCardModal";
import Filter from "../../components/Filter/Filter";

import "./home.css";
import Timer from "../../components/Timer/components/Timer";

const Home = () => {
  return (
    <div className="home-main-container">
      <div className="controls-container">
        <div className="add-modal-container d-flex gap-3 mb-4">
          <AddSubjectModal />
          <AddIndexCardModal />
        </div>

        {/* <Timer /> */}
      </div>
      <Subjects />
    </div>
  );
};

export default Home;
