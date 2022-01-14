// function mySearch()
// {
// 	let input = document.getElementById('card').value
// 	input=input.toLowerCase();
// 	let x = document.getElementsByClassName('card-title');
// 	for (i = 0; i < x.length; i++)
//     {
// 		if (!x[i].innerHTML.toLowerCase().includes(input))
//         {
// 			x[i].style.display="none";
// 		}
// 		else
//         {
// 			x[i].style.display="list-item";				
// 		}
// 	}
// }

function myDetails(title)
{
	let x=title; 
	document.getElementById('myTitle').innerHTML=x

	if(title === 'Bitcoin')
	{
		document.getElementById('myPrice').innerHTML = "₹33,93,412"; 
	}
	else if(title==='Ethereum')
	{
		document.getElementById('myPrice').innerHTML = "₹ 2,59,905"; 
	}
	else if(title === 'Solana')
	{
		document.getElementById('myPrice').innerHTML = "₹ 11,684"; 
	}
	else if(title === 'Tether')
	{
		document.getElementById('myPrice').innerHTML = "₹ 80.25"; 
	}
	else if(title === 'USD coin')
	{
		document.getElementById('myPrice').innerHTML = "₹ 80.21"; 
	}
	else if(title === 'Binance')
	{
		document.getElementById('myPrice').innerHTML = "₹ 38,312"; 
	}
	else if(title === 'Cardano')
	{
		document.getElementById('myPrice').innerHTML = "₹ 101.35"; 
	}
	else if(title === 'Ripple')
	{
		document.getElementById('myPrice').innerHTML = "₹ 62.17"; 
	}
}

