export { Page };

function Page() {
  return (
    <>
      <div className="box-container">
        <section className="title">
          <h2>Registro</h2>
        </section>
        <section className="body">
          <div>
            <h4>Usuario</h4>
            <input></input>
          </div>
          <div>
            <h4>Contraseña</h4>
            <input></input>
          </div>
        </section>
        <button className="btn-1">Registrar</button>
      </div>
    </>
  );
}
