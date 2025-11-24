export function formatPeso(value, withSymbol = false) {
  const n = Number(value) || 0;
  // usa la localización para que el separador de miles sea punto y sin decimales
  const formatted = n.toLocaleString("es-CO", { maximumFractionDigits: 0 });
  return withSymbol ? `$ ${formatted}` : formatted;
}
