import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

const FloorPlan = (props) => {
  return ( 
    <>
    {/* bedroom 1, 2, 3 */}
    <Bedroom />
    <Kitchen />
    {/* full bath/ half bath */}
    <Bath />
    <Bedroom />
    <LivingRoom />
    <Bath /> 
    <Bedroom />
    </>
  )
}

export default FloorPlan