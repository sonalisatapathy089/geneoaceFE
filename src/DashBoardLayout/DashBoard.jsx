import React from 'react'
import { Grid, Stack, TextField,Button} from '@mui/material'
import {useForm} from "react-hook-form";

const DashBoard = () => {
  const form = useForm(
    {defaultValues:{
      email:"",
      password:"",
      a:""
    }}
  )
  const {register,handleSubmit,formState} = form
  console.log("form",form);
  const {errors} = formState
  const onSubmit =(data)=>{
     console.log(data);
  }

  return (
    <Grid container>
        <Grid xs= {12}>
           <h1>Login</h1>
           <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} width={400}>
                <TextField label="Email" type='email' {...register("email",{required:"Email is required"})}
                 error={!!errors.email}
                 helperText={errors.email?.message}
                />

                <TextField label="Pwd" type='pwd' {...register("password",{required:"pwd is required"})}
                error={!!errors.password}
                helperText={errors.password?.message}
                />
                 <Button type='submit'>
                   Login
                 </Button>
            </Stack>
           </form>
        </Grid>
    </Grid>
  )
}

export default DashBoard

{/* <TextField label="Email" type='email' {...register("email")}/>
                <TextField label="pwd" type='password' {...register("password")}/> */}
{/* <input type="radio" id="dewey" name="drone" value="dewey"  {...register("a")}/>
<label for="dewey">a</label>
<input type="radio" id="dewey" name="drone" value="a"  {...register("b")}/>
<label for="dewey">b</label> */}

{/* <Button type ="submit" variant = "contained" >
Login */}
// </Button>