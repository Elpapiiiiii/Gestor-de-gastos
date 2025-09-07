// Gestor de Gastos - Primera Entrega
// Cumple: array, while/for, if/switch, funciones, prompts/confirm/alert/console.log, sin DOM.

alert("¡Bienvenido/a al Gestor de Gastos!");

// ----- Estado (ARRAY) -----
const gastos = []; // cada gasto: { desc, monto, categoria }

// ----- Utilidades -----
function esNumeroValido(valor) {
  // Devuelve true si es un número positivo
  return typeof valor === "number" && !isNaN(valor) && valor > 0;
}

function normalizarCategoria(opcion) {
  // Usa SWITCH para mapear opciones a texto
  switch (opcion) {
    case "1":
      return "Comida";
    case "2":
      return "Transporte";
    case "3":
      return "Hogar";
    case "4":
      return "Ocio";
    case "5":
      return "Otros";
    default:
      return "Otros"; // fallback obligatorio por si el usuario ingresa cualquier cosa
  }
}

// ----- Funciones principales -----
function agregarGasto() {
  const desc = prompt(
    "Descripción del gasto (ej: 'Super', 'SUBE', 'Netflix'):"
  );
  if (!desc) {
    alert("Descripción vacía. No se registró el gasto.");
    return; // IF
  }

  const montoStr = prompt("Monto del gasto (solo números, ej: 2500.50):");
  const monto = parseFloat(montoStr);

  if (!esNumeroValido(monto)) {
    alert("Monto inválido. Debe ser un número mayor a 0.");
    return; // IF
  }

  const categoriaOpcion = prompt(
    "Categoría:\n1) Comida\n2) Transporte\n3) Hogar\n4) Ocio\n5) Otros\n(ingresá 1-5)"
  );
  const categoria = normalizarCategoria(categoriaOpcion);

  const gasto = { desc, monto, categoria };
  gastos.push(gasto); // ARRAY + push

  alert(
    `Gasto agregado:\n• ${gasto.desc}\n• $${gasto.monto.toFixed(2)}\n• ${
      gasto.categoria
    }`
  );
}

function calcularTotal() {
  let total = 0;
  // FOR clásico para recorrer el array
  for (let i = 0; i < gastos.length; i++) {
    total += gastos[i].monto;
  }
  return total;
}

function resumenPorCategoria() {
  // objeto acumulador
  const acumulado = {
    Comida: 0,
    Transporte: 0,
    Hogar: 0,
    Ocio: 0,
    Otros: 0,
  };

  // FOR...OF para variar el tipo de bucle
  for (const g of gastos) {
    // IF defensivo por si la categoría no está
    if (!acumulado.hasOwnProperty(g.categoria)) {
      acumulado["Otros"] += g.monto;
    } else {
      acumulado[g.categoria] += g.monto;
    }
  }

  return acumulado;
}

function mostrarResumen() {
  if (gastos.length === 0) {
    alert("No cargaste ningún gasto.");
    return;
  }

  const total = calcularTotal();
  const porCat = resumenPorCategoria();

  // Mostramos un alert con lo esencial
  alert(
    "Resumen de gastos:\n" +
      `Total: $${total.toFixed(2)}\n\n` +
      "Por categoría:\n" +
      `• Comida: $${porCat.Comida.toFixed(2)}\n` +
      `• Transporte: $${porCat.Transporte.toFixed(2)}\n` +
      `• Hogar: $${porCat.Hogar.toFixed(2)}\n` +
      `• Ocio: $${porCat.Ocio.toFixed(2)}\n` +
      `• Otros: $${porCat.Otros.toFixed(2)}\n`
  );

  // Y volcamos detalle extendido en la consola
  console.log("=== DETALLE DE GASTOS ===");
  for (let i = 0; i < gastos.length; i++) {
    const g = gastos[i];
    console.log(
      `#${i + 1} - ${g.desc} | $${g.monto.toFixed(2)} | ${g.categoria}`
    );
  }

  // Condicional extra de ejemplo (IF): aviso si el total supera cierto umbral
  if (total > 100000) {
    alert("⚠️ Ojo: tus gastos superan $100.000.");
  }
}

// ----- Flujo principal (WHILE + CONFIRM/PROMPT) -----
let seguir = confirm("¿Querés cargar un gasto?");
while (seguir) {
  agregarGasto();
  seguir = confirm("¿Cargar otro gasto?");
}

// Al finalizar la carga, mostramos el resumen
mostrarResumen();

// Fin del programa.
