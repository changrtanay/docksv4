import { useEffect } from "react";
import Logo from "../../components/Logo/Logo";
import Loading from "../../components/Loading/Loading";
import DocCard from "../../components/DocCard/DocCard";
import styles from "./Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllPublicDocsAction } from "../../redux/doc/doc.actions";

function Home() {
  const dispatch = useDispatch();
  const { loading, error, publicDocs } = useSelector(
    (store) => store.docsManager
  );

  useEffect(() => {
    dispatch(getAllPublicDocsAction());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div>
          <Logo />
          <h1>
            Unlock your creativity and express your thoughts with ease. This
            document app is your canvas, where words come alive and ideas take
            flight
          </h1>
        </div>
        <div>
          <img src="/image-4.png" alt="banner-image" />
        </div>
      </div>
      <h1 className={styles["articles-heading"]}>
        Public <span>Documents</span>
      </h1>
      <div className={styles["articles-container"]}>
        {loading ? (
          <Loading />
        ) : error ? (
          <h1>Error...</h1>
        ) : (
          <div className={styles.articles}>
            {publicDocs.map((el) => (
              <DocCard key={el._id} data={el} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
