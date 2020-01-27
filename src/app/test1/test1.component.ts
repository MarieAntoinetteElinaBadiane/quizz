import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  reponse1: any;
  reponse2: any;
  reponse3: any;
  annee: any;
  resutat: any;
  resutat1: any;
  quest2 = false;
  quest3 = false;
  constructor() { }

  ngOnInit() {
  }
    part1 = new FormGroup({
      question1: new FormControl(''),
    });
    part2 = new FormGroup({
  question2: new FormControl(''),
    });


    part3 = new FormGroup({
      annee: new FormControl(''),
    });

  good1(donner){
    //console.log(donner);
    this.reponse1 = donner.question1
    this.resutat = ((this.reponse1 * 2 ) + 5) * 50;
    console.log(this.resutat)
    this.quest2 = true;
  }
  oui1() {
    this.quest3 = true;
    this.resutat = this.resutat + 1770;
    console.log(this.resutat)
  }
  non1(){
    this.quest3 = true;
    this.resutat = this.resutat + 1769;
    console.log(this.resutat)
  }

  good2(donner){
    this.reponse2 = donner.question2
    console.log(this.annee)
    this.resutat1 = this.reponse2-donner.annee ;
    console.log(this.resutat1)
    this.quest2 = true;
  }
}
