

function showInfo() {
    const infoElement = event.target.querySelector('.info');
    infoElement.style.transform = 'translateY(0)';
  }
  
  function hideInfo() {
    const infoElement = event.target.querySelector('.info');
    infoElement.style.transform = 'translateY(100%)';
  }


  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('embed-iframe');
    const options = {
        uri: 'spotify.com/playlist/1HVP7E8RkpieiGSxvATJbU'
    };
    const callback = (EmbedController) => {
    };
    IFrameAPI.createController(element, options, callback);
}


    