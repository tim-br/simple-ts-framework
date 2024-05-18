import DOMPurify from 'dompurify';

export interface Renderable {
  render(): string;
}

export function printRendered(item: Renderable): void {
  console.log(item.render());
}

export function appendRenderedToBody(item: Renderable): void {
  let outputHtml = item.render();
  outputHtml = DOMPurify.sanitize(outputHtml);  // Sanitize the HTML to ensure it's safe to render
  const container = document.createElement('div');
  container.innerHTML = outputHtml;  // Using innerHTML after sanitization to render HTML
  document.body.appendChild(container);
}