import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogs } from "../redux/thunks";
import { Alert, Flex, Spin } from "antd";

const contentStyle = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};
const content = <div style={contentStyle} />;

function DogsComponent() {
  const dispatch = useDispatch();
  const { data: dogsList, status, error } = useSelector((state) => state.dog);

  useEffect(() => dispatch(fetchDogs()), [dispatch]);
  if (status === "loading")
    return (
      <Spin tip="svjsb jdiobjiodfjblodifbjlki" size="large">
        {content}
      </Spin>
    );

  if (status === "failed") return <h1>{error.message}</h1>;
  return (
    <div>
      <h1>Dog Breeds</h1>
      {status === "succeeded" &&
        dogsList.map((dog) => {
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
