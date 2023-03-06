import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Console } from 'console';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-accueiladmin',
  templateUrl: './accueiladmin.page.html',
  styleUrls: ['./accueiladmin.page.scss'],
})
export class AccueiladminPage implements OnInit {
 
  public chart: any;

  aly=129;
  constructor(private messageService: MessageService) { }
  recuperermessage: any
  recuperertypemessage: any
  typemessage: any
  ngOnInit() {
    //this.createChart();

    // this.messageService.AfficherMessage(this.typemessage).subscribe(data=>{
    //   this.recuperermessage=data;
    // })


    this.messageService.Affichertypemessage().subscribe(data=>{
      this.recuperertypemessage=data;
    })
  }

  textFiltre0:any
  recuperermessagepartype: any

  // filtrebyTypemessage(){
  //    var identity=0 ;
  //   for(let i=0 ; i<this.recuperertypemessage.length; i++){
  //    if(this.recuperertypemessage[i].nomtypemassage == this.recuperertypemessage){
  //      identity=this.recuperertypemessage[i].id
  //      console.log(identity)
  //    }
  //          if(this.textFiltre0 ==this.recuperertypemessage[i].nomtypemassage){
  //            this.messageService.AfficherMessageParType(this.recuperertypemessage.id).subscribe(data=>{
  //              this.recuperermessagepartype=data
  //              console.log(this.recuperertypemessage)
  //            })
  //          }
  //  }


  // }



   
evenement(event:any){
  this.messageService.AfficherMessageParType(event.target.value).subscribe(data=>{
    this.recuperermessagepartype= data
    console.log(event.target.value)
  })
  }
  // createChart(){
  
  //   this.chart = new Chart("MyChart", {
  //     type: 'bar', //this denotes tha type of chart

  //     data: {// values on X-Axis
  //       labels: ['jan', 'fev', 'Mars','AV',
	// 							 'Mai', 'Juin', 'Juil','AO', ], 
	//        datasets: [
  //         {
  //           label: "Sales",
  //           data: ['467','576', '572', '79', '92',
	// 							 '574', '573', '576'],
  //           backgroundColor: '#000'
  //         },
  //         {
  //           label: "Profit",
  //           data: ['542', '542', '536', '327', '17',
	// 								 '0.00', '538', this.aly],
  //           backgroundColor: 'limegreen'
  //         }  
  //       ]
  //     },
  //     options: {
  //       aspectRatio:2.5
  //     }
      
  //   });
  // }

  

}
