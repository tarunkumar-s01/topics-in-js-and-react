import React,{ useState} from 'react'

const FormValComp = () => {
    const [user,setuser] = useState({
        fname:'',
        term:false
    });

    const changeip = (event) =>{
        const{type,name,value,checked} =  event.target;
        setuser({...user,[name]:type==='checkbox'?checked:value});

    }
    const checkData = (event) =>{
        event.preventDefault();
        if(user.fname.trim() === " "){
            window.alert('fname is required');
            return false;
        }
        if(!user.fname.trim().match("^[a-zA-Z ]{3,20}$")){
            window.alert("fname should be in correct format");
            return false;
        }
        if(user.term===false){
            window.alert('please accept the term');
            return false;
        }
        window.alert(JSON.stringify(user));
    }
  return (
    <div>
        <h2>this is a form validation</h2>
        <form onSubmit={checkData}>
            <div>
                <label>enter your firstname:</label>
                <input type='text' name='fname' onChange={changeip} value={user.fname}/>
            </div>
            <div>
                <input type='checkbox' name='term' onChange={changeip} value={user.term}/>accept the terms & condition
            </div>
            <button type='submit'>submit</button>

        </form>
    </div>
  )
}

export default FormValComp