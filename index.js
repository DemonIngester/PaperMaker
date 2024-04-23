//Random number between 50 and 360
const R360 = () => Math.floor(Math.random() * (360 - 50 + 1)) + 50;

//Random number between 20 and 100
const R100 = () => Math.floor(Math.random() * (100 - 20 + 1)) + 20;

//Ignore this
let SecretEE = 0;

//Generates div wallpaper and button colors
const WallpaperGenerate = () => {

    const ButtonFontColorCheck = R100();
    const ButtonFontColor = ButtonFontColorCheck > 75 ? "Black" : "White";

    //Generates backgroundColor
    const BackgroundSeed = `hsla(${R360()},${R100()}%,${ButtonFontColorCheck}%,1)`;

    //Generates backgroundImage
    const GradientSeed = `radial-gradient(at ${R100()}% ${R100()}%, hsla(${R360()},100%,${R100()}%,1) 0px, transparent 50%),
    radial-gradient(at ${R100()}% ${R100()}%, hsla(${R360()},100%,${R100()}%,1) 0px, transparent 50%),
    radial-gradient(at ${R100()}% ${R100()}%, hsla(${R360()},100%,${R100()}%,1) 0px, transparent 50%),
    radial-gradient(at ${R100()}% ${R100()}%, hsla(${R360()},100%,${R100()}%,1) 0px, transparent 50%),
    radial-gradient(at ${R100()}% ${R100()}%, hsla(${R360()},100%,${R100()}%,1) 0px, transparent 50%),
    radial-gradient(at ${R100()}% ${R100()}%, hsla(${R360()},100%,${R100()}%,1) 0px, transparent 50%),
    radial-gradient(at ${R100()}% ${R100()}%, hsla(${R360()},100%,${R100()}%,1) 0px, transparent 50%)`;

    
    document.getElementById("Wallpaper").style.backgroundColor = BackgroundSeed;
    document.getElementById("Wallpaper").style.backgroundImage = GradientSeed;
    document.getElementById("GenerateButton").style.backgroundColor = BackgroundSeed;
    document.getElementById("GenerateButton").style.color = ButtonFontColor;
    document.getElementById("SaveButton").style.backgroundColor = BackgroundSeed;
    document.getElementById("SaveButton").style.color = ButtonFontColor;

    //You didnt see this
    SecretEE++;

    if(SecretEE === 100){
        document.getElementById("EE").style.display = "block";
    }
    
}




















    












