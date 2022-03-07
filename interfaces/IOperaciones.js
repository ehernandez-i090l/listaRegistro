const IOperaciones = {
  implementedWith: (SuperClass) => class extends SuperClass {
      listarMisDatos = () => {console.log("listar");};
      eliminarAsignatura = () => {console.log("eliminar");};
    },
};

export default IOperaciones;
