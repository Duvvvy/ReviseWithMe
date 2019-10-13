import React from "react"
import { FunctionComponent } from "react";

interface Props {
    srcV: string;
}

function embedingVideo(srcV: string) {
    var videoID = getId(srcV)
    var link = "https://www.youtube.com/embed/"
    function getId(url: string) {
        // eslint-disable-next-line
      var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      var match = url.match(regExp);
  
      if (match && match[2].length === 11) {
          return match[2];
      } else {
          return 'error';
      }
    }
    let fulllink: string = link + videoID
    return fulllink
}

export const YoutubeViewer: FunctionComponent<Props> = ({srcV}) => {
    function hiddenVideo(isEmpty: string) {
        if(isEmpty === "")
        {
            return "none"
        }
        else 
        {
            return ""
        }
    }
    
    const hiddenVideoStyle = {
        display: hiddenVideo(srcV),
    } as React.CSSProperties

    return (
        <div className = "video" style={hiddenVideoStyle}>
        <iframe className= "iframeVideo"
        title = "video"
        width ="80%"
        height = "315"
        src = {embedingVideo(srcV)}
        frameBorder = "0"
        allowFullScreen>
        </iframe>
      </div> 
    );
};


