import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // features: any[] = [
  //   {id: 1, name: 'Top Up', src: 'assets/icons/top-up.png', background: 'rgba(27,150,181, 0.1)', page: ''},
  //   {id: 2, name: 'Withdraw', src: 'assets/icons/cash-withdrawal.png', background: 'rgba(106,100,255, 0.1)', page: ''},

  // ];

  // transactions: any[] = [
  //   {id: 1, vendor: 'Received from PhonePe', image: '', amount: 1500, time: '3:00PM'},
  //   {id: 2, vendor: 'Flaticons', image: '', amount: -1200, time: '4:00PM'}
  // ];


  constructor() { }
  public option = {
    // slidesPerView: 1.5,
    // centeredSlides: true,
    // loop: true,
    // spaceBetween: 10,
    // autoplay: true,

    slidesPerView: 1.5,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: true,
    loop: true,
    coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },

  }

  ngOnInit() {
  }

}
