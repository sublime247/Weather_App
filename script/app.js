const enterCity = document.querySelector('form')
const card = document.querySelector('.card')
const details= document.querySelector('.details')
const icon =document.querySelector('.icon img')
const Time = document.querySelector('.time')

const updateUI =  (data)=>{
    const cityInfo = data.cityInfo
    const weatherInfo =data.weatherInfo

    
  //weather and city details
    details.innerHTML= `
     <h5 class="my-3">${cityInfo.EnglishName}</h5>
    <div class="my-3">${weatherInfo.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weatherInfo.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`
    
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }
    //Day and Night image
    let timeSrc =null
    if(weatherInfo.IsDayTime){
        timeSrc= 'img/day.svg';
    }else{
        timeSrc= 'img/night.svg';
    }   
    Time.setAttribute('src', timeSrc)

    //weather icon

    const iconSrc = `img/icons/${weatherInfo.WeatherIcon}.svg`
    icon.setAttribute('src', iconSrc)
}



// update city
const updateCity = async (city)=>{
   const cityInfo = await getcity(city)

   const weatherInfo = await getweather(cityInfo.Key);

 return {cityInfo, weatherInfo};

}

//enter city
enterCity.addEventListener('submit', e=>{
    e.preventDefault()
 
    const city= enterCity.city.value.trim()
       enterCity.reset()

        updateCity(city)
        .then((data)=>{
             updateUI(data)
        }).catch((err)=>{
            console.log(err)
        })

})