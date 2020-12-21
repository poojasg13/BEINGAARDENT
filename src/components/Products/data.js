
import i1 from "../../Images//Items/Badminton/cock.jpg";
import i2 from "../../Images/Items/TT/combo.jpg";
import i3 from "../../Images/Items/VolleyBall/p1.jpg";
import i4 from "../../Images/Items/VolleyBall/hart_beach.jpg";
import i5 from "../../Images/Items/VolleyBall/jaypro.jpg";
import i6 from "../../Images/Items/VolleyBall/metco.jpg";
import i7 from "../../Images/Items/VolleyBall/mikasa.jpg";
import i8 from "../../Images/Items/VolleyBall/molten.jpg";
import i9 from "../../Images/Items/VolleyBall/stands.jpg";
import i10 from "../../Images/Items/VolleyBall/unicor.jpg";
import i11 from "../../Images/Items/VolleyBall/vermont.jpg";

export const options = [
  {id:"p3_1",
  categories:[{
    id:"1",
    name:"Mikasa",
    price:10,
    img:i7
  },
  {
    id:"2",
    name:"Molten",
    price:20,
    img:i8

  },
  {
    id:"3",
    name:"Unicor",
    price:30,
    img:i10

  }]
},
{id:"p3_2",
  categories:[{
    id:"1",
    name:"JayPro",
    price:10,
    img:i5

  },
  {
    id:"2",
    name:"Metco",
    price:20,
    img:i6

  }]
},
{id:"p3_3",
  categories:[{
    id:"1",
    name:"Vermont",
    price:10,
    img:i11

  },
  {
    id:"2",
    name:"Hart Beach",
    price:20,
    img:i4

  }]
}


];

export const productData = [
  {
    id: "p1",
    img: i1,
    name: "Badminton",
    desc: "Delicious combination of garden almonds, cake fruit.",
  },
  {
    id: "p2",
    img: i2,
    name: "Table Tennis",
    desc: "Cherry topped nutritious,cookie prepared with almonds",
  },
  {
    id: "p3",
    img: i3,
    name: "VolleyBall",
    desc: "Dark chocolate baked hot cookies with hot chocolate",
  }
];

export const productDataTwo = 
  [
    {id:"access_p1",
    heading:"Badminton",
    Items:
    [   
      {

        id: "p1_1",
        img: "",
        name: "Shuttlecock",
        price:0

      },
      {
        id: "p1_2",
        img: "",
        name: "Racquet",
        price:0
      },
      {
        id: "p1_3",
        img: "",
        name: "Net",
        price:0
      }
    ]
  },
  {id:"access_p2",
  heading:"Table Tennis",
    Items:
    [   
      {
        id: "p2_1",
        img: "",
        name: "Ball",
        price:0
      },
      {
        id: "p2_2",
        img: "",
        name: "Racket",
        price:0
      },
      {
        id: "p2_3",
        img: "",
        name: "Net and Post",
        price:0
      }
    ]
  },
  {id:"access_p3",
  heading:"Volley Ball",
    Items:
    [   
      {
        id: "p3_1",
        img: i10,
        name: "Ball",
        price:0
      },
      {
        id: "p3_2",
        img: i9,
        name: "Poles",
        price:0
      },
      {
        id: "p3_3",
        img: i11,
        name: "Net",
        price:0
      }
    ]
  }
  ]

;
