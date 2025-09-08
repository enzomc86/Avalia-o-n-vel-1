const express = require("express");
const puppeteer = require("puppeteer");
const path = require("path");

const app = express();
const PORT = 3000;

// Servir os arquivos estáticos (HTML, CSS, etc.)
app.use(express.static(path.join(__dirname)));

// Rota para gerar o PDF
app.get("/download-pdf", async (req, res) => {
 try {
  const browser = await puppeteer.launch({
   headless: "new",
   args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  // Abre o HTML local
  await page.goto(`http://localhost:${PORT}/index.html`, {
   waitUntil: "networkidle0",
  });

  // Forçar todos os slides a ficarem visíveis (um por página) e esconder botão de download
  await page.evaluate(() => {
   const slides = document.querySelectorAll(".slide");
   slides.forEach((s) => {
    s.style.display = "flex"; // Mantém flex para centralização
    s.style.position = "relative";
    s.style.height = "100vh";
    s.style.pageBreakAfter = "always";
    s.style.justifyContent = "center";
    s.style.alignItems = "center";
   });

   // CORREÇÃO: Remover completamente o botão do DOM
   const downloadBtn = document.querySelector("#downloadBtn");
   if (downloadBtn) {
    downloadBtn.remove(); // Remove completamente do DOM
   }

   // Remover também os controles de navegação
   const navControls = document.querySelector(".fixed.bottom-6");
   if (navControls) navControls.remove();

   const progressBar = document.querySelector(".fixed.top-0");
   if (progressBar) progressBar.remove();

   const slideIndicator = document.querySelector(".fixed.top-6.right-6");
   if (slideIndicator) slideIndicator.remove();
  });

  // Gerar PDF
  const pdfBuffer = await page.pdf({
   format: "A4",
   printBackground: true,
   margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  await browser.close();

  // Enviar PDF para o usuário
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
   "Content-Disposition",
   "attachment; filename=Manual_Treinamento.pdf"
  );
  res.send(pdfBuffer);
 } catch (err) {
  console.error("Erro ao gerar PDF:", err);
  res.status(500).send("Erro ao gerar PDF");
 }
});

app.listen(PORT, () => {
 console.log(`Servidor rodando em http://localhost:${PORT}`);
});
