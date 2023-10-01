import Navigation from "../navigation/Navigation.js";

export default function Layout({ children }) {
  return (
    <>
      <>{children}</>
      <Navigation />
    </>
  );
}
