import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'node_modules/chart.js'
Chart.register(...registerables);
@Component({
  selector: 'app-transaction-graph',
  templateUrl: './transaction-graph.component.html',
  styleUrls: ['./transaction-graph.component.css']
})
export class TransactionGraphComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    this.renderChart1()
    this.renderChart2()
  }
  renderChart1(){
    const Mychart= new Chart("transChart1", {
      type: 'bar',
      data: {
        labels: ['Ahmed Ali', 'Aya Elsayed', 'Mina Adel', 'Sarah Reda', 'Mohamed Sayed'],
        datasets: [{
          label: 'total Transactions on 2022-01-01',
          data: [1000 , 550 , 500 , 750 , 2500 ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }
  renderChart2(){
    const Mychart= new Chart("transChart2", {
      type: 'bar',
      data: {
        labels: ['Ahmed Ali', 'Aya Elsayed', 'Mina Adel', 'Sarah Reda', 'Mohamed Sayed'],
        datasets: [{
          label: 'total Transactions on 2022-01-02',
          data: [2000  , 1300  , 1250  , 0 , 875  ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }
}

