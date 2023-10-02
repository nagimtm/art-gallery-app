import Navigation from "../Navigation/Navigation.js";

export default function Layout({ children }) {
  return (
    <>
      <>{children}</>
      <Navigation />
    </>
  );
}
