var camera, light, scene, renderer, video, update, model, raycaster, mouse;

var mixer = null;
var clock = new THREE.Clock();


// export function init(modelName, header, paragraph, animated, pos, rot, looponce) {
export function init(modelData, metaData){
    modelData.models = new THREE.Object3D();
    
    let header = metaData.nameLT;
    let paragraph = metaData.info;

    if (navigator.userAgent.indexOf("like Mac") != -1) {
        if (navigator.userAgent.indexOf("CriOS") != -1) {
            alert("iOS nepalaiko WebRTC naršyklėje Google Chrome. Siūlome naudoti Safari.");
        } else if (navigator.userAgent.indexOf("FxiOS") != -1) {
            alert("iOS nepalaiko WebRTC naršyklėje Mozilla Firefox. Siūlome naudoti Safari.");
        }
    }

    //setting up the camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1.5;

    //setting up the scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdccba0);
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 0, 1);
    scene.add(light);
    //light = new THREE.AmbientLight(0xffffff, 6);
    light = new THREE.AmbientLight(0xffffff, 3);
    scene.add(light);

    //setting up the renderer
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        preserveDrawingBuffer: true,
        alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    if (!modelData.path.includes("gfp")) {
        renderer.outputEncoding = THREE.sRGBEncoding;
    }
    renderer.toneMappingExposure = 0.7;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.physicallyCorrectLights = true;
    document.body.appendChild(renderer.domElement);
    var canvas = renderer.domElement;

    //setting the background as webcam stream
    video = document.createElement('video');
    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    var facing = "environment";
    var defaultsOpts = {
        audio: false,
        video: {
            facingMode: facing
        }
    }
    var webcam_playable = true;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(defaultsOpts).then(function (stream) {
            video.srcObject = stream;
            video.play();
            setTimeout(function () {
                load3Dmodel(modelData);
            }, 2000);
        }).catch(function (error) {
            console.error('Unable to access the camera/webcam.', error);
            webcam_playable = false;
            load3Dmodel(modelData);
        });
    } else {
        console.error('MediaDevices interface not available.');
        webcam_playable = false;
        load3Dmodel(modelData);
    }
    if (webcam_playable) {
        document.body.appendChild(video);
        var webBackground = new THREE.VideoTexture(video);
        scene.background = webBackground;
    } else {
        scene.background = new THREE.Color(0xdccba0);
    }


    setControls("orbit");

    //choosing the 3D object
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2()

    //All the event listeners
    window.addEventListener('resize', onWindowResize, false);

    renderer.domElement.addEventListener('click', onClick, false);

    document.getElementById("photo-button").addEventListener('click', saveAsImage, false);

    document.getElementById("info-button").addEventListener('click', showInfo, false);

    document.getElementById("close-button").addEventListener('click', function () {
        $('#model-info').css('display', 'none');
    }, false);
    //Reversing the camera
    document.getElementById("reverse-button").addEventListener('click', function () {
        if (webcam_playable) {
            if (facing == "user") {
                facing = "environment";
            } else {
                facing = "user";
            }
            defaultsOpts = {
                audio: false,
                video: {
                    facingMode: facing
                }
            }
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia(defaultsOpts).then(function (stream) {
                    video.srcObject = stream;
                    video.play();
                    setTimeout(function () {
                        load3Dmodel(modelData);
                    }, 2000);
                }).catch(function (error) {
                    console.error('Unable to access the camera/webcam.', error);
                    load3Dmodel(modelData);
                });
            } else {
                console.error('MediaDevices interface not available.');
                load3Dmodel(modelData);
            }
            webBackground = new THREE.VideoTexture(video);
            scene.background = webBackground;
        }
    });

    // load3Dmodel(modelData);
    update = function () {
        models.rotation.y += 0.01;
        models.rotation.z += 0.01;
    }

    return modelData.models;
}
//loading the 3D model
function load3Dmodel(modelData){
    let modelName = modelData.path;
    let models = modelData.models;
    let pos = modelData.pos;
    let rot = modelData.rot;
    let animated = modelData.animated;
    let looponce = modelData.looponce;

    if (pos == undefined) pos = {z: 0, y: 0, x: 0};
    if (rot == undefined) rot = {z: 0, y: 0, x: 0};
    var loader;
    loader = new THREE.GLTFLoader();
    var dracoLoader = new THREE.DRACOLoader();
    dracoLoader.setDecoderPath('./draco/');
    loader.setDRACOLoader(dracoLoader);

    loader.load(modelName, function (load_model) {
        model = load_model.scene;

        //Putting the model in the center and scaling it
        var mroot = model;
        mroot.scale.set(0.3, 0.3, 0.3);
        var bbox = new THREE.Box3().setFromObject(mroot);
        var cent = bbox.getCenter(new THREE.Vector3());
        var size = bbox.getSize(new THREE.Vector3());
        const INITIAL_MTL = new THREE.MeshPhongMaterial({
            color: 0x03fc4a
        });

        if (modelName.includes("gfp")) {
            initColor(model, "GFP", INITIAL_MTL);
        }

        //Rescale the object to normalized space
        var maxAxis = Math.max(size.x, size.y, size.z);
        mroot.scale.multiplyScalar(1.0 / maxAxis);
        bbox.setFromObject(mroot);
        bbox.getCenter(cent);
        bbox.getSize(size);
        //Reposition to 0,halfY,0
        mroot.position.copy(cent).multiplyScalar(-1);
        mroot.position.y -= (size.y * 0.5);
        mroot.position.z += pos.z;
        mroot.position.y += pos.y;
        mroot.position.x += pos.x;
        mroot.rotation.z += rot.z;
        mroot.rotation.y += rot.y;
        mroot.rotation.x += rot.x;
        models.add(mroot);
        if (animated) {
            mixer = new THREE.AnimationMixer(model);
            for (var i = 0; i < load_model.animations.length; i++) {
                var action = mixer.clipAction(load_model.animations[i]);
                if (looponce) {
                    action.setLoop(THREE.LoopOnce);
                    action.clampWhenFinished = true;
                }
                action.play();
            }
        }
    }, function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    }, function (error) {
        console.log('Error loading the model (load3Dmodel)');
    });
    scene.add(models);
}

function setControls(control_type) {
    //camera controls
    if (control_type == "orbit") {
        console.log("orbit");
        var controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.zoomSpeed = 0.05;
    } else {
        return;
    }

}
//Called when clicking on the 3d model => info div pops up
function onClick() {

    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
        let selectedObject = intersects[0].object;
        showInfo();

    }
}

function showInfo(header, paragraph) {
    $('#st-name').text(header);
    $('#text-info').text(paragraph);
    // toggle html element
    $('#model-info').css('display', 'block');
    positionInfoDiv();
}
//positioning the Info Div in the middle
function positionInfoDiv() {

    var height = $("#model-info").height();
    var width = $("#model-info").width();
    if (width < $("#model-info h1").width()) {
        width = $("#model-info h1").width();
    }
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;

    $('#model-info').css({
        left: left,
        top: top
    });

}
//Window resizing
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    positionInfoDiv();
    renderer.setSize(window.innerWidth, window.innerHeight);

}
//Custom image file name 
function defaultFileName(ext) {
    const str = `${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}${ext}`;
    var name = str.replace(/\//g, '-');
    return name;
}
//Saving the image <- needs fixing
function saveAsImage() {
    var imgData, imgNode;
    try {
        var strMime = "image/jpeg";
        imgData = renderer.domElement.toDataURL(strMime);
        saveFile(imgData.replace(strMime, "image/octet-stream"), defaultFileName(".jpg"));
    } catch (e) {
        console.log(e);
        return;
    }
}
//Capturing the image
var saveFile = function (strData, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        document.body.appendChild(link); //Firefox requires the link to be in the body
        link.download = filename;
        link.href = strData;
        setTimeout(function () {
            link.click();
            document.body.removeChild(link); //remove the link when done
        }, 500);
    } else {
        location.replace(uri);
    }
}
//important
export function animateN() {
    requestAnimationFrame(animateN);
    update();
    renderer.render(scene, camera);
}

export function animateAN() {
    requestAnimationFrame(animateAN);
    var delta = clock.getDelta();
    if (mixer != null) {
        mixer.update(delta);
    };
    renderer.render(scene, camera);
}

function initColor(parent, type, mtl) {
    parent.traverse((o) => {
        if (o.isMesh) {
            if (o.name.includes(type)) {
                o.material = mtl;
                o.nameID = type; // Set a new property to identify this object
            }
        }
    });
}