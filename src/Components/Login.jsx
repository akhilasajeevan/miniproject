// import React from "react";
// import * as yup from 'yup'
// import { useFormik } from "formik";
// // import './Login.css'


// const validationSchema=yup.object({username:yup.string().trim('error'),Emailaddress:yup.string().email("Type email")})


// function Login() {


//   const initialValues = {
//     name: "",
//     email: "",
//     password: "",
//     cpassword: "",
//   };

// async function onSubmit(values){console.log(values)}


// const formik=useFormik({

//   validationSchema,onSubmit,initialValues,
// }

// );

   
//   // const { values, handleBlur, handleChange, handleSubmit } = useFormik({
//   //   initialValues: initialValues,
//   //   onSubmit: (values) => {
//   //     console.log(values);
//   //   },
//   // });
//   return (
//     <div className="Login1">
//      <div className="Login2">
//       <center>
//         <form className="bor" onSubmit={formik.handleSubmit}>
//           <br/>
// <div className="mb-3"> 
// <label htmlFor="username"className="form-label"> Username</label> 
// <input type="Text" class="form-control"id="exampleInputPassword1"style={{width:300}}name='username'onChange={formik.handleChange} onBlur={formik.handleBlur}value={formik.values.username}/>        
//        {formik.touched.username&&formik.errors.username?(<div className="error">{formik.errors.Emailaddress}</div>):null}  
//   </div> 
//   <div class="mb-3">      
         
//          <label for="exampleInputEmail"class="form-label">Emailaddress</label>
         
//           }

// export default Login;
import React from 'react'
// import './Login.css'
import * as yup from 'yup'
import { useFormik } from 'formik'




function Login() {
  const initialValues={
    username:"",
    Emailaddress:"",
    Password:"",
    Phonenumber:"",
  }

  const validationSchema = yup.object({
    username:yup.string().trim('error'),
    Emailaddress:yup.string().email("type email")
  })
  
 async function onSubmit(values){console.log(values)}

 const formik=useFormik({
      validationSchema,
      onSubmit,
      initialValues,
      });

  return (
    <div className='Login1'>
      <div className='Login2'>
      <center>
      <form className='bor'>
        <br/>
  <div class="mb-3">
    <label htmlFor="username" className="form-label">Username</label>
    <input type="Text"  class="form-control"id="exampleInputPassword1"style={{width:300}}
     name='username'
     onChange={formik.handleChange} 
     onBlur={formik.handleBlur}
     value={formik.values.username}
      />
    {formik.touched.username && formik.errors.username ? (
          <div className="error">{formik.errors.username}</div>
        ) : null}

  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Emailaddress</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  style={{width:300}} name='Emailaddress' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Emailaddress}/>
    {formik.touched.Emailaddress && formik.errors.Emailaddress ? (
          <div className="error">{formik.errors.Emailaddress}</div>
        ) : null}
  
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" style={{width:300}}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phonenumber</label>
    <input type="tel" class="form-control" id="exampleInputPassword1" style={{width:300}} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
  </div>
  <button type="submit" class="btn btn-primary" >Submit</button>
  
</form>
</center>
</div>
    </div>
  )
}

export default Login





