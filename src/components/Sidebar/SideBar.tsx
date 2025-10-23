import { Link } from "react-router";
import { useState } from "react";
import "./Sidebar.css";

export default function SideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fonction pour basculer l’état (ouvrir / fermer)
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
      {/* Bouton pour ouvrir/fermer la sidebar */}
      <button onClick={toggleSidebar} className="toggle-btn">
        {sidebarOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
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
        ) : (
          "Ouvrir le menu"
        )}
      </button>

      {/* Sidebar avec classe dynamique */}
      <div className={`side-bar ${sidebarOpen ? "open" : "closed"}`}>
        
        <nav>
          {/* <Link to="/" style={linkStyle}>
            Accueil
          </Link> */}
          <Link to="/" style={linkStyle}>
            Liste des candidats
          </Link>
          <Link to="/candidats/" style={linkStyle}>
            Créer un candidat
          </Link>
          <Link to="/parametres" style={linkStyle}>
            Paramètres
          </Link>
        </nav>
      </div>
    </>
  );
}
