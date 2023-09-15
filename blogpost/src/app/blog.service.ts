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
  author: number;
  comment_status: string;
  ping_status: string;
  sticky: string;
  template: string;
  format: string;
  meta: string[];
  categories: number[];
  tags: number[];
  topic: number[];
  group: number[];
  _event_location: string;
  _event_venue: string;
  _event_registration: string;
  _start_day: string;
  _start_month: string;
  _start_year: string;
  _end_day: string;
  _end_month: string;
  _end_year: string;
  _embedded: Embedded;
  about: About;
  featured_media: string;
  // author: Author;

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