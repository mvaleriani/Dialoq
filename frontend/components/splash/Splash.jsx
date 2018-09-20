import React from 'react';
import { Link } from 'react-router-dom';
import {Collapse} from 'react-collapse';
import {presets} from 'react-motion';
import LoginFormContainer from '../sessionForm/LoginFormContainer';
import SignupFormContainer from '../sessionForm/SignupFormContainer';
import { loadAnimation, setSpeed } from 'lottie-web';
// let toggle = false;


class Splash extends React.Component {
  constructor(props) {
    super(props);

    let loginButtonStyle = { padding: '7px', border: "3px solid rgba(81, 179, 218, 0.637)"};
    let signupButtonStyle = { padding: '7px', border: "3px solid rgba(81, 179, 218, 0.637)"};
    let labelMargin = {margin: '0px'};
    let lFormText = {color: 'transparentize(white, 1)'}
    let sFormText = {color: 'transparentize(white, 1)'}
    let lClicked = false;
    let sClicked = false;
    let formStyle = {marginTop: '50px'}
    this.state = {loginOpened: false, signupOpened: false, lClicked, sClicked, loginButtonStyle, signupButtonStyle, labelMargin, formStyle};
  }

  componentDidMount(){
    let whaleDiv = document.getElementById('whale-splash');
    let whaleAnim = {"v":"4.5.9","fr":25,"ip":0,"op":100,"w":248,"h":187,"ddd":0,"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"\rtail","ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[21],"e":[-60]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":12,"s":[-60],"e":[21]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":25,"s":[21],"e":[-60]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":37,"s":[-60],"e":[21]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":50,"s":[21],"e":[-60]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":62,"s":[-60],"e":[21]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":74,"s":[21],"e":[-60]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":87,"s":[-60],"e":[21]},{"t":99}]},"p":{"a":0,"k":[80,44.429,0]},"a":{"a":0,"k":[8.473,9.453,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[-1.739,1.217],[0,0],[2.934,-2.055],[0.434,-0.631],[0.467,0.666],[0,0],[-2.054,-2.934],[-1.467,-0.418],[0,0]],"o":[[0,0],[1.521,0.11],[2.933,-2.055],[0,0],[-0.666,0.466],[-0.192,-0.741],[-2.054,-2.934],[0,0],[1.218,1.738],[0,0],[0,0]],"v":[[-0.161,5.232],[-0.161,5.232],[5.32,4.011],[8.702,-2.465],[1.462,-1.499],[-0.177,0.187],[-1.14,-1.958],[-7.614,-5.342],[-6.649,1.901],[-1.916,4.923],[-1.916,4.923]],"c":true}},"nm":"路径 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.769,0.769,0.851,1]},"o":{"a":0,"k":100},"r":1,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[8.952,5.591],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 1","np":2,"mn":"ADBE Vector Group"}],"ip":0,"op":750,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":1,"ty":4,"nm":"\reye","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[145.857,82.715,0]},"a":{"a":0,"k":[5.964,5.965,0]},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":42,"s":[100,100,100],"e":[100,1,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":45,"s":[100,1,100],"e":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":48,"s":[100,100,100],"e":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":93,"s":[100,100,100],"e":[100,1,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":96,"s":[100,1,100],"e":[100,100,100]},{"t":99}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[-3.156,0],[0,-3.156],[3.156,0],[0,3.156]],"o":[[3.156,0],[0,3.156],[-3.156,0],[0,-3.156]],"v":[[0,-5.715],[5.714,-0.001],[0,5.715],[-5.714,-0.001]],"c":true}},"nm":"路径 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.671,0.671,0.761,1]},"o":{"a":0,"k":100},"r":1,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[5.964,5.965],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 1","np":2,"mn":"ADBE Vector Group"}],"ip":0,"op":750,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":2,"ty":4,"nm":"\reyes white","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[143.714,82.714,0]},"a":{"a":0,"k":[11.679,11.678,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[-6.312,0],[0,6.312],[6.312,0],[0,-6.311]],"o":[[6.312,0],[0,-6.311],[-6.312,0],[0,6.312]],"v":[[0,11.428],[11.429,-0.001],[0,-11.428],[-11.429,-0.001]],"c":true}},"nm":"路径 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"r":1,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[11.679,11.678],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 1","np":2,"mn":"ADBE Vector Group"}],"ip":0,"op":750,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":3,"ty":4,"nm":"\rbody","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[123.719,72.664,0]},"a":{"a":0,"k":[60.153,37.965,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[31.5,0],[10.189,-7.981],[1.68,1.422],[0,0],[0,0],[4.418,-6.529],[0,-12.88],[0,0],[-3.015,-6.029],[0,0],[-12.453,0],[-6.911,9.934]],"o":[[-13.946,0],[-1.536,1.204],[0,0],[0,0],[-0.153,2.463],[-6.908,9.775],[0,0],[10.063,-5.593],[0,0],[9.428,-2.285],[20.38,0],[-2.476,-30.863]],"v":[[0.097,-37.715],[-36.872,-24.975],[-42.158,-26.982],[-43.403,-27.495],[-44.57,-27.098],[-48.937,-12.301],[-59.903,22.286],[-59.499,29.285],[-33.617,30.857],[-1.617,30.857],[23.526,37.715],[59.903,17.423]],"c":true}},"nm":"路径 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.769,0.769,0.851,1]},"o":{"a":0,"k":100},"r":1,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[60.153,37.965],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 1","np":2,"mn":"ADBE Vector Group"}],"ip":0,"op":750,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":4,"ty":4,"nm":"\rfin","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[104.536,103.099,0]},"a":{"a":0,"k":[24.733,0.25,0]},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":0,"s":[100,100,100],"e":[100,70,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":6,"s":[100,70,100],"e":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":12,"s":[100,100,100],"e":[100,56,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":18,"s":[100,56,100],"e":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":24,"s":[100,100,100],"e":[100,70,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":30,"s":[100,70,100],"e":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":36,"s":[100,100,100],"e":[100,56,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":43,"s":[100,56,100],"e":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":49,"s":[100,100,100],"e":[100,70,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":55,"s":[100,70,100],"e":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":61,"s":[100,100,100],"e":[100,56,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":67,"s":[100,56,100],"e":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":74,"s":[100,100,100],"e":[100,70,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":80,"s":[100,70,100],"e":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":87,"s":[100,100,100],"e":[100,56,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":94,"s":[100,56,100],"e":[100,100,100]},{"t":100}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[15.429,0],[3.714,7.429]],"o":[[-9.429,2.286],[-12,0],[0,0]],"v":[[21,-8.572],[-9,8.572],[-11,-8.572]],"c":true}},"nm":"路径 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.769,0.769,0.851,1]},"o":{"a":0,"k":100},"r":1,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[21.25,8.822],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 1","np":2,"mn":"ADBE Vector Group"}],"ip":0,"op":750,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":5,"ty":4,"nm":"\rbelly5","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[88.286,85.293,0]},"a":{"a":0,"k":[24.536,34.528,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[18.68,0.296],[2.348,-3.47],[0,-12.88],[-2.993,-7.135],[-3.347,0],[0,18.935]],"o":[[-0.485,2.668],[-6.908,9.775],[0,8.221],[3.058,0.894],[18.935,0],[0,-18.751]],"v":[[-9.448,-34.279],[-13.32,-24.878],[-24.286,9.708],[-19.636,32.896],[-10,34.279],[24.286,-0.007]],"c":true}},"nm":"路径 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.973,0.973,0.988,1]},"o":{"a":0,"k":100},"r":1,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[24.536,34.528],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 1","np":2,"mn":"ADBE Vector Group"}],"ip":0,"op":750,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":6,"ty":4,"nm":"\rbelly4","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[98.286,85.659,0]},"a":{"a":0,"k":[34.536,44.162,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[20.602,3.796],[2.903,-2.274],[1.714,0.858],[6.177,-9.127],[0,-12.88],[-5.829,-9.25],[-5.292,0],[0,24.458]],"o":[[-3.298,1.715],[-2.142,1.678],[-1.714,-0.857],[-6.908,9.775],[0,11.742],[4.705,1.702],[24.458,0],[0,-21.701]],"v":[[-1.929,-43.912],[-11.254,-37.921],[-18.286,-41.231],[-23.32,-25.246],[-34.286,9.341],[-25.071,41.278],[-10,43.912],[34.286,-0.373]],"c":true}},"nm":"路径 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.945,0.945,0.973,1]},"o":{"a":0,"k":100},"r":1,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[34.536,44.162],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 1","np":2,"mn":"ADBE Vector Group"}],"ip":0,"op":750,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":7,"ty":4,"nm":"\rbelly3","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[108.286,87.383,0]},"a":{"a":0,"k":[44.535,52.439,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[19.58,8.198],[9.016,-7.063],[1.714,0.857],[6.178,-9.128],[0,-12.88],[-10.446,-10.797],[-6.088,0],[0,29.981]],"o":[[-12.096,0.951],[-2.141,1.677],[-1.715,-0.857],[-6.907,9.775],[0,16.21],[5.464,1.848],[29.982,0],[0,-22.556]],"v":[[10.948,-52.189],[-21.255,-39.644],[-28.286,-42.954],[-33.321,-26.969],[-44.286,7.617],[-27.4,49.323],[-10.001,52.189],[44.286,-2.097]],"c":true}},"nm":"路径 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.91,0.914,0.961,1]},"o":{"a":0,"k":100},"r":1,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[44.535,52.439],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 1","np":2,"mn":"ADBE Vector Group"}],"ip":0,"op":750,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":8,"ty":4,"nm":"\rbelly2","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[118.286,92.286,0]},"a":{"a":0,"k":[54.535,57.536,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,35.504],[7.996,10.717],[13.435,0],[10.189,-7.981],[1.714,0.857],[6.177,-9.128],[0,-12.879],[-19.548,-9.89],[-3.867,0]],"o":[[0,-14.399],[-10.001,-7.459],[-13.946,0],[-2.141,1.677],[-1.715,-0.857],[-6.907,9.775],[0,23.406],[3.679,0.655],[35.504,0]],"v":[[54.286,-7],[41.553,-45.409],[5.715,-57.286],[-31.255,-44.547],[-38.286,-47.857],[-43.321,-31.872],[-54.286,2.714],[-21.327,56.27],[-10.001,57.286]],"c":true}},"nm":"路径 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.886,0.886,0.937,1]},"o":{"a":0,"k":100},"r":1,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[54.535,57.536],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 1","np":2,"mn":"ADBE Vector Group"}],"ip":0,"op":750,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":9,"ty":4,"nm":"\rbelly1","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[124,95,0]},"a":{"a":0,"k":[60.25,60.25,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[-33.137,0],[0,33.137],[33.137,0],[10.189,-7.981],[1.714,0.857],[6.177,-9.127],[0,-12.88]],"o":[[33.137,0],[0,-33.137],[-13.946,0],[-2.141,1.677],[-1.714,-0.858],[-6.908,9.776],[0,33.137]],"v":[[0,60],[60,0],[0,-60],[-36.969,-47.261],[-44,-50.571],[-49.034,-34.587],[-60,0]],"c":true}},"nm":"路径 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.839,0.843,0.906,1]},"o":{"a":0,"k":100},"r":1,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[60.25,60.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 1","np":2,"mn":"ADBE Vector Group"}],"ip":0,"op":750,"st":0,"bm":0,"sr":1}]};

    let wPlayer = loadAnimation({
      container: whaleDiv,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: whaleAnim,
      rendererSettings: {
        context: '',
        scaleMode: 'noScale',
        clearCanvas: false,
        progressiveLoad: false,
        hideOnTransparent: true,
        className: 'THE-WHALE'
      }
    });
    wPlayer.setSpeed(.5);
  
  }

  render(){
    const handleLoginClick = (e) => {

      if ((e === 'fake' && this.state.loginOpened)  || (e !== 'fake' && !this.state.loginOpened)){

        this.setState({loginOpened: !this.state.loginOpened})
        this.setState({formStyle: {marginTop: '20px'}})
        if (!this.state.loginOpened) {
          this.setState({loginButtonStyle: {
            cursor: 'pointer',
            width: '250px',
            height: '220px',
            border: "3px solid rgba(81, 179, 218, 0.637)",
            labelMargin: {margin: '7px'},
            paddingTop: '7px'}
          })
        } else {
          this.setState({
            loginButtonStyle: { padding: '7px', border: "3px solid rgba(81, 179, 218, 0.637)"},
            labelMargin: { marginTop: '7px' }, })
        }
      }

      if (this.state.signupOpened) {
        handleSignupClick('fake');
      }
    }

    const handleSignupClick = (e) => {
      if ((e === 'fake' && this.state.signupOpened)  || (e !== 'fake' && !this.state.signupOpened)){
        this.setState({signupOpened: !this.state.signupOpened})
        this.setState({ formStyle: { marginTop: '20px' } })
        if (!this.state.signupOpened) {
          this.setState({signupButtonStyle: {
            width: '250px',
            height: '220px',
            border: "3px solid rgba(81, 179, 218, 0.637)",
            labelMargin: {margin: '7px'},
            paddingTop: '7px',
            cursor: 'pointer'}
          })
        } else {
          this.setState({ signupButtonStyle: { padding: '7px', cursor: 'pointer', border: "3px solid rgba(81, 179, 218, 0.637)",}, labelMargin: {marginTop: '7px'}})
        }
      }

      if (this.state.loginOpened) {
        handleLoginClick('fake')
      }
    }

    const handleDemoClick = (e) => {
      e.preventDefault();
      let username = 'demo_user';
      let password = 'demo_password';
      const user = Object.assign({}, {username: 'demo_user', password: 'demo_password'});
      this.props.login(user)
    }

    return (
      <section className="splash">
       
        <div id="whale-splash"></div>
        <div className="ocean">
          <img className="wave" id="wave0" src="https://raw.githubusercontent.com/mvaleriani/Dialoq/master/app/assets/images/wave0.png"></img>
          <img className="wave" id="wave01" src="https://raw.githubusercontent.com/mvaleriani/Dialoq/master/app/assets/images/wave0.png"></img>

          <img className="wave" id="wave1" src="https://raw.githubusercontent.com/mvaleriani/Dialoq/master/app/assets/images/wave1.png"></img>
          <img className="wave" id="wave11" src="https://raw.githubusercontent.com/mvaleriani/Dialoq/master/app/assets/images/wave1.png"></img>

          <img className="wave" id="wave2" src="https://raw.githubusercontent.com/mvaleriani/Dialoq/master/app/assets/images/wave2.png"></img>
          <img className="wave" id="wave21" src="https://raw.githubusercontent.com/mvaleriani/Dialoq/master/app/assets/images/wave2.png"></img>

          <img className="wave" id="wave3" src="https://raw.githubusercontent.com/mvaleriani/Dialoq/master/app/assets/images/wave31.png"></img>
          <img className="wave" id="wave31" src="https://raw.githubusercontent.com/mvaleriani/Dialoq/master/app/assets/images/wave31.png"></img>

        </div>

        <main id="tagline">
          <div id="banner">
            <svg width="177" height="192" viewBox="0 0 177 192" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M89 159H50L86.5 190C87.5086 190.891 88.051 191.037 89 191V159Z" fill="#51B3DA" />
            <path d="M155 1.01722H88L88.5 159.017H127.417L128 158.517H153C165.236 154.649 170.65 150.727 176 138.517C176.674 136.3 176.899 134.884 177 132.017V28.0172C176.505 21.9563 176.024 20.0895 175 18.0172C169.558 7.17339 160.392 0.618341 155 1.01722Z" fill="#51B3DA" />
            <path d="M22.1236 1.01722H89.5L88.9972 159H49.8619L49.2753 158.5H24.1348C11.83 154.632 6.3861 150.711 1.00562 138.502C0.327429 136.285 0.101688 134.869 0 132.003V28.0143C0.497891 21.954 0.981435 20.0874 2.01124 18.0154C7.48425 7.17271 16.7016 0.618382 22.1236 1.01722Z" fill="#80D0E1" />
            <path d="M89 191V159L128.5 158.5L92.5 189.5L90 191H89Z" fill="#238CC5" />
            <circle cx="114.5" cy="111.5" r="8.5" fill="#2C3E50" />
            <circle cx="139.5" cy="111.5" r="8.5" fill="#2C3E50" />
            <circle cx="139.5" cy="79.5" r="8.5" fill="#2C3E50" />
            <circle cx="89.5" cy="79.5" r="8.5" fill="#2C3E50" />
            <circle cx="64.5" cy="47.5" r="8.5" fill="#2C3E50" />
            <circle cx="38.5" cy="47.5" r="8.5" fill="#2C3E50" />
            <circle cx="38.5" cy="79.5" r="8.5" fill="#2C3E50" />
            <path d="M89 39H140V56H89V39Z" fill="#2C3E50" />
            <path d="M148 47.5C148 52.1944 144.194 56 139.5 56C134.806 56 131 52.1944 131 47.5C131 42.8056 134.806 39 139.5 39C144.194 39 148 42.8056 148 47.5Z" fill="#2C3E50" />
            <path d="M98 47.5C98 52.1944 94.1944 56 89.5 56C84.8056 56 81 52.1944 81 47.5C81 42.8056 84.8056 39 89.5 39C94.1944 39 98 42.8056 98 47.5Z" fill="#2C3E50" />
            <path d="M38 103H89V120H38V103Z" fill="#2C3E50" />
            <path d="M97 111.5C97 116.194 93.1944 120 88.5 120C83.8056 120 80 116.194 80 111.5C80 106.806 83.8056 103 88.5 103C93.1944 103 97 106.806 97 111.5Z" fill="#2C3E50" />
            <path d="M47 111.5C47 116.194 43.1944 120 38.5 120C33.8056 120 30 116.194 30 111.5C30 106.806 33.8056 103 38.5 103C43.1944 103 47 106.806 47 111.5Z" fill="#2C3E50" />
          </svg>
            <h1 id="main-title">Dialoq</h1>
          </div>
          <div id="splash-spans">
            <span id="tagline-text">It's time to ditch Discord and Slack.</span>
            <span id="splash-desc" style={{marginBottom: "10px"}}> All-in-one text chat that's free, secure, and works all over the web. Stop paying for what should be base chat services. 
            </span>
            <span id="splash-desc">Simplify your life.</span>
          </div>
          <div id="forms" style={this.state.formStyle}>
            <Collapse isOpened={true}>
              <button onClick={handleLoginClick} style={this.state.loginButtonStyle} className="splash-login-button">
                <label style={this.state.labelMargin} id="login-label">Log In</label>
                <Collapse className="login-collapse" isOpened={this.state.loginOpened} springConfig={presets.noWobble}>
                  <LoginFormContainer />
                </Collapse>
              </button>
            </Collapse>
            <Collapse isOpened={true}>
              <button onClick={handleSignupClick} style={this.state.signupButtonStyle} className="splash-signup-button">
                <label style={this.state.labelMargin} id="signup-label">Sign Up</label>
                <Collapse className="signup-collapse" isOpened={this.state.signupOpened} springConfig={presets.noWobble}>
                  <SignupFormContainer />
                </Collapse>
              </button>
            </Collapse>
            <button id="demo-button" onClick={handleDemoClick}>Demo</button>
          </div>
        </main>
    </section>
    );
  }
}

// const sessionLinks = () => (
//   <section className="splash">
//     <Link to="/login">
//       <button className="splash-login-button">Log In</button>
//     </Link>
//
//
//     <Link to="/signup">
//       <button className="splash-signup-button">Sign Up</button>
//     </Link>
//   </section>
// );

// const servers = (currentUser) => (
// 	<div className="p-holder">
//   </div>
// );
//
// const Splash = ({currentUser}) => {
//   return currentUser ? servers(currentUser) : sessionLinks()
// };

export default Splash;
