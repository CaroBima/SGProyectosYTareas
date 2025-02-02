import React from "react";
import styles from "./proyectoComponent.module.css";

interface ProyectoComponent {
  title: string;
}

const ProyectoComponent: React.FC<ProyectoComponent> = ({ title }) => {
  return <div className={styles.container}>
    {title}</div>;
    
};

export default ProyectoComponent;
