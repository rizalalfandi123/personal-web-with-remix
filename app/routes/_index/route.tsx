import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "About Rizal Alfandi" },
    { name: "description", content: "describe who is Rizal Alfandi" },
  ];
};

const HomePage: React.FunctionComponent = () => {
  return <div>about</div>;
};

export default HomePage;
