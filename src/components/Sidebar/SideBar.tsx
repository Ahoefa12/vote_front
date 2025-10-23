import { Link } from "react-router";
import { useState } from "react";
import "./Sidebar.css";

export default function SideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const linkStyle = {
    display: "block",
    color: "white",
    textDecoration: "none",
    marginBottom: "0.5rem",
    padding: "0.5rem",
  };

  return (
    <>
      {/* Bouton d’ouverture visible uniquement quand la sidebar est fermée */}
      {!sidebarOpen && (
        <button onClick={toggleSidebar} className="toggle-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      )}

      {/* Sidebar */}
      <div className={`side-bar ${sidebarOpen ? "open" : "closed"}`}>
        {/* Bouton de fermeture intégré dans la sidebar */}
        <button onClick={toggleSidebar} className="close-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav>
          <Link to="/" style={linkStyle}>Accueil</Link>
          <Link to="/candidats/list" style={linkStyle}>Liste des candidats</Link>
          <Link to="/candidats/" style={linkStyle}>Créer un candidat</Link>
        </nav>
      </div>
    </>
  );
}
