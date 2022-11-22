import Subjects from "../components/Subjects";
import IndexCards from "../components/IndexCards";
import AddSubjectModal from "../components/AddSubjectModal";
import AddIndexCardModal from "../components/AddIndexCardModal";

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
