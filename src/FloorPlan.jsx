import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

const FloorPlan = (props) => {
  return ( 
    <>
    <div>Floor Plan
    <Kitchen />
    <LivingRoom />
    <Bedroom />
    <Bedroom />
    <Bedroom />
    <Bath />
    </div>
    </>
  )
}

export default FloorPlan