import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private httpClient: HttpClient) { }

  private readonly url = "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";


  getPost(): any{
    return this.httpClient.get(this.url);
  }
}

export interface Post {
  id: number;
  date: string;
  date_gmt: string;
  guid: Rendered;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Rendered;
  content: Rendered;
  excerpt: Rendered;
  format: string;
  meta: string[];
  _embedded: Embedded;
  about: About;
  featured_media: string;
  author: Author;

}

export interface Rendered {
  rendered: string
}

export interface About{
  href: string;

}

export interface Embedded {
  author: Author[];  
}

export interface Author {
  id: number;
  name: string;
  slug: string;
  url: string;
  link: string;
}