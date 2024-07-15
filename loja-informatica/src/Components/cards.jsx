const Cards = () => {
    const cardData =[
        {
            title: "Anéis",
            subTitle: "Materiais: Ouro, Prata e Rose gold",
            text:"Ache o anel perfeito para você!",
            img: "https://placehold.co/300x200"

        },
        {
            title: "Coláres",
            subTitle: "Materiais: Ouro, Prata e Rose gold",
            text:"Procure algo especial para você!",
            img: "https://placehold.co/300x200"

        },
        {
            title: "Brincos",
            subTitle: "Materiais: Ouro, Prata e Rose gold",
            text:"Aqui você irá encontrar seu par perfeito!",
            img: "https://placehold.co/300x200"

        },
        {
            title: "Pulseiras",
            subTitle: "Materiais: Ouro, Prata e Rose gold",
            text:"Lindas e extravagantes! ",
            img: "https://placehold.co/300x200"

        },
        {
            title: "Tornozeleiras",
            subTitle: "Materiais: Ouro, Prata e Rose gold",
            text:"Este é o texto do primeiro card",
            img: "https://placehold.co/300x200"

        },
        {
            title: "Pingentes",
            subTitle: "Materiais: Ouro, Prata e Rose gold",
            text:"Este é o texto do primeiro card",
            img: "https://placehold.co/300x200"

        }
    ]
    return(
     <div className="row">
        {cardData.map((card, index) => (
           <>
           <section key={index} className="col-md-4">
         <article className="card">
          <div className="card-body">
                <img src={card.img} alt={card.title} className="card-img-top"/>
                <h5 className="card-title">{card.title}</h5>
                <h6 className="card-sutitle mb-2 text muted">{card.subTitle}</h6>
              <p className="card-text">
              {card.text}
              </p>
           </div>
         </article>
      </section>
    
          </>
        ))}
  </div>
       
   )
}

export default Cards;