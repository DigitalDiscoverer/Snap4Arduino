// init decorator

SpriteMorph.prototype.originalInit = SpriteMorph.prototype.init;
SpriteMorph.prototype.init = function(globals) {
    this.originalInit(globals);
    this.arduino = new Arduino(this);
};

// Definition of Cyfrowy Odkrywca categories

//usun niepotrzebne zestawowi kategorie
/*'motion',
        'control',
        'looks',
        'sensing',
        'sound',
        'operators',
        'pen',
        'variables',
        'lists',
        'other'*/
SpriteMorph.prototype.categories.splice(0,1);
SpriteMorph.prototype.categories.splice(1,5);
SpriteMorph.prototype.categories.splice(3,1);

//Sygnalizator drogowy
SpriteMorph.prototype.categories.push('Sygn. drogowy');
SpriteMorph.prototype.blockColor['Sygn. drogowy'] = new Color(0, 50, 102);

//Przejście dla pieszych
SpriteMorph.prototype.categories.push('Sygn. pieszych');
SpriteMorph.prototype.blockColor['Sygn. pieszych'] = new Color(20, 136, 50);

//Sygnalizator kolejowy
SpriteMorph.prototype.categories.push('Sygn. kolejowy');
SpriteMorph.prototype.blockColor['Sygn. kolejowy'] = new Color(40, 60, 90);

//Szlaban
SpriteMorph.prototype.categories.push('Szlaban');
SpriteMorph.prototype.blockColor['Szlaban'] = new Color(64, 10, 120);

//Czujnik najazdu
SpriteMorph.prototype.categories.push('Czujnik najazdu');
SpriteMorph.prototype.blockColor['Czujnik najazdu'] = new Color(82, 70, 10);

//Rower miejski
SpriteMorph.prototype.categories.push('Rower miejski');
SpriteMorph.prototype.blockColor['Rower miejski'] = new Color(120, 136, 10);



SpriteMorph.prototype.originalInitBlocks = SpriteMorph.prototype.initBlocks;
SpriteMorph.prototype.initDigitalInventorBlocks = function () {

}

SpriteMorph.prototype.initBlocks =  function() {
    this.originalInitBlocks();
	this.initArduinoBlocks();
    this.initDigitalInventorBlocks();
};

SpriteMorph.prototype.initBlocks();

// blockTemplates decorator
