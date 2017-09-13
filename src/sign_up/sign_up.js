import React, {Component} from 'react';
import './sign_up.css';

class Signup extends Component{
    render(){
        return(
                <div className="card Signup">
                    <div className="card-block">
                        <form>
                          <h4> Pembayaran Via Kartu Visa/Mastercard/JCB</h4>
                            <label className="deskripsi">
                            Nomor Kartu
                            <br/>
                            <input type="text" className="nomorkartu" />
                            </label>
                          
                          
                          

                    </form>
                    </div>
                </div>

        


         
        );
    }
}


export default Signup;