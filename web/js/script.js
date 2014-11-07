
var app=angular.module("app", []);

app.controller("EntidadController", ['$scope','$log','$http',function($scope,$log,$http) {
  
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
    
    
      
    var config={
    method:"GET",
    url:"datos.json"
    };
  
    var response=$http(config);
  
    response.success(function(data, status, headers, config) {
        $scope.entidad=data;
    });
  
    response.error(function(data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:"+status);
    });
    
    $scope.nubes=[
            {
                idNube:1,
                nombre:"Cumulo"
            },
            {
                idNube:2,
                nombre:"Estrato"
            },
            {
                idNube:3,
                nombre:"Altocumulo"
            },
            {
                idNube:4,
                nombre:"Cirro"
            },
            {
                idNube:5,
                nombre:"Cumulonimbus"
            }
        ];
          
}]);
