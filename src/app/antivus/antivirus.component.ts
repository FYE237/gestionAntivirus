import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { caracter } from "../model/caracter";
import { caracteristique } from "../model/caracteristique";
import {RouteAntivirusService} from "../service/route-antivirus.service";

@Component({
  selector: 'app-antivirus',
  templateUrl: './antivirus.component.html',
  styleUrls: ['./antivirus.component.css']

})
export class AntivirusComponent{

  public showCaracteristique!: boolean;
  public bool! : boolean;
  public antivirusForm!: FormGroup;
  public indice!: number;
 public caracteristique1!: caracteristique;


  constructor(private fb: FormBuilder, private service2 : RouteAntivirusService){

  }
  public caracteristique = {
      nomAntivirus : '',
      version: '',
      Imageurl: '',
  };
  public caracteristique0!: caracteristique[];
  public caracter!: caracter;
  caractSubscription!: Subscription;


  ngOnInit(): void {

    this.antivirusForm = this.fb.group({
      antivirusName: ['', Validators.required],
      antivirusVersion: ['',Validators.required],

    });
    this.indice =0;
  }
  public rechercheCaracteristiqueAntivirus(): void {
      console.log(this.antivirusForm.value)

  }
   public async afficherCaracteristiqueAntivirus(){


    const formvalue = this.antivirusForm.value;
    this.indice = 3;
    const caracter2 = new caracter(
      formvalue['antivirusName'],
      formvalue['antivirusVersion']
    )
  this.caractSubscription = this.service2.caractSubject.subscribe(
   ( caracteristique2:caracteristique[]) =>{
     this.caracteristique0=caracteristique2
   }
  )
    console.log(JSON.stringify(caracter2));
   await this.service2.getCaracteristique(caracter2);
    this.showCaracteristique = false;

    this.caracteristique.nomAntivirus = this.antivirusForm.value.antivirusName.toUpperCase();
    this.caracteristique.version = this.antivirusForm.value.antivirusVersion;
    this.caracteristique.Imageurl = 'assets/image/notfound.png';
    if(this.caracteristique0 != undefined){
      if(this.caracteristique0.length!=0){
        this.caracteristique1 =this.caracteristique0[0];

        if(this.caracteristique1.nomAntivirus != undefined){
          for(let i = 0; i< this.caracteristiqueAntivirus.length; i++ ){
            if(this.caracteristiqueAntivirus[i].nom.toUpperCase() == this.antivirusForm.value.antivirusName.toUpperCase() ){
              this.caracteristique.Imageurl = this.caracteristiqueAntivirus[i].imageurl;
              this.showCaracteristique = true;


            }
          }
        }
      }
      this.indice =2;
    }




  }

  public listeAntivirus():void {
    this.indice = 1;
    function sortArray(x: { nom: number; }, y: { nom: number; }){
      if(x.nom < y.nom) {return -1;}
      if(x.nom > y.nom) {return 1;}
      return 0;
    }
    for(let i = 0; i< this.caracteristiqueAntivirus.length; i++ ){
      this.caracteristiqueAntivirus[i].nom = this.caracteristiqueAntivirus[i].nom.toUpperCase();
    }
    this.s = this.caracteristiqueAntivirus.sort(sortArray);

  }
  public resetPage():void{
    this.indice = 0;
  }
  public s!: any[];
  public caracteristiqueAntivirus: any[] = [
    {
     nom: "F-Secure",
     imageurl :'assets/image/fSecure.png',
  },
  {
    nom: "PC Protect",
    imageurl :'assets/image/imageNotFound.png',
 },
 {
  nom: "Intego",
  imageurl :'assets/image/imageNotFound.png',
},
{
  nom: "Scan Guard",
  imageurl :'assets/image/imageNotFound.png',
},
{
  nom: "Malwarebytes",
  imageurl :'assets/image/imageNotFound.png',
},
{
  nom: "Intrusta",
  imageurl :'assets/image/imageNotFound.png',
},
{
  nom: "Eset",
  imageurl :'assets/image/imageNotFound.png',
},
{
  nom: "Clean Master",
  imageurl :'assets/image/imageNotFound.png',
},
{
  nom: "Zemana",
  imageurl :'assets/image/imageNotFound.png',
},
{
  nom: "Mac Booster",
  imageurl :'assets/image/imageNotFound.png',
},
{
  nom: "HitmanPro",
  imageurl :'assets/image/imageNotFound.png',
},
{
  nom: "360 Total Revision",
  imageurl :'assets/image/imageNotFound.png',
},
{
  nom: "PC Matic",
  imageurl :'assets/image/imageNotFound.png',
},
{
  nom: "DFNDR security",
  imageurl :'assets/image/imageNotFound.png',
},
{
  nom: "SpyBot",
  imageurl :'assets/image/imageNotFound.png',
},
{
  nom: "Sophos Central",
  imageurl :'assets/image/imageNotFound.png',
},
{
  nom: "VIPRE",
  imageurl :'assets/image/imageNotFound.png',
},
{
  nom: "ClamAV",
  imageurl :'assets/image/imageNotFound.png',
},
{
  nom: "Webroot",
  imageurl :'assets/image/imageNotFound.png',
},
  {
    nom: "Kaspersky",
    imageurl :'assets/image/kaspersky.png',
 },
  {
    nom: "norton",
    imageurl :'assets/image/northon.png',
 },
 {
  nom: "Smadav",
  imageurl :'assets/image/Smadav.png',
},
{
  nom: "Windows defender",
  imageurl :'assets/image/windowsdefender.png',
},
{
  nom: "Advanced systemcare",
  imageurl :'assets/image/advancedsystemcare.png',
},
{
  nom: "AhnLab V3",
  imageurl :'assets/image/ahnlab.png',
},
{
  nom: "Avast",
  imageurl :'assets/image/avast.png',
},
{
  nom: "AVG",
  imageurl :'assets/image/avg.png',
},
{
  nom: "Total AV",
  imageurl :'assets/image/avg.png',
},
{
  nom: "Avira",
  imageurl :'assets/image/avira.png',
},
{
  nom: "Bitdefender",
  imageurl :'assets/image/Bitdefender.png',
},
{
  nom: "ClamWin",
  imageurl :'assets/image/ClamWin.png',
},
{
  nom: "Comodo nom",
  imageurl :'assets/image/Comodo.png',
},
{
  nom: "Comodo Internet Security",
  imageurl :'assets/image/comodo.png',
},
{
  nom: "Dr Web",
  imageurl :'assets/image/drweb.png',
},
{
  nom: "NOD32",
  imageurl :'assets/image/NOD32.png',
},
{
  nom: "Fortinet",
  imageurl :'assets/image/fortinet.png',
},
{
  nom: "F-PROT",
  imageurl :'assets/image/fprot.png',
},
{
  nom: "iolo system shield",
  imageurl :'assets/image/iolo.png',
},
{
  nom: "king soft",
  imageurl :'assets/image/Kingsoft.png',
},
{
  nom: "mcafee virusscan",
  imageurl :'assets/image/mcafee.png',
},
{
  nom: "microsoft security",
  imageurl :'assets/image/microsoftsecurity.png',
},
{
  nom: "Panda",
  imageurl :'assets/image/panda.png',
},
{
  nom: "trend micro internet security",
  imageurl :'assets/image/trendmicro.png',
},
{
  nom: "trustport",
  imageurl :'assets/image/TrustPort.png',
},
{
  nom: "vba32 antivirus",
  imageurl :'assets/image/vba.png',
},
{
  nom: "Zone Alarm",
  imageurl :'assets/image/zonealarm.png',
},
{
  nom: "Avast",
  imageurl :'assets/image/avast.png',
},

]


}
