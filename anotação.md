Diretivas: 
	SÃO A MANEIRA COMO O ANGULAR MANIPULA E ALTERA A DOM DINAMICAMENTE (OS ELEMENTOS QUE ESTÃO NAS ARVORES)

Diretivas de atributo:
	Alteram a aparencia ou comportamento de um elemento, componente ou outra diretiva
		- NgClass: Adiciona ou remove conjunto de classes CSS
		- NgStyle: Adiciona ou remove um conjunto de estilos HTML
		- NgModel: Adiciona vinculação de dados bidirecional a um elemento de um formulário

Diretivas estruturais:
	Moldam ou remodelam a estrutura da DOM, adicionando ou removendo elementos na tela
		- NgIf: Condicional que verifica se modelo deve ser visualizado ou não
		- NgFor: repete um elemento para cada item em uma lista
		- NgSwitch: Utilizado para alternar entre comportamentos alternativos 

USO NO "NgIf":
  . Quando utilizo ele a nivel de componente, ou seja, dentro do seletor do componente no arquivo HTML, eu desapareço com todo o conteudo que estiver lá dentro. E quando eu não quero mostrar apenas um elemento, eu utilizo ele no elemento que não quero mostrar.
  . Posso utilizar ele juntamente com o Data Biding 

  * "NgIf com NgTemplate:
    . Com essas diretivas podemos criar um bloco condicional (bloco secreto)

USO DO "NgFor"
  . Constroi dinamicamentro elementos LI para cada elemento que estiver na minha API ou array p

