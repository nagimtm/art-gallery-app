import Navigation from "../navigation/Navigation.js";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <>{children}</>
    </>
  );
}
