import { Button } from "@chakra-ui/react"
import { ArrowRight } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const LaunchButton = () => {
    const location = useLocation();

    if (location.pathname === '/swap') {
        return null;
    }

  return (
    <Button colorScheme="pink" 
        variant={'outline'} 
        as={Link} 
        to={'/swap'} 
        rightIcon={<ArrowRight/>}
        borderColor={"pink.400"}
    >
        Launch App
    </Button>
  )
}

export default LaunchButton