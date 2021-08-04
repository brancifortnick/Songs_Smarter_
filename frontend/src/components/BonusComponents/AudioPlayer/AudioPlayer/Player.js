import React, { useState, useEffect } from "react";
import './Player.css'



const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (playing) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

 const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div className ='toggle'>
      <button
      className='playButton'
      onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};


export default Player;


// class Music extends React.Component {
//   state = {
//     play: false,
//   };
//   audio = new Audio(this.props.url);

//   componentDidMount() {
//     audio.addEventListener("ended", () => this.setState({ play: false }));
//   }

//   componentWillUnmount() {
//     audio.removeEventListener("ended", () => this.setState({ play: false }));
//   }

//   togglePlay = () => {
//     this.setState({ play: !this.state.play }, () => {
//       this.state.play ? this.audio.play() : this.audio.pause();
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.togglePlay}>
//           {this.state.play ? "Pause" : "Play"}
//         </button>
//       </div>
//     );
//   }
// }

// export default Music;
