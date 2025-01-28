#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");

const args = process.argv.slice(2);

// Verifica o gerenciador de pacotes
let packageManager = "npm"; // padrão
if (args.includes("--yarn")) packageManager = "yarn";
if (args.includes("--pnpm")) packageManager = "pnpm";

console.log(`Usando o gerenciador de pacotes: ${packageManager}`);

// Instalar as dependências
try {
  console.log("Instalando dependências...");
  execSync(`${packageManager} install`, { stdio: "inherit" });
  console.log("Dependências instaladas com sucesso!");
} catch (error) {
  console.error("Erro ao instalar as dependências:", error);
}

// Crie uma mensagem de finalização
console.log(`
✨ Seu projeto foi configurado com sucesso! 🚀
Execute os seguintes comandos para começar:
1. cd <project-name>
2. ${packageManager} start
`);
