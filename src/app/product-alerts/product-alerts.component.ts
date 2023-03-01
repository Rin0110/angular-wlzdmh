import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

/*
 * デコレータ
 * ルーティング？的な？
 */
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
// コンストラクタ
export class ProductAlertsComponent {
  /*
   * 親コンポーネントから子コンポーネントへ値を渡す
   * ↓の場合、2行目でインポートしたインターフェースproduct.tsを受け取っている？
   */
  @Input() product!: Product;
  // 子コンポーネントから親コンポーネントへイベント(値)を引き渡す
  @Output() notify = new EventEmitter();
}
