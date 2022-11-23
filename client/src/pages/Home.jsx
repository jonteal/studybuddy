import Subjects from "../components/Subjects/Subjects";
import IndexCards from "../components/IndexCards/IndexCards";
import AddSubjectModal from "../components/AddSubjectModal/AddSubjectModal";
import AddIndexCardModal from "../components/AddIndexCardModal/AddIndexCardModal";

const Home = () => {
  return (
    <>

      <div className="d-flex gap-3 mb-4">
      <AddSubjectModal />
      <AddIndexCardModal />
      </div>
        <Subjects />
        <hr />
        <IndexCards />
    </>
  );
};

export default Home;
