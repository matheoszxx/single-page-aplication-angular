import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  //Propriedades
  produtos: string[] = []
  menuType: string = "superUsersaf"

  constructor() {
    //simulação de como se tivesse buscando os produtos de dentro de uma API
    this.produtos = ["mouse", "teclado", "fonte", "cabo"]
  }

  ngOnInit(): void {
  }

  adicionar(){
    this.produtos.push("Computador")
  }

  remover(index:number){
    //excluindo um item apartir do indice dele ao clicar em cima do item
    this.produtos.splice(index, 1)
  }


}
