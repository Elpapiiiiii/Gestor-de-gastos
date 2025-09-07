# Primera Entrega - JavaScript Básico

Este proyecto corresponde a la **primera entrega de JavaScript**.  
La consigna pedía entregar un programa que incluya:

- ✅ Un **array**
- ✅ Un **ciclo de iteración** (`for` y/o `while`)
- ✅ Un **condicional** (`if` y/o `switch`)
- ✅ **Funciones**
- ✅ Interacción con el usuario usando **prompt, confirm, alert, console.log**
- ❌ No usar DOM ni eventos
- ✅ HTML mínimo que solo importe el archivo JS

---

## Archivos

- `index.html`: archivo base, solo importa el script.
- `app.js`: contiene toda la lógica en JavaScript.

---

## Funcionalidad

El programa es un **Gestor de Gastos** simple:

1. El usuario puede **cargar gastos** con descripción, monto y categoría.
2. Los gastos se guardan en un **array**.
3. Se muestran resúmenes:
   - Total de gastos.
   - Total por categorías.
   - Listado detallado en la consola.
4. Incluye **validaciones básicas** (monto válido, descripción no vacía, etc.).
5. Usa `if` y `switch` para condicionales.

---

## Cómo probarlo

1. Clonar el repo o descargar los archivos.
2. Abrir `index.html` en un navegador.
3. Interactuar con los **prompts/alerts**.
4. Abrir la **consola** del navegador para ver el detalle.

---

## Ejemplo de uso

- Prompt: *"Descripción del gasto"* → `Super`
- Prompt: *"Monto del gasto"* → `3500`
- Prompt: *"Categoría"* → `1` (Comida)

➡️ Se guarda en el array y se suma al total.  
Al final se muestra un **resumen** con todos los gastos cargados.

---
