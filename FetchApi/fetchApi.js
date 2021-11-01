console.log('learn fetch Api in vanilla JavaScript');

let fetchBtn = document.getElementById('fetch-btn');
let totalCovid19Data = document.getElementById('totalCovid19-list');

let covid19String = '';
const getData = async () => {
    let res = await fetch(`https://api.covid19api.com/summary`);
    let data = await res.json();
    // covid19String =  `
    // <li>  ${data.Global.TotalConfirmed}</li>
    // <li>${data.Global.TotalRecovered}</li>
    // <li>${data.Global.TotalDeaths}</li>
    // `;
    covid19String =   Object.keys(data.Global).map((mykey ,index)=>{
        
        return(
        `
        <li ${key=index} >  ${mykey} :  ${data.Global[mykey]}</li>
       
        `
    )
    });
    totalCovid19Data.innerHTML += covid19String;

}

fetchBtn.addEventListener('click', getData);
