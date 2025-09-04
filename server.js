document.getElementById("downloadPdf").addEventListener("click", function () {
 const printMessage = document.getElementById("printMessage");
 printMessage.classList.remove("hidden");

 const element = document.body;
 const opt = {
  margin: [0.5, 0.5, 0.5, 0.5],
  filename: "Manual_Treinamento_Suporte_Campo.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: {
   scale: 2,
   useCORS: true,
   letterRendering: true,
   allowTaint: true,
  },
  jsPDF: {
   unit: "in",
   format: "a4",
   orientation: "portrait",
   compress: true,
  },
  pagebreak: {
   mode: ["avoid-all", "css", "legacy"],
   before: ".day-header",
  },
 };

 html2pdf()
  .from(element)
  .set(opt)
  .save()
  .then(() => {
   printMessage.classList.add("hidden");
  })
  .catch(() => {
   printMessage.classList.add("hidden");
   alert("Erro ao gerar PDF. Tente novamente.");
  });
});

// Smooth scroll and interaction enhancements
document.querySelectorAll(".pillar-item").forEach((item) => {
 item.addEventListener("mouseenter", function () {
  this.style.transform = "translateX(8px)";
 });

 item.addEventListener("mouseleave", function () {
  this.style.transform = "translateX(0)";
 });
});
