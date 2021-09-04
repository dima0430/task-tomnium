import dataJson from './data'
import React from 'react'
import List from './List'
import Loader from 'react-loader-spinner'

import "./App.scss";

export default function App() {
	const [data,setData]=React.useState('')
	const timeout=(time)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>resolve(setData(dataJson)),time)}
		)} 
	React.useEffect(()=>
		timeout(2000)
	,[])
	return (
		<div className="App">
			{data?
			<List data={data}/>:
			<div className='loader'>	
				<Loader
					type="TailSpin" 
					color="#00BFFF" 
					height={200} 
					width={200}
				/>
			</div>	
			} 
		</div>
	);
}
