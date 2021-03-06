import { Component, OnInit } from '@angular/core';
import { IDadosAvaliacao } from './dados-avaliacao';

@Component({
  selector: 'app-dados-avaliacoes-realizadas',
  templateUrl: './dados-avaliacoes-realizadas.component.html',
  styleUrls: ['./dados-avaliacoes-realizadas.component.css']
})
export class DadosAvaliacoesRealizadasComponent implements OnInit {

  //dadosAvaliacao: IDadosAvaliacao
  dadosAvaliacao1=[]
  dadosAvaliacao2=[]

  constructor() { }

  ngOnInit(): void {
    this.getDadosAvaliacao()
  }

  getDadosAvaliacao(): void {
    this.dadosAvaliacao1 = [
      {
        nome: "Peso",
        imagem: null,
        valor: "85kg"
      },
      {
        nome: "Massa Muscular",
        imagem: null,
        valor: "35kg"
      },
      {
        nome: "Gordura Corporal",
        imagem: null,
        valor: "30%"
      },
      {
        nome: "Gordura Visceral",
        imagem: null,
        valor: "10%"
      },
    ]

    this.dadosAvaliacao2 = [
      {
        nome: "Água",
        imagem: null,
        valor: "73%"
      },
      {
        nome: "Proteína",
        imagem: null,
        valor: "50%"
      },
      {
        nome: "Massa Óssea",
        imagem: null,
        valor: "10kg"
      },
      {
        nome: "Metabolismo Basal",
        imagem: null,
        valor: "85kg"
      },
    ]
    
  }
}
