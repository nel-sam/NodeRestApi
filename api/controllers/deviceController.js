'use strict'

var util = require("util");

class Device {
    constructor(id, name, yearPurchased) {
        this.id = id;
        this.name = name;
        this.yearPurchased = yearPurchased;
    }
}

var inMemoryDataStorage = [ 
    new Device(1, "iPhone", 2018), 
    new Device(2, "Laptop", 2016),
    new Device(3, "Smart Watch", 2017) 
];

exports.getAll = (req, res) => 
    res.json(inMemoryDataStorage);

exports.get = function(req, res) {
    var item = getById(req.params.id);

    if (!item) {
        res.status(500).send(`Item with ID ${req.params.id} was not found.`);
    }

    res.json(item);
};

exports.create = function(req, res) {
    var body = req.body; // TODO: figure out why req.body is not getting populated
    var newDevice = new Device(body.id, body.name, body.yearPurchased);
    
    if (!newDevice.id) {
        newDevice.id = inMemoryDataStorage.length;
    }

    inMemoryDataStorage.push(newDevice);
    res.send("Ok");
};

exports.delete = function(req, res) {
    var item = getById(req.params.id);

    if (!item) {
        res.status(500).send(`Item with ID ${req.params.id} was not found.`);
    }

    inMemoryDataStorage.pop(item);
    res.send("Ok");
};

exports.update = function(req, res) {
    var updatedDevice = new Device(req.body);
    var itemIndex = getById(req.params.id);

    if (!itemIndex) {
        res.status(500).send(`Item with ID ${req.params.id} was not found.`);
    }

    inMemoryDataStorage[itemIndex].id = updatedDevice.id;
    inMemoryDataStorage[itemIndex].name = updatedDevice.name;
    inMemoryDataStorage[itemIndex].yearPurchased = updatedDevice.yearPurchased;

    res.send("Ok");
}

function getById(id) {
    // Double-equals == is used on purpose rather than ===. This is because 
    // ID will come in as a string, and we want to support the comparison against 
    // the member id, which is an int.
    return inMemoryDataStorage.find(element => element.id == id);
}

function getIndexById(id) {
    // Double-equals == is used on purpose rather than ===. This is because 
    // ID will come in as a string, and we want to support the comparison against 
    // the member id, which is an int.
    var itemIndex = inMemoryDataStorage.findIndex(element =>
        element.id == id
    );

    return itemIndex;
}