import { DummyData } from "../Home-card/homeCard.dummy.data";
import HomeCard from "../Home-card/home-card.component";
const Home = () => {
return (
<div className ="grid">
        {DummyData.map(HomeCard)}
    </div>
   
)
}
export default Home;