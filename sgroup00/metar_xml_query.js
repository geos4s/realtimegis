
if(msg.payload.response.data[0]){
    var observation_time = msg.payload.response.data[0].METAR[0].station_id[0];
    return [{ payload: observation_time}];
}
