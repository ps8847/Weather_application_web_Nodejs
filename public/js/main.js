const cityname = document.getElementById("cityname");
const city_name_output = document.getElementById("city_name");
const submitBtn = document.getElementById("submitBtn");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");

const getInfo = async(event) => {
    event.preventDefault();
    // alert("h1");
    let cityval = cityname.value;
    if (cityval === "") {
        city_name_output.innerText = "Please Write the City name before you Search";
        datahide.classList.add("data_hide");
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=a6829334fb8034c828fd03c09613b5e6`;

            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            // console.log(data);

            city_name_output.innerText = `${arrdata[0].name} , ${arrdata[0].sys.country}`;
            temp_real_val.innerText = arrdata[0].main.temp;
            temp_status.innerText = arrdata[0].weather[0].main;

            const tempmood = arrdata[0].weather[0].main;


            if (tempmood == "Clear") {
                temp_status.innerHTML = "<small>Clear </small>&nbsp;<i class='fas fa-sun' style='color: #eccc68;'></i>"
            } else if (tempmood == "mist" || tempmood == "Mist") {
                temp_status.innerHTML = "<small> Mist </small>&nbsp;<i class='fa-brands fa-cloudversify' style='color: #f1f2f6;'></i>"

            } else if (tempmood == "Clouds") {
                temp_status.innerHTML = "<small>Clouds </small>&nbsp;<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
            } else if (tempmood == "Rain") {
                temp_status.innerHTML = "<small>Rain </small>&nbsp;<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>"
            } else {
                temp_status.innerHTML = "<small>Clear </small>&nbsp;<i class='fas fa-sun' style='color: #eccc68;'></i>"
            }
            datahide.classList.remove("data_hide");
        } catch {
            city_name_output.innerHTML = "Please Enter the City Name Properly";
            datahide.classList.add("data_hide");
        }
    }
}

submitBtn.addEventListener("click", getInfo);