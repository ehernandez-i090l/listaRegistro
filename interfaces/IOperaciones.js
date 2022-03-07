const IOperaciones = {
  implementedWith: (SuperClass) => class extends SuperClass {
      listarMisDatos = (_id) => {console.log("listar");};
      eliminarAsignatura = (_idAsignatura) => {console.log("eliminar");};
    },
};

export default IOperaciones;
