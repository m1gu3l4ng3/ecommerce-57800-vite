import { addDoc, collection } from "firebase/firestore"
import db from "../db/db.js"

const productos = [
  {
    id: 1,
    nombre: "El Sol",
    descripcion: "Pintura que refleja el sol",
    precio: 100,
    categoria: "color",
    stock: 3,
    imagen: "/img/color/sun.jpg"
  },
  {
    id: 2,
    nombre: "Pájaro",
    descripcion: "Retrato de un ave",
    precio: 150,
    categoria: "color",
    stock: 2,
    imagen: "/img/color/bird.png"
  },
  {
    id: 3,
    nombre: "Gato",
    descripcion: "Retrato de un animal doméstico",
    precio: 200,
    categoria: "color",
    stock: 5,
    imagen: "/img/color/cat.png"
  },
  {
    id: 4,
    nombre: "Alfombra",
    descripcion: "Retrato de un espacio abstracto",
    precio: 100,
    categoria: "bn",
    stock: 1,
    imagen: "/img/bn/alfombra.png"
  },
  {
    id: 5,
    nombre: "Apollo",
    descripcion: "Retrato de el hombre en la luna",
    precio: 300,
    categoria: "bn",
    stock: 4,
    imagen: "/img/bn/apollo.png"
  },
  {
    id: 6,
    nombre: "Frambuesa",
    descripcion: "Retrato de una fruta",
    precio: 400,
    categoria: "bn",
    stock: 3,
    imagen: "/img/bn/raspberry.jpg"
  },
  {
    id: 7,
    nombre: "Colibri",
    descripcion: "Retrato de un colibri",
    precio: 150,
    categoria: "grises",
    stock: 3,
    imagen: "/img/grises/colibri.jpg"
  },
  {
    id: 8,
    nombre: "Manos",
    descripcion: "Retrato de unas manos",
    precio: 120,
    categoria: "grises",
    stock: 3,
    imagen: "/img/grises/hand.jpg"
  },
  {
    id: 9,
    nombre: "Perro",
    descripcion: "Retrato de un perro",
    precio: 180,
    categoria: "grises",
    stock: 2,
    imagen: "/img/grises/perro.png"
  }
]

const seedProducts = () => {
  productos.map(({ id, ...rest}) => {
    const productosRef = collection(db, 'productos')
    addDoc(productosRef, rest)
  })
  console.log("Productos subidos correctamente")
}

seedProducts()