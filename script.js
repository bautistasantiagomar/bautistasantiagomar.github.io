// Botón "Sí"
document.getElementById("yesButton").addEventListener("click", function() {
    // Primera ventana emergente con mensaje 1
    const popup1 = window.open("", "_blank", "width=400,height=400");
    popup1.document.write(`
        <body style="display: flex; justify-content: center; align-items: center; height: 100%; margin: 0; flex-direction: column; font-family: Arial, sans-serif;">
            <h1 style="color: #4CAF50;">¡Te quiero!</h1>
        </body>
    `);

    // Segunda ventana emergente con mensaje 2
    const popup2 = window.open("", "_blank", "width=400,height=400");
    popup2.document.write(`
        <body style="display: flex; justify-content: center; align-items: center; height: 100%; margin: 0; flex-direction: column; font-family: Arial, sans-serif;">
            <h1 style="color: #ff69b4;">¡Te amo mucho!</h1>
        </body>
    `);

    // Tercera ventana emergente con mensaje 3
    const popup3 = window.open("", "_blank", "width=400,height=400");
    popup3.document.write(`
        <body style="display: flex; justify-content: center; align-items: center; height: 100%; margin: 0; flex-direction: column; font-family: Arial, sans-serif;">
            <h1 style="color: #FF6347;">¡Eres increíble!</h1>
        </body>
    `);
});

// Botón "No" escurridizo
const noButton = document.getElementById("noButton");
const container = document.getElementById("buttonContainer");

noButton.addEventListener("mouseover", function() {
    // Generar nuevas coordenadas aleatorias dentro del contenedor
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    const maxLeft = containerRect.width - buttonRect.width;
    const maxTop = containerRect.height - buttonRect.height;

    const newLeft = Math.random() * maxLeft;
    const newTop = Math.random() * maxTop;

    // Aplicar nuevas coordenadas al botón
    noButton.style.left = `${newLeft}px`;
    noButton.style.top = `${newTop}px`;
});