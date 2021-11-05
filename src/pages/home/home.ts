import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery";
  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 1
    },
    {
      name: "Banana",
      quantity: 3
    },
    {
      name: "Sugar",
      quantity: 1
    },
  ];

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController, 
    public toastCtrl: ToastController) 
  {

  }

  addItem() {
    this.showAddItemPrompt();
  }

  removeItem(index) {
    const item = this.items[index];
    this.items.splice(index, 1);
    const toast = this.toastCtrl.create({
      message: `Removing Item - ${item.name}...`,
      duration: 3000
    });
    toast.present();
  }

  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: 'Please enter item...',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            this.items.push(item);
          }
        }
      ]
    });

    prompt.present();
  }
}
