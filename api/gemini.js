// api/gemini.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { prompt } = req.body;

    // Aqui você chama a API real do Gemini / OpenAI / outro modelo
    // Exemplo fictício só para testar o deploy:
    const respostaFake = `
### **1. Quartzo (SiO₂)**
* Cor: Incolor, branco, rosa...
* Brilho: Vítreo
* Dureza: 7
* Traço: Incolor
`;

    res.status(200).json({ output: respostaFake });
  } catch (error) {
    res.status(500).json({ error: "Erro interno: " + error.message });
  }
}
