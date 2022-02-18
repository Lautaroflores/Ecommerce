const data= [
     {
        index:"1",
        title:"Guitarra Fender",
        description:"Esta Stratocaster es el máximo referente de las guitarras a lo largo de su historia. Cuenta con pastillas que incluyen selectores, tonos y volumen máster. Tiene un sonido cálido, cristalino, percusivo y con mucha textura. Su forma hace que sea el modelo que más se adapta al cuerpo humano, lo que otorga mayor versatilidad en su uso. Eric Clapton es el representante de este instrumento, por lo que es ideal para estilos como el rock y el blues",
        price:80000,
        stock: 3,
        categoryId: 1,
        pictureurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVWCZtBCPflUNFLqqhwCKCTUWV09nHG2fOQ&usqp=CAU",
        category: {
            category: "Electrica",
            id:1
        }
        },
     {
        index:"2",
        title:"Guitarra Electroacústica ",
        description:"Estas guitarras cumplen con todas las especificaciones requeridas por profesores. Altura de cuerdas indicada. Afinación perfecta en todo el diapasón. Clavijas de funcionamiento preciso. Robusta construcción. Peso ideal en el instrumento. Gran sonoridad. Excelentes armónicos.",
        price:15000,
        stock: 3,
        categoryId: 2,
        pictureurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3mOSG3w2uie7yv7W8Adi5ooybFvLWT9OfQ&usqp=CAU",
        category: {
            category: "Electroacustica",
            id:2
        }},
     {
        index:"3",
        title:"Guitarra Criolla con Corte",
        description:" Diseño y calidad premium, instrumento musical fabricado integramente a mano con maderas nobles (abedul, cedro y nogal) que ofrece una óptima calibración y comodidad para la ejecución, perfecta afinación, fina construcción y un delicado acabado mate entregando un rendimiento superior.",
        price:8000,
        stock: 3,
        categoryId: 3,
        pictureurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkDvSlzMQH6bMtnCj-5GTn4p_0tU2SrFu1Q&usqp=CAU",
        category: {
            category: "Criolla",
            id:3
        }},
        {
        index:"4",
        title:"Guitarra Electroacustica Fender",
        description:"Este nuevo modelo profundamente versátil proporciona un sonido humbucker agresivo que se puede tocar solo o mezclado con una voz acústica para características tonales únicas",
        price:22000,
        stock: 3,
        categoryId: 2,
        pictureurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tYndwuFY1_Hh1Ln8OCu9ZPFIzIPuT4wZgA&usqp=CAU",
        category: {
            category: "Electroacustica",
            id:2
        }},
        {
        index:"5",
        title:"Guitarra Criolla ",
        description:"Guitarra acústica clásica La Valenciana de manufactura española de excelentes maderas con acabados naturales. Perfectas para quien busca un instrumento que cubra precio y calidad, así como sonoridad que sea tanto para uso profesional o aprendizaje. ",
        price:9000,
        stock: 3,
        categoryId: 3,
        pictureurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3mAjgOEeQOzsGOul8rAVyHUrvK-mYRgb6BQ&usqp=CAU",
        category: {
            category: "Criolla",
            id:3
        }}

 ]

 export default data;
