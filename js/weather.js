function gettingJSON(){
    //Display the forecast
    // Your code here.
    document.getElementById("forecast").style.display = "block";

    //Set default location if one isn't provided
    let location = document.getElementById("location").value;
    if (location == ""){
        location = "Ann Arbor"
    }

    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format = "imperial"

    if (document.getElementById("celcius").checked) {
        format = "metric"
    }

    // Your code here.
    console.log("Format is " + format);

    //set the query  
    let query = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=" + format + "&appid=47fc66f0ae55914e4b6d64675372328f";
    // Your code here.  
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc = document.getElementById("loc");
    let temp = document.getElementById("temp");
    let tempImg = document.getElementById("tempImg");
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(JSON.stringify(json));
        document.getElementById("loc").innerHTML = json["name"];
        document.getElementById("temp").innerHTML = json["main"]["temp"] + " with " + json["weather"][0]["description"];
        document.getElementById("tempImg").setAttribute("src", "https://openweathermap.org/img/w/" + json["weather"][0]["icon"] + ".png");
        document.getElementById("tempImg").setAttribute("alt",json["weather"][0]["description"])

    });
}
