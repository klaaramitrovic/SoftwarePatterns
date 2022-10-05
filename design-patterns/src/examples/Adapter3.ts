interface AdvancedMediaPlayer {	
    playVlc: (fileName: string) => void;
    playMp4: (fileName: string) => void;
}

class VlcPlayer implements AdvancedMediaPlayer{
    public playVlc(fileName: string): void {
       console.log("Playing vlc file. Name: "+ fileName);		
    }

    public playMp4(fileName: string): void {
       //do nothing
    }
}

class Mp4Player implements AdvancedMediaPlayer{

    public playVlc(fileName: string ):void  {
       //do nothing
    }

    public playMp4(fileName: string): void  {
       console.log("Playing mp4 file. Name: "+ fileName);		
    }
}

interface MediaPlayer {
    play: (audioType: string,  fileName: string) => void;
}

class MediaAdapter implements MediaPlayer {

    advancedMusicPlayer?: AdvancedMediaPlayer;
 
    constructor(audioType: string){
    
       if(audioType === "vlc"){
          this.advancedMusicPlayer = new VlcPlayer();			
          
       } else if (audioType === "mp4"){
          this.advancedMusicPlayer = new Mp4Player();
       }	
    }

    public play(audioType: string, fileName: string): void {
    
       if(audioType === "vlc"){
          this.advancedMusicPlayer?.playVlc(fileName);
       }
       else if(audioType === "mp4"){
          this.advancedMusicPlayer?.playMp4(fileName);
       }
    }
}

class AudioPlayer implements MediaPlayer {
    mediaAdapter?: MediaAdapter; 
 
    public play(audioType: string, fileName: string): void {		
 
       //inbuilt support to play mp3 music files
       if(audioType === "mp3"){
          console.log("Playing mp3 file. Name: " + fileName);			
       } 
       
       //mediaAdapter is providing support to play other file formats
       else if(audioType === "vlc" || audioType === "mp4"){
          this.mediaAdapter = new MediaAdapter(audioType);
          this.mediaAdapter.play(audioType, fileName);
       }
       
       else{
          console.log("Invalid media. " + audioType + " format not supported");
       }
    }   
}

const audioPlayer: AudioPlayer = new AudioPlayer();
audioPlayer.play("mp3", "beyond the horizon.mp3");
audioPlayer.play("mp4", "alone.mp4");
audioPlayer.play("vlc", "far far away.vlc");
audioPlayer.play("avi", "mind me.avi");

export{}