import Datastore from "nedb";

const ds = new Datastore({filename:"nedb.db",autoload:true});
var docs = [
    {
        "lat": 37.7749,
        "long": -122.4194,
        "alt": 30,
        "bus_no": 1,
        "timestamp": 1622499200
    },
    {
        "lat": 34.0522,
        "long": -118.2437,
        "alt": 50,
        "bus_no": 2,
        "timestamp": 1622502800
    },
    {
        "lat": 40.7128,
        "long": -74.0060,
        "alt": 15,
        "bus_no": 3,
        "timestamp": 1622506400
    },
    {
        "lat": 41.8781,
        "long": -87.6298,
        "alt": 25,
        "bus_no": 4,
        "timestamp": 1622510000
    },
    {
        "lat": 29.7604,
        "long": -95.3698,
        "alt": 20,
        "bus_no": 5,
        "timestamp": 1622513600
    },
    {
        "lat": 39.7392,
        "long": -104.9903,
        "alt": 45,
        "bus_no": 6,
        "timestamp": 1622517200
    },
    {
        "lat": 47.6062,
        "long": -122.3321,
        "alt": 60,
        "bus_no": 7,
        "timestamp": 1622520800
    },
    {
        "lat": 32.7157,
        "long": -117.1611,
        "alt": 10,
        "bus_no": 8,
        "timestamp": 1622524400
    },
    {
        "lat": 25.7617,
        "long": -80.1918,
        "alt": 35,
        "bus_no": 9,
        "timestamp": 1622528000
    }
]

docs.forEach(data=>{
    ds.update({bus_no:data.bus_no},data);
})

console.log(ds.find({},(err,doc)=>{
    console.log(doc);
}));