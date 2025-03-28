document.addEventListener("DOMContentLoaded", () => {
  const markdownInput = document.getElementById("editor");
  const preview = document.getElementById("preview");
  const resetButton = document.getElementById("reset-button");

  // initial content
  markdownInput.value = `
  # This is H1
  ## This is H2
  ### This is H3
  #### This is H4
  ##### This is H5
  
  **Bold text** and *italic text*
  
  ### Lists
  - Item 1
  - Item 2
  
  ### Links
  [Example link](https://example.com)
  
  `;

  // Initial render
  renderMarkdown();

  // Update preview when typing
  markdownInput.addEventListener("input", renderMarkdown);

  // Clear button functionality
  resetButton.addEventListener("click", () => {
    markdownInput.value = "";
    renderMarkdown();
    markdownInput.focus();
  });

  // Function to render markdown
  function renderMarkdown() {
    const markdownText = editor.value;
    const htmlOutput = marked.parse(markdownText);
    preview.innerHTML = htmlOutput;
  }
});
