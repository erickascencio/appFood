import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  orders: any[] = [];
  isLoading: boolean = true;
  model: any = {
    title: 'Nenhum pedido realizado',
    icon: 'basket',
  }
  constructor() { }

  ngOnInit() {
    console.log(this.model)
    setTimeout(() => {
      this.orders = [
        {
          "restaurant": "Dom Henrique",
          "items": [
            {
              "name": "Hamburguer de Frango",
              "price": 25
            },
            {
              "name": "Batata Frita",
              "price": 19
            },
            {
              "name": "Coca-Cola 300ml",
              "price": 9
            }
          ],
          "total_price": 53,
          "delivery_address": "Rua Capitão Rocha, 125",
          "delivery_date": "2024-02-27T20:00:00"
        },
        {
          "restaurant": "Prensadão do Marechal",
          "items": [
            {
              "name": "Dog Frango",
              "price": 20
            },
            {
              "name": "Batata Pequena",
              "price": 8
            },
            
          ],
          "total_price": 28,
          "delivery_address": "Rua dos Dogs, 999",
          "delivery_date": "2024-02-23T20:30:00"
        },
        {
          "restaurant": "KFC",
          "items": [
            {
              "name": "Balde de Sobrecoxa G",
              "price": 45
            },
            {
              "name": "Coca-Cola 1L",
              "price": 14
            },
          ],
          "total_price": 59,
          "delivery_address": "Rua Simeão Varela de sá, 95",
          "delivery_date": "2024-03-01T20:00:00"
        }
      ];
    this.isLoading = false;
    }
    , 2000);
    console.log(this.orders)
  }

}
