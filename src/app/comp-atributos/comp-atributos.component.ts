import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  //propriedade
  estilo:string = ""
	corFundo:string = "red"
	corDaFonte:string = "purple"
	item:string = ""
	lista:string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  trocar(){
    if(this.estilo == "disable"){
      this.estilo = "enable"
    }else{
      this.estilo = "disable"
    }
  }
	adicionarLista(){
		this.lista.push(this.item)
	}

}
