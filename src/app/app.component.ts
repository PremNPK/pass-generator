import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
length=0;
password='';
includeLetter=false;
includeNumber=false;
includeSymbol=false;
onLength(value:string){
  const parseValue=parseInt(value);
  if(!isNaN(parseValue))
  this.length=parseValue;
}

onUseLetter(){
  this.includeLetter=!this.includeLetter;
}
onUseNumber(){
  this.includeNumber=!this.includeNumber;
}
onUseSymbol(){
  this.includeSymbol=!this.includeSymbol;
}
onButtonClick(){
 const number='1234567890';
 const letter='abcdefghijklmnopqrstuvwxyz';
 const symbol='!@#$%^&*()';
 let validChars='';
 if(this.includeNumber){
  validChars +=number;
 }
 if(this.includeLetter){
  validChars+=letter;
 } 
 if(this.includeSymbol){
  validChars+=symbol;
 } 
 let generatePassword='';
 for(let i=0;i<this.length;i++){
  const index=Math.floor(Math.random()*validChars.length);
  generatePassword += validChars[index];
  console.log(i);
 }
 this.password=generatePassword;
}
}

