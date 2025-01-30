"use client";

import { useState, useEffect, useTransition } from "react";
import SectionHeading from "../Helper/SectionHeading";

export type Project = {
  id: string;
  title: string;
  content: string;
  url: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const loadProjects = async () => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/project");
        if (!response.ok) throw new Error("Erreur de récupération des projets");

        const data = await response.json();
        setProjects(data);
        setError(null);
      } catch (err) {
        setError((err as Error).message);
      }
    });
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <div className="mb-36 mt-14">
      <SectionHeading>MY PROJECTS</SectionHeading>
      {isPending && <p>Chargement des projets...</p>}
      {error && <p className="text-red-500">Erreur : {error}</p>}
      <ul className="mt-20 mb-12">
        {projects.map((project) => (
          <li key={project.id} className="p-8 m-5 bg-blue-100">
            <h3>{project.title}</h3>
            <p>{project.content}</p>
            <a
              href={`/project/${project.id}`}
              target="_blank"
              rel="noopener noreferrer">
              Voir le projet
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={loadProjects}
        disabled={isPending}
        className="m-5 px-4 py-2 bg-blue-600 text-white rounded-md">
        Rafraîchir les projets
      </button>
    </div>
  );
}
