import * as React from 'react';
import { useMutation } from 'react-query';
import Instance from '../utils/Instance';

export interface IInsertAccountProps {
}
export interface New {
    age: number|null,
    email: String|undefined,
    firstName: String|undefined,
    lastName: String|undefined,
    mobile: String|undefined
}
export function InsertAccount(props: IInsertAccountProps) {
    const mutation = useMutation((newAccount:New) => {
        return Instance.post('/users', newAccount)
      })
    const formData = React.useRef<HTMLFormElement>(null);
    const onSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        const { current } = formData;
        const Account = {
            firstName:current?.getElementsByTagName("input")[0].value,
            lastName:current?.getElementsByTagName("input")[1].value,
            mobile:current?.getElementsByTagName("input")[2].value,
            age:current && parseInt(current.getElementsByTagName("input")[3].value),  
            email:current?.getElementsByTagName("input")[4].value,
        }
        mutation.mutate(Account)
     }
    return (
        <div className="container w-75">
            <div className="row justify-content-center">
                <div className="col-md-6 bg-white rounded p-3 text-end">
                    <form ref={formData}>
                        <div className="mb-3">
                            <p>فرم زیر را پر کنید!</p>
                            <label className="form-label">نام</label>
                            <input name="name" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />   
                        </div>
                        <div className="mb-3">
                            <label className="form-label">نام خانوادگی</label>
                            <input name="name" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">شماره موبایل</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />    
                        </div>
                        <div className="mb-3">
                            <label className="form-label">سن</label>
                            <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />    
                        </div>
                        <div className="mb-3">
                            <label className="form-label">ایمیل</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />   
                        </div>
                        <button type="submit" onClick={onSubmit} className="btn btn-danger w-100">ساخت اکانت</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
