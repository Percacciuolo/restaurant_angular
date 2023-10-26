import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


import { map } from 'rxjs';

@Component({
  selector: 'app-ex-article',
  templateUrl: './ex-article.component.html',
  styleUrls: ['./ex-article.component.scss']
})
export class ExArticleComponent implements OnInit {
  articles: any[] = [];
  like: boolean = false;
  

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.getArticles() .subscribe((res: any) => {
      this.articles = res.updatedOrders
      console.log('response di get articles ', this.articles)

    })
      // .pipe(
      //   map((res: any) => {
      //     res.updatedOrders = res.updatedOrders.map((article: any) => ({ ...article, like: false }))
      //     return res
      //   })
      // )
      // .subscribe((res: any) => {
      //   this.articles = res.updatedOrders
      //   console.log('response di get articles ', this.articles)

      // })
  }

  getArticles() {
    return this.http.get('http://localhost:4000/api/mock/getArticles');
  }

  toggleLike(article: any) {
    article.like = !article.like
  }

}