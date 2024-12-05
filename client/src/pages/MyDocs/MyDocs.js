import { useEffect } from "react";
import DocCard from "../../components/DocCard/DocCard";
import Loading from "../../components/Loading/Loading";
import styles from "../Home/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllPrivateDocsAction } from "../../redux/doc/doc.actions";

function MyDocs() {
  const dispatch = useDispatch();
  const { loading, error, publicDocs } = useSelector(
    (store) => store.docsManager
  );

  useEffect(() => {
    dispatch(getAllPrivateDocsAction());
  }, []);

  return (
    <main>
      <div className={styles["articles-container"]}>
        {loading ? (
          <Loading />
        ) : error ? (
          <h1>Error...</h1>
        ) : (
          <div className={styles.articles}>
            {publicDocs.length === 0 ? (
              <p>No documents created yet</p>
            ) : (
              publicDocs.map((el) => <DocCard key={el._id} data={el} />)
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default MyDocs;
