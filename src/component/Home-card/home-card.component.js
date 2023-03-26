
const HomeCard = (card,index) => 
{
    return(
     
<div className="card " style={{width: '18rem'}} key={index}>
  <img src={card.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{card.name}</h5>
    <p className="card-text">{card.text}</p>
    <a href="..." className="btn btn-primary">Explore</a>
  </div>
</div>


)
}

export default HomeCard;