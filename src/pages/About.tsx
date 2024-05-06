import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/Perfil.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="avatar" className="profile-image" />
      <h1 className="profile-text">Olá eu sou Vitor Brefore</h1>
      <h2 className="profile-text">
        Criadores da PokéTips: Vitor, Gabriel Carrera, Juliana, Sabrina e Paula
      </h2>
      <h4 className="profile-text">Projeto Criado para Fatec Aberta 2024</h4>
      <div className="profile-links">
        <a href="https://github.com/Vitor-Brefore">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/vitor_brefore/">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/vitor-brefore/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
