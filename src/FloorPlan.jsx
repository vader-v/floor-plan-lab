import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

const FloorPlan = (props) => {
  return ( 
    <>
    {/* bedroom 1, 2, 3 */}
    <Bedroom bedName={'(Master)'}/>
    <Kitchen />
    {/* full bath/ half bath */}
    <Bath size={'Half'}/>
    <Bedroom bedName={'(Guest)'}/>
    <LivingRoom />
    <Bath size={'Full'}/> 
    <Bedroom bedName={'(Master)'}/>
    </>
  )
}

export default FloorPlan