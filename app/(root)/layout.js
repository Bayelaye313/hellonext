import Navbar from "../../components/Navbar";

export default function Layout({ children }) {
  return (
    <main className="font-serif">
      <Navbar />
      {children}
    </main>
  );
}
