"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Project = {
  id: string;
  title: string;
  content: string;
  url: string;
};

export default function ProjectPage() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return; // Vérifie que l'ID est disponible

    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/project/${id}`);
        if (!response.ok) throw new Error("Projet introuvable");

        const data = await response.json();
        setProject(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return <p>Chargement du projet...</p>;
  if (error) return <p className="text-red-500">Erreur : {error}</p>;
  if (!project) return <p>Aucun projet trouvé.</p>;

  return (
    <div className="p-8 m-5 bg-blue-100 rounded-lg">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-4">{project.content}</p>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md">
        Voir le projet
      </a>
    </div>
  );
}
