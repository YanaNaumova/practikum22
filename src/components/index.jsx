import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBreeds } from "../redux/thunks";

function DogsComponent() {
  const dispatch = useDispatch();
  const { data: dogs, status, error } = useSelector((state) => state.dogs);

  useEffect(() => dispatch(fetchBreeds()), [dispatch]);
  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "failed") return <h1>{error}</h1>;
  return (
    <div>
      <h1>Dog Breeds</h1>
      {status === "succeeded" &&
        dogs.map((dog) => {
          return (
            <div key={dog.id}>
              <h2>{dog.name}</h2>
              <p>{dog.temperament}</p>
            </div>
          );
        })}
    </div>
  );
}

export default DogsComponent;
