var camera, light, scene, renderer, video, update, model, raycaster, mouse, selectedObject, constraints;

var strDownloadMime = "image/octet-stream";

var mixer = null;
var clock = new THREE.Clock();

var header, paragraph, models, modelName, animated, control_type;

var x_pos, y_pos, z_pos, x_rot, y_rot, z_rot;
var looponce = false;

function init() {
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
    light = new THREE.DirectionalLight(0xffffff, 2.0);
    light.position.set(1, 1, 1);
    scene.add(light);

    //setting up the renderer
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        preserveDrawingBuffer: true,
        alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
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
        }).catch(function (error) {
            console.error('Unable to access the camera/webcam.', error);
            webcam_playable = false;
        });
    } else {
        console.error('MediaDevices interface not available.');
        webcam_playable = false;
    }
    if (webcam_playable) {
        document.body.appendChild(video);
        var webBackground = new THREE.VideoTexture(video);
        scene.background = webBackground;
    } else {
        scene.background = new THREE.Color(0xdccba0);
    }


    setControls();

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
                }).catch(function (error) {
                    console.error('Unable to access the camera/webcam.', error);
                });
            } else {
                console.error('MediaDevices interface not available.');
            }
            webBackground = new THREE.VideoTexture(video);
            scene.background = webBackground;
        }
    });

    load3Dmodel();
    update = function () {
        models.rotation.y += 0.01;
        models.rotation.z += 0.01;
    }
}
//loading the 3D model
function load3Dmodel() {
    var loader = new THREE.GLTFLoader();
    var dracoLoader = new THREE.DRACOLoader();
    dracoLoader.setDecoderPath('../../draco/');
    loader.setDRACOLoader(dracoLoader);
    loader.load(modelName, function (gltf) {
        model = gltf.scene;

        //Putting the model in the center and scaling it
        var mroot = model;
        mroot.scale.set(0.3, 0.3, 0.3);
        var bbox = new THREE.Box3().setFromObject(mroot);
        var cent = bbox.getCenter(new THREE.Vector3());
        var size = bbox.getSize(new THREE.Vector3());

        //Rescale the object to normalized space
        var maxAxis = Math.max(size.x, size.y, size.z);
        mroot.scale.multiplyScalar(1.0 / maxAxis);
        bbox.setFromObject(mroot);
        bbox.getCenter(cent);
        bbox.getSize(size);
        //Reposition to 0,halfY,0
        mroot.position.copy(cent).multiplyScalar(-1);
        mroot.position.y -= (size.y * 0.5);
        mroot.position.z += z_pos;
        mroot.position.y += y_pos;
        mroot.position.x += x_pos;
        mroot.rotation.z += z_rot;
        mroot.rotation.y += y_rot;
        mroot.rotation.x += x_rot;
        models.add(mroot);
        if (animated) {
            mixer = new THREE.AnimationMixer(model);
            var action = mixer.clipAction(gltf.animations[0]);
            if (looponce) {
                action.setLoop(THREE.LoopOnce);
                action.clampWhenFinished = true;
            }
            action.play();
        }
    }, function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    }, function (error) {
        console.log('An error happened');
    });
    scene.add(models);
}

function setControls() {
    //camera controls
    if (control_type == "orbit") {
        console.log("orbit");
        var controls = new THREE.OrbitControls(camera, renderer.domElement);
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
        selectedObject = intersects[0].object;
        showInfo();

    }
}

function showInfo() {
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
        saveFile(imgData.replace(strMime, strDownloadMime), defaultFileName(".jpg"));
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
function animateN() {
    requestAnimationFrame(animateN);
    update();
    renderer.render(scene, camera);
}

function animateAN() {
    requestAnimationFrame(animateAN);
    var delta = clock.getDelta();
    if (mixer != null) {
        mixer.update(delta);
    };
    renderer.render(scene, camera);
}
export function bacteriophage() {
    header = "Bakteriofagas";
    paragraph = "tekstas tekstas";

    models = new THREE.Object3D();
    modelName = "../models/bacteriophage.glb";

    animated = true;
    control_type = "orbit";
    x_pos = -1.4;
    y_pos = 2.4;
    z_pos = 1.5;
    x_rot = 0;
    y_rot = -1.7;
    z_rot = 0;
    looponce = true;
    init();
    animateAN();
}
export function coronavirus() {
    header = "COVID-19";
    paragraph = "Koronavirusai yra virusai, kurie cirkuliuoja tarp gyvūnų, tačiau žinoma, kad kai kurie iš jų sukelia infekcijas žmonėms. Sukėlę infekciją žmonėms, jie toliau gali būti perduoti nuo žmogaus žmogui. Koronavirusų infekcijos šaltinis gali būti daugybė gyvūnų. Pavyzdžiui, Artimųjų Rytų respiracinio sindromo koronaviruso (MERS-CoV) šaltinis buvo kupranugariai, o sunkaus ūmaus respiracinio sindromo (SŪRS) - civetės katės.";

    models = new THREE.Object3D();
    modelName = "./models/coronavirus.glb";

    animated = false;
    control_type = "orbit";
    x_pos = 0;
    y_pos = 0;
    z_pos = 0;
    x_rot = 0;
    y_rot = 0;
    z_rot = 0;

    init();
    animateN();
}
export function dna() {
    header = "DNR";
    paragraph = "tekstas tekstas";

    models = new THREE.Object3D();
    modelName = "../models/DNA.glb";

    animated = true;
    control_type = "orbit";
    x_pos = 0;
    y_pos = 0.35;
    z_pos = 1;
    x_rot = 0;
    y_rot = 4.7;
    z_rot = 0;
    init();
    animateAN();
}
export function crispr() {
    header = "Crispr - Cas9";
    paragraph = "tekstas tekstas";

    models = new THREE.Object3D();
    modelName = "../models/crisprcas9.glb";

    animated = true;
    control_type = "orbit";
    x_pos = 0.35;
    y_pos = 0;
    z_pos = 1;
    x_rot = 0.2;
    y_rot = 1.2;
    z_rot = 0.5;
    init();
    animateAN();
}
