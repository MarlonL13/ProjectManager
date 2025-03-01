"use client"

import React, { useState } from "react";
import { useParams } from "next/navigation";
import ProjectHeader from "@/app/projects/ProjectHeader";

const Project = () => {
  const params = useParams();
  const id = params.id as string;
  const [activeTab, setActiveTab] = useState("Board");

  return (
    <div> 
      {/*Modal new task*/}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Project;