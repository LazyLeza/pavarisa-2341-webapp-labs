function Song(title, artist) {
    this.title = title;
    this.artist = artist;
}

Song.prototype.play = function() {
    console.log('Playing: ' + this.title + ' by ' + this.artist);
};

let song1 = new Song('SPIT IN MY FACE!', 'ThxSoMch');
let song2 = new Song('Freaks', 'Surf Curse');

song1.play();
song2.play();