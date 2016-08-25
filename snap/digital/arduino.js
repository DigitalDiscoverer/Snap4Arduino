/**
 * Gets a list of available serial ports (paths) and return it through callback function
 */

Arduino.getSerialPorts = function (callback) {
    var myself = this,
        portList = [],
        portcheck = /usb|DevB|rfcomm|acm|^com/i; // Not sure about rfcomm! We must dig further how bluetooth works in Gnu/Linux

    chrome.serial.getDevices(function (devices) { 
        if (devices) { 
            devices.forEach(function (device) { 
                if (device.displayName && !myself.isPortLocked(device.path) && portcheck.test(device.path)) {
                    if(device.displayName.indexOf("Arduino") !== -1)
						portList[device.path] = device.path; 
                }
            });
        }
        callback(portList);
    });
    
};