import React from 'react';
import { Link } from 'react-router-dom';
import { loadAnimation, setSpeed } from 'lottie-web';

class FourOFour extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    let whaleDiv = document.getElementById('fail-whale');
    let anim = {"v":"4.5.9","fr":25,"ip":0,"op":100,"w":248,"h":187,"ddd":0,"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"\rtail","ks":{"o":{"a":0,"k":100},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[21],"e":[-60]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":12,"s":[-60],"e":[21]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":25,"s":[21],"e":[-60]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":37,"s":[-60],"e":[21]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":50,"s":[21],"e":[-60]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":62,"s":[-60],"e":[21]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":74,"s":[21],"e":[-60]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":87,"s":[-60],"e":[21]},{"t":99}]},"p":{"a":0,"k":[80,44.429,0]},"a":{"a":0,"k":[8.473,9.453,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[-1.739,1.217],[0,0],[2.934,-2.055],[0.434,-0.631],[0.467,0.666],[0,0],[-2.054,-2.934],[-1.467,-0.418],[0,0]],"o":[[0,0],[1.521,0.11],[2.933,-2.055],[0,0],[-0.666,0.466],[-0.192,-0.741],[-2.054,-2.934],[0,0],[1.218,1.738],[0,0],[0,0]],"v":[[-0.161,5.232],[-0.161,5.232],[5.32,4.011],[8.702,-2.465],[1.462,-1.499],[-0.177,0.187],[-1.14,-1.958],[-7.614,-5.342],[-6.649,1.901],[-1.916,4.923],[-1.916,4.923]],"c":true}},"nm":"路径 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.769,0.769,0.851,1]},"o":{"a":0,"k":100},"r":1,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[8.952,5.591],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 1","np":2,"mn":"ADBE Vector Group"}],"ip":0,"op":750,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":1,"ty":4,"nm":"\reye","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[145.857,82.715,0]},"a":{"a":0,"k":[5.964,5.965,0]},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":42,"s":[100,100,100],"e":[100,1,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":45,"s":[100,1,100],"e":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":48,"s":[100,100,100],"e":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":93,"s":[100,100,100],"e":[100,1,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":96,"s":[100,1,100],"e":[100,100,100]},{"t":99}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[-3.156,0],[0,-3.156],[3.156,0],[0,3.156]],"o":[[3.156,0],[0,3.156],[-3.156,0],[0,-3.156]],"v":[[0,-5.715],[5.714,-0.001],[0,5.715],[-5.714,-0.001]],"c":true}},"nm":"路径 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.671,0.671,0.761,1]},"o":{"a":0,"k":100},"r":1,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[5.964,5.965],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 1","np":2,"mn":"ADBE Vector Group"}],"ip":0,"op":750,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":2,"ty":4,"nm":"\reyes white","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[143.714,82.714,0]},"a":{"a":0,"k":[11.679,11.678,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[-6.312,0],[0,6.312],[6.312,0],[0,-6.311]],"o":[[6.312,0],[0,-6.311],[-6.312,0],[0,6.312]],"v":[[0,11.428],[11.429,-0.001],[0,-11.428],[-11.429,-0.001]],"c":true}},"nm":"路径 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"r":1,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[11.679,11.678],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 1","np":2,"mn":"ADBE Vector Group"}],"ip":0,"op":750,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":3,"ty":4,"nm":"\rbody","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[123.719,72.664,0]},"a":{"a":0,"k":[60.153,37.965,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[31.5,0],[10.189,-7.981],[1.68,1.422],[0,0],[0,0],[4.418,-6.529],[0,-12.88],[0,0],[-3.015,-6.029],[0,0],[-12.453,0],[-6.911,9.934]],"o":[[-13.946,0],[-1.536,1.204],[0,0],[0,0],[-0.153,2.463],[-6.908,9.775],[0,0],[10.063,-5.593],[0,0],[9.428,-2.285],[20.38,0],[-2.476,-30.863]],"v":[[0.097,-37.715],[-36.872,-24.975],[-42.158,-26.982],[-43.403,-27.495],[-44.57,-27.098],[-48.937,-12.301],[-59.903,22.286],[-59.499,29.285],[-33.617,30.857],[-1.617,30.857],[23.526,37.715],[59.903,17.423]],"c":true}},"nm":"路径 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.769,0.769,0.851,1]},"o":{"a":0,"k":100},"r":1,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[60.153,37.965],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 1","np":2,"mn":"ADBE Vector Group"}],"ip":0,"op":750,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":4,"ty":4,"nm":"\rfin","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[104.536,103.099,0]},"a":{"a":0,"k":[24.733,0.25,0]},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":0,"s":[100,100,100],"e":[100,70,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":6,"s":[100,70,100],"e":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":12,"s":[100,100,100],"e":[100,56,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":18,"s":[100,56,100],"e":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":24,"s":[100,100,100],"e":[100,70,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":30,"s":[100,70,100],"e":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":36,"s":[100,100,100],"e":[100,56,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":43,"s":[100,56,100],"e":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":49,"s":[100,100,100],"e":[100,70,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":55,"s":[100,70,100],"e":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":61,"s":[100,100,100],"e":[100,56,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":67,"s":[100,56,100],"e":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":74,"s":[100,100,100],"e":[100,70,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":80,"s":[100,70,100],"e":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":87,"s":[100,100,100],"e":[100,56,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":94,"s":[100,56,100],"e":[100,100,100]},{"t":100}]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[15.429,0],[3.714,7.429]],"o":[[-9.429,2.286],[-12,0],[0,0]],"v":[[21,-8.572],[-9,8.572],[-11,-8.572]],"c":true}},"nm":"路径 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.769,0.769,0.851,1]},"o":{"a":0,"k":100},"r":1,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[21.25,8.822],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 1","np":2,"mn":"ADBE Vector Group"}],"ip":0,"op":750,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":5,"ty":4,"nm":"\rbelly5","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[88.286,85.293,0]},"a":{"a":0,"k":[24.536,34.528,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[18.68,0.296],[2.348,-3.47],[0,-12.88],[-2.993,-7.135],[-3.347,0],[0,18.935]],"o":[[-0.485,2.668],[-6.908,9.775],[0,8.221],[3.058,0.894],[18.935,0],[0,-18.751]],"v":[[-9.448,-34.279],[-13.32,-24.878],[-24.286,9.708],[-19.636,32.896],[-10,34.279],[24.286,-0.007]],"c":true}},"nm":"路径 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.973,0.973,0.988,1]},"o":{"a":0,"k":100},"r":1,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[24.536,34.528],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 1","np":2,"mn":"ADBE Vector Group"}],"ip":0,"op":750,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":6,"ty":4,"nm":"\rbelly4","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[98.286,85.659,0]},"a":{"a":0,"k":[34.536,44.162,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[20.602,3.796],[2.903,-2.274],[1.714,0.858],[6.177,-9.127],[0,-12.88],[-5.829,-9.25],[-5.292,0],[0,24.458]],"o":[[-3.298,1.715],[-2.142,1.678],[-1.714,-0.857],[-6.908,9.775],[0,11.742],[4.705,1.702],[24.458,0],[0,-21.701]],"v":[[-1.929,-43.912],[-11.254,-37.921],[-18.286,-41.231],[-23.32,-25.246],[-34.286,9.341],[-25.071,41.278],[-10,43.912],[34.286,-0.373]],"c":true}},"nm":"路径 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.945,0.945,0.973,1]},"o":{"a":0,"k":100},"r":1,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[34.536,44.162],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 1","np":2,"mn":"ADBE Vector Group"}],"ip":0,"op":750,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":7,"ty":4,"nm":"\rbelly3","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[108.286,87.383,0]},"a":{"a":0,"k":[44.535,52.439,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[19.58,8.198],[9.016,-7.063],[1.714,0.857],[6.178,-9.128],[0,-12.88],[-10.446,-10.797],[-6.088,0],[0,29.981]],"o":[[-12.096,0.951],[-2.141,1.677],[-1.715,-0.857],[-6.907,9.775],[0,16.21],[5.464,1.848],[29.982,0],[0,-22.556]],"v":[[10.948,-52.189],[-21.255,-39.644],[-28.286,-42.954],[-33.321,-26.969],[-44.286,7.617],[-27.4,49.323],[-10.001,52.189],[44.286,-2.097]],"c":true}},"nm":"路径 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.91,0.914,0.961,1]},"o":{"a":0,"k":100},"r":1,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[44.535,52.439],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 1","np":2,"mn":"ADBE Vector Group"}],"ip":0,"op":750,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":8,"ty":4,"nm":"\rbelly2","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[118.286,92.286,0]},"a":{"a":0,"k":[54.535,57.536,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,35.504],[7.996,10.717],[13.435,0],[10.189,-7.981],[1.714,0.857],[6.177,-9.128],[0,-12.879],[-19.548,-9.89],[-3.867,0]],"o":[[0,-14.399],[-10.001,-7.459],[-13.946,0],[-2.141,1.677],[-1.715,-0.857],[-6.907,9.775],[0,23.406],[3.679,0.655],[35.504,0]],"v":[[54.286,-7],[41.553,-45.409],[5.715,-57.286],[-31.255,-44.547],[-38.286,-47.857],[-43.321,-31.872],[-54.286,2.714],[-21.327,56.27],[-10.001,57.286]],"c":true}},"nm":"路径 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.886,0.886,0.937,1]},"o":{"a":0,"k":100},"r":1,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[54.535,57.536],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 1","np":2,"mn":"ADBE Vector Group"}],"ip":0,"op":750,"st":0,"bm":0,"sr":1},{"ddd":0,"ind":9,"ty":4,"nm":"\rbelly1","ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[124,95,0]},"a":{"a":0,"k":[60.25,60.25,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[-33.137,0],[0,33.137],[33.137,0],[10.189,-7.981],[1.714,0.857],[6.177,-9.127],[0,-12.88]],"o":[[33.137,0],[0,-33.137],[-13.946,0],[-2.141,1.677],[-1.714,-0.858],[-6.908,9.776],[0,33.137]],"v":[[0,60],[60,0],[0,-60],[-36.969,-47.261],[-44,-50.571],[-49.034,-34.587],[-60,0]],"c":true}},"nm":"路径 1","mn":"ADBE Vector Shape - Group"},{"ty":"fl","c":{"a":0,"k":[0.839,0.843,0.906,1]},"o":{"a":0,"k":100},"r":1,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill"},{"ty":"tr","p":{"a":0,"k":[60.25,60.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"组 1","np":2,"mn":"ADBE Vector Group"}],"ip":0,"op":750,"st":0,"bm":0,"sr":1}]};

    loadAnimation({
      container: whaleDiv,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: anim,
      rendererSettings: {
        context: '',
        scaleMode: 'noScale',
        clearCanvas: false,
        progressiveLoad: false,
        hideOnTransparent: true,
        className: 'THE-WHALE'
      }
    });
    setSpeed(.5);
  }

  render(){
    return (
      <section className="error-page" >
        <Link to="/home">
          <main id="fail-whale"></main>
        </Link>

        <h1>Oops!</h1>
        <span>
          <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/samsung/128/water-wave_1f30a.png" draggable="false"/>
            Select Mr. Whale to go Home
          <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/samsung/128/water-wave_1f30a.png" draggable="false"/> 
        </span>
      </section>
    );
  }
}

export default FourOFour;