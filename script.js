// Função que retorna uma Promise.
function asyncFunction() {
  return new Promise((resolve, reject) => {
    // Simula uma operação assíncrona.

    setTimeout(() => {
      const isSuccess = true; // Se trocar para false, elá cairá no reject.

      if (isSuccess) {
        resolve("A operação foi concluída com sucesso!");
      } else {
        reject("Algo deu errado!");
      }
    }, 3000); // Simula uma operação que leva 3 segundos.
  });
}
// // Visualizando que o retorno é uma promise.
// //console.log(asyncFunction());

// console.log("Executando função assincrona...");

// // const response = asyncFunction();
// // console.log(response);

// asyncFunction()
//   .then((response) => {
//     console.log("Sucesso:", response);
//   })
//   .catch((error) => {
//     console.log("Error:", error);S
//   })
//   .finally(() => {
//     console.log("Fim da execução");
//   });

// O CÓDIGO ACIMA É UMA FORMA DE LIDAR SEM O ASYNC AWAIT. ONDE USAMOS O THEN PARA TRATAR A RESOLUÇÃO E O CATCH PARA TRATAR O ERRO.

// async function fetch() {
//   const response = await asyncFunction(); // o await não funciona sem o async.
//   console.log(response);
// }
// fetch();

// usando com arrow function
// const fetch = async () => {
//   const response = await asyncFunction();

// };

// fetch();

// usando com arrow function e bloco de try/catch

const fetch = async () => {
  try {
    const response = await asyncFunction();
    console.log("Sucesso:", response);
  } catch (error) {
    console.log("Erro:", error);
  } finally {
    console.log("Fim da execução!");
  }
};

fetch();
