import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BasicService<V, C, U> {

  constructor(private http: HttpClient) { }

  useGetAll = (name: string): Promise<V[]> => {
    return this.http.get<V[]>(`${environment.apiLink.endPoint}${environment.apiLink.basic[name].main}`).toPromise();
  }
  useGetById = (id: string, name: string): Promise<V> => {
    return this.http.get<V>(`${environment.apiLink.endPoint}${environment.apiLink.basic[name].main}/${id}`).toPromise();
  }
  useCreate = (data: C, name: string): Promise<V> => {
    return this.http.post<V>(`${environment.apiLink.endPoint}${environment.apiLink.basic[name].main}`, data).toPromise();
  }
  useUpdate = (data: U, name: string): Promise<any> => {
    return this.http.put<any>(`${environment.apiLink.endPoint}${environment.apiLink.basic[name].main}`, data).toPromise();
  }
  useDelete = (id: string, name: string): Promise<any> => {
    return this.http.delete<any>(`${environment.apiLink.endPoint}${environment.apiLink.basic[name].main}/${id}`).toPromise();
  }

}
