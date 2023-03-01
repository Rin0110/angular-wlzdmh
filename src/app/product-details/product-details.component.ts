import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})

/*
 * OnInitインターフェースを適用
 * OnInitも初期化だが、constructorが呼び出された後に実行される
 */
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // 現在のルートから製品IDを取得する
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // ルートで提供されたIDに対応する製品を見つける
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
