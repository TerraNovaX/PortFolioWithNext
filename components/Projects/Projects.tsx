"use client";

import { useEffect, useState } from "react";

interface Project {
  id: string;
  title: string;
  content: string;
  url: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Appeler l'API pour récupérer les projets
    const fetchProjects = async () => {
      try {
        const response = await fetch("/app/project/projectsRoute.tsx");

        if (!response.ok) {
          throw new Error(
            `Erreur lors de la récupération des projets: ${response.statusText}`
          );
        }
        const data = await response.json();
        setProjects(data);
        console.log(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message); // Assurez-vous que 'error' est une instance de Error
        } else {
          setError("Erreur inconnue"); // Cas où l'erreur n'est pas une instance de Error
        }
        console.error("Erreur lors de la récupération des projets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Chargement des projets...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <div>
      <h2>Liste des Projets</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.content}</p>
            <a
              href="/app/project/[...id]"
              target="_blank"
              rel="noopener noreferrer">
              Voir le projet
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
