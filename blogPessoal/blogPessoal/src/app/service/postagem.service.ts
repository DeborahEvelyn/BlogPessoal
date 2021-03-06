  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Postagem } from '../model/Postagem';
  
  
  @Injectable({
    providedIn: 'root'
  })
  export class PostagemService {
  
    constructor(private http: HttpClient) { }
  
    token = {
      headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
    }
  
  
    getAllPostagens() {
      return this.http.get('https://blogpessoalgeneration20/postagens', this.token)
    }
  
    getByIdPostagem(id: number) {
      return this.http.get(`https://blogpessoalgeneration20/postagens/${id}`, this.token)
    }
  
    postPostagem(postagem: Postagem) {
      return this.http.post('https://blogpessoalgeneration20/postagens', postagem, this.token)
    }
  
    putPostagem(postagem: Postagem) {
      return this.http.put(`https://blogpessoalgeneration20/postagens/${postagem.id}`, postagem, this.token)
    }
  
    deletePostagem(id: number) {
      return this.http.delete(`https://blogpessoalgeneration20/postagens/${id}`, this.token)
    }
  
    getByTituloPostagem(titulo: string) {
      return this.http.get(`https://blogpessoalgeneration20/postagens/titulo/${titulo}`, this.token)
    }
  
  
  }