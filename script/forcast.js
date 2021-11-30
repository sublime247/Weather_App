const key =`IpZoiQFYWU6e8MWB5Rj6oW7Z8iANoOPM`
//GET WEATHER CONDITION

const getweather= async (id)=>{
    const resourceUrl='https://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`;

    const weatherinfo= await fetch(resourceUrl + query);
    const data = await weatherinfo.json();

    return data[0];
    
};

//Get city
const getcity = async(city)=>{
    const resourceUrl= 'https://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const getinfo=  await fetch( resourceUrl + query)
    const data = await getinfo.json();
    
    return data[0];
};

