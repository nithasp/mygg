import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  topupGames: any = [
    {
      image: '../../../assets/images/topup/Fn_big.png',
      game_name: 'MYGG Coins TOP UP',
      link: 'topup',
      class: 'topup',
    },
    // {
    //   image: '../../../assets/images/topup/GOI_Logo_04.png',
    //   game_name: "Goi: Let's Play Together",
    //   link: 'topup/game/goi',
    //    class: 'goi'
    // },
    // {
    //   image: '../../../assets/images/topup/3.png',
    //   game_name: 'Home Sweet Home : Survive',
    //   link: '',
    //  class: 'hsh-survive'
    // }
    {
      image: '../../../assets/images/topup/Slashyninja_logo.png',
      game_name: 'Slashy Ninja',
      link: 'topup/game/slashy-ninja',
      class: 'slashy-ninja',
    },
  ];

  renderImage() {
    if (this.router.url === '/service') {
      return '../../../assets/images/topup/Mock_Game2.png';
    }
    return '../../../assets/images/topup/Mock_Game.png';
  }

}
