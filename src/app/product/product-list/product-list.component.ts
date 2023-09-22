import { Component } from '@angular/core';

 

@Component({

  selector: 'app-product-list',

  templateUrl: './product-list.component.html',

  styleUrls: ['./product-list.component.css']

})

export class ProductListComponent {

 

 

  imagenWidth:number=50;

  imagenMargin:number=2;

  muestraImg:boolean=true;

  listFiler:string='';

 

  productos:any[]=[

    {

      "productoId":1,

      "Modelo":"GTR",

      "Descripcion":"4 puertas",

      "year":"febrero 3 2020",

      "precio": 120000,

      "Marca":"NISSAN",

      "Color":"Verde",

      "ImagenURL":"https://w0.peakpx.com/wallpaper/951/316/HD-wallpaper-widebody-nissan-gtr-custom-wheels-gtr-green-sports-car.jpg"

    },

    {

      "productoId":2,

      "Modelo":"model 7",

      "Descripcion":"4 puertas",

      "year":"JULIO 5 2020",

      "precio": 180000,

      "Marca":"MAZDA",

      "Color":"ROJO",

      "ImagenURL":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_a92403ad02cb48c49ca19b677ba9b5b8.jpg"

 

    },

    {

 

      "productoId":3,

      "Modelo":"RAPTOR",

      "Descripcion":"4 puertas",

      "year":"AGOSOT 2 2023",

      "precio": 200000,

      "Marca":"FORD",

      "Color":"BLANCO",

      "ImagenURL":"https://www.ford.mx/content/ford/mx/es_mx/home/blog/legado/lobo-raptor-r-pickup-mas-poderosa-septiembre2022/jcr:content/par/image/image.imgs.full.high.jpg/1674658790287.jpg"

 

    }

 

  ]

 

 

}

 