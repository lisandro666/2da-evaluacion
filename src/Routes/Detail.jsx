//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail professional id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        <p>Nombre:</p>
        <p>Email:</p>
        <p>Telefono:</p>
        <p>Sitio web:</p>
    </>
  );
};

export default Detail;
