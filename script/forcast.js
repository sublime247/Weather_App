const key =`9uc67S5BXCvZv4mGa7zkj7kaSlLxOAxB`
//GET WEATHER CONDITION

const getweather= async (id)=>{
    const resourceUrl='http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`;

    const weatherinfo= await fetch(resourceUrl + query);
    const data = await weatherinfo.json();

    return data[0];
    // console.log(data)
    
};
// console.log(data[0])



//Get city
const getcity = async(city)=>{
    const resourceUrl= 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const getinfo=  await fetch( resourceUrl + query)
    const data = await getinfo.json();
    
    return data[0];
};

