import React from "react";
import Particles from "react-tsparticles";
import Clarifai from "clarifai";
import Navigation from "../components/Navigation/Navigation"
import Logo from "../components/Logo/Logo"
import Rank from "../components/Rank/Rank";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "../components/FaceRecognition/FaceRecognition";
import SignIn from "../components/signIn/signIn";
import Register from "../components/Register/Register";
import './App.css';

const app = new Clarifai.App({
    apiKey: '1ee9b7865ee44d0da5206d137d08eaa4'
});

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            imageUrl: "",
            display: "none",
            box: {},
            route : "signIn",
            navOpacity: "0"
        }

        this.particlesInit = this.particlesInit.bind(this);
        this.particlesLoaded = this.particlesLoaded.bind(this);
    }
    particlesInit(main) {
        console.log(main);
    }
    particlesLoaded(container) {
        console.log(container);
    }


    calculateFaceLocation = (data) => {
        const face = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById("faceImage");
        const width = Number(image.width);
        const height = Number(image.height);
        return {
            leftCol : face.left_col * width,
            topRow : face.top_row * height,
            rightCol : width - (face.right_col * width),
            bottomRow: height - (face.bottom_row * height)
        }
    }
    faceBox(box){
        this.setState({box:box});
    }
    onInputChange = (e) => {
        this.setState({input : e.target.value})
    }
    onSubmit = () => {
        this.setState({imageUrl: this.state.input})
        if (this.state.input !== ""){
            this.setState({display: "block"});
        } else {
            this.setState({display: "none"});
        }
        app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
            .then(response => this.faceBox(this.calculateFaceLocation(response)))
            .catch(err => console.log(err.message))
    }
    onRouteChange = () => {
        this.setState({route:"home"})
        this.setState({navOpacity:"1"})
    }
    onSignIn = () => {
        this.setState({route: "signIn"})
        this.setState({navOpacity:"0"})
    }
    onRegister = () => {
        this.setState({route: "register"})
        this.setState({navOpacity:"0"})
    }

  render() {
    return(
      <div className="App">
        <Particles id="tsparticles" init={this.particlesInit} loaded={this.particlesLoaded} options={{fpsLimit: 60, interactivity: {detectsOn: "canvas", events: {onClick: {enable: true, mode: "push",}, onHover: {enable: true, mode: "repulse",}, resize: true,}, modes: {bubble: {distance: 400, duration: 2, opacity: 0.8, size: 40,}, push: {quantity: 4,}, repulse: {distance: 200, duration: 0.4,},},}, particles: {color: {value: "#ffffff",}, links: {color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1,}, collisions: {enable: true,}, move: {direction: "none", enable: true, outMode: "bounce", random: false, speed: 2, straight: false,}, number: {density: {enable: true, value_area: 800,}, value: 90,}, opacity: {value: 0.5,}, shape: {type: "circle",}, size: {random: true, value: 5,},}, detectRetina: true,}}/>
        <Navigation opacity={this.state.navOpacity} signIn={this.onSignIn}/>
          { this.state.route === "home"
             ?<div>
                  <Logo/>
                  <Rank/>
                  <ImageLinkForm inputChange={this.onInputChange} submit={this.onSubmit}/>
                  <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} display={this.state.display}/>
              </div>
             : (
                 this.state.route === "signIn"
                 ?<SignIn routeChange={this.onRouteChange} Register={this.onRegister}/>
                 :<Register routeChange={this.onRouteChange}/>
              )

          }
      </div>
    );
  }
}
export default App;
