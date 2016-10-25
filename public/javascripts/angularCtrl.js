angular.module('myApp', []);

var myController = function($scope, $http){
$scope.titulo = "Entregas";
$scope.classe1 = "selecionado";
$scope.classe2 = "negrito";
  $scope.clientes = [
    {nome:"FastEntrega", codigo:"0001", valor:"500000", data: new Date(), endereco:"Rua: saidusaudihidsaiuaiuhisd n:123"},
    {nome:"Lojas Br", codigo:"0002", valor:"2000000",data: new Date(), endereco:"Rua: saidusaudihidsaiuaiuhisd n:123"},
    {nome:"Cafeteria Sabor", codigo:"0003", valor:"100000",data: new Date(), endereco:"Rua: saidusaudihidsaiuaiuhisd n:123"},
    {nome:"Mc Burger", codigo:"0004", valor:"500000",data: new Date(), endereco:"Rua: saidusaudihidsaiuaiuhisd n:123"},
  ];

  $scope.adicionarCliente = function(cliente){
    $scope.clientes.push(angular.copy(cliente));
    delete $scope.cliente;
  };

  $scope.apagarCliente = function(clientes){
    $scope.clientes = clientes.filter(function(cliente){
      if (!cliente.selecionado){
         return cliente;
       };
    });
  };

  $scope.checkSelecionado = function(clientes){
      return clientes.some(function(cliente){
        return cliente.selecionado;
      });
  };

  $scope.consultarEndereco = function(cepInput){
    var UrlViaCep = "https://viacep.com.br/ws/" + cepInput + "/json/";
    console.log(UrlViaCep);
    $http.get(UrlViaCep).success(function(Data){
      $scope.endereco = Data;
      console.log($scope.endereco);
    });

  };

//--------------------------------------------------------- 
};
angular.module('myApp').controller('myCtlr', myController);