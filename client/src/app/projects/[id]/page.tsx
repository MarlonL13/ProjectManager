"use client"

import React, { useState } from "react";
import { useParams } from "next/navigation";
import ProjectHeader from "@/app/projects/ProjectHeader";
import Board from "../BoardView";

const Project = () => {
  const params = useParams();
  const id = params.id as string;
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div> 
      {/*Modal new task*/}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      { activeTab === "Board" && <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}  /> }
    </div>
  );
};

export default Project;