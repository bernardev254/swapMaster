import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { ArrowRight } from 'lucide-react'
const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-14">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">
            <span className="text-4xl  bg-gradient-to-t from-pink-500 to-purple-500 text-transparent
                bg-clip-text text-center px-1 rounded-sm
              ">TokenSwap</span>
          </h1>

          <p className="text-xl max-w-2xl mx-auto text-gray-700">
            A decentralized, on-chain, and trustless token swap platform.
            Users can swap Ethereum tokens (ERC-20) to our Arbitrum token (ERC-20)
            instantly, without relying on third-party gateways or exchanges.
          </p>
        </header>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">Ready to start swapping?</h2>
          <p className="text-xl mb-8">Join thousands of users who trust TokenSwap for their token swaps.</p>
          <Link to="/swap">
            <Button size="lg" className="text-lg" colorScheme='pink' border={'1px'} borderColor={"pink.500"} variant={'oulined'}>
              Start Swapping Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home