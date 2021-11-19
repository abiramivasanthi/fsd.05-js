let playBtn = document.getElementById('play'),
    pauseBtn = document.getElementById('pause'),
    f10Btn = document.getElementById('f10'),
    b10Btn = document.getElementById('b10'),
    volumeBtn = document.getElementById('volume'),
    muteBtn = document.getElementById('mute'),
    unMuteBtn = document.getElementById('unMute'),
    volumeInputEle = document.getElementById('volume-slider'),
    downloadsBtn = document.getElementById('downloads'),
    swapBtn = document.getElementById('swap'),
    fullScreenBtn = document.getElementById('fullScreen'),
    video = document.getElementById('main-video');

    function play (){
        console.log('play the video');
        video.play();

    }
    function pause(){
        console.log('pause the video');
        video.pause();
        
    }
    function f10(){
        //Get curreent time
        let cTime = video.currentTime;
        // add 10 seconds
        cTime = cTime + 10;
        
        //play from the new time
        video.currentTime = cTime;
        
    }
    function b10(){
        console.log('backward 10 seconds');
        //Get curreent time
        let cTime = video.currentTime;
        // add 10 seconds
        cTime = cTime - 10;
        
        //play from the new time
        video.currentTime = cTime;
        
    }
    function volumeUpdate(){
        //Get slider value
        let volumeInput = volumeInputEle.value;
        // 0 =>0; 100=>1; 50=>0.5;
        volumeInput = volumeInput/100;
        console.log(volumeInput);
        // Apply to the video 
        video.volume = volumeInput;
        
    }
    function mute(){
        console.log('mute Audio');
        video.mute = true;
        
    }
    function unMute(){
        console.log('unMute');
        video.unMute = false;
        
    }
    function downloads(){

        //get the file path of the video

        let filePath = video.getAttribute('src');
        console.log('filePath');
        
        
    }
    function swap(){
      //get select value
    let targetPath = this.value,
        cTime = video.currentTime;
    // change the file path of the video
    video.setAttribute('src', targetPath);
    // change current time
    video.currentTime = cTime;
    // play the video
    play();
    
    }
    function fullScreen(){
        console.log('view full Scrren');
    }

    playBtn.addEventListener('click',play);
   pauseBtn.addEventListener('click',pause);
    f10Btn.addEventListener('click',f10);
    b10Btn.addEventListener('click',b10);
    volumeBtn.addEventListener('click',volumeUpdate);
    muteBtn.addEventListener('click',mute);
    unMuteBtn.addEventListener('click',unMute);
    downloadsBtn.addEventListener('click',downloads);
    swapBtn.addEventListener('change',swap);
    fullScreenBtn.addEventListener('click',fullScreen);
    
    