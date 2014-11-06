
var app=angular.module("app", []);

function EntidadController($scope) {
    $scope.mensaje="HOLA MUNDO";
    
    $scope.cambiarMensaje=function() {
        $scope.mensaje="HASTA LUEGO, AMIGOS ;-)";
    };
    
    $scope.entidad={
        idEntidadBancaria:"",
        nombreEntidad:"",
        codigoEntidad:"",
        fechaCreacion:"",
        edadMayor:"",
        conDescuento:true
    };
    
    
};
