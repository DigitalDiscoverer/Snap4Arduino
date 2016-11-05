/**
 * Nadpisana funkcja poszukujaca portow COM - filtruje wyłącznie po układach kompatybilnych z zestawem
 */

Arduino.getSerialPorts = function (callback) {
    var myself = this,
        portList = [],
        portcheck = /usb|dev|wchusb|DevB|rfcomm|acm|^com/i; // Not sure about rfcomm! We must dig further how bluetooth works in Gnu/Linux

    chrome.serial.getDevices(function (devices) { 
        if (devices) { 
            devices.forEach(function (device) { 
                portList[device.path] = 
								device.displayName.replace("Arduino Uno", "Inteligentne Miasto").replace("USB-SERIAL CH340", "Inteligentne Miasto")
								+ ' (' + device.path + ')';
            });
			
        }
        callback(portList);
    });
    
};

//sprawdza czy plytka jest podlaczona - na BT za czesto rozlacza wiec wylaczamy jej dzialanie
Arduino.prototype.keepAlive = function () {
    if (Arduino.keepAlive) {
        if (this.board.version.major !== undefined) {
            // Everything looks fine, let's try again
            this.board.version = {};
            try {
                this.board.reportVersion(nop);
            } catch (err) {
                this.disconnect();
            }
        } else {
            // Connection dropped! Let's disconnect!
            //this.disconnect(); 
        }
    }
};