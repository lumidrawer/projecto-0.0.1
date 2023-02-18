import{ UserResponse }from'./user.models';
import * as fromActions from './user.actions'


export interface UserState {
  entity:UserResponse | null;
  id:string | null;
  loading:boolean | null;
  error:string | null;
}

const initialState: UserState = {
  entity: null,
  id:null,
  loading:null,
  error:null
}
