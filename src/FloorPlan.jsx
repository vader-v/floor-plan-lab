import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"

const FloorPlan = (props) => {
  return ( 
    <>
    <div>Floor Plan
    <Kitchen />
    <LivingRoom />
    <Bedroom />
    <Bedroom />
    <Bedroom />
    </div>
    </>
  )
}

export default FloorPlan