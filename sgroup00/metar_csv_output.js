if(msg.payload.response.data[0]){
    var station_id = msg.payload.response.data[0].METAR[0].station_id[0];
    var observation_time = msg.payload.response.data[0].METAR[0].observation_time[0];
    var latitude = parseFloat(msg.payload.response.data[0].METAR[0].latitude[0]);
    var longitude = parseFloat(msg.payload.response.data[0].METAR[0].longitude[0]);
    var temperature = parseFloat(msg.payload.response.data[0].METAR[0].temp_c[0]);
    var dewpoint = parseFloat(msg.payload.response.data[0].METAR[0].dewpoint_c[0]);
    var windspeed = Math.round(msg.payload.response.data[0].METAR[0].wind_speed_kt[0] * 1.852)
    var winddirection = parseFloat(msg.payload.response.data[0].METAR[0].wind_dir_degrees[0]);
    var pressure_hpa = Math.round(msg.payload.response.data[0].METAR[0].altim_in_hg[0] * 33.8639); 
    var elevation_m = parseFloat(msg.payload.response.data[0].METAR[0].elevation_m[0]);

    var metarArray = [station_id, observation_time, latitude, longitude, temperature, dewpoint,
                      windspeed, winddirection, pressure_hpa, elevation_m];
    return [{ payload: metarArray}];
}
