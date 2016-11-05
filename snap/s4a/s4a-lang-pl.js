
s4aTempDict = {

    /*
       Special characters: (see <http://0xcc.net/jsescape/>)

       Ä, ä   \u00c4, \u00e4
       Ö, ö   \u00d6, \u00f6
       Ü, ü   \u00dc, \u00fc
       ß      \u00df
       */
    // primitive blocks:

    /*
       Attention Translators:
       ----------------------
       At this time your translation of block specs will only work
       correctly, if the order of formal parameters and their types
       are unchanged. Placeholders for inputs (formal parameters) are
       indicated by a preceding % prefix and followed by a type
       abbreviation.

       For example:

       'say %s for %n secs'

       can currently not be changed into

       'say %n secs long %s'

       and still work as intended.

       Similarly

       'point towards %dst'

       cannot be changed into

       'point towards %cst'

       without breaking its functionality.
       */

    // arduino:

    'digital input':
        'wejście cyfrowe',

    'digital output':
        'wyjście cyfrowe',

    'PWM':
        'PWM',

    'servo':
        'servo',

    'clockwise':
        'ze wskazówkami zegara',

    'clockwise (1500-1000)':
        'ze wskazówkami zegara (1500-1000)',

    'counter-clockwise':
        'przeciwnie do wskazówek zegara',

    'counter-clockwise (1500-2000)':
        'przeciwnie do wskazówek zegara (1500-2000)',

    'stopped':
        'stopped',

    'stopped (1500)':
        'stopped (1500)',

    'disconnected':
        'rozłączony',

    'angle (0-180)':
        'kąt (0-180)',

    'connect to Arduino':
        'podłącz Zestaw',

    'disconnect Arduino':
        'rozłącz Zestaw',

    'Connect Arduino':
        'Podłącz Zestaw',

    'Disconnect Arduino':
        'Rozłącz Zestaw',

    'analog reading %analogPin':
        'czytaj analogowe %analogPin',

    'digital reading %digitalPin':
        'czytaj cyfrowe %digitalPin',

    'connect arduino at %s':
        'podłącz Zestaw at %s',

    'disconnect arduino':
        'rozłącz Zestaw',
	
	'Turn on the lamp in eco mode':
		'Włącz lampę w trybie eco',

    'setup digital pin %digitalPin as %pinMode':
        'setup digital pin %digitalPin as %pinMode',

    'set digital pin %digitalPin to %b':
        'set digital pin %digitalPin to %b',

    'set servo %servoPin to %servoValue':
        'set servo %servoPin to %servoValue',

    'set pin %pwmPin to value %n':
        'set pin %pwmPin to value %n',

    'Connecting board at port\n': 
        'Łączę z zestawem na porcie\n',

    'An Arduino board has been connected. Happy prototyping!':
        'Zestaw został podłączony. Radosnego sterowania!',

    'Board was disconnected from port\n':
        'Zestaw został rozłączony z portu\n',

    'It seems that someone pulled the cable!':
        'It seems that someone pulled the cable!',

    'Error connecting the board.':
        'Błąd łączenia z zestawem',

    'There is already a board connected to this sprite':
        'There is already a board connected to this sprite',

    'Could not connect an Arduino\nNo boards found':
        'Could not connect an Arduino\nNo boards found',

    'Could not talk to Arduino in port\n':
        'Could not talk to Arduino in port\n',

    'Check if firmata is loaded.':
        'Check if firmata is loaded.',

    'An error was detected on the board\n\n':
        'An error was detected on the board\n\n',

    'Board is not connected':
        'Zestaw nie jest podlaczony',

    'New Arduino translatable project':
        'Nowy projekt dedykowany Arduino'	

};

// Please change the LANG keyword in the lines below by your locale's two-digit code in lowercase,
// like en for English, ca for Catalan, zh for Mandarin or de for German.

// Add attributes to original SnapTranslator.dict.pl
for (var attrname in s4aTempDict) { SnapTranslator.dict.pl[attrname] = s4aTempDict[attrname]; }
