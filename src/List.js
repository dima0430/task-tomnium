import React from 'react'

export default function List ({data}){
	const valid=(value)=>{
		if(typeof value ==='object'){
		return ':'
		}
		if(typeof value ==='boolean'){
		return value.toString()
		}
		else return value
	}
	return(
		<div className ='list'>
		<div>
			{[...Object.keys(data),...Object.keys(data['rates'])].map((value,index)=>
			<div className={value==='rates'?'rates':''} key={value+index}>{value}</div>
			)
			}     
		</div>      
		<div>
			{[...Object.values(data),...Object.values(data['rates'])].map((value,index)=>
			<div className={typeof value==='object'?'rates':''} key={value+index}>{valid(value)}</div>
			)
			}     
		</div>      
		</div>
	)
}