const dashboard=document.getElementById("dashboard")
const menubtn=document.getElementById("menubtn")
const invisiblebtn=document.getElementById("invisiblebtn")
const displaycontent=document.getElementById("display-content")
let cursor=document.getElementById("cursor")
let cursorinner=document.getElementById("cursorinner")
document.addEventListener("mousemove",(e)=>{
    cursor.style.cssText=cursorinner.style.cssText="left:"+e.clientX+"px; top:"+e.clientY+"px;"
})





menubtn.addEventListener("click",()=>{
    dashboard.style.display="block"
    menubtn.style.display="none"
})
invisiblebtn.addEventListener("click",()=>{
    dashboard.style.display="none"
    menubtn.style.display="block"
})



const pictures=[
    "https://images.pexels.com/photos/3512848/pexels-photo-3512848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2387866/pexels-photo-2387866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/163872/italy-cala-gonone-air-sky-163872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1512036666432-2181c1f26420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWR2ZW50dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.pexels.com/photos/1707215/pexels-photo-1707215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/15849726/pexels-photo-15849726.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/14947134/pexels-photo-14947134.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2832039/pexels-photo-2832039.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1181181/pexels-photo-1181181.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5256400/pexels-photo-5256400.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2676399/pexels-photo-2676399.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2304791/pexels-photo-2304791.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600"
];
const seaarray=[
    "https://images.pexels.com/photos/1536435/pexels-photo-1536435.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2959611/pexels-photo-2959611.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/13312058/pexels-photo-13312058.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/561463/pexels-photo-561463.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1350197/pexels-photo-1350197.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1298684/pexels-photo-1298684.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1074505/pexels-photo-1074505.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1555313/pexels-photo-1555313.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/262325/pexels-photo-262325.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2127969/pexels-photo-2127969.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/355288/pexels-photo-355288.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/416676/pexels-photo-416676.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/10026595/pexels-photo-10026595.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8112761/pexels-photo-8112761.jpeg?auto=compress&cs=tinysrgb&w=600"
]

const mountainsarray=[
    "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4652275/pexels-photo-4652275.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2724664/pexels-photo-2724664.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3265456/pexels-photo-3265456.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1647972/pexels-photo-1647972.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1752372/pexels-photo-1752372.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1785502/pexels-photo-1785502.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4261096/pexels-photo-4261096.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1374064/pexels-photo-1374064.jpeg?auto=compress&cs=tinysrgb&w=600"

]
const plantsarray=[
    "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/305827/pexels-photo-305827.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/268261/pexels-photo-268261.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1141792/pexels-photo-1141792.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/712876/pexels-photo-712876.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1500523/pexels-photo-1500523.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/64221/flower-sunflower-karnataka-india-64221.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/339614/pexels-photo-339614.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/87841/ivy-plants-leaves-wall-87841.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1549194/pexels-photo-1549194.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1187079/pexels-photo-1187079.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/840215/pexels-photo-840215.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1420016/pexels-photo-1420016.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1889602/pexels-photo-1889602.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=600",
    'https://images.pexels.com/photos/70365/forest-sunbeams-trees-sunlight-70365.jpeg?auto=compress&cs=tinysrgb&w=600'
]



const insectsarray=[
    "https://images.pexels.com/photos/144243/ladybugs-ladybirds-bugs-insects-144243.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/51394/spin-web-nature-bug-51394.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/950327/pexels-photo-950327.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1085542/pexels-photo-1085542.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/675313/pexels-photo-675313.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/59829/honey-bee-water-buckfast-59829.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/37733/bug-leaf-bug-insect-nature-37733.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/209074/pexels-photo-209074.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/63628/cocoon-cocoon-butterfly-larva-larvae-63628.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/40863/insects-beetles-nero-head-40863.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1046492/pexels-photo-1046492.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/158732/lycaenidae-restharrow-butterflies-polyommatus-icarus-158732.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/38912/fly-insects-pair-chennai-38912.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2563028/pexels-photo-2563028.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/65276/spider-macro-fight-nutritional-supplements-65276.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/52967/canthigaster-cicada-fulgoromorpha-insect-proboscis-52967.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/13968131/pexels-photo-13968131.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1119582/pexels-photo-1119582.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/10138353/pexels-photo-10138353.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1021685/pexels-photo-1021685.jpeg?auto=compress&cs=tinysrgb&w=600"
]

const fishesarray=[
    "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3536511/pexels-photo-3536511.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/325045/pexels-photo-325045.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1821724/pexels-photo-1821724.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1335971/pexels-photo-1335971.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3794147/pexels-photo-3794147.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2505042/pexels-photo-2505042.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/66218/pexels-photo-66218.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2131828/pexels-photo-2131828.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/13348517/pexels-photo-13348517.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5546934/pexels-photo-5546934.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2832641/pexels-photo-2832641.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/9406881/pexels-photo-9406881.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4139587/pexels-photo-4139587.png?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4139587/pexels-photo-4139587.png?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2347462/pexels-photo-2347462.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7826551/pexels-photo-7826551.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2446439/pexels-photo-2446439.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2540698/pexels-photo-2540698.jpeg?auto=compress&cs=tinysrgb&w=600"
]
const birdsarray=[
    "https://images.pexels.com/photos/1406506/pexels-photo-1406506.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/110812/pexels-photo-110812.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/416179/pexels-photo-416179.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1098254/pexels-photo-1098254.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/36846/bald-eagle-adler-bird-of-prey-raptor.jpg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2629372/pexels-photo-2629372.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1181181/pexels-photo-1181181.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/55832/flock-of-birds-canada-geese-geese-wing-55832.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/54108/peacock-bird-spring-animal-54108.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2134180/pexels-photo-2134180.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/45851/bird-blue-cristata-cyanocitta-45851.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/66904/tawny-owl-owl-bird-birds-66904.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/36430/bird-birds-animal-bill.jpg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/86596/owl-bird-eyes-eagle-owl-86596.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/9936670/pexels-photo-9936670.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1612371/pexels-photo-1612371.jpeg?auto=compress&cs=tinysrgb&w=600"
]

const animalarray=[
    "https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3396657/pexels-photo-3396657.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/568022/pexels-photo-568022.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7709902/pexels-photo-7709902.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2755151/pexels-photo-2755151.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/41315/africa-african-animal-cat-41315.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/598752/pexels-photo-598752.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1386560/pexels-photo-1386560.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/133459/pexels-photo-133459.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1003848/pexels-photo-1003848.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3656870/pexels-photo-3656870.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4339447/pexels-photo-4339447.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/144234/bull-landscape-nature-mammal-144234.jpeg?auto=compress&cs=tinysrgb&w=600"
]
const foodsarray=[
    "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5410407/pexels-photo-5410407.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/9287032/pexels-photo-9287032.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/13063302/pexels-photo-13063302.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7172067/pexels-photo-7172067.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/12688928/pexels-photo-12688928.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4331488/pexels-photo-4331488.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/8000025/pexels-photo-8000025.jpeg?auto=compress&cs=tinysrgb&w=600"

]
window.onload=()=>{
    console.log(pictures[0])
    for(let index of pictures){
    const imgTagCreate=document.createElement("img")
    imgTagCreate.alt="Beautiful images"
   imgTagCreate.src=`${index}`
   displaycontent.appendChild(imgTagCreate)
}
}





document.getElementById("sea").addEventListener("click",()=>{imgfn(seaarray)})
document.getElementById("mountains").addEventListener("click",()=>{imgfn(mountainsarray)})
document.getElementById("plants").addEventListener("click",()=>{imgfn(plantsarray)})
document.getElementById("insects").addEventListener("click",()=>{imgfn(insectsarray)})
document.getElementById("fishes").addEventListener("click",()=>{imgfn(fishesarray)})
document.getElementById("birds").addEventListener("click",()=>{imgfn(birdsarray)})
document.getElementById("animals").addEventListener("click",()=>{imgfn(animalarray)})
document.getElementById("foods").addEventListener("click",()=>{imgfn(foodsarray)})
function imgfn(temp){
    const imgselect=document.querySelectorAll("img")
    for(let index=0;index<imgselect.length;index++){
    console.log(temp[index]);
    imgselect[index].src=temp[index]
    dashboard.style.display="none"
    menubtn.style.display="block"
    }
}
