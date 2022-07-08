import * as React from 'react';
import { useQuery } from 'react-query';
import Instance from '../utils/Instance';
import { Link } from "react-router-dom";

import trash from '../assets/trash.svg';
import edit from '../assets/edit.svg';

export interface IDataProps {
}
export interface User{
  age: number,
  email: String,
  firstName: String,
  id: String,
  lastName: String,
  mobile: String
}

export function Data (props: IDataProps) {
    const [usesrs,setUsers] = React.useState([])
    const { isLoading, error, data } = useQuery('userData', () =>
    Instance.get('/users').then(res =>
        {
            setUsers(res.data)
        }
     )
   )
  return (
    <div className="container">
      <div className="row justify-content-end mb-3">
        <div className="col-md-6">
          <Link to="/insert"> <button type="button" className="btn btn-danger">ساخت اکانت جدید</button></Link>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 bg-white rounded">
      <table className="table text-secondary text-xsmall font-weight-light">
  <thead>
    <tr>
      <th scope="col">نام و نام خانوادگی</th>
      <th scope="col">شماره موبایل</th>
      <th scope="col">سن</th>
      <th scope="col">ایمیل</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {usesrs?.map((item:User) => {
      return(
        <tr>
          <th>{item.firstName}{item.lastName}</th>
          <th>{item.mobile}</th>
          <th>{item.age}</th>
          <th>{item.email}</th>
          <th>
            <div className="d-flex justify-content-around">
            <img src={trash}/>
            <img src={edit}/>
            </div>
            
          </th>
        </tr>
      )
    })}
  </tbody>
</table>
        </div>
      </div>
    </div>
  );
}
