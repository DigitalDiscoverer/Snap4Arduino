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
SpriteMorph.prototype.categories.splice(0,1); //usun MOTION
SpriteMorph.prototype.categories.splice(2,1); //usun  Czucie 
SpriteMorph.prototype.categories.splice(2,1); //usun  Glosy
SpriteMorph.prototype.categories.splice(3,1); //usun  Pen 

//Sygnalizator drogowy
SpriteMorph.prototype.categories.push('Sygn. drogowy');
SpriteMorph.prototype.blockColor['Sygn. drogowy'] = new Color(243, 145, 1);

//Przejście dla pieszych
SpriteMorph.prototype.categories.push('Sygn. pieszych');
SpriteMorph.prototype.blockColor['Sygn. pieszych'] = new Color(166, 196, 75);

//Sygnalizator kolejowy
SpriteMorph.prototype.categories.push('Sygn. kolejowy');
SpriteMorph.prototype.blockColor['Sygn. kolejowy'] = new Color(206, 127, 95);

//Szlaban
SpriteMorph.prototype.categories.push('Szlaban');
SpriteMorph.prototype.blockColor['Szlaban'] = new Color(231, 44, 78);

//Czujnik najazdu
SpriteMorph.prototype.categories.push('Czujnik przejazdu');
SpriteMorph.prototype.blockColor['Czujnik przejazdu'] = new Color(240, 120, 130);

//Lampa
SpriteMorph.prototype.categories.push('Lampa');
SpriteMorph.prototype.blockColor['Lampa'] = new Color(22, 153, 163);


//Rower miejski
SpriteMorph.prototype.categories.push('Rower miejski');
SpriteMorph.prototype.blockColor['Rower miejski'] = new Color(83, 137, 200);



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
