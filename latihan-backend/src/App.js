import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// class App extends Component {
//   state={judul:[]};
//   componentDidMount(){
//     axios.get('http://localhost:3000/api/karyawans')
//     .then((ambilData)=>{
//       console.log(ambilData.data);
//       this.setState({
//         judul: ambilData.data,
//       })
//     })
//   }
//   render() {
//     const data = this.state.judul.map((item, index )=>{

//     var nama = [item.nama]
//     var id = [item.id]
//     var usia = [item.usia]
//     var email = [item.email]
//     return <tr><td>{nama}</td><td>{id}</td><td>{usia}</td><td>{email}</td></tr>;
//   });
//     return (
//       <div>

//         <center>
//       <h1>React </h1>
  
//            <tr className="kotak">
//              <td>nama</td>
//              <td>id</td>
//              <td>usia</td>
//              <td>email</td>
//           </tr>
//          {data}
      
//       {/* <p>{data}</p> */}
//       </center>
//       </div>
//     );
//   }
// }

// export default App;


class App extends Component {
  constructor(){
    super();
    this.state={nama:'',usia:'',email:'',karyawan:[]}
  }
  klik(){
    this.setState({
      nama: this.refs.nama.value,
      usia: this.refs.usia.value,
      email: this.refs.email.value
    });
  }
  klik2(){
    var x = this.state.nama;
    var y = this.state.usia;
    var z = this.state.email;
    axios.post('http://localhost:3000/api/karyawans',{
      nama : x,
      usia : y,
      email : z
    })
  }
  klik3(){
    axios.get('http://localhost:3000/api/karyawans')
    .then((ambilData)=>{
      console.log(ambilData.data);
      this.setState({
        karyawan: ambilData.data,
      })
    })
  }

  render() {
    const data = this.state.karyawan.map((item, index)=>{
      var id   = [item.id]
      var nama = [item.nama]
      var usia = [item.usia]
      var email = [item.email] 
      
      return <tr key={index}><td>{id}</td><td>{nama}</td><td>{usia}</td><td>{email}</td></tr>;
    })
    return (
      <div>
      <center>
      <h1>DATA KARYAWAN</h1>
      <div className="row">
              <input className="form-control" ref="nama" type="text" placeholder="Masukkan Nama Karyawan" onInput={()=>{this.klik();}}/><br/>
              <input className="form-control" ref="usia" type="number" placeholder="Masukkan Usia Karyawan" onInput={()=>{this.klik();}}/><br/>
              <input className="form-control" ref="email" type="text" placeholder="Masukkan Email Karyawan" onInput={()=>{this.klik();}}/><br/>
              <button type="submit" className="btn btn-primary btn-block" onClick={()=>{this.klik2();}}> <p> POST </p> </button>&nbsp;&nbsp; <br/>
              <button type="submit" className="btn btn-primary btn-block" onClick={()=>{this.klik3();}}>GET</button>
              
            </div>
    <br/>
      <tr className="head">
            <td>No</td>
            <td>Nama Karyawan</td>
            <td>Usia</td>
            <td>Email</td>
          </tr>
      {data}
   
      </center>
      </div>
    );
  }
}

export default App;

// npm start untuk nyalahin servernya
// dan di latihan-loopback di node . dulu jngn lupa 