import './App.css';
import Header from './Components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import Fields from './Components/Fields';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, form]);
   setForm(form);
  }

  const removeItem = (index) =>{
    const arrayData = data;
    arrayData.splice(index, 1);
    setData([...arrayData]);
  }

  return (
    <div className="App">
      <Header />
      {/* form */}
      <div className='form'>
        <Stack spacing={2} direction="row">
          {/* <TextField value={name} onChange={(event) => setName(event.target.value)} id="outlined-basic" label="Name" variant="outlined" />
          <TextField value={email} onChange={(event) => setEmail(event.target.value)} id="outlined-basic" label="Email" variant="outlined" /> */}
           <TextField value={form.name} onChange={(event) => setForm({...form, name: event.target.value})} id="outlined-basic" label="Name" variant="outlined" />
          <TextField value={form.email} onChange={(event) => setForm({...form, email: event.target.value})} id="outlined-basic" label="Email" variant="outlined" />
          <Button onClick={addData} variant="contained" color='success'><AddIcon /></Button>
        </Stack>
      </div>
      {/* Data */}
      <div className='data'>
        <div className='show_data'>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((element, index) => {
            return (
              // <Fields key={index} name={element.name} email={element.email} index={index} />
              <div className='show_data'>
                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <Stack>
                  <Button onClick={()=>removeItem(index)} variant="contained" color='error'><DeleteIcon /></Button>
                </Stack>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
