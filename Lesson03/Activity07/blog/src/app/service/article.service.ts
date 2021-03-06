import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../posts'
import { Observable } from 'rxjs';

=======
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Post {
  photoUrl: string;
  title: string;
  body: string;
  tag: string;
  id: number;
  createdOn: Date;
}
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc

@Injectable()

export class ArticleService {
  articlesUrl = 'http://localhost:3000/articles';
  articleUrl = 'http://localhost:3000/article/';
  article: any;
<<<<<<< HEAD
  httpOptions:any;

  constructor(private http: HttpClient) { 
    this.httpOptions = new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'PUT, POST, GET, DELETE, OPTIONS',
     });
  }

  getArticles(): Observable<Post> {
=======

  constructor(private http: HttpClient) { }


  getArticles():Observable<Post> {
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
    this.article = this.http.get<Post>(this.articlesUrl);
    return this.article;
  }


  getArticle(id: number) {
    return this.http.get(this.articleUrl + id);
  }

<<<<<<< HEAD
  /** POST: add a new article to the database */
  PostArticle(article: Post): Observable<Post> {
  
    return this.http.post<Post>(this.articlesUrl,
      { 'title': article.title, 'body': article.body, 'tag': article.tag, 'photo': article.photo }, {
        headers: this.httpOptions
      })
=======
  PostArticle(article: Post):Observable<Post> {
    return this.http.post<Post>(this.articlesUrl, article);
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
  }

  deleteArticle(id: number):
    Observable<{}> {
<<<<<<< HEAD
    return this.http.delete(this.articleUrl + id, {
      headers: this.httpOptions
    })
  }

  updateArticle(id: number, article: Post): Observable<Post> {
    return this.http.put<Post>(this.articleUrl + id, { 'title': article.title, 'body': article.body, 'tag': article.tag, 'photo': article.photo },{
      headers: this.httpOptions
    })
=======
    return this.http.delete(this.articleUrl + id)
  }

  updateArticle(id: number, article: Post): Observable<Post> {
    return this.http.put<Post>(this.articleUrl + id, article)
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
  }
}
