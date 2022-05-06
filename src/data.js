import {v4 as uuidv4} from "uuid";

function chillHop(){
    return[
        {
            name:"Be Here Now",
            cover:"https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-1024x1024.jpg",
            artist:"Chillhop Music",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=21782",
            color:['#044759','#8D4623'],
            id:uuidv4(),
            active:true,
        },
        {
            name:"Viatecture",
            cover:"https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
            artist:"Leavv, Makzo",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=20119",
            color:['#A5A73C','#C6A7E3'],
            id:uuidv4(),
            active:false,
        },
        {
            name:"Just Put Up Some String Lights",
            cover:"https://chillhop.com/wp-content/uploads/2021/09/2ce75252f5419a45d76bb93424ac1eae3e688b17-1024x1024.jpg",
            artist:"Sleepy Fish",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=24823",
            color:['#24498D','#FCAB7F'],
            id:uuidv4(),
            active:false,
        },
        {
            name:"Seagulls",
            cover:"https://chillhop.com/wp-content/uploads/2022/01/5753da482a6839b31e4905b22a2f8d65913e7eb4-1024x1024.jpg",
            artist:"Misha, Zmeyev, Viktor Minsky",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=28936",
            color:['#B6C5CA','#1B1F2C'],
            id:uuidv4(),
            active:false,
        },
        {
            name:"Everyday",
            cover:"https://chillhop.com/wp-content/uploads/2022/02/6b1cd792e2d88c65108a3c3b7ed48407b6f65bf8-1024x1024.jpg",
            artist:"chromonicci",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=30339",
            color:['#DBCDB2','#3E4866'],
            id:uuidv4(),
            active:false,
        },
        {
            name:"Hung Up",
            cover:"https://chillhop.com/wp-content/uploads/2021/09/dc49d7971512be0192848d072efdaaab91a4c73c-1024x1024.jpg",
            artist:"Ezzy",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=24699",
            color:['#B33D43','#F9DEA9'],
            id:uuidv4(),
            active:false ,
        }
    ];

}
export default chillHop;